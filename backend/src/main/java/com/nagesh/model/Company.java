package com.nagesh.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Company {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String company;
    private String process;
    private String eligibility;
    private String companyLink;
    private String registerLink;
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getCompany() {
		return company;
	}
	public void setCompany(String company) {
		this.company = company;
	}
	public String getProcess() {
		return process;
	}
	public void setProcess(String process) {
		this.process = process;
	}
	public String getEligibility() {
		return eligibility;
	}
	public void setEligibility(String eligibility) {
		this.eligibility = eligibility;
	}
	public String getCompanyLink() {
		return companyLink;
	}
	public void setCompanyLink(String companyLink) {
		this.companyLink = companyLink;
	}
	public String getRegisterLink() {
		return registerLink;
	}
	public void setRegisterLink(String registerLink) {
		this.registerLink = registerLink;
	}
    
}
