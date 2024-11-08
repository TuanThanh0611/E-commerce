package com.ivo.ecom_backend.service;


import com.ivo.ecom_backend.dto.DCategory;
import com.ivo.ecom_backend.dto.DProduct;
import com.ivo.ecom_backend.entity.Category;
import com.ivo.ecom_backend.entity.Product;
import com.ivo.ecom_backend.exception.AppException;
import com.ivo.ecom_backend.exception.ErrorCode;
import com.ivo.ecom_backend.mapper.ProductMapper;
import com.ivo.ecom_backend.repository.CategoryRepository;
import com.ivo.ecom_backend.repository.ProductRepository;
import jakarta.persistence.EntityNotFoundException;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
public class ProductService{
    @Autowired
    private ProductRepository productRepository;
    @Autowired
    private ProductMapper productMapper;
    @Autowired
    private CategoryRepository categoryRepository;
    @Transactional
    public DProduct createProduct(DProduct product) {
        if (product.getPublicId() == null) {
            product.setPublicId(UUID.randomUUID());
        }

        Product productEntity = productMapper.toProduct(product);
        if (productEntity.getCategory() != null) {
            Category category = productEntity.getCategory();

            Optional<Category> existingCategory = categoryRepository.findByName(category.getName());

            if (existingCategory.isPresent()) {

                productEntity.setCategory(existingCategory.get());
            } else {

                categoryRepository.save(category);
            }
        }

        productRepository.save(productEntity);

        return productMapper.fromProductToDProduct(productEntity);
    }


    @Transactional
    public List<DProduct> getAllProducts() {
        if(productRepository.findAll().get(0).getId()==null){
            throw new AppException(ErrorCode.CATCH_ERROR);
        }
        return productMapper.toDProducts(productRepository.findAll());
    }


    @Transactional
    public void deleteProductsByCategory(UUID categoryId) {
        Category category = categoryRepository.findByPublicId(categoryId);
        productRepository.deleteByCategory(category);
    }

    @Transactional
    public UUID deleteProduct(UUID productId) {
        productRepository.deleteByPublicId(productId);

        return productId;
    }

}