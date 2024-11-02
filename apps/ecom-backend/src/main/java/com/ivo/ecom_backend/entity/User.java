package com.ivo.ecom_backend.entity;

import jakarta.persistence.*;
import lombok.*;
import lombok.experimental.FieldDefaults;

import java.time.Instant;
import java.time.LocalDate;
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
    LocalDate dob;
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

    public String getId() {
        return id;
    }

    public String getLastname() {
        return lastname;
    }

    public String getFirstname() {
        return firstname;
    }

    public String getEmail() {
        return email;
    }

    public String getPhoneNumber() {
        return phoneNumber;
    }

    public String getPassword() {
        return password;
    }

    public String getImageUrl() {
        return imageUrl;
    }

    public Instant getCreatedDate() {
        return createdDate;
    }

    public Instant getLastModifiedDate() {
        return lastModifiedDate;
    }

    public Set<String> getRoles() {
        return roles;
    }

    public Long getDbId() {
        return dbId;
    }

    public Set<UserAddress> getUserAddresses() {
        return userAddresses;
    }

    public void setId(String id) {
        this.id = id;
    }

    public void setLastname(String lastname) {
        this.lastname = lastname;
    }

    public void setFirstname(String firstname) {
        this.firstname = firstname;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public void setImageUrl(String imageUrl) {
        this.imageUrl = imageUrl;
    }

    public void setCreatedDate(Instant createdDate) {
        this.createdDate = createdDate;
    }

    public void setLastModifiedDate(Instant lastModifiedDate) {
        this.lastModifiedDate = lastModifiedDate;
    }

    public void setRoles(Set<String> roles) {
        this.roles = roles;
    }

    public void setDbId(Long dbId) {
        this.dbId = dbId;
    }

    public void setUserAddresses(Set<UserAddress> userAddresses) {
        this.userAddresses = userAddresses;
    }

    public LocalDate getDob() {
        return dob;
    }

    public void setDob(LocalDate dob) {
        this.dob = dob;
    }


}
