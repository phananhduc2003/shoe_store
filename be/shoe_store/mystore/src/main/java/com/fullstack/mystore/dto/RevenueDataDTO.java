package com.fullstack.mystore.dto;

public class RevenueDataDTO {
	 private int orderId;
     private double revenue;
     private String date;
	public RevenueDataDTO(int orderId, double revenue, String date) {
		super();
		this.orderId = orderId;
		this.revenue = revenue;
		this.date = date;
	}
	public int getOrderId() {
		return orderId;
	}
	public void setOrderId(int orderId) {
		this.orderId = orderId;
	}
	public double getRevenue() {
		return revenue;
	}
	public void setRevenue(double revenue) {
		this.revenue = revenue;
	}
	public String getDate() {
		return date;
	}
	public void setDate(String date) {
		this.date = date;
	}
     
}
