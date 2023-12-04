import { Directive ,ElementRef, HostListener, Renderer2} from '@angular/core';

@Directive({
  selector: '[appOnHover]'
})
export class OnHoverDirective {

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  @HostListener('mouseenter') onMouseEnter() {
    this.changeColor('#FF0000FF'); // Change the color on hover
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.changeColor('#e81a77'); // Revert to the original color when not hovering
  }

  private changeColor(color: string | null) {
    this.renderer.setStyle(this.el.nativeElement, 'color', color);
  }

}
