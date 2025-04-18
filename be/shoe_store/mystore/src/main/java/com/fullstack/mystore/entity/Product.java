package com.fullstack.mystore.entity;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;

import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;

@Entity
public class Product {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;
	private String description;
    private String image;
    private String name;
    private double price;
    private Integer quantity;
    
    @ManyToOne
    @JoinColumn(name = "PRODUCT_CATEGORY_ID")
    private ProductCategoryBrand productCategoryBrand;
    
    @OneToMany(mappedBy = "product")
    @JsonIgnore
    private List<ProductCategoryBrandPurpose> productCategoryBrandPurposes; 

    @OneToMany(mappedBy = "product")
    @JsonBackReference
    private List<ShoppingCartItem> shoppingCartItems;
    
    // Constructor không tham số (cần cho Hibernate)
    public Product() {}

    // Constructor với id để sử dụng trong truy vấn
    public Product(Integer id) {
        this.id = id;
    }

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	} 

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public String getImage() {
		return image;
	}

	public void setImage(String image) {
		this.image = image;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public double getPrice() {
		return price;
	}

	public void setPrice(double price) {
		this.price = price;
	}

	public Integer getQuantity() {
		return quantity;
	}

	public void setQuantity(Integer quantity) {
		this.quantity = quantity;
	}

	
	public ProductCategoryBrand getProductCategoryBrand() {
		return productCategoryBrand;
	}

	public void setProductCategoryBrand(ProductCategoryBrand productCategoryBrand) {
		this.productCategoryBrand = productCategoryBrand;
	}



	public List<ShoppingCartItem> getShoppingCartItems() {
		return shoppingCartItems;
	}

	public void setShoppingCartItems(List<ShoppingCartItem> shoppingCartItems) {
		this.shoppingCartItems = shoppingCartItems;
	}

	public List<ProductCategoryBrandPurpose> getProductCategoryBrandPurposes() {
	    return productCategoryBrandPurposes;  // Trả về danh sách các mục đích liên kết với sản phẩm
	}
}
