package com.nagesh.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.nagesh.model.User;
import com.nagesh.service.UserService;

@RestController

@RequestMapping("/api/users")
public class UserController {
	
	@Autowired
	UserService service;
	
	
	
	
	@PostMapping("/register")
	
 	public ResponseEntity<?> registerUser(@RequestBody User user) {
	    User savedUser = service.registerUser(user);
	    
	    if (savedUser == null) {
	        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Email already exists");
	    } else {
	        return ResponseEntity.ok(savedUser);
	    }
	}

	

}
