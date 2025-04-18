package com.fullstack.mystore.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.fullstack.mystore.entity.ProductCategoryBrandPurpose;


public interface ProductCategoryRepository extends JpaRepository<ProductCategoryBrandPurpose, Integer> {
	 List<ProductCategoryBrandPurpose> findByProductId(int productId);
}
