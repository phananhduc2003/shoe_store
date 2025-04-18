package com.fullstack.mystore.controller;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.fullstack.mystore.entity.ShopOrder;
import com.fullstack.mystore.repository.ShopOrderRepository;

@RestController
public class ShoppingOrderController {
	private ShopOrderRepository shopOrderRepository;

	public ShoppingOrderController(ShopOrderRepository shopOrderRepository) {
		super();
		this.shopOrderRepository = shopOrderRepository;
	}
	@GetMapping("/homeAdmin/listOrder")
	public List<ShopOrder> AllOrder() {
		return shopOrderRepository.findAll();
	}
}
