#!/bin/bash
set -e

echo "Starting RabbitMQ API instance configuration..."
sleep 10

# Read values injected from Terraform template parameters
EUREKA_URL_VAL="${eureka_url}"
REDIS_URL_VAL="${redis_url}"
SERVICE_PORT_VAL="${service_port}"

# Extract Redis IP from URL parameters safely
REDIS_IP=$(echo "$REDIS_URL_VAL" | sed -E 's|https?://([^:/]+).*|\1|')
REDIS_PROTOCOL_PORT=6379
REDIS_API_PORT=1222

echo "Redis IP: $REDIS_IP"
echo "Redis Protocol Port: $REDIS_PROTOCOL_PORT"
echo "Redis API Port: $REDIS_API_PORT"

mkdir -p /opt/rabbitmq

# Create environment file
cat > /opt/rabbitmq/rabbitmq.env << ENVEOF
EUREKA_URL=$EUREKA_URL_VAL
SERVER_PORT=$SERVICE_PORT_VAL
SPRING_APP_NAME=rabbitmq
REDIS_HOST=$REDIS_IP
REDIS_PORT=$REDIS_PROTOCOL_PORT
REDIS_API_URL=http://$REDIS_IP:$REDIS_API_PORT
REDIS_SERVICE_URL=$REDIS_URL_VAL
EUREKA_CLIENT_REGISTER_WITH_EUREKA=true
EUREKA_CLIENT_FETCH_REGISTRY=true
EUREKA_INSTANCE_PREFER_IP_ADDRESS=true
ENVEOF

chown -R rabbitmq:rabbitmq /opt/rabbitmq/
chmod 600 /opt/rabbitmq/rabbitmq.env

# Create application.yml
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

# Create systemd service
cat > /etc/systemd/system/rabbitmq.service << 'SERVICEEOF'
[Unit]
Description=RabbitMQ API Service
After=network.target rabbitmq-server.service

[Service]
User=rabbitmq
Group=rabbitmq
WorkingDirectory=/opt/rabbitmq
EnvironmentFile=/opt/rabbitmq/rabbitmq.env
ExecStart=/usr/bin/java -jar /opt/rabbitmq/rabbitmq.jar
Restart=always
RestartSec=10
SuccessExitStatus=143

[Install]
WantedBy=multi-user.target
SERVICEEOF

systemctl daemon-reload
systemctl restart rabbitmq

sleep 10
if systemctl is-active --quiet rabbitmq; then
    echo "RabbitMQ running on port $SERVICE_PORT_VAL!"
else
    echo "RabbitMQ failed to start"
    journalctl -u rabbitmq -n 20 --no-pager
    exit 1
fi
echo "Configuration completed."