#!/bin/bash
set -e

echo "=========================================="
echo "Configuring Gateway"
echo "=========================================="

# Create gateway user if not exists
id -u gateway &>/dev/null || useradd -r -s /bin/false gateway

# Create application directory
mkdir -p /opt/gateway
chown gateway:gateway /opt/gateway

# Create environment file for Gateway with dynamic SSM values
cat > /opt/gateway/gateway.env << EOF
# Server Configuration
SERVER_PORT=${service_port}
SPRING_APP_NAME=gateway

# Database Configuration
DB_URL=${db_url}
DB_USER=${db_username}
DB_PASSWORD=${db_password}

# AWS Configuration
AWS_REGION=${aws_region}

# Service URLs (from SSM - passed dynamically)
SERVICE1_URL=${service1_url}
SERVICE2_URL=${service2_url}

# Logging
LOG_LEVEL=INFO

# CORS Configuration
CORS_ALLOWED_ORIGINS=*

# Gateway Timeouts
GATEWAY_CONNECT_TIMEOUT=60000
GATEWAY_RESPONSE_TIMEOUT=90s

# Disable Eureka
EUREKA_CLIENT_ENABLED=false
EUREKA_CLIENT_REGISTER_WITH_EUREKA=false
EUREKA_CLIENT_FETCH_REGISTRY=false
EOF

# Set proper permissions
chown gateway:gateway /opt/gateway/gateway.env
chmod 600 /opt/gateway/gateway.env

echo "✅ Environment file created"

# Create systemd service file
cat > /etc/systemd/system/gateway.service << 'SYSTEMDEOF'
[Unit]
Description=API Gateway
After=network.target

[Service]
Type=simple
User=gateway
EnvironmentFile=/opt/gateway/gateway.env
ExecStart=/usr/bin/java -jar /opt/gateway/gateway.jar
Restart=always
RestartSec=10

[Install]
WantedBy=multi-user.target
SYSTEMDEOF

echo "✅ Systemd service created"

# Reload systemd
systemctl daemon-reload

# Stop existing service if running
if systemctl is-active --quiet gateway; then
  systemctl stop gateway
  echo "✅ Stopped existing gateway service"
fi

# Start gateway
systemctl start gateway
echo "✅ Gateway service started"

# Enable gateway to start on boot
systemctl enable gateway

# Wait for gateway to be ready
sleep 10

# Check if gateway is running
if systemctl is-active --quiet gateway; then
  echo "✅ Gateway service is running"
  echo "   SERVICE1_URL: ${service1_url}"
  echo "   SERVICE2_URL: ${service2_url}"
else
  echo "❌ Gateway service failed to start"
  systemctl status gateway --no-pager
fi

echo "=========================================="
echo "Gateway configuration completed"
echo "=========================================="