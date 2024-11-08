package com.ivo.ecom_backend.entity;

import jakarta.persistence.*;
import lombok.Builder;
import lombok.Data;

import java.util.Objects;
import java.util.Set;
import java.util.UUID;

@Entity
@Data
@Table(name = "product_category")
@Builder
public class Category  {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "categorySequence")
    @SequenceGenerator(name = "categorySequence", sequenceName = "product_category_sequence", allocationSize = 1)
    @Column(name = "id")
    private Long id;

    @Column(name = "name", nullable = false)
    private String name;

    @Column(name = "public_id", unique = true, nullable = false)
    private UUID publicId;

    @OneToMany(mappedBy = "category")
    private Set<Product> products;

    public Category() {
    }

    public Category(Long id, String name, UUID publicId, Set<Product> products) {
        this.id = id;
        this.name = name;
        this.publicId = publicId;
        this.products = products;
    }


}