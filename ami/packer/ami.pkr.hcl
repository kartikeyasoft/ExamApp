packer {
  required_plugins {
    amazon = {
      version = ">= 1.2.8"
      source  = "github.com/hashicorp/amazon"
    }
  }
}

variable "service_name" {
  type    = string
  default = "ami"
}

variable "service_version" {
  type    = string
  default = "1.0.0"
}

variable "source_ami" {
  type    = string
  default = "ami-053b0d53c279acc90"
}

variable "aws_region" {
  type    = string
  default = "us-east-1"
}

source "amazon-ebs" "ami" {
  ami_name      = "${var.service_name}-${var.service_version}"
  instance_type = "t3.micro"
  region        = var.aws_region
  source_ami    = var.source_ami
  ssh_username  = "ubuntu"
  ssh_timeout   = "10m"
  ssh_handshake_attempts = 10
  
  # User data to prepare the instance
  user_data = <<-EOF
    #!/bin/bash
    mkdir -p /tmp/ansible /home/ubuntu/.ansible
    chmod 1777 /tmp/ansible
    chown -R ubuntu:ubuntu /home/ubuntu/.ansible
    apt-get update -y
    apt-get install -y python3 python3-apt
    ln -sf /usr/bin/python3 /usr/bin/python
  EOF
}

build {
  sources = ["source.amazon-ebs.ami"]

  provisioner "ansible" {
    playbook_file = "./ansible/playbook-ami.yml"
    user          = "ubuntu"
    use_proxy     = false
    
    # Critical: These override the local and remote temp paths
    ansible_env_vars = [
      "ANSIBLE_HOST_KEY_CHECKING=False",
      "ANSIBLE_REMOTE_TMP=/tmp/ansible",
      "ANSIBLE_LOCAL_TMP=/tmp/ansible-local",
      "ANSIBLE_SCP_IF_SSH=True",
      "ANSIBLE_SSH_PIPELINING=True",
      "ANSIBLE_SSH_CONTROL_PATH=/tmp/ansible-ssh-%%h-%%p-%%r",
      "ANSIBLE_PIPELINING_WRAPPING=False"
    ]
    
    extra_arguments = [
      "--verbose",
      "--ssh-extra-args=-o StrictHostKeyChecking=no",
      "--ssh-extra-args=-o ServerAliveInterval=10",
      "--ssh-extra-args=-o ServerAliveCountMax=3",
      "-e ansible_python_interpreter=/usr/bin/python3",
      "-e ansible_tempfile=/tmp/ansible-temp"
    ]
  }
}