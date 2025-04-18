package com.fullstack.mystore.entity;


import java.time.LocalDateTime;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Temporal;
import jakarta.persistence.TemporalType;

@Entity
public class ShopOrder {
	@Id
	@GeneratedValue
	private Integer id;
	@Temporal(TemporalType.TIMESTAMP)
    private LocalDateTime dateOrder;
	private double totalPrice;
    private String statusOrder;
    private String addressShipping;
    
    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;
    
    @OneToOne(mappedBy = "shopOrder")
    private ShoppingCart shoppingCart;

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public LocalDateTime getDateOrder() {
		return dateOrder;
	}

	public void setDateOrder(LocalDateTime dateOrder) {
		this.dateOrder = dateOrder;
	}

	public double getTotalPrice() {
		return totalPrice;
	}

	public void setTotalPrice(double totalPrice) {
		this.totalPrice = totalPrice;
	}

	public String getStatusOrder() {
		return statusOrder;
	}

	public void setStatusOrder(String statusOrder) {
		this.statusOrder = statusOrder;
	}

	public String getAddressShipping() {
		return addressShipping;
	}

	public void setAddressShipping(String addressShipping) {
		this.addressShipping = addressShipping;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	public ShoppingCart getShoppingCart() {
		return shoppingCart;
	}

	public void setShoppingCart(ShoppingCart shoppingCart) {
		this.shoppingCart = shoppingCart;
	}
    
    
}
