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
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.fullstack.mystore.dto.ProductDto;
import com.fullstack.mystore.entity.OrderItem;
import com.fullstack.mystore.entity.Product;
import com.fullstack.mystore.entity.ProductCategoryBrand;
import com.fullstack.mystore.entity.ProductCategoryBrandPurpose;
import com.fullstack.mystore.entity.ProductCategoryPurpose;
import com.fullstack.mystore.entity.ShoppingCartItem;
import com.fullstack.mystore.repository.OrderItemRepository;
import com.fullstack.mystore.repository.ProductCategoryBrandRepository;
import com.fullstack.mystore.repository.ProductCategoryPurposeRepository;
import com.fullstack.mystore.repository.ProductCategoryRepository;
import com.fullstack.mystore.repository.ProductRepository;
import com.fullstack.mystore.repository.ShoppingCartItemRepository;


@RestController
public class ProductController {
	@Autowired
	private ProductRepository productRepository;
	
	@Autowired
    private ProductCategoryBrandRepository productCategoryBrandRepository;

    @Autowired
    private ProductCategoryPurposeRepository productCategoryPurposeRepository;
	
    @Autowired
    private ProductCategoryRepository productCategoryRepository;
    
    @Autowired
    private OrderItemRepository orderItemRepository;
    
    @Autowired
    private ShoppingCartItemRepository shoppingCartItemRepository;
    
    
    
	

	public ProductController(ProductRepository productRepository,
			ProductCategoryBrandRepository productCategoryBrandRepository,
			ProductCategoryPurposeRepository productCategoryPurposeRepository,
			ProductCategoryRepository productCategoryRepository,
			OrderItemRepository orderItemRepository, ShoppingCartItemRepository shoppingCartItemRepository ) {
		super();
		this.productRepository = productRepository;
		this.productCategoryBrandRepository = productCategoryBrandRepository;
		this.productCategoryPurposeRepository = productCategoryPurposeRepository;
		this.productCategoryRepository = productCategoryRepository;
		this.orderItemRepository = orderItemRepository;
		this.shoppingCartItemRepository = shoppingCartItemRepository;
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
	
	@GetMapping("/homeAdmin/{productId}")
	public ResponseEntity<Map<String, Object>> getProductDetails(@PathVariable("productId") int productId) {
	    try {
	        // Tìm sản phẩm theo productId
	        Product product = productRepository.findById(productId)
	                .orElseThrow(() -> new IllegalArgumentException("Product not found with id: " + productId));

	        // Lấy thông tin thương hiệu (brandId) từ ProductCategoryBrand
	        ProductCategoryBrand brand = product.getProductCategoryBrand();
	        Integer brandId = (brand != null) ? brand.getId() : null;

	        // Kiểm tra nếu không có thương hiệu và thông báo lỗi chi tiết
	        if (brandId == null) {
	            throw new IllegalArgumentException("Product does not have a linked brand.");
	        }

	        // Lấy thông tin mục đích (categoryId) từ ProductCategoryBrandPurpose
	        List<ProductCategoryBrandPurpose> brandPurposes = product.getProductCategoryBrandPurposes();
	        Integer categoryId = null;
	        
	        // Kiểm tra nếu brandPurposes không phải null và không rỗng
	        if (brandPurposes != null && !brandPurposes.isEmpty()) {
	            categoryId = brandPurposes.get(0).getProductCategoryPurpose().getId();
	        }

	        // Kiểm tra nếu không có mục đích và cung cấp thông báo chi tiết về lý do
	        if (categoryId == null) {
	            if (brandPurposes == null) {
	                throw new IllegalArgumentException("ProductCategoryBrandPurpose list is null.");
	            } else if (brandPurposes.isEmpty()) {
	                throw new IllegalArgumentException("No ProductCategoryBrandPurpose entries found for this product.");
	            } else {
	                throw new IllegalArgumentException("Product does not have a linked category.");
	            }
	        }

	        // Trả về thông tin của sản phẩm dưới dạng một Map
	        Map<String, Object> productDetails = Map.of(
	                "name", product.getName(),
	                "description", product.getDescription(),
	                "image", product.getImage(),
	                "quantity", product.getQuantity(),
	                "price", product.getPrice(),
	                "brandId", brandId,
	                "categoryId", categoryId
	        );

	        return ResponseEntity.ok(productDetails);
	    } catch (Exception e) {
	        // Nếu có lỗi, trả về mã lỗi 400 và thông báo lỗi
	        return ResponseEntity.status(400).body(Map.of("error", e.getMessage()));
	    }
	}

	
	
	@PostMapping("/homeAdmin/AddProduct")
	public ResponseEntity<Product> addProduct(@RequestBody ProductDto productDto) {
	    try {
	        // Tìm kiếm Brand từ ProductCategoryBrandRepository bằng brandId
	        ProductCategoryBrand brand = productCategoryBrandRepository.findById(productDto.getBrandId())
	                .orElseThrow(() -> new IllegalArgumentException("Invalid brand ID"));

	        // Tìm kiếm Purpose từ ProductCategoryPurposeRepository bằng categoryId
	        ProductCategoryPurpose categoryPurpose = productCategoryPurposeRepository.findById(productDto.getCategoryId())
	                .orElseThrow(() -> new IllegalArgumentException("Invalid category ID"));

	        // Tạo đối tượng Product mới và thiết lập các thuộc tính từ ProductDto
	        Product product = new Product();
	        product.setName(productDto.getName());
	        product.setDescription(productDto.getDescription());
	        product.setImage(productDto.getImage());
	        product.setPrice(productDto.getPrice());
	        product.setQuantity(productDto.getQuantity());
	        product.setProductCategoryBrand(brand);

	        // Tạo danh sách ProductCategoryBrandPurpose cho sản phẩm này
	        ProductCategoryBrandPurpose brandPurpose = new ProductCategoryBrandPurpose();
	        brandPurpose.setProductCategoryBrand(brand);
	        brandPurpose.setProductCategoryPurpose(categoryPurpose);
	        brandPurpose.setProduct(product);

	        // Lưu sản phẩm vào cơ sở dữ liệu
	        Product savedProduct = productRepository.save(product);

	        // Lưu ProductCategoryBrandPurpose để cập nhật mối quan hệ
	        // Bạn cần phải lưu ProductCategoryBrandPurpose để mối quan hệ giữa Product và ProductCategoryPurpose được cập nhật
	        productCategoryRepository.save(brandPurpose);

	        // Trả về sản phẩm đã lưu
	        return ResponseEntity.ok(savedProduct);

	    } catch (Exception e) {
	        // Nếu có lỗi (ví dụ: brand hoặc category không tồn tại), trả về lỗi
	        return ResponseEntity.status(400).body(null);
	    }
	}
	
	@PutMapping("/homeAdmin/PutProduct/{productId}")
	public ResponseEntity<Product> updateProduct(@PathVariable("productId") int productId, @RequestBody ProductDto productDto) {
	    try {
	        // Tìm kiếm sản phẩm bằng productId
	        Product existingProduct = productRepository.findById(productId)
	                .orElseThrow(() -> new IllegalArgumentException("Product not found with id: " + productId));

	        // Cập nhật thông tin của sản phẩm từ ProductDto
	        existingProduct.setName(productDto.getName());
	        existingProduct.setDescription(productDto.getDescription());
	        existingProduct.setImage(productDto.getImage());
	        existingProduct.setPrice(productDto.getPrice());
	        existingProduct.setQuantity(productDto.getQuantity());

	        // Tìm kiếm Brand từ ProductCategoryBrandRepository bằng brandId
	        ProductCategoryBrand brand = productCategoryBrandRepository.findById(productDto.getBrandId())
	                .orElseThrow(() -> new IllegalArgumentException("Invalid brand ID"));
	        existingProduct.setProductCategoryBrand(brand);

	        // Tìm kiếm Purpose từ ProductCategoryPurposeRepository bằng categoryId
	        ProductCategoryPurpose categoryPurpose = productCategoryPurposeRepository.findById(productDto.getCategoryId())
	                .orElseThrow(() -> new IllegalArgumentException("Invalid category ID"));

	        // Tạo hoặc cập nhật ProductCategoryBrandPurpose cho sản phẩm này
	        ProductCategoryBrandPurpose brandPurpose = new ProductCategoryBrandPurpose();
	        brandPurpose.setProductCategoryBrand(brand);
	        brandPurpose.setProductCategoryPurpose(categoryPurpose);
	        brandPurpose.setProduct(existingProduct);

	        // Lưu lại ProductCategoryBrandPurpose để mối quan hệ giữa Product và ProductCategoryPurpose được cập nhật
	        productCategoryRepository.save(brandPurpose);

	        // Lưu lại sản phẩm đã cập nhật vào cơ sở dữ liệu
	        Product updatedProduct = productRepository.save(existingProduct);

	        // Trả về sản phẩm đã cập nhật
	        return ResponseEntity.ok(updatedProduct);

	    } catch (Exception e) {
	        // Nếu có lỗi (ví dụ: sản phẩm hoặc brand/category không tồn tại), trả về lỗi
	        return ResponseEntity.status(400).body(null);
	    }
	}
	@DeleteMapping("/Delete/Product/{productId}")
	public ResponseEntity<Map<String, String>> deleteProduct(@PathVariable("productId") int productId) {
	    try {
	        // Xóa các bản ghi liên quan trong bảng PRODUCT_CATEGORY_BRAND_PURPOSE
	        List<ProductCategoryBrandPurpose> brandPurposes = productCategoryRepository.findByProductId(productId);
	        productCategoryRepository.deleteAll(brandPurposes); // Xóa tất cả các bản ghi liên quan

	        // Tiếp tục xóa các mục trong ORDER_ITEM, SHOPPING_CART_ITEM, nếu có
	        List<OrderItem> orderItems = orderItemRepository.findByProductId(productId);
	        orderItemRepository.deleteAll(orderItems);

	        List<ShoppingCartItem> shoppingCartItems = shoppingCartItemRepository.findByProductId(productId);
	        shoppingCartItemRepository.deleteAll(shoppingCartItems);

	        // Xóa sản phẩm
	        Product product = productRepository.findById(productId)
	                .orElseThrow(() -> new IllegalArgumentException("Product not found with id: " + productId));

	        productRepository.delete(product);

	        return ResponseEntity.ok(Map.of("message", "Product successfully deleted"));
	    } catch (Exception e) {
	        return ResponseEntity.status(400).body(Map.of("error", e.getMessage()));
	    }
	}




}
