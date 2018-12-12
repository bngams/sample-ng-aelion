import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from './product';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ApiService } from '../shared/api.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  randomNum: number;

  constructor(private http: HttpClient, private apiService: ApiService) {
    this.randomNum = Math.random();
  }

  fetchProducts(): Observable<Array<Product>> {
    // alternative to build route: environment.apiBaseUrl + '/product'
    return this.http.get<Array<Product>>(this.apiService.route('/product'));
  }

  getProduct(id: number): Observable<Product> {
    return this.http.get<Product>(this.apiService.route('/product/' + id));
  }
}
