import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHover1]'
})
export class Hover1Directive {

  constructor(public el: ElementRef) { }

  @HostListener('mouseenter') onMouseEnter() {

  };
  @HostListener('mouseenter') onMouseLeave() {

  };


}
