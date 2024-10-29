package com.ivo.ecom_backend.controller;

import com.ivo.ecom_backend.dto.UserDTO;
import com.ivo.ecom_backend.dto.request.IntrospectRequest;
import com.ivo.ecom_backend.dto.request.LoginRequest;
import com.ivo.ecom_backend.dto.request.RegisterRequest;
import com.ivo.ecom_backend.dto.request.UserCreateRequest;
import com.ivo.ecom_backend.dto.response.ApiResponse;
import com.ivo.ecom_backend.dto.response.AuthenticationResponse;
import com.ivo.ecom_backend.dto.response.IntrospectResponse;
import com.ivo.ecom_backend.dto.response.UserResponse;
import com.ivo.ecom_backend.entity.User;
import com.ivo.ecom_backend.mapper.UserMapper;
import com.ivo.ecom_backend.service.AuthService;
import com.ivo.ecom_backend.service.UserService;
import com.nimbusds.jose.JOSEException;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.oauth2.jwt.Jwt;
import org.springframework.web.bind.annotation.*;

import java.text.ParseException;

@RestController()
@RequestMapping("/api/auth")
@CrossOrigin(origins = "http://localhost:4200")
public class AuthController {
    @Autowired
    AuthService authService;
    @Autowired
    UserMapper mapper;
    @PostMapping("/regis")
    @CrossOrigin(origins = "http://localhost:4200")
    ResponseEntity<ApiResponse<UserResponse>> registerUser(@RequestBody @Valid RegisterRequest request){
        ApiResponse<UserResponse> apiResponse =new ApiResponse<>();
        apiResponse.setResult(authService.registerUser(request));
        return ResponseEntity.ok(apiResponse);
    }
    @PostMapping("/signin")
    @CrossOrigin(origins = "http://localhost:4200")
    ResponseEntity<ApiResponse<AuthenticationResponse>> authenticate(@RequestBody LoginRequest request){
        var result =authService.authenticate(request);
        ApiResponse<AuthenticationResponse> apiResponse =new ApiResponse<>();
        apiResponse.setResult(result);
        return ResponseEntity.ok(apiResponse);
    }


    @PostMapping("/token")
    ApiResponse<IntrospectResponse> introspect(@RequestBody IntrospectRequest request) throws ParseException, JOSEException, ParseException, JOSEException {
        var result =authService.intropect(request);
        return ApiResponse.<IntrospectResponse>builder().
                result(result)
                .build();
    }


    @GetMapping("/authenticated")
    public ResponseEntity<UserDTO> getAuthenticatedUser(@AuthenticationPrincipal Jwt jwtToken,
                                                        @RequestParam boolean forceResync) {
        try {

            if (jwtToken == null) {
                return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
            }
            String token = jwtToken.getTokenValue();
            User authenticatedUser = authService.getAuthenticatedUserWithSync(token, forceResync);
            if (authenticatedUser == null) {
                return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
            }



           UserDTO user = mapper.toUserDTO(authenticatedUser);// THIS IS ERROR, PLEASE HANDLE IT
                   user.setId(authenticatedUser.getId());
        return ResponseEntity.ok(user);
        } catch (Exception e) {
            e.printStackTrace(); // Ghi log chi tiết lỗi
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body(null); // Trả về phản hồi mặc định
        }
    }



    @GetMapping
    @RequestMapping("/test")
    @CrossOrigin(origins = "http://localhost:4200")
    public ResponseEntity<String> testConnection() {
        return ResponseEntity.ok("Kết nối thành công!");
    }
}
