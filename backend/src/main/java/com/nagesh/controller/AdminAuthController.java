package com.nagesh.controller;

import com.nagesh.dto.AdminUpdateDTO;
import com.nagesh.model.User;
import com.nagesh.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;

@RestController
@RequestMapping("/api/admin")
@CrossOrigin(origins = "http://localhost:3000")
public class AdminAuthController {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @PutMapping
    public ResponseEntity<?> updateAdmin(@RequestBody AdminUpdateDTO dto, Principal principal) {
        User admin = userRepository.findByEmail(principal.getName())
                .orElseThrow(() -> new RuntimeException("Admin not found"));

        if (!admin.getRole().name().equals("ADMIN")) {
            return ResponseEntity.status(403).body("Not authorized");
        }

        admin.setEmail(dto.getEmail());
        admin.setPassword(passwordEncoder.encode(dto.getPassword()));
        userRepository.save(admin);

        return ResponseEntity.ok("Admin credentials updated");
    }
}
