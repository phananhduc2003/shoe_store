package com.fullstack.mystore.repository;



import org.springframework.data.jpa.repository.JpaRepository;

import com.fullstack.mystore.entity.User;

public interface UserRepository extends JpaRepository<User, Integer>{
	boolean existsByUsername(String username);
}
