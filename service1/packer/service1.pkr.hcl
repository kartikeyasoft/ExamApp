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

variable "service_name" { type = string }
variable "service_version" { type = string }
variable "service_port" { type = string }
variable "nexus_url" { type = string }
variable "db_host" { type = string }
variable "db_port" { type = string }
variable "db_name" { type = string }
variable "db_username" { type = string }
variable "db_password" { type = string }
variable "eureka_port" { type = string }
variable "source_ami" { type = string }

source "amazon-ebs" "service1" {
  ami_name        = "myapp-${var.service_name}-v${var.service_version}"
  instance_type   = "t3.micro"
  region          = "us-east-1"
  source_ami      = var.source_ami
  ssh_username    = "ubuntu"
}

build {
  sources = ["source.amazon-ebs.service1"]

  provisioner "ansible" {
    playbook_file = "./ansible/playbook-service1.yml"
    user         = "ubuntu"
    use_proxy      = false
    ansible_env_vars = [
      "SERVICE_NAME=${var.service_name}",
      "SERVICE_VERSION=${var.service_version}",
      "SERVICE_PORT=${var.service_port}",
      "NEXUS_URL=${var.nexus_url}",
      "DB_HOST=${var.db_host}",
      "DB_PORT=${var.db_port}",
      "DB_NAME=${var.db_name}",
      "DB_USERNAME=${var.db_username}",
      "DB_PASSWORD=${var.db_password}",
      "EUREKA_PORT=${var.eureka_port}"
    ]
  }
}