package com.ivo.ecom_backend.entity;

import jakarta.persistence.*;
import lombok.*;
import lombok.experimental.FieldDefaults;

import java.time.Instant;
import java.util.List;
import java.util.Map;
import java.util.Set;
import java.util.UUID;

@Builder
@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@FieldDefaults(level= AccessLevel.PRIVATE)
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    String id;
    String lastname;
    String firstname;
    String email;
    String phoneNumber;
    String password;
    String imageUrl;
    Instant createdDate;
    Instant lastModifiedDate;
    @ElementCollection(fetch = FetchType.EAGER)
    @CollectionTable(name = "user_roles", joinColumns = @JoinColumn(name = "user_id"))
    @Column(name = "role")
    private Set<String> roles;
    Long dbId;
    @OneToMany(mappedBy = "user", cascade = CascadeType.ALL, orphanRemoval = true, fetch = FetchType.EAGER)
    private Set<UserAddress> userAddresses;


    public static User fromTokenClaims(Map<String, Object> claims, Set<String> rolesFromToken) {
        User user = new User();

        user.setId((String) claims.get("id"));
        user.setLastname((String) claims.get("lastname"));
        user.setFirstname((String) claims.get("firstname"));
        user.setEmail((String) claims.get("email"));

        // Trích xuất createdDate từ claims và chuyển đổi từ epoch giây sang Instant
        Object createdDateObj = claims.get("createdDate");
        if (createdDateObj != null && createdDateObj instanceof Long) {
            user.setCreatedDate(Instant.ofEpochSecond((Long) createdDateObj));
        }

        // Gán vai trò từ danh sách rolesFromToken
        user.setRoles(rolesFromToken);

        return user;
    }


    public void updateFromUser(User user) {
        this.email = user.email;
        this.imageUrl = user.imageUrl;
        this.firstname = user.firstname;
        this.lastname = user.lastname;
    }
}
