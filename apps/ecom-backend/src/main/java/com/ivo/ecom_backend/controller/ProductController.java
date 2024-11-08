package com.ivo.ecom_backend.controller;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.ivo.ecom_backend.dto.*;
import com.ivo.ecom_backend.dto.response.ApiResponse;
import com.ivo.ecom_backend.exception.AppException;
import com.ivo.ecom_backend.exception.ErrorCode;
import com.ivo.ecom_backend.mapper.ProductMapper;
import com.ivo.ecom_backend.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.multipart.MultipartHttpServletRequest;

import java.io.IOException;
import java.util.List;
import java.util.UUID;
import java.util.function.Function;

@RestController
@RequestMapping("/api/product")
public class ProductController {
    @Autowired
    ProductService productService;
    @Autowired
    ProductMapper productMapper;
    private final ObjectMapper objectMapper = new ObjectMapper();

//    @PostMapping
//    @CrossOrigin(origins = "http://localhost:4200")
//    public ResponseEntity<ApiResponse<ProductDTO>> save(
//            @RequestPart("dto") ProductDTO request,
//            @RequestPart("pictures") List<MultipartFile> pictures) {
//
//        ApiResponse<ProductDTO> apiResponse = new ApiResponse<>();
//
//        DProduct product = productMapper.toDProduct(request);
//        DProduct createdProduct = productService.createProduct(product);
//
//
//        pictures.forEach(picture -> {
//
//        });
//
//        apiResponse.setResult(productMapper.toProductDTO(createdProduct));
//        return ResponseEntity.ok(apiResponse);
//    }
    @GetMapping
    @CrossOrigin(origins = "http://localhost:4200")
    public List<ProductDTO> getAllProducts() {

        return productMapper.fromDProductsToProductsDTO(productService.getAllProducts());
    }

    @PostMapping(consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    @CrossOrigin(origins = "http://localhost:4200")
    public ResponseEntity<ProductDTO> save(MultipartHttpServletRequest request,
                                            @RequestPart("dto") String productRaw)
            throws JsonProcessingException {
        List<PictureDTO> pictures = request.getFileMap()
                .values()
                .stream()
                .map(mapMultipartFileToRestPicture())
                .toList();

        ProductDTO productDTO = objectMapper.readValue(productRaw, ProductDTO.class);
        productDTO.addPictureAttachment(pictures);
        DProduct newProduct = productMapper.toDProduct(productDTO);
        DProduct product = productService.createProduct(newProduct);
        return ResponseEntity.ok(productMapper.toProductDTO(product));
    }

    private Function<MultipartFile, PictureDTO> mapMultipartFileToRestPicture() {
        return multipartFile -> {
            try {
                return new PictureDTO(multipartFile.getBytes(), multipartFile.getContentType());
            } catch (IOException ieo) {
                throw new AppException(ErrorCode.MUlT_FILE);
            }
        };
    }

    @DeleteMapping
    @CrossOrigin(origins = "http://localhost:4200")
    public ResponseEntity<ApiResponse<Void>> delete(@RequestBody UUID publicId) {
        ApiResponse<Void> apiResponse =new ApiResponse<>();
        if(publicId==null)
            apiResponse.setMessage("Delete category failed");
        productService.deleteProduct(publicId);
        apiResponse.setMessage("Delete category successful");
        return ResponseEntity.ok(apiResponse);

    }

}
