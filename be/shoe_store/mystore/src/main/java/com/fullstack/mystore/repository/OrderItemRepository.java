package com.fullstack.mystore.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.fullstack.mystore.entity.OrderItem;

public interface OrderItemRepository extends JpaRepository<OrderItem, Integer> {

}
