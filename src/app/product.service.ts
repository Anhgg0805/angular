import { Injectable } from "@angular/core";
import { data } from "./MockData";
import { Product } from "./Product";
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable()
export class ProductService {
  api='https://5e79b9aa17314d00161334fd.mockapi.io/product';
  products = data;
  constructor(
    private http: HttpClient
  ) {}

  getProducts():Observable <Product[]> {
    return this.http.get<Product[]>(this.api);
    // return this.products;
  }
  getProduct(id):Observable <Product>{
    // return this.products.find(product => product.id == id);
    return this.http.get<Product>(`${this.api}/${id}`);
  }
  removeProduct(id){
    return this.products.filter(product => product.id !== id);
  }
  addProduct(product){
    let newObj = { id: 11, ...product };
    this.products.push(newObj);
  }
  editProduct(product){
    return this.products.map( item => item.id === product.id ? product : item);
  }
}
