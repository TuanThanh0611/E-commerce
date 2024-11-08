package com.ivo.ecom_backend.dto;

import com.ivo.ecom_backend.Enums.ProductSize;
import com.ivo.ecom_backend.entity.Picture;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;
import java.util.UUID;

@Builder
@Data
@AllArgsConstructor
@NoArgsConstructor
public class DProduct {

    private String productBrand;
    private String color;
    private String description;
    private String name;
    private double price;
    private ProductSize size;
    private DCategory category;
    private List<Picture> pictures;
    private Long dbId;
    private boolean featured;
    private UUID publicId;
    private int nbInStock;
}