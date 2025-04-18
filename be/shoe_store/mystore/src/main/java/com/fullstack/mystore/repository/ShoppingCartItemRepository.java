package com.fullstack.mystore.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.fullstack.mystore.entity.Product;
import com.fullstack.mystore.entity.ShoppingCart;
import com.fullstack.mystore.entity.ShoppingCartItem;

public interface ShoppingCartItemRepository extends JpaRepository<ShoppingCartItem, Integer> {
	List<ShoppingCartItem> findByShoppingCart(ShoppingCart shoppingCart);
	List<ShoppingCartItem> findByProductId(int productId);
	Optional<ShoppingCartItem> findByShoppingCartAndProduct(ShoppingCart shoppingCart, Product product);
}
