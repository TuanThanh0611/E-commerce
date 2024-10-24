package com.ivo.ecom_backend.dto.request;

import jakarta.validation.constraints.Size;
import lombok.*;
import lombok.experimental.FieldDefaults;

import java.time.LocalDate;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
@FieldDefaults(level= AccessLevel.PRIVATE)
public class UserCreateRequest {

    String email;
    @Size(min=6,message = "INVALID_PASSWORD")
    String password;
    String phoneNumber;
    String firstName;
    String lastName;
    LocalDate dob;
}