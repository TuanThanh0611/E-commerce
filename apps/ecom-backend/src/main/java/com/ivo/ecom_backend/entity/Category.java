package com.ivo.ecom_backend.entity;

import jakarta.validation.constraints.Size;
import lombok.*;
import lombok.experimental.FieldDefaults;

import java.util.UUID;

@Builder
@FieldDefaults(level= AccessLevel.PRIVATE)
@AllArgsConstructor
@Data
public class Category {
    @NonNull
    @Size(min=3,message = "INVAILID_CATEGORY_NAME")
    final String categoryName;
    Long dbId;
    @NonNull
    UUID publicId;
}
