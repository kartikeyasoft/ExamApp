package com.example.rabbitmqdemo.controller;

import com.example.rabbitmqdemo.service.RedisService;
import org.springframework.amqp.rabbit.core.RabbitTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/messages")
public class MessageController {

    @Autowired
    private RabbitTemplate rabbitTemplate;

    @Autowired
    private RedisService redisService;  // ← Use RedisService

    @PostMapping("/send")
    public ResponseEntity<String> sendMessage(@RequestBody String message) {
        rabbitTemplate.convertAndSend("my-exchange", "my-routing-key", message);
        return ResponseEntity.ok("Message sent to RabbitMQ");
    }

    @GetMapping("/history")
    public ResponseEntity<?> getNotificationHistory() {
        List<Object> history = redisService.getHistory();  // ← Use RedisService
        return ResponseEntity.ok(history);
    }
}