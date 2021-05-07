import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-patch-value',
  templateUrl: './patch-value.component.html',
  styleUrls: ['./patch-value.component.css']
})
export class PatchValueComponent implements OnInit {

  @ViewChild('formData') signupForm: NgForm;
  suggestedName: string;
  defaultQuestion = 'teacher';
  answer = '';
  genders = ['male', 'female'];
  user = {
    username: '',
    email: '',
    secretQuestion: '',
    answer: '',
    gender: ''
  };
  submitted = false;
  constructor() { }

  ngOnInit(): void {
  }

  suggestUserName(): void{
    this.suggestedName = 'Superuser';
    // this is not best way
    /*
    this.signupForm.setValue({
      userData: {
        username: this.suggestedName,
        email: ''
      },
      secretQuestion: 'pet',
      questionAnswer: '',
      gender: 'male'
    });
    */

    // best way to handle
    this.signupForm.form.patchValue({
      userData: {
        username: this.suggestedName
      }
    });
  }

  onSubmit(): void{
    this.submitted = true;
    this.user.username = this.signupForm.value.userData.username;
    this.user.email = this.signupForm.value.userData.email;
    this.user.secretQuestion = this.signupForm.value.secret;
    this.user.answer = this.signupForm.value.questionAnswer;
    this.user.gender = this.signupForm.value.gender;

    // reset the form after submit
    this.signupForm.reset();
  }


}
