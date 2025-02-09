package com.fullstack.mystore.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.fullstack.mystore.entity.User;
import com.fullstack.mystore.repository.UserRepository;

@RestController
public class UserController {
	@Autowired
	private UserRepository userRepository;

	public UserController(UserRepository userRepository) {
		super();
		this.userRepository = userRepository;
	}
	
	@GetMapping("/users")
	public List<User> allUser() {
		return userRepository.findAll();
	}
	
}
