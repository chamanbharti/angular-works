import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-radio-button',
  templateUrl: './radio-button.component.html',
  styleUrls: ['./radio-button.component.css']
})
export class RadioButtonComponent implements OnInit {

  suggestedName: string;
  usernameInput = 'Chaman Bharti';
  emailInput = 'thechaman.bharti@gmail.com';
  defaultQuestion = 'teacher';
  answer = '';
  genders = ['male', 'female'];
  @ViewChild('formData') signupForm: NgForm;
  constructor() { }

  ngOnInit(): void {
  }

  suggestUserName(): void{
    this.suggestedName = 'Superuser';
  }

  onSubmit(): void{
    console.log(this.signupForm);
  }

}
