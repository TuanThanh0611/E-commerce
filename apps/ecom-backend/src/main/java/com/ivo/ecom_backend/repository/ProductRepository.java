package com.ivo.ecom_backend.repository;

import com.ivo.ecom_backend.entity.Category;
import com.ivo.ecom_backend.entity.Product;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface ProductRepository extends JpaRepository<Product,Long>{
    void deleteByPublicId(UUID publicId);
    void deleteByCategory(Category category);
}