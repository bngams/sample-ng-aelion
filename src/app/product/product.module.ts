import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductDashboardComponent } from './product-dashboard/product-dashboard.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { SharedModule } from '../shared/shared.module';
import { ProductFormComponent } from './product-form/product-form.component';
import { PromoDirective } from './directives/promo.directive';
import { ProductService } from './product.service';
import { ProductRoutingModule } from './product-routing.module';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { CartService } from './cart.service';

@NgModule({
  declarations: [
    ProductDashboardComponent,
    ProductFormComponent,
    ProductListComponent,
    ProductCardComponent,
    ProductDetailComponent,
    PromoDirective
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    SharedModule
  ],
  exports: [
    ProductDashboardComponent
  ],
  providers: [
    ProductService,
    CartService
  ]
})
export class ProductModule { }
