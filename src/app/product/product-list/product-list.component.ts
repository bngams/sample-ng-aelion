import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: Product[] = new Array();

  constructor(private productService: ProductService) { }

  // onReady
  ngOnInit() {
    this.loadProducts();
  }

  private loadProducts() {
    this.products = [
      { id: 1, name: 'Produit1', price: 10 },
      { id: 2, name: 'Produit2', price: 20 }
    ];
    const observable = this.productService.fetchProducts();
    observable.subscribe((data) => {
      this.products = this.products.concat(data);
    });
  }

}
