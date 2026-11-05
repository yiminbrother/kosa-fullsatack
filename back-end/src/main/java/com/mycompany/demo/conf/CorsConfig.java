package com.mycompany.demo.conf;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

// 스프링이 이 클래스를 설정 클래스로 인식하도록 지정합니다.
@Configuration
// WebMvcConfigurer를 구현하여 Spring MVC의 CORS 설정을 추가합니다.
public class CorsConfig implements WebMvcConfigurer {

    // 브라우저에서 다른 출처의 API를 호출할 때 적용할 접근 허용 규칙입니다.
    // 출처(origin)는 프로토콜, 호스트, 포트의 조합입니다.
    @Override
    public void addCorsMappings(CorsRegistry registry) {
        // 모든 요청 경로에 CORS 규칙을 적용합니다.
        registry.addMapping("/**")
                // 로컬 프런트엔드 개발 서버의 출처를 허용합니다.
                .allowedOrigins("http://localhost:3000")
                // 교차 출처 요청에서 사용할 수 있는 HTTP 메서드를 지정합니다.
                .allowedMethods("GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS")
                // Content-Type, Authorization 등 모든 요청 헤더를 허용합니다.
                .allowedHeaders("*")
                // 브라우저가 사전 요청(OPTIONS)의 허용 결과를 캐시할 시간을 초 단위로 지정합니다.
                .maxAge(3600);
    }
}
