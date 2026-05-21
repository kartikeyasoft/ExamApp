packer {
  required_plugins {
    amazon = {
      version = ">= 1.2.8"
      source  = "github.com/hashicorp/amazon"
    }
    ansible = {
      version = ">= 1.1.1"
      source  = "github.com/hashicorp/ansible"
    }
  }
}

# Declare all variables
variable "service_name" {
  type = string
}

variable "service_version" {
  type = string
}

variable "service_port" {
  type    = string
  default = "8080"
}

# AWS Region
variable "aws_region" {
  type    = string
  default = "ap-south-1"
}

variable "nexus_url" {
  type = string
}

# Source AMI
variable "source_ami" {
  description = "Base AMI ID to use for the build"
  type        = string
}

source "amazon-ebs" "gateway" {
  ami_name        = "myapp-${var.service_name}-v${var.service_version}"
  instance_type   = "t3.micro"
  region          = var.aws_region
  source_ami      = var.source_ami
  ssh_username    = "ubuntu"
  
  tags = {
    Name        = "myapp-${var.service_name}-v${var.service_version}"
    Service     = var.service_name
    Version     = var.service_version
    BuiltBy     = "Packer"
  }
}

build {
  sources = ["source.amazon-ebs.gateway"]

  provisioner "ansible" {
    playbook_file = "./ansible/playbook-gateway.yml"
    ansible_env_vars = [
      "SERVICE_NAME=${var.service_name}",
      "SERVICE_VERSION=${var.service_version}",
      "NEXUS_URL=${var.nexus_url}"
    ]
  }
}