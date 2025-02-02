import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, ContentChild, DoCheck, ElementRef, Input, OnChanges, OnDestroy, OnInit, SimpleChanges, ViewChild, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class ServerElementComponent implements OnInit,
OnChanges,DoCheck,
AfterContentInit,
AfterContentChecked,
AfterViewInit,
AfterViewChecked,
OnDestroy {
 @Input('svrElement') element: {type:string,name:string,content:string};
 @Input() name: string; 
 @ViewChild('heading',{static:true}) header: ElementRef;
 @ContentChild('contentParagraph',{static:true}) paragraph: ElementRef;
 constructor() { 
    console.log('constructor called');
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges called');
    console.log(changes);
  }

  ngOnInit(): void {
    console.log('ngOnInit called');
    console.log('textContent:',this.header.nativeElement.textContent);
    console.log('Text content of textContent:',this.paragraph.nativeElement.textContent);
  }

 ngDoCheck(){
  console.log('ngDoCheck called');
 }
 ngAfterContentInit(){
  console.log('ngAfterContentInit called');
 }
 ngAfterContentChecked(){
  console.log('ngAfterContentChecked called');
}

ngAfterViewInit(){
  console.log('ngAfterViewInit called');
 }
 ngAfterViewChecked(){
  console.log('ngAfterViewChecked called');
}
ngOnDestroy(){
  console.log('ngOnDestroy called');
}

}
