package com.ivo.ecom_backend.service;

import com.ivo.ecom_backend.entity.User;
import com.ivo.ecom_backend.repository.UserRepository;
import com.nimbusds.jose.JOSEException;
import com.nimbusds.jose.JWSObject;
import com.nimbusds.jwt.JWTClaimsSet;
import org.springframework.security.oauth2.jwt.Jwt;
import org.springframework.stereotype.Component;

import java.text.ParseException;
import java.time.Instant;
import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.Set;
@Component
public class UserSynchronizer {

    private final UserRepository userRepository;
    JwtUtils jwtUtils;

    private static final String UPDATE_AT_KEY = "last_modified";

    public UserSynchronizer(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    // Phương thức đồng bộ không còn phụ thuộc vào IDP hay Kinde
    public void syncWithDatabase(String jwtToken, boolean forceResync) {
        try {
            // Phân tích token JWT từ chuỗi
            JWSObject jwsObject = JWSObject.parse(jwtToken);
            JWTClaimsSet claimsSet = JWTClaimsSet.parse(jwsObject.getPayload().toJSONObject());

            // Lấy các "claims" từ token
            Map<String, Object> claims = claimsSet.getClaims();

            // Trích xuất vai trò từ token
            Set<String> rolesFromToken = jwtUtils.extractRolesFromToken(jwtToken);

            // Tạo đối tượng người dùng từ các "claims" và vai trò
            User user = User.fromTokenClaims(claims, rolesFromToken);
            Optional<User> existingUser = userRepository.findUsersByEmail(user.getEmail());

            if (existingUser.isPresent()) {
                if (claims.containsKey(UPDATE_AT_KEY)) {
                    Instant lastModifiedDate = existingUser.get().getLastModifiedDate();
                    Instant tokenModifiedDate = Instant.ofEpochSecond((Integer) claims.get(UPDATE_AT_KEY));

                    // Kiểm tra xem dữ liệu trong token có mới hơn hay không
                    if (tokenModifiedDate.isAfter(lastModifiedDate) || forceResync) {
                        updateUser(user, existingUser.get());
                    }
                }
            } else {
                userRepository.save(user);
            }
        } catch (ParseException e) {
            throw new RuntimeException("Lỗi khi phân tích token JWT", e);
        }
    }
    private void updateUser(User user, User existingUser) {
        existingUser.updateFromUser(user);
        userRepository.save(existingUser);
    }

}