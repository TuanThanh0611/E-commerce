package com.ivo.ecom_backend.dto.response;


import com.ivo.ecom_backend.entity.UserAddress;
import jakarta.persistence.*;
import lombok.*;
import lombok.experimental.FieldDefaults;

import java.time.Instant;
import java.time.LocalDate;
import java.util.Set;

@Data
@AllArgsConstructor
@Builder
@NoArgsConstructor
@FieldDefaults(level= AccessLevel.PRIVATE)
public class UserResponse {
    String id;
    String email;
    String firstName;
    String lastName;
    LocalDate dob;
    String phoneNumber;
    String imageUrl;
    Instant createdDate;
    Long dbId;
    Set<UserAddress> userAddresses;
    Set<String> roles;
}