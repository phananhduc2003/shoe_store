package com.fullstack.mystore.entity;


import java.util.Set;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;

@Entity
public class ProductCategoryBrand {
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
	
	@Column(unique = true)
    private String brandName;

    @OneToMany(mappedBy = "productCategoryBrand")
    @JsonIgnore
    private Set<ProductCategoryBrandPurpose> productCategoryBrandPurposes;
    
	public String getBrandName() {
		return brandName;
	}

	public Set<ProductCategoryBrandPurpose> getProductCategoryBrandPurposes() {
		return productCategoryBrandPurposes;
	}

	public void setProductCategoryBrandPurposes(Set<ProductCategoryBrandPurpose> productCategoryBrandPurposes) {
		this.productCategoryBrandPurposes = productCategoryBrandPurposes;
	}

	public void setBrandName(String brandName) {
		this.brandName = brandName;
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}
	
	
}
