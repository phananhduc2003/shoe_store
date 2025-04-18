package com.fullstack.mystore.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.fullstack.mystore.entity.ShopOrder;

import java.time.LocalDateTime;
import  java.util.List;

public interface ShopOrderRepository extends JpaRepository<ShopOrder, Integer> {
	@Query("SELECT s FROM ShopOrder s WHERE s.paymentStatus = 'Paid' AND s.dateOrder BETWEEN :startDate AND :endDate")
	List<ShopOrder> findPaidOrdersByDateRange(@Param("startDate") LocalDateTime startDate, @Param("endDate") LocalDateTime endDate);
	
	@Query("SELECT o FROM ShopOrder o WHERE o.statusOrder = 'DELIVERED' AND o.dateOrder BETWEEN :startDate AND :endDate")
	List<ShopOrder> findCompletedOrdersByDateRange(@Param("startDate") LocalDateTime startDate, @Param("endDate") LocalDateTime endDate);

}
