# 🎓 Campus Placement Monitoring System

![Spring Boot](https://img.shields.io/badge/Spring%20Boot-3.0-brightgreen)
![React](https://img.shields.io/badge/React-18-blue)
![AWS](https://img.shields.io/badge/AWS-Deployed-orange)
![Docker](https://img.shields.io/badge/Docker-Enabled-blue)
![License](https://img.shields.io/badge/License-MIT-lightgrey)

A **cloud-native microservices web application** designed to streamline and monitor the campus placement process for universities and colleges.  
Built using **Spring Boot**, **React.js**, **MySQL**, **Docker**, and deployed on **AWS**, this system provides **real-time analytics, monitoring dashboards, and secure automation** for students, recruiters, and administrators.

---

## 🚀 Features

- 🧩 **Microservices Architecture** – Independent services for Student, Recruiter, and Analytics modules  
- 📊 **Real-Time Analytics** – Visualize placement stats, job trends, and student performance  
- 🔐 **Secure Authentication** – JWT-based auth with role-based access control  
- ☁️ **Cloud Deployment** – Hosted on AWS EC2 & S3, monitored via CloudWatch  
- 🐳 **Containerized Services** – Each module runs in Docker containers  
- ⚡ **CI/CD Pipeline** – Automated builds and deployments with GitHub Actions  
- 📱 **Responsive UI** – React.js frontend with dynamic dashboards and API integration  

---

## 🧱 Architecture Overview

```mermaid
flowchart TD
    A[React Frontend] -->|HTTP/HTTPS| B(API Gateway - Spring Boot)
    B --> C1[Student Service]
    B --> C2[Recruiter Service]
    B --> C3[Analytics Service]
    C1 --> D1[(MySQL Database)]
    C2 --> D2[(MySQL Database)]
    C3 --> D3[(AWS CloudWatch / Reports)]
