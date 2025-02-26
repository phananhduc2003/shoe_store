package com.fullstack.mystore.repository;


import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.fullstack.mystore.entity.ShoppingCart;
import com.fullstack.mystore.entity.User;


public interface ShoppingCartRepository extends JpaRepository<ShoppingCart, Integer> {
	Optional<ShoppingCart> findByUserId(Integer userId); 
	Optional<ShoppingCart> findByUser(User user);
}
