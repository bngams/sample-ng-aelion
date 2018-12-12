import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ProductListComponent } from '../product-list/product-list.component';

@Component({
  selector: 'app-product-dashboard',
  templateUrl: './product-dashboard.component.html',
  styleUrls: ['./product-dashboard.component.css']
})
export class ProductDashboardComponent implements OnInit {

  @ViewChild('myProductList')
  productList: ProductListComponent;

  constructor() { }

  ngOnInit() {
  }

  addProduct(product) {
    this.productList.products.push(product);
  }

}
