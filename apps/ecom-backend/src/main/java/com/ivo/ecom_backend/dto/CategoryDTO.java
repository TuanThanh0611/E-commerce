package com.ivo.ecom_backend.dto;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.UUID;

@Builder
@Data
@AllArgsConstructor
@NoArgsConstructor
public class CategoryDTO {
    private String name;

    private UUID publicId;
    @JsonCreator
    public CategoryDTO(@JsonProperty("name") String name) {
        this.name = name;
    }
}
