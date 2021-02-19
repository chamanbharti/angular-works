import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-model-change',
  templateUrl: './model-change.component.html',
  styleUrls: ['./model-change.component.css']
})
export class ModelChangeComponent implements OnInit {

  email = '';
  firstName;
  constructor() { }

  ngOnInit(): void {
  }


firstNameChanged(arg) {
  console.log(
      "firstNameChanged  argument " + arg + "  component " + this.firstName
  );
}
  nameChanged(arg) {
    console.log("modelchanged " + arg);
  }
}
