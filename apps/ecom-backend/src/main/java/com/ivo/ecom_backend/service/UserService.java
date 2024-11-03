package com.ivo.ecom_backend.service;

import com.ivo.ecom_backend.Enums.Role;
import com.ivo.ecom_backend.dto.request.UserCreateRequest;
import com.ivo.ecom_backend.dto.request.UserUpdateRequest;
import com.ivo.ecom_backend.dto.response.UserResponse;
import com.ivo.ecom_backend.entity.User;
import com.ivo.ecom_backend.exception.AppException;
import com.ivo.ecom_backend.exception.ErrorCode;
import com.ivo.ecom_backend.mapper.UserMapper;
import com.ivo.ecom_backend.repository.UserRepository;
import jakarta.transaction.Transactional;
import lombok.AccessLevel;
import lombok.RequiredArgsConstructor;
import lombok.experimental.FieldDefaults;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PostAuthorize;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import java.util.HashSet;
import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
@Slf4j
@FieldDefaults(level= AccessLevel.PRIVATE,makeFinal = true)
public class  UserService {
    @Autowired
    UserRepository userRepository;
    @Autowired
    UserMapper mapper;
    PasswordEncoder passwordEncoder;
    @Transactional
    public UserResponse createUser(UserCreateRequest request){
        if(userRepository.existsByEmail(request.getEmail())){
            throw new AppException(ErrorCode.USER_EXISTED);
        }
        User user=mapper.toUser(request);

        user.setPassword(passwordEncoder.encode(request.getPassword()));

        HashSet<String> roles = new HashSet<>();
        roles.add(Role.USER.name());

        user.setRoles(roles);

        return mapper.toUserResponse(userRepository.save(user));
    }
    @Transactional
    @PreAuthorize("hasRole('ADMIN')")
    public List<UserResponse> getAllUsers(){
        return mapper.toListUser(userRepository.findAll());
    }

    public UserResponse updateUser(String userId, UserUpdateRequest request) {
        User user = userRepository.findById(userId)
                .orElseThrow(() -> new AppException(ErrorCode.USER_NOT_EXISTED));

        mapper.updateUser(user, request);

        return mapper.toUserResponse(userRepository.save(user));
    }
    public String test(String email) {
        User user=userRepository.findUserByEmail(email);
        if(user==null){
            return "User not found";
        }else{
            if(user.getFirstname()==null){
                return "Firstname not found";
            }else{
                return user.getFirstname();
            }
        }
    }


    @Transactional
    public UserResponse getMyInfo(){
        var context = SecurityContextHolder.getContext();
        String email = context.getAuthentication().getName();

        User user = userRepository.findUsersByEmail(email).orElseThrow(
                () -> new AppException(ErrorCode.USER_NOT_EXISTED));


        return mapper.toUserResponse(user);
    }

    @PostAuthorize("returnObject.email == authentication.email")
    public UserResponse getUser(String id){
        log.info("In method get user by Id");
        return mapper.toUserResponse(userRepository.findById(id)
                .orElseThrow(() -> new AppException(ErrorCode.USER_NOT_EXISTED)));
    }


    public void deleteUser(String userId) {
        userRepository.deleteById(userId);
    }



}