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
  ssh_agent_auth = false
  
  # Add this to ensure Python is available
  user_data = <<-EOF
    #!/bin/bash
    apt-get update -y
    apt-get install -y python3 python3-apt python3-pip
    ln -sf /usr/bin/python3 /usr/bin/python
    mkdir -p /home/ubuntu/.ansible/tmp
    chown -R ubuntu:ubuntu /home/ubuntu/.ansible
  EOF
}

build {
  sources = ["source.amazon-ebs.ami"]

  provisioner "ansible" {
    playbook_file = "./ansible/playbook-ami.yml"
    user          = "ubuntu"
    use_proxy     = false
    
    # Critical environment variables to fix file transfer
    ansible_env_vars = [
      "ANSIBLE_HOST_KEY_CHECKING=False",
      "ANSIBLE_REMOTE_TMP=/tmp/ansible-tmp",
      "ANSIBLE_SCP_IF_SSH=True",        # Force SCP instead of SFTP
      "ANSIBLE_SSH_PIPELINING=True",     # Reduce file transfers
      "ANSIBLE_SSH_RETRIES=5",
      "ANSIBLE_PIPELINING_WRAPPING=False"
    ]
    
    extra_arguments = [
      "--verbose",
      "--ssh-extra-args=-o StrictHostKeyChecking=no",
      "--ssh-extra-args=-o ConnectTimeout=30",
      "--timeout=60",
      "-e ansible_python_interpreter=/usr/bin/python3"
    ]
  }
}