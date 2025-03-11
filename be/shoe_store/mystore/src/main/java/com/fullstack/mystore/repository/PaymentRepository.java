package com.fullstack.mystore.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.fullstack.mystore.entity.Payment;

public interface PaymentRepository extends JpaRepository<Payment, Integer>{

}
