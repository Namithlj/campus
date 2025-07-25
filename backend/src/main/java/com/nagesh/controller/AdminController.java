package com.nagesh.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.nagesh.model.Company;
import com.nagesh.model.Placement;
import com.nagesh.repository.CompanyRepository;
import com.nagesh.repository.PlacementRepository;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:3000")
public class AdminController {

    @Autowired
    private CompanyRepository companyRepo;

    @Autowired
    private PlacementRepository placementRepo;
    
    @Autowired CompanyRepository companyRepository;

    @PostMapping("/company")
    public ResponseEntity<?> addCompany(@RequestBody Company company) {
        return ResponseEntity.ok(companyRepo.save(company));
    }

    @PostMapping("/placement")
    public ResponseEntity<?> addPlacement(@RequestBody Placement placement) {
        return ResponseEntity.ok(placementRepo.save(placement));
    }
    
    
    @GetMapping("/placements")
    public ResponseEntity<?> getAllPlacements() {
        return ResponseEntity.ok(placementRepo.findAll());
    }
    
    @GetMapping("/recruitment")
    public ResponseEntity<?> getAllCompanies() {
        return ResponseEntity.ok(companyRepository.findAll());
    }
    
    
}
