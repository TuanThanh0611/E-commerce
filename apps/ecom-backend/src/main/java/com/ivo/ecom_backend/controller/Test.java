package com.ivo.ecom_backend.controller;


import com.ivo.ecom_backend.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/test")
public class Test {

    @Autowired
    private UserService userService;

    @GetMapping("/firstname")
    public String test(@RequestParam String email) {
        return userService.test(email);
    }
}