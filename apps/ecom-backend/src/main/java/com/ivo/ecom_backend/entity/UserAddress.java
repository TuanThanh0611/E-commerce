package com.ivo.ecom_backend.entity;

import com.ivo.ecom_backend.exception.ErrorCode;
import lombok.Builder;
import lombok.Data;
import lombok.NonNull;

import lombok.Builder;
import lombok.Data;
import lombok.NonNull;
import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@Entity
public class UserAddress {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String street;
    private String city;
    private String note;
    @ManyToOne
    @JoinColumn(name = "user_id")
    User user;

    public UserAddress(String street, String city, String note,User user) {
        if (street == null) {
            throw new IllegalArgumentException(ErrorCode.NotNull.getMessage());
        }
        if (street.length() > 255) {
            throw new IllegalArgumentException(ErrorCode.MAXLENGTH.getMessage());
        }
        if (city == null) {
            throw new IllegalArgumentException(ErrorCode.NotNull.getMessage());
        }
        if (city.length() > 255) {
            throw new IllegalArgumentException(ErrorCode.MAXLENGTH.getMessage());
        }
        this.street = street;
        this.city = city;
        this.note = note;
        this.user = user;
    }
}