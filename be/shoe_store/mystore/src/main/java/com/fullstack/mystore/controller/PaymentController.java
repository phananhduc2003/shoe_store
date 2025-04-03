package com.fullstack.mystore.controller;

import java.io.IOException;
import java.io.UnsupportedEncodingException;
import java.net.URLEncoder;
import java.nio.charset.StandardCharsets;
import java.util.*;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.fullstack.mystore.service.VnpayService;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

@RestController
@RequestMapping("/api/payment")
public class PaymentController {

    @Autowired
    private VnpayService vnpayService;

    @GetMapping("/create-vnpay")
    public Map<String, String> createVnpayPayment(HttpServletRequest request,
                                                  Long amount,
                                                  String orderInfo) throws UnsupportedEncodingException {
        String paymentUrl = vnpayService.createPaymentUrl(request, amount, orderInfo);
        return Collections.singletonMap("paymentUrl", paymentUrl);
    }

    @GetMapping("/vnpay-return")
    public void handleVnpayReturn(HttpServletRequest request, HttpServletResponse response) throws IOException {
        Map<String, String> params = new HashMap<>();
        request.getParameterMap().forEach((k, v) -> params.put(k, v[0]));

        String vnp_SecureHash = params.remove("vnp_SecureHash");
        String responseCode = params.get("vnp_ResponseCode");

        // Tính lại hash
        List<String> keys = new ArrayList<>(params.keySet());
        Collections.sort(keys);
        StringBuilder signData = new StringBuilder();
        for (String key : keys) {
            String encodedValue = URLEncoder.encode(params.get(key), StandardCharsets.US_ASCII.toString());
            signData.append(key).append("=").append(encodedValue).append("&");
        }
        signData.setLength(signData.length() - 1);

        String myHash = vnpayService.hmacSHA512Internal(signData.toString());

        // Tạo URL frontend redirect
        String baseRedirect = "http://localhost:5173/successCheckOut";
        String redirectMessage;

        if (!myHash.equals(vnp_SecureHash)) {
            redirectMessage = "Chữ ký không hợp lệ";
        } else if ("00".equals(responseCode)) {
            redirectMessage = "Thanh toán thành công";
        } else {
            redirectMessage = "Thanh toán thất bại";
        }

        String encodedMessage = URLEncoder.encode(redirectMessage, StandardCharsets.UTF_8);
        String finalRedirectUrl = baseRedirect + "?message=" + encodedMessage;

        response.sendRedirect(finalRedirectUrl);
    }
}
