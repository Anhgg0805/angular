import { Component, OnInit } from '@angular/core';
import {Product} from '../Product';
import {ProductService} from '../product.service';
@Component({
  selector: 'app-product-manager',
  templateUrl: './product-manager.component.html',
  styleUrls: ['./product-manager.component.css']
})
export class ProductManagerComponent implements OnInit {
  products:Product[];
  product:Product;
  constructor(
    private productServie:ProductService
  ) { }

  ngOnInit() {
    this.getProducts();
  }
  getProducts(){
    this.products=this.productServie.getProducts();
  }
  removeItem(id) {
    this.products = this.products.filter(x => x.id !== id);
  }
}