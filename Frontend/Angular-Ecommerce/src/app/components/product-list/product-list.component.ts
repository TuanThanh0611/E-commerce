import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Product } from '../../common/product';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent implements OnInit{
  products:Product[]=[];
  constructor(private productService:ProductService){}
  ngOnInit(): void {
    this.listProducts(); //lack of this code is nguồn cơn tai hại(nhìn mòn mắt 3 tiếng đồng hồ)
      
  }
  listProducts(){
    this.productService.getProductList().subscribe(
      data=>{
        this.products=data;
      }
    )
  }

}
