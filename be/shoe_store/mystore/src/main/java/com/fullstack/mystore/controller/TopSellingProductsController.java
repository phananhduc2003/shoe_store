package com.fullstack.mystore.controller;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.fullstack.mystore.entity.OrderItem;
import com.fullstack.mystore.entity.Product;
import com.fullstack.mystore.entity.ShopOrder;
import com.fullstack.mystore.repository.ProductRepository;
import com.fullstack.mystore.repository.ShopOrderRepository;

@RestController
public class TopSellingProductsController {

    private final ShopOrderRepository shopOrderRepository;
    private final ProductRepository productRepository;

    public TopSellingProductsController(ShopOrderRepository shopOrderRepository, ProductRepository productRepository) {
        this.shopOrderRepository = shopOrderRepository;
        this.productRepository = productRepository;
    }

    @GetMapping("/api/top-selling-products")
    public Map<String, Integer> getTopSellingProducts(@RequestParam String startDate, @RequestParam String endDate) {
        // Chuyển đổi String thành LocalDateTime
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss");
        LocalDateTime start = LocalDateTime.parse(startDate + " 00:00:00", formatter); 
        LocalDateTime end = LocalDateTime.parse(endDate + " 23:59:59", formatter); 

        // Lấy các đơn hàng đã hoàn thành trong khoảng thời gian
        List<ShopOrder> orders = shopOrderRepository.findCompletedOrdersByDateRange(start, end);

        // Tính số lượng bán được cho mỗi sản phẩm
        Map<String, Integer> productSales = new HashMap<>();
        for (ShopOrder order : orders) {
            for (OrderItem orderItem : order.getOrderItems()) {
                Product product = orderItem.getProduct();
                productSales.put(product.getName(), productSales.getOrDefault(product.getName(), 0) + orderItem.getQuantity());
            }
        }

        return productSales;
    }
}
