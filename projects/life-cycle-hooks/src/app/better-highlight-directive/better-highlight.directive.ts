import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit{
 @Input() defaultColor: string = 'transparent';
 @Input('appBetterHighlight') highlightColor: string = 'blue';
 @HostBinding('style.backgroundColor') backgroundColor:string;

  constructor(
    private elementRef:ElementRef,
    private renderer: Renderer2) { }

  ngOnInit(){
    this.backgroundColor = this.defaultColor;
  //  this.renderer.setStyle(this.elementRef.nativeElement,'background-color','blue');
  }

  @HostListener('mouseenter') mouseover(eventData:Event){
    // this.renderer.setStyle(this.elementRef.nativeElement,'background-color','red');
    this.backgroundColor = this.highlightColor;
  }

  @HostListener('mouseleave') mouseleave(eventData:Event){
    // this.renderer.setStyle(this.elementRef.nativeElement,'background-color','transparent');
    this.backgroundColor = this.defaultColor;
  }

}
