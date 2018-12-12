import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';
import { CartService } from '../cart.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: Product[] = new Array();
  productList: Product[] = new Array();
  productObservable: Subscription;

  constructor(private productService: ProductService, private cartService: CartService) { }

  // onReady
  ngOnInit() {
    this.loadProducts();
    this.initCart();
  }

  private loadProducts() {
    this.products = [
      { id: 1, name: 'Produit1', price: 10 },
      { id: 2, name: 'Produit2', price: 20 }
    ];
    // complete observer
    // Create observer object
    const myObserver = {
      next: data => this.products = this.products.concat(data),
      error: err => console.error('Observer got an error: ' + err),
      complete: () => console.log('Observer got a complete notification'),
    };
    // call http
    const observable = this.productService.fetchProducts();
    observable.subscribe(myObserver);
  }

  initCart() {
    this.productObservable = this.cartService.getSubjectProduct().subscribe(data => {
      console.log('received product', data.p);
      this.productList.push(data.p);
    });
  }

}
