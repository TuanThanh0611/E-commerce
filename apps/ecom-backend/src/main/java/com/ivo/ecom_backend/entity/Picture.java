package com.ivo.ecom_backend.entity;

import jakarta.persistence.*;
import lombok.Builder;

@Entity
@Table(name = "product_picture")
@Builder
public class Picture {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "pictureSequence")
    @SequenceGenerator(name = "pictureSequence", sequenceName = "product_picture_sequence", allocationSize = 1)
    @Column(name = "id")
    private Long id;

    @Lob
    @Column(name = "file", nullable = false)
    private byte[] file;

    @Column(name = "file_content_type", nullable = false)
    private String mimeType;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "product_fk", nullable = false)
    private Product product;

    public Picture() {
    }

    public Picture(Long id, byte[] file, String mimeType, Product product) {
        this.id = id;
        this.file = file;
        this.mimeType = mimeType;
        this.product = product;
    }
}
