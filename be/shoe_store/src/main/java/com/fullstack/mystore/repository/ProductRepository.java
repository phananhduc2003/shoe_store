package com.fullstack.mystore.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;


import com.fullstack.mystore.entity.Product;



public interface ProductRepository extends JpaRepository<Product, Integer> {
	
	List<Product> findProductById(Integer id);
	
	List<Product> findByProductCategoryBrand_Id(int brandId);
	 
	List<Product> findByProductCategoryBrandPurposes_ProductCategoryPurpose_Id(Integer purposeId);
	
	List<Product> findByProductCategoryBrand_IdAndProductCategoryBrandPurposes_ProductCategoryPurpose_Id(Integer brandId, Integer purposeId);

}