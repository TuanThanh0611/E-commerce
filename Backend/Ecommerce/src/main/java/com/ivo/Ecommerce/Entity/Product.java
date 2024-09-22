package com.ivo.Ecommerce.Entity;

import jakarta.persistence.*;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Data;
import lombok.experimental.FieldDefaults;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import java.math.BigDecimal;
import java.util.Date;

@Entity
@Table(name="product")
@Data
@FieldDefaults(level= AccessLevel.PRIVATE)
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @ManyToOne
    @JoinColumn(name = "category_id", nullable = false)
    private ProductCategory category;

    @Column(name = "sku")
    String sku;

    @Column(name = "name")
    String name;

    @Column(name = "description")
    String description;

    @Column(name = "unit_price")
    BigDecimal unitPrice;

    @Column(name = "image_url")
    String imageUrl;

    @Column(name = "active")
    boolean active;

    @Column(name = "units_in_stock")
    int unitsInStock;

    @Column(name = "date_created")
    @CreationTimestamp
    Date dateCreated;

    @Column(name = "last_updated")
    @UpdateTimestamp
    Date lastUpdated;
}

