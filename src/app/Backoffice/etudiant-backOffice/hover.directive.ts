import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHover]'
})
export class HoverDirective {

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  @HostListener('mouseenter') onMouseEnter() {
    this.changeColor('#FF5733'); // Change the color on hover
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.changeColor(null); // Revert to the original color when not hovering
  }

  private changeColor(color: string | null) {
    this.renderer.setStyle(this.el.nativeElement, 'color', color);
  }

}
