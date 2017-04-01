import { HostListener, Renderer, ElementRef, Directive, OnInit, Input } from '@angular/core';

@Directive({
  selector: '[appBsButton]'
})
export class BsButtonDirective implements OnInit{

  @Input() appBsButton;
  @Input() mouseDownClass; // 額外的 @Input

  constructor(private el: ElementRef, private renderer: Renderer) { }

  ngOnInit() {
    // const button = (this.el.nativeElement as HTMLElement);
    // button.classList.add('btn');
    // button.classList.add('btn-primary');

    console.log('el', this.el);
    console.log('appBsButton', this.appBsButton);

    this.appBsButton = this.appBsButton || 'primary';
    this.mouseDownClass = this.mouseDownClass || 'danger';

    this.renderer.setElementClass(this.el.nativeElement, 'btn', true);
    this.renderer.setElementClass(this.el.nativeElement, `btn-${this.appBsButton}`, true);
  }

  @HostListener('mousedown') onMouseDown() {

    console.log('mousedown');

    // remove original style
    this.renderer.setElementClass(this.el.nativeElement, `btn-${this.appBsButton}`, false);

    // add mousedown style
    this.renderer.setElementClass(this.el.nativeElement, `btn-${this.mouseDownClass}`, true);
  }

  @HostListener('mouseup') onMouseUp() {

    console.log('mouseup');

    // remove mousedown style
    this.renderer.setElementClass(this.el.nativeElement, `btn-${this.mouseDownClass}`, false);

    // add original style
    this.renderer.setElementClass(this.el.nativeElement, `btn-${this.appBsButton}`, true);
  }
}
