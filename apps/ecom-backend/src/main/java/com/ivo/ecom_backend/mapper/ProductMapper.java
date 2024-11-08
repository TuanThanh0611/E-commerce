package com.ivo.ecom_backend.mapper;


import com.ivo.ecom_backend.dto.DProduct;
import com.ivo.ecom_backend.dto.ProductDTO;
import com.ivo.ecom_backend.entity.Product;
import org.mapstruct.Mapper;

import java.util.List;

@Mapper(componentModel = "spring")
public interface ProductMapper {
    Product toProduct(DProduct product);
    List<DProduct> toDProducts(List<Product> products);
    DProduct toDProduct(ProductDTO product);
    ProductDTO toProductDTO(DProduct product);
    List<Product> fromDProductsToProducts(List<DProduct> products);
    List<ProductDTO> fromDProductsToProductsDTO(List<DProduct> products);
    DProduct fromProductToDProduct(Product product);
}
