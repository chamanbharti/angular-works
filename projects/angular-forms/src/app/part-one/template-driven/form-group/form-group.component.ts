import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form-group-control',
  templateUrl: './form-group.component.html',
  styleUrls: ['./form-group.component.css']
})
export class FormGroupComponent implements OnInit {

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
