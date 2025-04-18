package com.fullstack.mystore.entity;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fullstack.mystore.enums.Role;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;


@Entity
@Table(name = "app_user")
public class User {
	
	public User() {
		
	}
	
	
	public User(Integer userId) {
		// TODO Auto-generated constructor stub
	}

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;
	@Column(nullable = true)
	private String name;
	
	@Column(unique = true, nullable = false)
	private String email;
	
	@Column(nullable = true)
	private String address;
	
	@Column(length = 10, nullable = true)
	private String phone;
	private String username;
	private String password;
	
	@Enumerated(EnumType.STRING)
	@Column(nullable = false)
	private Role role;
	
	@OneToMany(mappedBy = "user")
	@JsonBackReference
    private List<ShoppingCart> shoppingCarts;
	
	@OneToMany(mappedBy = "user")
	@JsonBackReference
    private List<ShopOrder> shopOrders;
	
	@OneToMany(mappedBy = "user")
	@JsonIgnore
    private List<Payment> payments;

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}
	
	
	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public String getPhone() {
		return phone;
	}

	public void setPhone(String string) {
		this.phone = string;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}



	public List<ShoppingCart> getShoppingCarts() {
		return shoppingCarts;
	}

	public void setShoppingCarts(List<ShoppingCart> shoppingCarts) {
		this.shoppingCarts = shoppingCarts;
	}

	public List<ShopOrder> getShopOrders() {
		return shopOrders;
	}

	public void setShopOrders(List<ShopOrder> shopOrders) {
		this.shopOrders = shopOrders;
	}

	public List<Payment> getPayments() {
		return payments;
	}

	public void setPayments(List<Payment> payments) {
		this.payments = payments;
	}


	public Role getRole() {
		return role;
	}


	public void setRole(Role role) {
		this.role = role;
	}
	
	
}
