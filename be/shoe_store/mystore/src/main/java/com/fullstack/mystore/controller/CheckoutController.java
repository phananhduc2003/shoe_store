package com.fullstack.mystore.controller;

import java.time.LocalDateTime;
import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.fullstack.mystore.dto.CheckoutRequest;
import com.fullstack.mystore.dto.itemOrderDTO;
import com.fullstack.mystore.entity.Payment;
import com.fullstack.mystore.entity.Product;
import com.fullstack.mystore.entity.ShopOrder;
import com.fullstack.mystore.entity.ShoppingCart;
import com.fullstack.mystore.entity.ShoppingCartItem;
import com.fullstack.mystore.entity.User;
import com.fullstack.mystore.enums.OrderStatus;
import com.fullstack.mystore.repository.PaymentRepository;
import com.fullstack.mystore.repository.ProductRepository;
import com.fullstack.mystore.repository.ShopOrderRepository;
import com.fullstack.mystore.repository.ShoppingCartRepository;
import com.fullstack.mystore.repository.UserRepository;


@RestController
@RequestMapping("/checkout")
public class CheckoutController {
	
	private final ShoppingCartRepository shoppingCartRepository;
    private final UserRepository userRepository;
    private final ProductRepository productRepository;
    private final PaymentRepository paymentRepository;
    private final ShopOrderRepository shopOrderRepository;
    
	public CheckoutController(ShoppingCartRepository shoppingCartRepository, UserRepository userRepository,
			ProductRepository productRepository, PaymentRepository paymentRepository,
			ShopOrderRepository shopOrderRepository) {
		super();
		this.shoppingCartRepository = shoppingCartRepository;
		this.userRepository = userRepository;
		this.productRepository = productRepository;
		this.paymentRepository = paymentRepository;
		this.shopOrderRepository = shopOrderRepository;
	}

	@PostMapping("/{userId}")
    @Transactional
    public ResponseEntity<String> checkout(@PathVariable("userId") Integer userId, @RequestBody CheckoutRequest checkoutRequest) {
        // Lấy thông tin người dùng
        User user = userRepository.findById(userId).orElseThrow(() -> new RuntimeException("User not found"));

        // Tạo đơn hàng mới
        ShopOrder shopOrder = new ShopOrder();
        shopOrder.setDateOrder(LocalDateTime.now());
        shopOrder.setTotalPrice(checkoutRequest.getTotal());
        shopOrder.setStatusOrder(OrderStatus.PENDING);  // Sử dụng enum OrderStatus
        shopOrder.setAddressShipping(checkoutRequest.getAddress());
        shopOrder.setUser(user);
        shopOrder = shopOrderRepository.save(shopOrder);

        // Lưu thông tin thanh toán
        Payment payment = new Payment();
        payment.setDatePayment(LocalDateTime.now());
        payment.setMethodPayment(checkoutRequest.getPaymentMethod());
        payment.setUser(user);
        payment.setShoppingCart(shoppingCartRepository.findByUser(user).orElseThrow(() -> new RuntimeException("Shopping Cart not found")));
        payment = paymentRepository.save(payment);

        // Tạo các mục trong đơn hàng từ giỏ hàng người dùng
        List<itemOrderDTO> items = checkoutRequest.getItems();
        double totalAmount = 0;

        for (itemOrderDTO item : items) {
            Product product = productRepository.findById(item.getProductId()).orElseThrow(() -> new RuntimeException("Product not found"));
            totalAmount += item.getPrice() * item.getQuantity();

            ShoppingCartItem cartItem = new ShoppingCartItem();
            cartItem.setProduct(product);
            cartItem.setQuantity(item.getQuantity());
            cartItem.setShoppingCart(shoppingCartRepository.findByUser(user).orElseThrow(() -> new RuntimeException("Shopping Cart not found")));
        }

        // Làm trống giỏ hàng của người dùng sau khi checkout thành công
        ShoppingCart shoppingCart = shoppingCartRepository.findByUser(user).orElseThrow(() -> new RuntimeException("Shopping Cart not found"));
        shoppingCart.getItems().clear();
        shoppingCartRepository.save(shoppingCart);

        // Trả kết quả
        return ResponseEntity.ok("Checkout successful");
    }


}
