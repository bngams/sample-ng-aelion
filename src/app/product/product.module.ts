import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductFormComponent } from './product-form/product-form.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { MaterialModule } from '../material.module';

@NgModule({
  declarations: [
    ProductFormComponent,
    ProductListComponent,
    ProductCardComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    ProductFormComponent
  ]
})
export class ProductModule { }
