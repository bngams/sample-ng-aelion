import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appPromo]'
})
export class PromoDirective {

  constructor(el: ElementRef) {
    el.nativeElement.style.backgroundColor = 'yellow';
  }

}
