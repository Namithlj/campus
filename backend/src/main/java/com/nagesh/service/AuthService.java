package com.nagesh.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.nagesh.auth.LoginRequestDTO;
import com.nagesh.auth.LoginResponseDTO;
import com.nagesh.config.JwtUtil;
import com.nagesh.model.User;
import com.nagesh.repository.UserRepository;


@Service
public class AuthService {
	
	@Autowired
	UserRepository userRepository;
	 
 	
	@Autowired
	JwtUtil jwtUtil;
	
	@Autowired
	
	PasswordEncoder passwordEncoder;
	
	
	

	public LoginResponseDTO loginUser(LoginRequestDTO loginRequestDTO) {
		// TODO Auto-generated method stub
		User user=userRepository.findByEmail(loginRequestDTO.getEmail())
				.orElseThrow(()->new RuntimeException("invalid email or password"));
		
		
		if(!passwordEncoder.matches(loginRequestDTO.getPassword(), user.getPassword())) {
            throw new RuntimeException("Invalid email or password");

		}
		

        // 3. Generate JWT token
        String token = jwtUtil.generateToken(user);

        // 4. Return token + role
        return new LoginResponseDTO(token, user.getRole().name());
		
		
	}
	
	
	
	

}
