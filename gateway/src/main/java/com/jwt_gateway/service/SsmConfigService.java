package com.jwt_gateway.config;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.cloud.context.config.annotation.RefreshScope;
import org.springframework.cloud.gateway.event.RefreshRoutesEvent;
import org.springframework.context.ApplicationEventPublisher;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;
import org.springframework.core.env.Environment;
import jakarta.annotation.PostConstruct;

@Service
@RefreshScope
public class SsmConfigService {
    
    private static final Logger log = LoggerFactory.getLogger(SsmConfigService.class);
    
    @Autowired
    private Environment environment;
    
    @Autowired
    private ApplicationEventPublisher eventPublisher;
    
    private volatile String service1Url;
    private volatile String service2Url;
    
    @PostConstruct
    public void init() {
        log.info("🚀 Initializing SsmConfigService...");
        
        // FIRST: Try environment variables (from CD pipeline)
        String envService1 = environment.getProperty("SERVICE1_URL");
        String envService2 = environment.getProperty("SERVICE2_URL");
        
        if (envService1 != null && !envService1.isEmpty()) {
            service1Url = envService1;
            log.info("✅ Service1 URL from ENV: {}", service1Url);
        }
        
        if (envService2 != null && !envService2.isEmpty()) {
            service2Url = envService2;
            log.info("✅ Service2 URL from ENV: {}", service2Url);
        }
        
        // SECOND: Try application properties
        if (service1Url == null) {
            service1Url = environment.getProperty("service1.url", "http://172.31.35.110:9001");
            log.info("📌 Service1 URL from properties: {}", service1Url);
        }
        
        if (service2Url == null) {
            service2Url = environment.getProperty("service2.url", "http://172.31.42.94:9002");
            log.info("📌 Service2 URL from properties: {}", service2Url);
        }
        
        // THIRD: Try SSM (as fallback)
        if (service1Url == null || service2Url == null) {
            // Try SSM as last resort (will be handled by @RefreshScope)
            log.info("Attempting to fetch from SSM as fallback...");
        }
    }
    
    @Scheduled(fixedDelay = 30000)
    public void scheduledRefresh() {
        log.debug("Service1 URL: {}", service1Url);
        log.debug("Service2 URL: {}", service2Url);
    }
    
    public String getService1Url() { 
        return service1Url; 
    }
    
    public String getService2Url() { 
        return service2Url; 
    }
}