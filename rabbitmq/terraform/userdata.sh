#!/bin/bash
set -e

echo "Starting RabbitMQ API instance configuration..."

# Wait for cloud-init
sleep 10

# Extract Redis IP from URL (port 1222 is for API, not for Redis protocol)
REDIS_IP=$(echo "${redis_url}" | sed -E 's|https?://([^:/]+).*|\1|')

# Redis protocol port is ALWAYS 6379, not the API port from URL
REDIS_PROTOCOL_PORT=6379
REDIS_API_PORT=1222

echo "Redis IP: $REDIS_IP"
echo "Redis Protocol Port: $REDIS_PROTOCOL_PORT"
echo "Redis API Port: $REDIS_API_PORT"

# Ensure directory exists
mkdir -p /opt/rabbitmq

# Create environment file with ALL Redis variables
cat > /opt/rabbitmq/rabbitmq.env << ENVEOF
EUREKA_URL=${eureka_url}
SERVER_PORT=${service_port}
SPRING_APP_NAME=rabbitmq
REDIS_HOST=$REDIS_IP
REDIS_PORT=$REDIS_PROTOCOL_PORT
REDIS_API_URL=http://$REDIS_IP:$REDIS_API_PORT
REDIS_SERVICE_URL=${redis_url}
EUREKA_CLIENT_REGISTER_WITH_EUREKA=true
EUREKA_CLIENT_FETCH_REGISTRY=true
EUREKA_INSTANCE_PREFER_IP_ADDRESS=true
ENVEOF

# Set secure permissions
chown -R rabbitmq:rabbitmq /opt/rabbitmq/
chmod 600 /opt/rabbitmq/rabbitmq.env

# Create application.yml (No backslashes needed here)
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

# Create systemd service (No backslashes before variable names)
cat > /etc/systemd/system/rabbitmq.service << 'SERVICEEOF'
[Unit]
Description=RabbitMQ API Service
After=network.target rabbitmq-server.service
Wants=network.target

[Service]
User=rabbitmq
Group=rabbitmq
WorkingDirectory=/opt/rabbitmq
EnvironmentFile=/opt/rabbitmq/rabbitmq.env
ExecStart=/usr/bin/java \
  -Dspring.redis.host=$${REDIS_HOST} \
  -Dspring.redis.port=$${REDIS_PORT} \
  -Dredis.api.url=$${REDIS_API_URL} \
  -Dserver.port=$${SERVER_PORT} \
  -Dspring.application.name=$${SPRING_APP_NAME} \
  -Deureka.client.service-url.defaultZone=$${EUREKA_URL} \
  -jar /opt/rabbitmq/rabbitmq.jar
Restart=always
RestartSec=10
SuccessExitStatus=143

[Install]
WantedBy=multi-user.target
SERVICEEOF

# Reload and restart
systemctl daemon-reload
systemctl restart rabbitmq

# Verification
sleep 10
if systemctl is-active --quiet rabbitmq; then
    echo "✅ RabbitMQ App API Service running on port ${service_port}!"
else
    echo "⚠️ RabbitMQ App API Service failed to start"
    journalctl -u rabbitmq -n 20 --no-pager
fi

echo "✅ Configuration completed."