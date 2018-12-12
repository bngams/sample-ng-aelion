import { NgModule } from '@angular/core';
import { MaterialModule } from './material.module';
import { FormsModule } from '@angular/forms';
import { TruncPipe } from './pipes/trunc.pipe';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    TruncPipe
  ],
  imports: [
    MaterialModule,
    FormsModule,
    HttpClientModule
  ],
  exports: [
    MaterialModule,
    FormsModule,
    TruncPipe
  ]
})
export class SharedModule { }
