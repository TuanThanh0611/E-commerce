package com.ivo.Ecommerce.Repository;

import com.ivo.Ecommerce.Entity.Product;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProductRepostitory extends JpaRepository<Product,Long> {
}
