package com.nagesh.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.nagesh.model.Placement;

@Repository
public interface PlacementRepository extends JpaRepository<Placement, Long> {}