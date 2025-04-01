package com.fullstack.mystore.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.fullstack.mystore.entity.OrderItem;

public interface OrderItemRepository extends JpaRepository<OrderItem, Integer> {

	List<OrderItem> findByProductId(int productId);

}
