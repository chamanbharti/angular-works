import { Component, Input, OnChanges, OnInit, Output, SimpleChanges,EventEmitter } from '@angular/core';
import { Customer } from '../customer';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent //implements OnInit, OnChanges
{
  //  @Input() count: number;
  // //  @Input('myCount') count: number;
  // @Output() countChanged: EventEmitter<number> =   new EventEmitter();

  // constructor() { }

  // ngOnInit(): void {
  // }

  // ngOnChanges(changes: SimpleChanges) {

  //   for (let property in changes) {
  //       if (property === 'count') {
  //         console.log('Previous:', changes[property].previousValue);
  //         console.log('Current:', changes[property].currentValue);
  //         console.log('firstChange:', changes[property].firstChange);
  //       }
  //   }
  // }

  // set myCount(count: number){
  //   this.count = count;
  //   console.log(this.count);
  // }
  // get myCount(): number{
  //   return this.count;
  // }

//   increment() {
//     this.count++;
//     this.countChanged.emit(this.count);
//   }
//   decrement() {
//     this.count--;
//     this.countChanged.emit(this.count);
// }

count = 0;

     increment() {
        this.count++;
      }
    decrement() {
        this.count--;
    }
  }
