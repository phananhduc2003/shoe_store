package com.fullstack.mystore.enums;

public enum OrderStatus {
    PENDING,      // Đang chờ xử lý
    PROCESSING,   // Đang xử lý đơn hàng
    SHIPPED,      // Đã giao cho đơn vị vận chuyển
    DELIVERED,    // Đã giao thành công
    CANCELLED,    // Đã hủy đơn hàng
    COMPLETED     // Đã hoàn tất đơn hàng
}

