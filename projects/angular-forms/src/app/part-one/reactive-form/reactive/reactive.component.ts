import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent implements OnInit {
  genders = ['male', 'female'];
  signupForm: FormGroup;
  constructor() { }

  ngOnInit(): void {
    // ne
    // this.signupForm = new FormGroup({
    //   username: new FormControl(null, Validators.required),
    //   email: new FormControl(null, [Validators.required, Validators.email]),
    //   gender: new FormControl('male')
    // });

    // form group
    this.signupForm = new FormGroup({
      userData: new FormGroup({
        username: new FormControl(null, Validators.required),
        email: new FormControl(null, [Validators.required, Validators.email])
      }),
      gender: new FormControl('male')

    });
  }
  onSubmit(): void {
    console.log(this.signupForm);
  }

}
