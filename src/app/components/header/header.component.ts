import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/login/auth.service';
import { CartService } from 'src/app/product/cart.service';
import { Product } from 'src/app/product/product';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  productList: Array<Product> = new Array();
  productObservable: Subscription;

  constructor(private authService: AuthService,
    private cartService: CartService) { }

  ngOnInit() {
  }

  isLoggedIn() {
    return this.authService.isLoggedIn;
  }

  initCart() {
  }

}
