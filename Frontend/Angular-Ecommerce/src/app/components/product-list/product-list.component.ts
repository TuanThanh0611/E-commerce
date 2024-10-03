import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Product } from '../../common/product';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list-table.component .html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.listProducts(); // Gọi phương thức để lấy danh sách sản phẩm
  }

  listProducts() {
    this.productService.getProductList().subscribe(data => {
      this.products = data;

      // Ghi lại đường dẫn hình ảnh vào console
      this.products.forEach(product => {
        console.log(product.imageUrl); // Ghi đường dẫn hình ảnh
      });
    });
  }
}