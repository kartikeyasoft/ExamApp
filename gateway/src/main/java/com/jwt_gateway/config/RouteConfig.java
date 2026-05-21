package com.jwt_gateway.config;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.cloud.gateway.route.RouteLocator;
import org.springframework.cloud.gateway.route.builder.RouteLocatorBuilder;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class RouteConfig {
    
    @Value("${service1.url:http://172.31.35.110:9001}")
    private String service1Url;
    
    @Value("${service2.url:http://172.31.42.94:9002}")
    private String service2Url;
    
    @Bean
    public RouteLocator customRouteLocator(RouteLocatorBuilder builder) {
        return builder.routes()
            .route("service1-route", r -> r
                .path("/service1/**")
                .filters(f -> f
                    .rewritePath("/service1/(?<segment>.*)", "/${segment}")
                )
                .uri(service1Url)
            )
            .route("service2-route", r -> r
                .path("/service2/**")
                .filters(f -> f
                    .rewritePath("/service2/(?<segment>.*)", "/${segment}")
                )
                .uri(service2Url)
            )
            .route("auth-route", r -> r
                .path("/auth/**")
                .filters(f -> f
                    .rewritePath("/auth/(?<segment>.*)", "/api/auth/${segment}")
                )
                .uri(service1Url)
            )
            .build();
    }
}