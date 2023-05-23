package com.app.lilaProject;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration;


@SpringBootApplication
public class LilaProjectApplication {

	public static void main(String[] args) {
		SpringApplication.run(LilaProjectApplication.class, args);
		System.out.print("hello lila games");
	}

}
