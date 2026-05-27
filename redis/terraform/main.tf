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
  
  skip_credentials_validation = false
  skip_region_validation      = false
  skip_requesting_account_id  = false
  
  max_retries = 5
}

# Data source to get the latest Redis AMI (fallback if not provided)
data "aws_ami" "redis" {
  most_recent = true
  owners      = ["self"]

  filter {
    name   = "name"
    values = ["myapp-redis-v*"]
  }
}

# Security group for Redis
resource "aws_security_group" "redis" {
  name        = "redis-sg-${var.environment}"
  description = "Security group for Redis API service"
  vpc_id      = var.vpc_id

  ingress {
    from_port   = var.service_port
    to_port     = var.service_port
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
    description = "Redis API port"
  }

  ingress {
    from_port   = 6379
    to_port     = 6379
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
    description = "Redis server port"
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
    Name        = "redis-sg-${var.environment}"
    Environment = var.environment
    Service     = "redis"
  }
}

# EC2 Instance
resource "aws_instance" "redis" {
  ami                    = var.ami_id != "" ? var.ami_id : data.aws_ami.redis.id
  instance_type          = var.instance_type
  subnet_id              = var.subnet_id
  vpc_security_group_ids = [aws_security_group.redis.id]
  key_name               = var.key_name

  user_data = <<-EOF
    #!/bin/bash
    set -e
    
    echo "Starting Redis instance configuration..."
    
    # Wait for cloud-init to complete
    sleep 30
    
    # Extract Eureka IP from URL cleanly
    EUREKA_IP=$$(echo "${var.eureka_url}" | sed -E 's|https?://([^:/]+).*|\1|')
    echo "Eureka IP: $$EUREKA_IP"
    
    # Update the environment file (This is what Spring Boot reads natively now)
    if [ -f /opt/redis/redis.env ]; then
        echo "Updating /opt/redis/redis.env"
        sed -i "s|http://localhost:8761/eureka/|${var.eureka_url}|g" /opt/redis/redis.env
        echo "✅ Updated redis.env:"
        cat /opt/redis/redis.env
    else
        echo "ERROR: /opt/redis/redis.env not found!"
        exit 1
  fi
    
    # Update systemd service unit override fallback string just in case
    if [ -f /etc/systemd/system/redis.service ]; then
        echo "Updating /etc/systemd/system/redis.service"
        sed -i "s|http://localhost:8761/eureka/|${var.eureka_url}|g" /etc/systemd/system/redis.service
        echo "✅ Updated redis.service unit"
    fi
    
    # Set proper permissions
    chown -R redis:redis /opt/redis/ 2>/dev/null || true
    
    # Restart the service
    echo "Restarting redis service..."
    systemctl daemon-reload
    systemctl restart redis
    
    # Verify service is running
    sleep 5
    if systemctl is-active --quiet redis; then
        echo "✅ Redis service is running successfully!"
    else
        echo "⚠️ Redis service failed to start, checking logs..."
        journalctl -u redis -n 20 --no-pager
    fi
    
    echo "✅ Redis configured with Eureka URL: ${var.eureka_url}"
  EOF

  tags = {
    Name        = "redis-${var.environment}"
    Environment = var.environment
    Service     = "redis"
    ManagedBy   = "terraform"
  }

  lifecycle {
    create_before_destroy = true
  }
}