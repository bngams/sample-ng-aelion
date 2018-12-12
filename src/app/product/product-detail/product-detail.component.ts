import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  product: Product;

  constructor(private route: ActivatedRoute, private productService: ProductService) { }

  ngOnInit() {
    // snapshot
    const id: number = this.route.snapshot.params.id;
    this.loadProduct(id);
    // observable
    // this.route.paramMap.subscribe((params) => {
    //   console.log(params.get('id'));
    //   loadProduct(params.get('id'));
    // });
  }

  loadProduct(id: number) {
    this.productService.getProduct(id).subscribe((product) => {
      this.product = product;
    });
  }

}
