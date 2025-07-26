package com.nagesh.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
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

    // ---- Add Company ----
    @PostMapping("/company")
    public ResponseEntity<?> addCompany(@RequestBody Company company) {
        return ResponseEntity.ok(companyRepo.save(company));
    }

    // ---- Add Placement ----
    @PostMapping("/placement")
    public ResponseEntity<?> addPlacement(@RequestBody Placement placement) {
        return ResponseEntity.ok(placementRepo.save(placement));
    }

    // ---- Fetch All Placements ----
    @GetMapping("/placements")
    public ResponseEntity<?> getAllPlacements() {
        return ResponseEntity.ok(placementRepo.findAll());
    }

    // ---- Fetch All Companies ----
    @GetMapping("/recruitment")
    public ResponseEntity<?> getAllCompanies() {
        return ResponseEntity.ok(companyRepo.findAll());
    }
}
