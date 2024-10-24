package com.ivo.ecom_backend.dto;

import com.ivo.ecom_backend.entity.UserAddress;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Data;
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
@FieldDefaults(level = AccessLevel.PRIVATE)
public class UserDTO {

    String lastname;

    String firstname;

    String email;

    UUID userPublicId;

    String imageUrl;

    Instant createdDate;

    Set<String> roles;

    Long dbId;

    UserAddress userAddress;





    public void updateFromUser(UserDTO user) {
        this.email = user.email;
        this.imageUrl = user.imageUrl;
        this.firstname = user.firstname;
        this.lastname = user.lastname;
    }

    public void initFieldForSignup() {
        this.userPublicId = (UUID.randomUUID());
    }






}