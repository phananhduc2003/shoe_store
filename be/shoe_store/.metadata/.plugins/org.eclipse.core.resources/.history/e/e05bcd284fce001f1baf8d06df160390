package com.fullstack.mystore.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.fullstack.mystore.entity.Product;



public interface ProductRepository extends JpaRepository<Product, Integer> {
	
	List<Product> findProductById(Integer id);
	
	List<Product> findByProductCategoryBrand_Id(Integer brandId);
	 
	List<Product> findByProductCategoryBrandPurposes_ProductCategoryPurpose_Id(Integer purposeId);
	

	
	 @Query("SELECT DISTINCT p FROM Product p " +
	           "JOIN p.productCategoryBrandPurposes pbp " +
	           "WHERE (:brandIds IS NULL OR p.productCategoryBrand.id IN :brandIds) " +
	           "AND (:purposeIds IS NULL OR pbp.productCategoryPurpose.id IN :purposeIds)")
	    List<Product> findByFilters(
	            @Param("brandIds") List<Integer> brandIds,
	            @Param("purposeIds") List<Integer> purposeIds);
}
