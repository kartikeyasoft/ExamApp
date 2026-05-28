terraform {
  required_version = ">= 1.0"
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.0"
    }
  }
  backend "local" {
    path = "terraform.tfstate"
  }
}

provider "aws" {
  region = var.aws_region
}

# Data source to get the latest RabbitMQ AMI (fallback if not provided)
data "aws_ami" "rabbitmq" {
  most_recent = true
  owners      = ["self"]

  filter {
    name   = "name"
    values = ["myapp-rabbitmq-v*"]
  }
}

# Security group for RabbitMQ
resource "aws_security_group" "rabbitmq" {
  name_prefix = "rabbitmq-sg-${var.environment}-" 
  description = "Security group for RabbitMQ API service"
  vpc_id      = var.vpc_id

  # Combined rule: Handles both API Port and Management UI on 15672
  ingress {
    from_port   = 15672
    to_port     = 15672
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
    description = "RabbitMQ API and Management UI port"
  }

  ingress {
    from_port   = 8001
    to_port     = 8001
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
    description = "Spring Boot RabbitMQ API port"
  }

  ingress {
    from_port   = 5672
    to_port     = 5672
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
    description = "RabbitMQ broker port"
  }

  ingress {
    from_port   = 22
    to_port     = 22
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
    description = "SSH access"
  }

  egress {
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }

  tags = {
    Name        = "rabbitmq-sg-${var.environment}"
    Environment = var.environment
    Service     = "rabbitmq"
  }

  lifecycle {
    create_before_destroy = true
  }
}

# EC2 Instance
resource "aws_instance" "rabbitmq" {
  ami                    = var.ami_id != "" ? var.ami_id : data.aws_ami.rabbitmq.id
  instance_type          = var.instance_type
  subnet_id              = var.subnet_id
  vpc_security_group_ids = [aws_security_group.rabbitmq.id]
  key_name               = var.key_name

  # Using 'EOF' prevents Terraform from trying to interpolate variables inside this block.
  # This lets you pass the script directly to the shell cleanly.
  user_data = <<-'EOF'
    #!/bin/bash
    set -e
    
    echo "Starting RabbitMQ API instance configuration..."
    
    # Wait for cloud-init
    sleep 10
    
    # Extract Redis IP from URL (port 1222 is for API, not for Redis protocol)
    REDIS_IP=$(echo "${var.redis_url}" | sed -E 's|https?://([^:/]+).*|\1|')
    
    # Redis protocol port is ALWAYS 6379, not the API port from URL
    REDIS_PROTOCOL_PORT=6379
    REDIS_API_PORT=1222
    
    echo "Redis IP: ${REDIS_IP}"
    echo "Redis Protocol Port: ${REDIS_PROTOCOL_PORT}"
    echo "Redis API Port: ${REDIS_API_PORT}"
    
    # Ensure directory exists
    mkdir -p /opt/rabbitmq
    
    # Create environment file with ALL Redis variables
    cat > /opt/rabbitmq/rabbitmq.env << ENVEOF
    EUREKA_URL=${var.eureka_url}
    SERVER_PORT=${var.service_port}
    SPRING_APP_NAME=rabbitmq
    REDIS_HOST=${REDIS_IP}
    REDIS_PORT=${REDIS_PROTOCOL_PORT}
    REDIS_API_URL=http://${REDIS_IP}:${REDIS_API_PORT}
    REDIS_SERVICE_URL=${var.redis_url}
    EUREKA_CLIENT_REGISTER_WITH_EUREKA=true
    EUREKA_CLIENT_FETCH_REGISTRY=true
    EUREKA_INSTANCE_PREFER_IP_ADDRESS=true
    ENVEOF
    
    # Set secure permissions
    chown -R rabbitmq:rabbitmq /opt/rabbitmq/
    chmod 600 /opt/rabbitmq/rabbitmq.env
    
    # Create application.yml (Removed backslashes from shell variables)
    cat > /opt/rabbitmq/application.yml << 'APPEOF'
    server:
      port: ${SERVER_PORT:-8001}
    
    spring:
      application:
        name: ${SPRING_APP_NAME:-rabbitmq}
      redis:
        host: ${REDIS_HOST:-localhost}
        port: ${REDIS_PORT:-6379}
    
    redis:
      api:
        url: ${REDIS_API_URL:-http://localhost:1222}
    
    eureka:
      client:
        service-url:
          defaultZone: ${EUREKA_URL}
      instance:
        prefer-ip-address: true
        instance-id: ${spring.cloud.client.ip-address}:${server.port}
    
    management:
      endpoints:
        web:
          exposure:
            include: health,info
      endpoint:
        health:
          show-details: always
    APPEOF
    
    chown rabbitmq:rabbitmq /opt/rabbitmq/application.yml
    chmod 644 /opt/rabbitmq/application.yml
    
    # Create systemd service (Removed backslashes from shell variables)
    cat > /etc/systemd/system/rabbitmq.service << 'SERVICEEOF'
    [Unit]
    Description=RabbitMQ API Service
    After=network.target rabbitmq-server.service
    Wants=network.target
    
    [Service]
    User=rabbitmq
    Group=rabbitmq
    WorkingDirectory=/opt/rabbitmq
    EnvironmentFile=/opt/rabbitmq/rabbitmq.env
    ExecStart=/usr/bin/java \
      -Dspring.redis.host=${REDIS_HOST} \
      -Dspring.redis.port=${REDIS_PORT} \
      -Dredis.api.url=${REDIS_API_URL} \
      -Dserver.port=${SERVER_PORT} \
      -Dspring.application.name=${SPRING_APP_NAME} \
      -Deureka.client.service-url.defaultZone=${EUREKA_URL} \
      -jar /opt/rabbitmq/rabbitmq.jar
    Restart=always
    RestartSec=10
    SuccessExitStatus=143
    
    [Install]
    WantedBy=multi-user.target
    SERVICEEOF
    
    # Reload and restart
    systemctl daemon-reload
    systemctl restart rabbitmq
    
    # Verification
    sleep 10
    if systemctl is-active --quiet rabbitmq; then
        echo "✅ RabbitMQ App API Service running!"
    else
        echo "⚠️ RabbitMQ App API Service failed to start"
        journalctl -u rabbitmq -n 20 --no-pager
    fi
    
    echo "✅ Configuration completed."
EOF

  tags = {
    Name        = "rabbitmq-${var.environment}"
    Environment = var.environment
    Service     = "rabbitmq"
    ManagedBy   = "terraform"
  }

  lifecycle {
    create_before_destroy = true
  }
}