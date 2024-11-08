package com.ivo.ecom_backend.entity;

import com.ivo.ecom_backend.Enums.OrderStatus;
import jakarta.persistence.*;
import lombok.*;
import lombok.experimental.FieldDefaults;

import java.util.HashSet;
import java.util.Set;

@Builder
@Data
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "orders")
@Entity
@FieldDefaults(level= AccessLevel.PRIVATE)
public class Order {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    String id;
    OrderStatus orderStatus;
    @ElementCollection
    @CollectionTable(name = "order_ordered_products", joinColumns = @JoinColumn(name = "order_id"))
    Set<OrderedProduct> orderedProducts = new HashSet<>();

}
