import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  productSubject = new Subject<any>();

  constructor() { }

  addProduct(product: Product) {
    console.log('add product');
    this.productSubject.next({ p: product });
  }

  getSubjectProduct() {
    return this.productSubject.asObservable();
  }
}
