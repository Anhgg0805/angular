import { Component, OnInit } from "@angular/core";
import { ProductService } from "../product.service";
import { Product } from "../product";
@Component({
  selector: "app-produce-list",
  templateUrl: "./produce-list.component.html",
  styleUrls: ["./produce-list.component.css"]
})
export class ProduceListComponent implements OnInit {
  selected: Product;
  products: Product[];
  constructor(private productService: ProductService) {}

  ngOnInit() {
    //  console.log(this.id);
    this.getProducts();
    console.log(this.productService.getProducts());
  }

  changeStatus() {
    console.log("click");
  }
  detailProduct(product) {
    this.selected = product;
    console.log(this.selected);
  }
  removeItem(id) {
    this.products = this.products.filter(x => x.id !== id);
  }
  getProducts() {
    this.products = this.productService.getProducts();
  }
}
