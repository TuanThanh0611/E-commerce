package com.ivo.ecom_backend.controller;

import com.ivo.ecom_backend.dto.request.IntrospectRequest;
import com.ivo.ecom_backend.dto.request.LoginRequest;
import com.ivo.ecom_backend.dto.request.RegisterRequest;
import com.ivo.ecom_backend.dto.request.UserCreateRequest;
import com.ivo.ecom_backend.dto.response.ApiResponse;
import com.ivo.ecom_backend.dto.response.AuthenticationResponse;
import com.ivo.ecom_backend.dto.response.IntrospectResponse;
import com.ivo.ecom_backend.dto.response.UserResponse;
import com.ivo.ecom_backend.service.AuthService;
import com.ivo.ecom_backend.service.UserService;
import com.nimbusds.jose.JOSEException;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.text.ParseException;

@RestController()
@RequestMapping("/api/auth")
@CrossOrigin(origins = "http://localhost:4200")
public class AuthController {
    @Autowired
    AuthService authService;
    @PostMapping("/regis")
    @CrossOrigin(origins = "http://localhost:4200")
    ResponseEntity<ApiResponse<UserResponse>> registerUser(@RequestBody @Valid RegisterRequest request){
        ApiResponse<UserResponse> apiResponse =new ApiResponse<>();
        apiResponse.setResult(authService.registerUser(request));
        return ResponseEntity.ok(apiResponse);
    }
    @PostMapping("/login")
    ResponseEntity<ApiResponse<AuthenticationResponse>> authenticate(@RequestBody LoginRequest request){
        var result =authService.authenticate(request);
        return ResponseEntity.ok(ApiResponse.<AuthenticationResponse>builder().
                result(result)
                .build());
    }


    @PostMapping("/token")
    ApiResponse<IntrospectResponse> introspect(@RequestBody IntrospectRequest request) throws ParseException, JOSEException, ParseException, JOSEException {
        var result =authService.intropect(request);
        return ApiResponse.<IntrospectResponse>builder().
                result(result)
                .build();
    }



    @GetMapping
    @RequestMapping("/test")
    @CrossOrigin(origins = "http://localhost:4200")
    public ResponseEntity<String> testConnection() {
        return ResponseEntity.ok("Kết nối thành công!");
    }
}
