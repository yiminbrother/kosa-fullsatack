package com.mycompany.demo.jwt.controller;

import java.util.Map;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.mycompany.demo.database.entity.Member;
import com.mycompany.demo.jwt.dto.LoginResponse;
import com.mycompany.demo.jwt.dto.OrderRequest;
import com.mycompany.demo.jwt.dto.OrderResponse;
import com.mycompany.demo.jwt.service.JwtService;

import lombok.extern.slf4j.Slf4j;

@RestController

@RequestMapping("/jwt")
@Slf4j
public class JwtController {
    private final JwtService jwtService;

    public JwtController(JwtService jwtService) {
        this.jwtService = jwtService;
    }

    @PostMapping("/login")
    public LoginResponse login() {
        Member member = new Member();
        // jwt 받을 값
        member.setMemberId("user1");
        member.setEmail("user1@mycompany.com");
        // jwt키 생성
        String jwt = jwtService.createJwt(member);
        // 인증값 담을 객체
        LoginResponse loginResponse = new LoginResponse();
        loginResponse.setStatus("success");
        loginResponse.setJwt(jwt);
        return loginResponse;
    }

    @PostMapping("/order")
    public OrderResponse order(@RequestBody OrderRequest orderRequest) {
        OrderResponse orderResponse = new OrderResponse();
        orderResponse.setStatus("fail");

        String jwt = orderRequest.getJwt();
        // 유효성 검사
        jwtService.validateJwt(jwt);
        orderResponse.setStatus("success");
        orderResponse.setMessage("유효한 토큰");

        // JWT에서 사용자 ID와 이메일얻기
        Map<String, String> map = jwtService.getClaims(jwt);

        String memberId = map.get("memberId");
        String email = map.get("email");
        log.info("memberId = " + memberId + ", email = " + email);

        return orderResponse;
    }

}
