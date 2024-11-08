package com.ivo.ecom_backend.repository;

import com.ivo.ecom_backend.entity.Picture;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface ProductPictureRepository extends JpaRepository<Picture, Long> {

}