package com.nagesh;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class BackendApplication {

	public static void main(String[] args) {
		System.out.println("hello world!");
		SpringApplication.run(BackendApplication.class, args);
	}

}
