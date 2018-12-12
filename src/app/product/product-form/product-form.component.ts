import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css'],
  providers: [ProductService]
})
export class ProductFormComponent implements OnInit {

  @Output()
  out = new EventEmitter<Product>();

  product: Product = {
    id: null,
    name: '',
    price: null
  };

  constructor(private productService: ProductService) { }

  ngOnInit() {
  }

  submit() {
    // this.out.emit(new Product(this.product.id,
    //   this.product.name,
    //   this.product.price)
    // ); // clone before
    this.out.emit(Object.assign({}, this.product));
  }

}
