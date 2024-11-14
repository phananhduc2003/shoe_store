package com.fullstack.mystore.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.fullstack.mystore.entity.ProductCategoryBrand;



public interface ProductCategoryBrandRepository extends JpaRepository<ProductCategoryBrand, Integer> {
	
}
