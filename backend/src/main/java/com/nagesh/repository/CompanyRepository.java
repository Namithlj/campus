package com.nagesh.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.nagesh.model.Company;

@Repository
public interface CompanyRepository extends JpaRepository<Company, Long> {}
