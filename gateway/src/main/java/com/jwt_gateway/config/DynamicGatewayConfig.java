package com.jwt_gateway.config;

import com.jwt_gateway.filter.JwtAuthenticationFilter;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cloud.gateway.route.RouteLocator;
import org.springframework.cloud.gateway.route.builder.RouteLocatorBuilder;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpStatus;

@Configuration
public class DynamicGatewayConfig {
    
    private static final Logger log = LoggerFactory.getLogger(DynamicGatewayConfig.class);
    
    @Autowired
    private JwtAuthenticationFilter filter;
    
    @Autowired
    private SsmConfigService ssmConfigService;
    
    @Bean
    public RouteLocator routes(RouteLocatorBuilder builder) {
        log.info("==========================================");
        log.info("Building Routes with SSM Configuration");
        log.info("Service1 URL: {}", ssmConfigService.getService1Url());
        log.info("Service2 URL: {}", ssmConfigService.getService2Url());
        log.info("==========================================");
        
        return builder.routes()
                // Service1 route
                .route("service1-route", r -> r
                        .path("/service1/**")
                        .filters(f -> f
                                .filter(filter)
                                .rewritePath("/service1/(?<segment>.*)", "/${segment}")
                                .retry(config -> config
                                        .setRetries(3)
                                        .setStatuses(HttpStatus.INTERNAL_SERVER_ERROR,
                                                     HttpStatus.SERVICE_UNAVAILABLE)))
                        .uri(ssmConfigService.getService1Url()))
                
                // Service2 route
                .route("service2-route", r -> r
                        .path("/service2/**")
                        .filters(f -> f
                                .filter(filter)
                                .rewritePath("/service2/(?<segment>.*)", "/${segment}")
                                .retry(config -> config
                                        .setRetries(3)
                                        .setStatuses(HttpStatus.INTERNAL_SERVER_ERROR,
                                                     HttpStatus.SERVICE_UNAVAILABLE)))
                        .uri(ssmConfigService.getService2Url()))
                
                // Auth route
                .route("auth-route", r -> r
                        .path("/auth/**")
                        .filters(f -> f
                                .filter(filter)
                                .rewritePath("/auth/(?<segment>.*)", "/api/auth/${segment}"))
                        .uri(ssmConfigService.getService1Url()))
                
                .build();
    }
}