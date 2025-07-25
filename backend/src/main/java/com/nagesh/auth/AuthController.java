package com.nagesh.auth;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.nagesh.service.AuthService;

@RestController
@RequestMapping("/api/auth/users")
public class AuthController {
	
	
	
	@Autowired 
	AuthService authservice;
	
    @PostMapping("/login")

	public LoginResponseDTO login(@RequestBody LoginRequestDTO loginRequestDTO) {
		
		
		
		return authservice.loginUser(loginRequestDTO);
		
		
	}
	
	

}
