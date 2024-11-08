package com.ivo.ecom_backend.dto;

import com.ivo.ecom_backend.Enums.ProductSize;
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
public class ProductDTO {

    private String brand;
    private String color;
    private String description;
    private String name;
    private double price;
    private ProductSize size;
    private CategoryDTO category;
    private boolean featured;
    private List<PictureDTO> pictures;
    private UUID publicId;
    private int nbInStock;
    public void addPictureAttachment(List<PictureDTO> pictures) {
        this.pictures.addAll(pictures);
    }
}
