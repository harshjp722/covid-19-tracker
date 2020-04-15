import { Directive, ElementRef, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[appBoxWidth]'
})
export class BoxWidthDirective {

  constructor(
    public el: ElementRef,
    private renderer: Renderer2
  ) { }

  @HostListener('load', ['$event']) onLoad(event) {
    this.setBoxWidth(this.el.nativeElement.parentElement.offsetWidth);
  }

  @HostListener('window:resize', ['$event']) onResize(event) {
    this.setBoxWidth(this.el.nativeElement.parentElement.offsetWidth);
  }

  setBoxWidth(width: string) {
    this.renderer.setAttribute(this.el.nativeElement, 'width', width + 'px');
  }
}
