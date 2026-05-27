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


# Security group for RabbitMQ (Updated with name_prefix)
resource "aws_security_group" "rabbitmq" {
  # Changed 'name' to 'name_prefix' to prevent duplicate name errors during replacement lifecycle steps
  name_prefix = "rabbitmq-sg-${var.environment}-" 
  description = "Security group for RabbitMQ API service"
  vpc_id      = var.vpc_id

  ingress {
    from_port   = var.service_port
    to_port     = var.service_port
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
    description = "RabbitMQ API port"
  }

  ingress {
    from_port   = 5672
    to_port     = 5672
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
    description = "RabbitMQ broker port"
  }

  ingress {
    from_port   = 15672
    to_port     = 15672
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
    description = "RabbitMQ management UI"
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

  # Keeps things clean during hot replacements
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

  user_data = <<-EOF
    #!/bin/bash
    set -e
    
    echo "Starting RabbitMQ API instance configuration..."
    
    # Wait for cloud-init tasks to step aside
    sleep 10
    
    # Ensure directory framework exists
    mkdir -p /opt/rabbitmq
    
    # Create environment file (Removed single quotes so Terraform can interpolate variables)
    cat > /opt/rabbitmq/rabbitmq.env << ENVEOF
    EUREKA_URL=${var.eureka_url}
    SERVER_PORT=${var.service_port}
    SPRING_APP_NAME=rabbitmq
    REDIS_SERVICE_URL=${var.redis_url}
    EUREKA_CLIENT_REGISTER_WITH_EUREKA=true
    EUREKA_CLIENT_FETCH_REGISTRY=true
    EUREKA_INSTANCE_PREFER_IP_ADDRESS=true
    ENVEOF
    
    # Set secure permissions on target files
    chown -R rabbitmq:rabbitmq /opt/rabbitmq/
    chmod 600 /opt/rabbitmq/rabbitmq.env
    
    # Force runtime patch validation check on systemd unit file if hardcoded strings exist
    if [ -f /etc/systemd/system/rabbitmq.service ]; then
        echo "Validating systemd API wrapper config..."
        sed -i "s|http://localhost:8761/eureka/|${var.eureka_url}|g" /etc/systemd/system/rabbitmq.service
    fi
    
    # Reload background daemons and restart the API layer (not the backend broker)
    echo "Reloading systemd manager configurations..."
    systemctl daemon-reload
    
    echo "Restarting application service layers..."
    systemctl restart rabbitmq || systemctl start rabbitmq
    
    # Verification validation
    sleep 5
    if systemctl is-active --quiet rabbitmq; then
        echo "✅ RabbitMQ App API Service running cleanly!"
    else
        echo "⚠️ RabbitMQ App API Service failed to confirm active state. Checking logs..."
        journalctl -u rabbitmq -n 20 --no-pager
    fi
    
    echo "✅ Configuration hook finalized."
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