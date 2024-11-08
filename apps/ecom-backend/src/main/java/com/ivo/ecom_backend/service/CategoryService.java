package com.ivo.ecom_backend.service;

import com.ivo.ecom_backend.dto.CategoryDTO;
import com.ivo.ecom_backend.dto.DCategory;
import com.ivo.ecom_backend.dto.response.UserResponse;
import com.ivo.ecom_backend.exception.AppException;
import com.ivo.ecom_backend.exception.ErrorCode;
import com.ivo.ecom_backend.mapper.CategoryMapper;
import com.ivo.ecom_backend.repository.CategoryRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
public class CategoryService {
    @Autowired
    private CategoryRepository categoryRepository;
    @Autowired
    private CategoryMapper categoryMapper;
    @Transactional
    public DCategory createCategory(DCategory category) {
        category.setPublicId(UUID.randomUUID());
        categoryRepository.save(categoryMapper.toCategory(category));
        return category;
    }
    @Transactional
    public UUID deleteCategory(UUID categoryId) {
        categoryRepository.deleteByPublicId(categoryId);

        return categoryId;
    }


    @Transactional
    public List<DCategory> getAllCategories() {
        if(categoryRepository.findAll().get(0).getId()==null){
            throw new AppException(ErrorCode.CATCH_ERROR);
        }
        return categoryMapper.toDCategoryList(categoryRepository.findAll());
    }
}
