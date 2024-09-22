package com.ivo.Ecommerce.Repository;

import com.ivo.Ecommerce.Entity.ProductCategory;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProductCategoryRepository extends JpaRepository<ProductCategory, Long> {
}
