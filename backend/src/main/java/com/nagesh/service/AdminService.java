package com.nagesh.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.nagesh.model.User;
import com.nagesh.repository.UserRepository;
import com.nagesh.dto.AdminUpdateDTO;
@Service
public class AdminService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    public User updateAdmin(String currentAdminEmail, AdminUpdateDTO dto) {
        User admin = userRepository.findByEmail(currentAdminEmail)
                .orElseThrow(() -> new RuntimeException("Admin not found"));

        if (admin.getRole() != User.Role.ADMIN) {
            throw new RuntimeException("Not authorized");
        }

        admin.setEmail(dto.getEmail());
        admin.setPassword(passwordEncoder.encode(dto.getPassword()));
        return userRepository.save(admin);
    }
}
