package com.ivo.ecom_backend.mapper;


import com.ivo.ecom_backend.dto.CategoryDTO;
import com.ivo.ecom_backend.dto.DCategory;
import com.ivo.ecom_backend.entity.Category;
import org.mapstruct.Mapper;

import java.util.List;

@Mapper(componentModel = "spring")
public interface CategoryMapper {
    Category toCategory(DCategory category);
    DCategory toDCategory(CategoryDTO categoryDTO);
    CategoryDTO toCategoryDTO(DCategory category);
    List<DCategory> toDCategoryList(List<Category> Categories);
    List<CategoryDTO> toCategoryDTOListFromCategory(List<Category> Categories);
    List<Category> toCategoryListFromDCategoryList(List<DCategory> Categories);
}
