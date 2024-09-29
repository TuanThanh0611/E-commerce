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
  constructor(private productServide:ProductService){}
  ngOnInit(): void {
      
  }
  listProducts(){
    this.productServide.getProductList().subscribe(
      data=>{
        this.products=data;
      }
    )
  }

}
