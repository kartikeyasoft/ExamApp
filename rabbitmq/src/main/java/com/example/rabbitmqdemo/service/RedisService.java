// src/main/java/com/example/rabbitmqdemo/service/RedisService.java
package com.example.rabbitmqdemo.service;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.List;

@Service
public class RedisService {

    @Value("${redis.api.url:http://localhost:1222}")
    private String redisApiUrl;

    private final RestTemplate restTemplate;

    public RedisService(RestTemplate restTemplate) {
        this.restTemplate = restTemplate;
    }

    public void sendToRedis(String message) {
        String url = redisApiUrl + "/redis/sendToredis";
        restTemplate.postForEntity(url, message, String.class);
    }

    public List<Object> getHistory() {
        String url = redisApiUrl + "/redis/history";
        return restTemplate.getForObject(url, List.class);
    }
}