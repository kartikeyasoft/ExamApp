package com.example.rabbitmqdemo.service;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

@Service
public class RedisService {

    private final RestTemplate restTemplate;
    
    @Value("${redis.api.url:http://localhost:1222}")
    private String redisApiUrl;

    public RedisService(RestTemplate restTemplate) {
        this.restTemplate = restTemplate;
    }

    public void sendToRedis(String message) {
        String url = redisApiUrl + "/redis/sendToredis";
        restTemplate.postForEntity(url, message, String.class);
    }

    public <T> T getFromRedis(String endpoint, Class<T> responseType) {
        String url = redisApiUrl + endpoint;
        return restTemplate.getForObject(url, responseType);
    }
}