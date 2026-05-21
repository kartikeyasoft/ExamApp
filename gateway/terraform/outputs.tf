# Outputs
output "gateway_public_ip" {
  description = "Public IP address of the gateway"
  value       = aws_instance.gateway.public_ip
}

output "gateway_private_ip" {
  description = "Private IP address of the gateway"
  value       = aws_instance.gateway.private_ip
}

output "gateway_id" {
  description = "Instance ID of the gateway"
  value       = aws_instance.gateway.id
}