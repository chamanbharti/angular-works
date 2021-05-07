import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-two-way-binding',
  templateUrl: './two-way-binding.component.html',
  styleUrls: ['./two-way-binding.component.css']
})
export class TwoWayBindingComponent implements OnInit {

  suggestedName: string;
  usernameInput = 'Chaman Bharti';
  emailInput = 'thechaman.bharti@gmail.com';
  defaultQuestion = 'teacher';
  answer = '';
  @ViewChild('formData') signupForm: NgForm;
  constructor() { }

  ngOnInit(): void {
  }

  suggestUserName(): void{
    this.suggestedName = 'Superuser';
  }

  // onSubmit(form: ElementRef): void{
  //   console.log(form);
  // }

  // onSubmit(form: NgForm): void{
  //   console.log(form);
  // }

  onSubmit(): void{
    console.log(this.signupForm);
  }

}
