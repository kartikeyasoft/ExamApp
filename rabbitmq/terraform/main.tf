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
# EC2 Instance
resource "aws_instance" "rabbitmq" {
  ami                    = var.ami_id != "" ? var.ami_id : data.aws_ami.rabbitmq.id
  instance_type          = var.instance_type
  subnet_id              = var.subnet_id
  vpc_security_group_ids = [aws_security_group.rabbitmq.id]
  key_name               = var.key_name

  # Injects parameters via shell environment, keeping the script 100% static
  user_data = <<-EOF
    #!/bin/bash
    export TF_EUREKA_URL="${var.eureka_url}"
    export TF_REDIS_URL="${var.redis_url}"
    export TF_SERVICE_PORT="${var.service_port}"
    
    $(cat << 'SCRIPT_EOF'
    ${file("${path.module}/userdata.sh")}
    SCRIPT_EOF
    )
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