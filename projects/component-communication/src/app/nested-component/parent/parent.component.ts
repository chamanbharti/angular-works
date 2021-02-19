import { Component, OnInit, ViewChild } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent //implements OnInit
{

  // constructor() { }

  // ngOnInit(): void {
  // }

  // counter = 5;
  // increment() {
  //   this.counter++;
  //   console.log(this.counter);
  // }
  // decrement() {
  //   this.counter--;
  //   console.log(this.counter);
  // }
  // countChangedHandler(count: number) {
  //   this.counter = count;
  //   console.log(count);
  // }

  // title = 'Parent interacts with child via local variable';

  title = 'Parent calls an @ViewChild()';

  @ViewChild(ChildComponent) child: ChildComponent;

  increment() {
    this.child.increment();
  }

  decrement() {
    this.child.decrement();
  }

}
