package com.fullstack.mystore.entity;



import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;

import jakarta.persistence.ManyToOne;

@Entity
public class ProductCategoryBrandPurpose {
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    
    private String purposeName;

    @ManyToOne
    @JoinColumn(name = "product_category_brand_id")
    private ProductCategoryBrand productCategoryBrand;

    @ManyToOne
    @JoinColumn(name = "product_category_purpose_id")
    private ProductCategoryPurpose productCategoryPurpose;

    @ManyToOne
    @JoinColumn(name = "product_id")
    private Product product; 
	
    
    
    public String getPurposeName() {
		return purposeName;
	}
    

	public void setPurposeName(String purposeName) {
		this.purposeName = purposeName;
	}

	public Integer getId() {
		return id;
	}


	public void setId(Integer id) {
		this.id = id;
	}


	public ProductCategoryBrand getProductCategoryBrand() {
		return productCategoryBrand;
	}


	public void setProductCategoryBrand(ProductCategoryBrand productCategoryBrand) {
		this.productCategoryBrand = productCategoryBrand;
	}




	public Product getProduct() {
		return product;
	}


	public void setProduct(Product product) {
		this.product = product;
	}


	public ProductCategoryPurpose getProductCategoryPurpose() {
		return productCategoryPurpose;
	}

	public void setProductCategoryPurpose(ProductCategoryPurpose productCategoryPurpose) {
		this.productCategoryPurpose = productCategoryPurpose;
	}
    
}