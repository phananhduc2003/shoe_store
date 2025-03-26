INSERT INTO product_category_brand (id, brand_name) VALUES
(1, 'Nike'),
(2, 'Adidas'),
(3, 'Puma'),
(4, 'Converse'),
(5, 'Vans');

INSERT INTO product_category_purpose (id, purpose_name) VALUES
(1, 'Running'),
(2, 'Football'),
(3, 'Casual'),
(4, 'Outdoor'),
(5, 'Winter');

INSERT INTO PRODUCT (ID, PRICE, PRODUCT_CATEGORY_ID, QUANTITY, DESCRIPTION, IMAGE, NAME) VALUES
(1, 1000000, 1, 50, 'Nike casual sneakers with a comfortable fit', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCBNur75U0fj4w_AVw5_8q_eQm6R1hGn0LHA&s', 'Nike Casual Sneakers'),

(2, 1200000, 2, 30, 'Adidas running shoes with high durability', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSCRmn7XuAjT-k7uze9wr7LzNJC-HdsfLPmg&s', 'Adidas Running Shoes'),
(3, 1500000, 3, 40, 'Puma leather formal shoes with classic design', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3c5R9I936H4T_l-_NsTH7HbQcy40Yr6QBCA&s', 'Puma Formal Shoes'),
(4, 900000, 4, 20, 'Converse trendy sports shoes for outdoor activities', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFc4y5XWyKFY-rvQ7q5NkxkOiQufXsYRpVfw&s', 'Converse Sports Shoes'),
(5, 800000, 5, 15, 'Vans slip-on shoes for everyday use', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxtbm92w6LwxjtecndQ24Z0tVe7welatVlOA&s', 'Vans Slip-on Shoes'),
(6, 2000000, 1, 10, 'Nike premium hiking boots for extreme conditions', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_uZoiUz53KBzkN_rIxuPw3NHIZ9fkkaeTXw&s', 'Nike Hiking Boots'),
(7, 1300000, 2, 25, 'Adidas lightweight running shoes for daily runs', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRf2KLOo55-hLwbranfOJwuWOUeHlPyEMf3g&s', 'Adidas Lightweight Shoes'),
(8, 1400000, 3, 35, 'Puma stylish loafers for casual wear', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTe5BCTPkM4vTxmatpKxLamEQTS23zM5ilrYw&s', 'Puma Loafers'),

(9, 1100000, 4, 18, 'Converse ankle boots for winter', 'https://cdn.afew-store.com/assets/45/450819/600/converse-x-daily-paper-chuck-70-de-luxe-squared-hi-black-black-a12140c-footwear%20%3E%20sneaker-packshots-60.jpg', 'Converse Winter Boots'),
(10, 1600000, 5, 45, 'Vans breathable mesh sneakers for summer', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcxEBJxbZQ5yNdCSonDMTkYAyrjQKG_ZbkM91EZL61FW02lrOCKvxhIiOo1v7OSx5UnLE&usqp=CAU', 'Vans Mesh Sneakers'),
(11, 1700000, 1, 60, 'Nike trail running shoes with grip for rough terrains', 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/f19ff63b-bb6b-4bb5-ad01-49e71f611500/W+NIKE+REACTX+PEGASUS+TRAIL+5.png', 'Nike Trail Running Shoes'),
(12, 1400000, 2, 50, 'Adidas high-performance football boots', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSf1lbp0B8DmKuflS54en2h5F8ZKsxggi48RQ&s', 'Adidas Football Boots'),

(13, 1600000, 3, 35, 'Puma sport-inspired sneakers with a bold design', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAnNMo8kSdHeoIY7aOmVkdBhgrQ3uz2u6NqA&s', 'Puma Sport Sneakers'),
(14, 950000, 4, 20, 'Converse stylish sneakers for casual wear', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxMTRCjj0OH9u0bSTnrcQCiP4oGl_ehiyCKcA9UT5L5WoxreqWjhLyPL1lje9vqtf8Eyo&usqp=CAU', 'Converse Casual Sneakers'),
(15, 850000, 5, 40, 'Vans skate shoes with durable sole for extreme moves', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5Zf7CjbSuoEPEPT7X_RJZMZqKHlvTOByX2isw8pOcMu3cfUHeOKAwzlbTrcTkKxp-ixo&usqp=CAU', 'Vans Skate Shoes'),
(16, 1800000, 1, 45, 'Nike Air Zoom running shoes for speed and comfort', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTv9CfxWzjlbzDT-mL5h0egNMyhXDT0E6Czng&s', 'Nike Air Zoom Shoes'),
(17, 1400000, 2, 50, 'Adidas Predator football shoes with excellent grip', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0vHau378dJ6xzWDEInmJX3hrSE4w_axafdg&s', 'Adidas Predator Shoes'),
(18, 1300000, 3, 60, 'Puma racing sneakers with lightweight material', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQONKt-irgRY7iHBvSshHWEe1ptZ7XcsRhEqw&s', 'Puma Racing Sneakers'),
(19, 1100000, 4, 25, 'Converse classic canvas sneakers for casual outings', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkQ8SV9sBGQ1f6rJLddrjl1FM7Bt3i23cQrKQk7fZcS6Go6ujYHGtiF7q0_0Vpdqy9xqI&usqp=CAU', 'Converse Canvas Sneakers'),
(20, 950000, 5, 30, 'Vans Old Skool classic skate shoes', 'https://drake.vn/image/catalog/Vans/360/SNEAKER/VN0A5FCBY28/1.jpg', 'Vans Old Skool'),
(21, 1600000, 1, 15, 'Nike waterproof hiking boots for tough terrains', 'https://www.nike.sa/dw/image/v2/BDVB_PRD/on/demandware.static/-/Sites-akeneo-master-catalog/default/dwa394de5d/nk/1f8/1/f/8/b/8/1f81f8b8_1d17_4b13_9838_d0b086d21fd9.jpg?sw=700&sh=700&sm=fit&q=100&strip=false', 'Nike Waterproof Boots'),
(22, 1200000, 2, 40, 'Adidas X Speedflow football shoes for agility', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiMVTJH3IEhxvsQ1I5rTL5Q89YHapy1NQe6Q&s', 'Adidas X Speedflow'),
(23, 1250000, 3, 35, 'Puma Slipstream sneakers with retro design', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4fefOTfSaJDaiqtJVz8icJV50lAYtxKuoWQ&s', 'Puma Slipstream'),
(24, 900000, 4, 50, 'Converse Chuck Taylor sneakers for casual looks', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlXnwy_DeWQTINNt4q0Ss9b8sK5QSenIRIz-HSq437m5MkxgesrGJokLwblCMPh_lwmQg&usqp=CAU', 'Converse Chuck Taylor'),
(25, 1000000, 5, 60, 'Vans Authentic slip-on for everyday use', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_tcVzw2VNVuXGzJc2HolBw-piB8dtnEflqOZlNUTx7EuEC4TYUSfA3Cwk-5J6wxcWgDw&usqp=CAU', 'Vans Authentic Slip-On');



INSERT INTO product_category_brand_purpose (product_id, product_category_brand_id, product_category_purpose_id, purpose_name) 
VALUES 
(1, 1, 3, 'Casual'), 
(2, 2, 1, 'Running'), 
(3, 3, 3, 'Casual'),
(6, 1, 4, 'Outdoor'),          
(11, 1, 2, 'Running'),         
(16, 1, 5, 'Winter'),         
(21, 1, 4, 'Outdoor'),       

-- Sản phẩm của Adidas
(2, 2, 1, 'Running'),          
(7, 2, 2, 'Football'),         
(12, 2, 3, 'Casual'),      
(17, 2, 4, 'Outdoor'),     
(22, 2, 5, 'Winter'),       

-- Sản phẩm của Puma
(3, 3, 2, 'Football'),        
(8, 3, 1, 'Running'),          
(13, 3, 3, 'Casual'),         
(18, 3, 4, 'Outdoor'),         
(23, 3, 5, 'Winter'),         

-- Sản phẩm của Converse
(4, 4, 4, 'Outdoor'),         
(9, 4, 5, 'Winter'),          
(14, 4, 3, 'Casual'),         
(19, 4, 2, 'Football'),          
(24, 4, 1, 'Running'),         

-- Sản phẩm của Vans
(5, 5, 1, 'Running'),          
(10, 5, 5, 'Winter'),          
(15, 5, 4, 'Outdoor'),       
(20, 5, 2, 'Football'),         
(25, 5, 3, 'Casual');          



INSERT INTO app_user (name, address, phone, username, password, role, email) VALUES
('Admin', 'Ha Noi', 0338288176, 'Duc', '123456', 1, 'admin@example.com'),
('John Doe', '123 Main St, Cityville', 0123456789, 'duc', '123', 0, 'johndoe@example.com'),
('Jane Smith', '456 Oak Ave, Townsville', 0987654321, 'janesmith', '123', 0, 'janesmith@example.com'),
('Alice Johnson', '789 Pine Rd, Villagetown', 0111222333, 'alicej', '123', 0, 'alicej@example.com'),
('Bob Brown', '321 Elm St, Hamletville', 0444555666, 'bobb', '123', 0, 'bobb@example.com');




INSERT INTO SHOP_ORDER (TOTAL_PRICE, USER_ID, DATE_ORDER, ADDRESS_SHIPPING, STATUS_ORDER, PAYMENT_METHOD, PAYMENT_STATUS, SHIPPING_STATUS)
VALUES 
(2500000, 2, '2025-02-20 10:00:00', '123 Main St, Cityville', 'PENDING', 'Credit Card', 'Pending', 'Not Shipped'),
(3000000, 2, '2025-02-20 11:00:00', '456 Oak Ave, Townsville', 'DELIVERED', 'Cash on Delivery', 'Paid', 'Delivered'),
(4000000, 3, '2025-02-21 09:00:00', '456 Oak Ave, Townsville', 'PENDING', 'Credit Card', 'Pending', 'Not Shipped'),
(5000000, 4, '2025-02-22 12:00:00', '789 Pine Rd, Villagetown', 'DELIVERED', 'Cash on Delivery', 'Paid', 'Delivered');


INSERT INTO ORDER_ITEM (SHOP_ORDER_ID, PRODUCT_ID, QUANTITY, PRICE)
VALUES 
(1, 1, 2, 1000000),  
(1, 2, 1, 1200000),  
(2, 3, 1, 1800000),
(3, 1, 2, 1000000),  -- Đơn hàng 3, sản phẩm 1, số lượng 2, giá 1 triệu
(3, 5, 1, 800000),   -- Đơn hàng 3, sản phẩm 5, số lượng 1, giá 800 nghìn
(4, 2, 3, 1200000),  -- Đơn hàng 4, sản phẩm 2, số lượng 3, giá 1.2 triệu
(4, 6, 2, 2000000);  -- Đơn hàng 4, sản phẩm 6, số lượng 2, giá 2 triệu


INSERT INTO SHOPPING_CART (SHOP_ORDER_ID, USER_ID, TRANSACTION_ID_MERCHANT, TRANSACTION_ID_USER)
VALUES
(1, 2, 'merchant123-transaction', 'user123-transaction'),
(2, 3, 'merchant456-transaction', 'user456-transaction'),
(3, 3, 'merchant123-transaction', 'user123-transaction'),
(4, 4, 'merchant456-transaction', 'user456-transaction');

INSERT INTO SHOPPING_CART_ITEM ( PRODUCT_ID, QUANTITY, SHOPPING_CART_ID) VALUES
( 1, 2, 1),  
( 2, 1, 1),  
( 3, 1, 2),  
( 4, 3, 2),
(1, 2, 3),  -- Giỏ hàng 3, sản phẩm 1, số lượng 2
(5, 1, 3),  -- Giỏ hàng 3, sản phẩm 5, số lượng 1
(2, 3, 4),  -- Giỏ hàng 4, sản phẩm 2, số lượng 3
(6, 2, 4);  -- Giỏ hàng 4, sản phẩm 6, số lượng 2