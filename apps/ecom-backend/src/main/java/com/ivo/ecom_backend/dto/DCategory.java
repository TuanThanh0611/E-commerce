package com.ivo.ecom_backend.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.UUID;

@Builder
@Data
@AllArgsConstructor
public class DCategory {
    private String name;
    private Long dbId;
    private UUID publicId;
}
