import { Directive, ElementRef, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  
//  @HostBinding('class.open') isOpen = false;

//   @HostListener('click') toggleOpen(){
//     this.isOpen = !this.isOpen;
//   }
//   constructor() { }

/**
 Closing the Dropdown From Anywhere
If you want that a dropdown can also be closed by a click anywhere outside 
(which also means that a click on one dropdown closes any other one, btw.), 
replace the code of dropdown.directive.ts by this one (placing the listener not on the dropdown, but on the document):
 */

@HostBinding('class.open') isOpen = false;


@HostListener('document:click', ['$event']) toggleOpen(event: Event){
  this.isOpen = this.elementRef.nativeElement.contains(event.target) ? !this.isOpen : false;
}
constructor(private elementRef: ElementRef) { }
}
