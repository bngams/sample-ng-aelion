import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from './product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  randomNum: number;

  constructor(private http: HttpClient) {
    this.randomNum = Math.random();
  }

  fetchProducts(): Observable<Array<Product>> {
    return this.http.get<Array<Product>>('http://localhost:3004/product');
  }
}
