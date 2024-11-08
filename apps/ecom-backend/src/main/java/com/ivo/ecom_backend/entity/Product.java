package com.ivo.ecom_backend.entity;
import com.ivo.ecom_backend.Enums.ProductSize;
import jakarta.persistence.*;
import lombok.Builder;
import lombok.Data;


import java.util.HashSet;
import java.util.Objects;
import java.util.Set;
import java.util.UUID;
@Builder
@Entity
@Data
@Table(name = "product")
public class Product {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "productSequence")
    @SequenceGenerator(name = "productSequence", sequenceName = "product_sequence", allocationSize = 1)
    @Column(name = "id")
    private Long id;


    @Column(name = "brand")
    private String brand;

    @Column(name = "color")
    private String color;

    @Column(name = "description")
    private String description;

    @Column(name = "name")
    private String name;

    @Column(name = "price")
    private double price;

    @Column(name = "featured")
    private boolean featured;

    @Enumerated(EnumType.STRING)
    @Column(name = "size")
    private ProductSize size;

    @Column(name = "publicId", unique = true)
    private UUID publicId;

    @Column(name = "nb_in_stock")
    private int nbInStock;

    @OneToMany(fetch = FetchType.LAZY, mappedBy = "product")
    private Set<Picture> pictures = new HashSet<>();


    @JoinColumn(name = "category_fk", referencedColumnName = "id")
    @ManyToOne(cascade = CascadeType.PERSIST)
    private Category category;

    public Product() {
    }

    public Product(Long id, String brand, String color, String description, String name, double price, boolean featured,
                         ProductSize size, UUID publicId, int nbInStock, Set<Picture> pictures, Category category) {
        this.id = id;
        this.brand = brand;
        this.color = color;
        this.description = description;
        this.name = name;
        this.price = price;
        this.featured = featured;
        this.size = size;
        this.publicId = publicId;
        this.nbInStock = nbInStock;
        this.pictures = pictures;
        this.category = category;
    }
}