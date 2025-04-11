package com.fullstack.mystore.controller;

import java.util.List;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.fullstack.mystore.dto.UserRegisterDTO;
import com.fullstack.mystore.entity.ShoppingCart;
import com.fullstack.mystore.entity.User;
import com.fullstack.mystore.enums.Role;
import com.fullstack.mystore.repository.ShoppingCartRepository;
import com.fullstack.mystore.repository.UserRepository;

@RestController
public class UserController {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private ShoppingCartRepository shoppingCartRepository;

    public UserController(UserRepository userRepository, ShoppingCartRepository shoppingCartRepository) {
        this.userRepository = userRepository;
        this.shoppingCartRepository = shoppingCartRepository;
    }

    @GetMapping("/users")
    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    @PostMapping("/register")
    public ResponseEntity<Object> registerUser(@RequestBody UserRegisterDTO userRegisterDTO) {
        // Kiểm tra username đã tồn tại
        if (userRepository.existsByUsername(userRegisterDTO.getUsername())) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Username already exists.");
        }

        // Tạo user mới
        User user = new User();
        user.setUsername(userRegisterDTO.getUsername());
        user.setPassword(userRegisterDTO.getPassword()); 
        user.setEmail(userRegisterDTO.getEmail());

        // ✅ Gán role mặc định là USER
        user.setRole(Role.USER);

        // Lưu user vào DB
        user = userRepository.save(user);

        // Tạo ShoppingCart mặc định
        ShoppingCart shoppingCart = new ShoppingCart();
        shoppingCart.setUser(user);
        shoppingCart.setTransactionIdUser(UUID.randomUUID().toString());
        shoppingCart.setTransactionIdMerchant(UUID.randomUUID().toString());

        shoppingCartRepository.save(shoppingCart);

        return ResponseEntity
                .status(HttpStatus.CREATED)
                .body("✅ User registered and shopping cart created successfully.");
    }
}
