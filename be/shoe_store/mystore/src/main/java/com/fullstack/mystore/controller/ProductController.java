package com.fullstack.mystore.controller;

import java.util.Arrays;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.fullstack.mystore.entity.Product;
import com.fullstack.mystore.repository.ProductRepository;


@RestController
public class ProductController {
	@Autowired
	private ProductRepository productRepository;
	
	public ProductController(ProductRepository productRepository) {
		super();
		this.productRepository = productRepository;
		
	}

	// GET /products
	@GetMapping("home/product")
	public List<Product> allProduct() {
		return productRepository.findAll();
	}
	// GET /products/{id}
	@GetMapping("home/product/{id}")
	public List<Product> getProductById(@PathVariable int id) {
		return productRepository.findProductById(id);
	}
	
	//http://localhost:8080/home/product/brand?brandId=1
	@GetMapping("home/product/brand")
	public List<Product> getProductByBrand(@RequestParam int brandId) {
		return productRepository.findByProductCategoryBrand_Id(brandId);
	}
	//http://localhost:8080/home/product/purpose?purposeId=1
	@GetMapping("home/product/purpose")
	public List<Product> getProductByPurpose(@RequestParam int purposeId) {
		return productRepository.findByProductCategoryBrandPurposes_ProductCategoryPurpose_Id(purposeId);
	}

	@GetMapping("product/filter")
	public ResponseEntity<Map<String, Object>> filterProducts(
	        @RequestParam(required = false) String brandIds,
	        @RequestParam(required = false) String purposeIds,
	        @RequestParam(defaultValue = "0") int page,
	        @RequestParam(defaultValue = "6") int size) {
	    // Chuyển đổi brandIds và purposeIds thành danh sách Integer
	    List<Integer> brandIdList = (brandIds != null && !brandIds.isEmpty())
	            ? Arrays.stream(brandIds.split(","))
	                    .map(Integer::parseInt)
	                    .collect(Collectors.toList())
	            : null;

	    List<Integer> purposeIdList = (purposeIds != null && !purposeIds.isEmpty())
	            ? Arrays.stream(purposeIds.split(","))
	                    .map(Integer::parseInt)
	                    .collect(Collectors.toList())
	            : null;

	    // Tạo Pageable object để hỗ trợ phân trang
	    Pageable pageable = PageRequest.of(page, size);

	    // Gọi repository để lấy dữ liệu phân trang
	    Page<Product> productPage = productRepository.findByFilters(brandIdList, purposeIdList, pageable);

	    // Tạo response để chứa dữ liệu và thông tin phân trang
	    Map<String, Object> response = Map.of(
	    	    "content", productPage.getContent(),
	    	    "totalPages", productPage.getTotalPages(),
	    	    "totalElements", productPage.getTotalElements(),
	    	    "currentPage", productPage.getNumber()
	    	);

	    return ResponseEntity.ok(response);
	}
}
