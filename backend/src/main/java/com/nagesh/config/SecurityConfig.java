package com.nagesh.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
@Configuration
public class SecurityConfig {

    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http.csrf(csrf -> csrf.disable())
            .authorizeHttpRequests(auth -> auth
                // 👇 Allow these endpoints without authentication
                .requestMatchers(
                    "/api/auth/**",
                    "/api/company",
                    "/api/placement",
                    "/api/placements",
                    "/api/recruitment"
                ).permitAll()
                .anyRequest().authenticated()
            )
            .formLogin(login -> login.disable());

        return http.build();
    }

}