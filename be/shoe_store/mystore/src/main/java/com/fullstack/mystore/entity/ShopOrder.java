package com.fullstack.mystore.entity;


import java.time.LocalDateTime;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fullstack.mystore.enums.OrderStatus;

import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.OneToOne;


@Entity
public class ShopOrder {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;
	
    private LocalDateTime dateOrder;
	private double totalPrice;
    
	@Enumerated(EnumType.STRING)
	private OrderStatus statusOrder;

    private String addressShipping;
    private String paymentMethod;
    private String paymentStatus;
    private String shippingStatus;
    
   

	@ManyToOne
    @JoinColumn(name = "user_id")
    private User user;
	
	@OneToMany(mappedBy = "shopOrder", fetch = FetchType.LAZY)
	@JsonIgnore
	private List<OrderItem> orderItems;
    
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

	public OrderStatus getStatusOrder() {
	    return statusOrder;
	}

	public void setStatusOrder(OrderStatus statusOrder) {
	    this.statusOrder = statusOrder;
	}
	public String getAddressShipping() {
		return addressShipping;
	}

	public void setAddressShipping(String addressShipping) {
		this.addressShipping = addressShipping;
	}

	
	
	public String getPaymentMethod() {
		return paymentMethod;
	}

	public void setPaymentMethod(String paymentMethod) {
		this.paymentMethod = paymentMethod;
	}

	public String getPaymentStatus() {
		return paymentStatus;
	}

	public void setPaymentStatus(String paymentStatus) {
		this.paymentStatus = paymentStatus;
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
    
	 public String getShippingStatus() {
		return shippingStatus;
	}

	public void setShippingStatus(String shippingStatus) {
		this.shippingStatus = shippingStatus;
	}
	public List<OrderItem> getOrderItems() {
        return orderItems;
    }
}
