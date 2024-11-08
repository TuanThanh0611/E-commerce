package com.ivo.ecom_backend.controller;


import com.ivo.ecom_backend.dto.CategoryDTO;
import com.ivo.ecom_backend.dto.DCategory;
import com.ivo.ecom_backend.dto.response.ApiResponse;

import com.ivo.ecom_backend.dto.response.UserResponse;
import com.ivo.ecom_backend.entity.Category;
import com.ivo.ecom_backend.mapper.CategoryMapper;
import com.ivo.ecom_backend.repository.UserRepository;
import com.ivo.ecom_backend.service.CategoryService;
import com.ivo.ecom_backend.service.ProductService;
import com.ivo.ecom_backend.service.UserService;
import lombok.AllArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;


@RestController
@RequestMapping("/api/category")
public class CategoryController {

    private static final Logger log = LoggerFactory.getLogger(CategoryController.class);
    public static final String ADMIN = "ADMIN";

    @Autowired
    private CategoryService categoryService;
    @Autowired
    private CategoryMapper categoryMapper;
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private ProductService productService;

//    public CategoryController(ProductService productService) {
//        this.productService = productService;
//    }


    @PostMapping
    @CrossOrigin(origins = "http://localhost:4200")
    public ResponseEntity<ApiResponse<CategoryDTO>> save(@RequestBody CategoryDTO request) {
        ApiResponse<CategoryDTO> apiResponse =new ApiResponse<>();
        DCategory category =categoryMapper.toDCategory(request);
        apiResponse.setResult(categoryMapper.toCategoryDTO(categoryService.createCategory(category)));
        return ResponseEntity.ok(apiResponse);
    }
    @GetMapping
    @CrossOrigin(origins = "http://localhost:4200")
    public List<CategoryDTO> getAllCategories() {

        return categoryMapper.toCategoryDTOListFromCategory(
                categoryMapper.toCategoryListFromDCategoryList(categoryService.getAllCategories()));
    }
    @DeleteMapping
    @CrossOrigin(origins = "http://localhost:4200")
    public ResponseEntity<ApiResponse<Void>> delete(@RequestBody UUID publicId) {
        ApiResponse<Void> apiResponse = new ApiResponse<>();
        if (publicId == null) {
            apiResponse.setMessage("Delete category failed");
            return ResponseEntity.badRequest().body(apiResponse);
        }

        try {
            productService.deleteProductsByCategory(publicId);
            categoryService.deleteCategory(publicId);
            apiResponse.setMessage("Delete category successful");
            return ResponseEntity.ok(apiResponse);
        } catch (Exception e) {
            apiResponse.setMessage("Delete category failed: " + e.getMessage());
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(apiResponse);
        }
    }

//
//    @DeleteMapping
//    @PreAuthorize("hasAnyRole('" + ROLE_ADMIN + "')")
//    public ResponseEntity<UUID> delete(UUID publicId) {
//        try {
//            PublicId deletedCategoryPublicId = productsApplicationService.deleteCategory(new PublicId(publicId));
//            return ResponseEntity.ok(deletedCategoryPublicId.value());
//        } catch (EntityNotFoundException enff) {
//            log.error("Could not delete category with id {}", publicId, enff);
//            ProblemDetail problemDetail = ProblemDetail.forStatusAndDetail(HttpStatus.BAD_REQUEST, enff.getMessage());
//            return ResponseEntity.of(problemDetail).build();
//        }
//    }
//
//    @GetMapping
//    public ResponseEntity<Page<CategoryResponse>> findAll(Pageable pageable) {
//        Page<Category> categories = productService.findAllCategory(pageable);
//        PageImpl<CategoryResponse> restCategories = new PageImpl<>(
//                categories.getContent().stream().map(RestCategory::fromDomain).toList(),
//                pageable,
//                categories.getTotalElements()
//        );
//        return ResponseEntity.ok(restCategories);
//    }

}
