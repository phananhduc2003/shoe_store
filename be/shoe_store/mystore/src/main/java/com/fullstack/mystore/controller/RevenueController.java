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
import com.fullstack.mystore.entity.ShopOrder;
import com.fullstack.mystore.repository.ProductRepository;
import com.fullstack.mystore.repository.ShopOrderRepository;

@RestController
public class RevenueController {

    private final ShopOrderRepository shopOrderRepository;
    private final ProductRepository productRepository;

    public RevenueController(ShopOrderRepository shopOrderRepository, ProductRepository productRepository) {
        this.shopOrderRepository = shopOrderRepository;
        this.productRepository = productRepository;
    }

    @GetMapping("/api/revenue-by-orders")
    public Map<String, Double> getRevenueByOrders(@RequestParam String startDate, @RequestParam String endDate) {
        // Chuyển đổi String thành LocalDateTime
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss");
        LocalDateTime start = LocalDateTime.parse(startDate + " 00:00:00", formatter); // Chuyển đổi String sang LocalDateTime
        LocalDateTime end = LocalDateTime.parse(endDate + " 23:59:59", formatter); // Chuyển đổi String sang LocalDateTime

        // Tìm các đơn hàng đã thanh toán trong khoảng thời gian
        List<ShopOrder> orders = shopOrderRepository.findPaidOrdersByDateRange(start, end);

        // Tính toán doanh thu theo ngày
        Map<String, Double> revenueByDate = new HashMap<>();
        for (ShopOrder order : orders) {
            String orderDate = order.getDateOrder().toLocalDate().toString();  // Lấy ngày từ LocalDateTime
            double orderRevenue = 0;

            // Tính doanh thu từ các sản phẩm trong đơn hàng
            for (OrderItem orderItem : order.getOrderItems()) {
                orderRevenue += orderItem.getPrice() * orderItem.getQuantity();
            }

            // Thêm doanh thu vào Map theo ngày
            revenueByDate.put(orderDate, revenueByDate.getOrDefault(orderDate, 0.0) + orderRevenue);
        }

        return revenueByDate;
    }
}
