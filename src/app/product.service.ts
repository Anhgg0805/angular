import { Injectable } from "@angular/core";
import { data } from "./MockData";
import { Product } from "./Product";

@Injectable()
export class ProductService {
  products = data;
  constructor() {}

  getProducts() {
    return this.products;
  }
  addProduct(product){
    let newObj = { id: 11, ...product };
    this.products.push(newObj);
  }
}
