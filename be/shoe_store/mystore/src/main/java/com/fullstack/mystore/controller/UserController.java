package com.fullstack.mystore.controller;

import java.util.List;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.fullstack.mystore.dto.UserRegisterDTO;
import com.fullstack.mystore.entity.ShoppingCart;
import com.fullstack.mystore.entity.User;
import com.fullstack.mystore.repository.ShoppingCartRepository;
import com.fullstack.mystore.repository.UserRepository;

@RestController
public class UserController {
	@Autowired
	private UserRepository userRepository;
	
	@Autowired
    private ShoppingCartRepository shoppingCartRepository;

	public UserController(UserRepository userRepository,ShoppingCartRepository shoppingCartRepository ) {
		super();
		this.userRepository = userRepository;
		this.shoppingCartRepository = shoppingCartRepository;
	}
	
	@GetMapping("/users")
	public List<User> allUser() {
		return userRepository.findAll();
	}
	
	@PostMapping("/register")
	public ResponseEntity<Object> registerUser(@RequestBody UserRegisterDTO userRegisterDTO) {
		// Kiểm tra nếu tên đăng nhập đã tồn tại
        if (userRepository.existsByUsername(userRegisterDTO.getUsername())) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Username already exists.");
        }
        
     // Tạo đối tượng User từ DTO
        User user = new User();
        user.setUsername(userRegisterDTO.getUsername());
        user.setPassword(userRegisterDTO.getPassword()); // Mã hóa mật khẩu trước khi lưu vào cơ sở dữ liệu
        user.setEmail(userRegisterDTO.getEmail());
        
     // Thiết lập mặc định role là 0
        user.setRole(0);
        
     // Lưu người dùng vào cơ sở dữ liệu
        user = userRepository.save(user);
        
     // Tạo giỏ hàng cho người dùng
        ShoppingCart shoppingCart = new ShoppingCart();
        shoppingCart.setUser(user); // Liên kết giỏ hàng với người dùng
        shoppingCart.setTransactionIdUser(UUID.randomUUID().toString()); // Tạo transaction ID cho người dùng
        shoppingCart.setTransactionIdMerchant(UUID.randomUUID().toString()); // Tạo transaction ID cho merchant
        shoppingCartRepository.save(shoppingCart); // Lưu giỏ hàng vào cơ sở dữ liệu
        
     // Trả về phản hồi thành công
        return ResponseEntity.status(HttpStatus.CREATED).body("User registered and shopping cart created successfully.");
	}
	
}
