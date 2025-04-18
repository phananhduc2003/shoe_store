package com.fullstack.mystore.entity;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.OneToOne;

@Entity
public class ShoppingCart {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;
	private String transactionIdUser;
    private String transactionIdMerchant;
    
    @OneToOne
    @JoinColumn(name = "shop_order_id", unique = true)
    @JsonIgnore
    private ShopOrder shopOrder;
    
    @ManyToOne
    @JoinColumn(name = "user_id", nullable = false)
	@JsonIgnore
    private User user;
    
    @OneToMany(mappedBy = "shoppingCart", cascade = CascadeType.ALL, orphanRemoval = true)
    @JsonIgnore
    private List<ShoppingCartItem> items;
    
    public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getTransactionIdUser() {
		return transactionIdUser;
	}

	public void setTransactionIdUser(String transactionIdUser) {
		this.transactionIdUser = transactionIdUser;
	}

	public String getTransactionIdMerchant() {
		return transactionIdMerchant;
	}

	public void setTransactionIdMerchant(String transactionIdMerchant) {
		this.transactionIdMerchant = transactionIdMerchant;
	}

	public ShopOrder getShopOrder() {
		return shopOrder;
	}

	public void setShopOrder(ShopOrder shopOrder) {
		this.shopOrder = shopOrder;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	public List<ShoppingCartItem> getItems() {
		return items;
	}

	public void setItems(List<ShoppingCartItem> items) {
		this.items = items;
	}

}
