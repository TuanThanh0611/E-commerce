import { inject, Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { BaseProduct, Product, ProductCategory } from './model/product.model';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import {
  createPaginationOption,
  Page,
  Pagination,
} from '../shared/model/request.model';
import {List} from "postcss/lib/list";

@Injectable({
  providedIn: 'root',
})
export class AdminProductService {
  http = inject(HttpClient);

  createCategory(category: ProductCategory): Observable<ProductCategory> {
    return this.http.post<ProductCategory>(
      `http://localhost:8080/api/category`,
      category
    );
  }

  deleteCategory(publicId: string): Observable<string> {
    return this.http.request<string>('delete', `http://localhost:8080/api/category`, {
      body: `"${publicId}"`,
      headers: { 'Content-Type': 'application/json' }
    });
  }

  findAllCategories(): Observable<any[]> {

    return this.http.get<any[]>(
        `http://localhost:8080/api/category`
    );
  }

  createProduct(product: BaseProduct): Observable<Product> {
    const formData = new FormData();

    // Thêm từng file vào FormData
    for (let i = 0; i < product.pictures.length; ++i) {
      formData.append('picture-' + i, product.pictures[i].file);
    }

    // Clone object và xóa các ảnh để không bao gồm trong JSON
    const clone = structuredClone(product);
    clone.pictures = [];
    formData.append('dto', JSON.stringify(clone));

    // Lấy token từ localStorage và tạo header Authorization
    const token = localStorage.getItem('authToken');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

    // Gửi yêu cầu HTTP POST với headers và formData
    return this.http.post<Product>(
        `http://localhost:8080/api/product`,
        formData,
        { headers }
    );
  }


  deleteProduct(publicId: string): Observable<string> {
    return this.http.request<string>('delete', `http://localhost:8080/api/category`, {
      body: `"${publicId}"`, // Bao publicId trong dấu ngoặc kép
      headers: { 'Content-Type': 'application/json' }
    });
  }

  findAllProducts(): Observable<any[]> {
    const token = localStorage.getItem('authToken');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.get<any[]>(`http://localhost:8080/api/product`,{ headers });
  }
}
