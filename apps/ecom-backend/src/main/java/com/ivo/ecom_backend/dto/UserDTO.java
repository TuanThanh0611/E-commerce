package com.ivo.ecom_backend.dto;

import com.ivo.ecom_backend.entity.UserAddress;
import lombok.*;
import lombok.experimental.FieldDefaults;
import org.springframework.security.core.userdetails.User;

import java.time.Instant;
import java.util.List;
import java.util.Map;
import java.util.Set;
import java.util.UUID;
import java.util.stream.Collectors;

@Builder
@Data
@AllArgsConstructor
@NoArgsConstructor(access = AccessLevel.PUBLIC)
@FieldDefaults(level = AccessLevel.PRIVATE)
public class UserDTO {
    String id;


    String lastname;

    String firstname;

    String email;



    String imageUrl;

    Instant createdDate;

    Set<String> roles;

    UserAddress userAddress;





    public void updateFromUser(UserDTO user) {
        this.email = user.email;
        this.imageUrl = user.imageUrl;
        this.firstname = user.firstname;
        this.lastname = user.lastname;
    }








}