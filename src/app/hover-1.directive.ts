import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[Hover1]'
})
export class Hover1Directive {

  constructor(public el: ElementRef) { }

  @HostListener('mouseenter') onMouseEnter() {
    var topHeader = document.querySelector('.top-header');
    topHeader.classList.add('top-header-blue');
    var topHeader = document.querySelector('.inner-header');
    topHeader.classList.add('inner-header-blue');
    var topHeader = document.querySelector('#show');
    topHeader.classList.remove('hide');

  };
  @HostListener('mouseleave') onMouseLeave() {
    var topHeader = document.querySelector('.top-header');
    topHeader.classList.remove('top-header-blue');
    var topHeader = document.querySelector('.inner-header');
    topHeader.classList.remove('inner-header-blue');
    var topHeader = document.querySelector('#show');
    topHeader.classList.add('hide');

  };


}
