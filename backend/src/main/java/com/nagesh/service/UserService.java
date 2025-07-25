package com.nagesh.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nagesh.model.User;
import com.nagesh.repository.UserRepository;
 import org.springframework.security.crypto.password.PasswordEncoder;
@Service
public class UserService {
	
	
	@Autowired
	UserRepository repo;
	
	@Autowired
	PasswordEncoder passwordencoder;
	
	public User registerUser(User user) {
	    repo.findByEmail(user.getEmail())
	        .ifPresent(existingUser -> {
	            throw new RuntimeException("User with this email already exists");
	        });

	    
	    
	   user.setPassword(passwordencoder.encode(user.getPassword()));
	    return repo.save(user);
	}

}
