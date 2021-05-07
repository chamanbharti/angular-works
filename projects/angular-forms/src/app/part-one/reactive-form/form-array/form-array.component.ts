import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-form-array',
  templateUrl: './form-array.component.html',
  styleUrls: ['./form-array.component.css']
})
export class FormArrayComponent implements OnInit {

  genders = ['male', 'female'];
  forbiddenUsernames = ['Ryaan', 'Arhaan'];
  signupForm: FormGroup;
  constructor() { }

  ngOnInit(): void {
    // ne
    // this.signupForm = new FormGroup({
    //   username: new FormControl(null, Validators.required),
    //   email: new FormControl(null, [Validators.required, Validators.email]),
    //   gender: new FormControl('male')
    // });

    // // form group
    // this.signupForm = new FormGroup({
    //   userData: new FormGroup({
    //     username: new FormControl(null, Validators.required),
    //     email: new FormControl(null, [Validators.required, Validators.email])
    //   }),
    //   gender: new FormControl('male')

    // });

      //  // form array
      //  this.signupForm = new FormGroup({
      //   userData: new FormGroup({
      //     username: new FormControl(null, Validators.required),
      //     email: new FormControl(null, [Validators.required, Validators.email])
      //   }),
      //   gender: new FormControl('male'),
      //   hobbies: new FormArray([])

      // });

        // custom validator
        this.signupForm = new FormGroup({
          userData: new FormGroup({
            username: new FormControl(null, [Validators.required, this.forbiddenNames.bind(this)]),
            email: new FormControl(null, [Validators.required, Validators.email], this.forbiddenEmails)
          }),
          gender: new FormControl('male'),
          hobbies: new FormArray([])

        });
        // for value changes

        // this.signupForm.valueChanges.subscribe(
        //   // (value) => {
        //   //   console.log(value);
        //   // }
        //   (value) => console.log(value)
        // );
        // for status changes
        this.signupForm.statusChanges.subscribe(
          (status) => console.log(status)
        );
        // for set value
        this.signupForm.setValue({
          userData: {
            username: 'Chaman Bharti',
            email: 'thechamana.bharti@gmail.com'
          },
          gender: 'male',
          hobbies: []
        });
        // for patch value
        this.signupForm.patchValue({
          userData: {
            username: 'Roshan Bharti'
          }
        });
  }
  onSubmit(): void {
    console.log(this.signupForm);
    this.signupForm.reset();
  }
 onAddHobby(): void{
   const control = new FormControl(null, Validators.required);
   (<FormArray>this.signupForm.get('hobbies')).push(control);
 }
forbiddenNames(control: FormControl): {[s: string]: boolean}{
  if (this.forbiddenUsernames.indexOf(control.value) !== -1){
    return {nameIsForbidden: true};
  }
  // return {nameIsForbidden: false};
  return null;
}

// custom validators
forbiddenEmails(control: FormControl): Promise<any> | Observable<any> {
  const promise = new Promise<any> ((resolve, reject) => {
    setTimeout( () => {
      if (control.value === 'test@test.com') {
        resolve({emailIsForbidden: true});
      } else {
        resolve(null);
      }
    }, 1500);
  });
  return promise;
 }
}
