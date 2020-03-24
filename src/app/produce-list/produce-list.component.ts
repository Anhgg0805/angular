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
  }

  changeStatus() {
    console.log("click");
  }
  detailProduct(product) {
    this.selected = product;
    console.log(this.selected);
  }
  
  getProducts() {
    // this.products = this.productService.getProducts();
    this.productService.getProducts().subscribe(data => {
      // console.log(data);
      this.products=data;
    })
  }
}
