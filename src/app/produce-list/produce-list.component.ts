import { Component, OnInit } from '@angular/core';
import { data } from '../MockData';
@Component({
  selector: 'app-produce-list',
  templateUrl: './produce-list.component.html',
  styleUrls: ['./produce-list.component.css']
})
export class ProduceListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
   console.log(this.selected);
  }
  changeStatus(){
    console.log('click')
  }
  detailProduct(product){
    this.selected = product;
    console.log(this.selected);
  }
}