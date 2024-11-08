package com.ivo.ecom_backend.repository;

import com.ivo.ecom_backend.entity.Category;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;
import java.util.UUID;
@Repository
public interface CategoryRepository extends JpaRepository<Category, Long> {
    Category findByPublicId(UUID publicId);
    void deleteByPublicId(UUID publicId);


    Optional<Category> findByName(String name);
}