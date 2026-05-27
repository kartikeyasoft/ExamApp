package com.example.rabbitmqdemo.service;

import org.springframework.amqp.rabbit.annotation.RabbitListener;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.stereotype.Component;

@Component
public class RabbitMQListener {

    @Autowired
    private SimpMessagingTemplate messagingTemplate;

    @Autowired
    private RedisService redisService;  // ← Use this instead of RestTemplate

    @RabbitListener(queues = "my-queue")
    public void receiveMessage(String message) {
        try {
            System.out.println("Received from RabbitMQ: " + message);
            messagingTemplate.convertAndSend("/topic/messages", message);

            // ✅ Use RedisService with configurable URL
            redisService.sendToRedis(message);
            System.out.println("Send Message SUCCESS: " + message);

        } catch (Exception exception) {
            System.err.println("Exception:::::!!!!! " + exception);
        }
    }
}