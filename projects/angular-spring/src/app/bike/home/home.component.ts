import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { AuthService } from '../../shared/auth.service';
import { BikeService } from '../../shared/bike.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  models: string[] = [
    'Globo MTB 29 Full Suspension',
    'Globo Carbon Fiber Race Series',
    'Globo Time Trial Bladde'
  ];
  bikeForm: FormGroup;
  validMessage: string = '';
  constructor(private bikeService: BikeService,
    private authService: AuthService) {
      authService.handleAuthentication();
     }

  ngOnInit(): void {
    this.bikeForm = new FormGroup({
      name: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      phone: new FormControl('', Validators.required),
      model: new FormControl('', Validators.required),
      serialNumber: new FormControl('', Validators.required),
      purchasePrice: new FormControl('', Validators.required),
      purchaseDate: new FormControl('', Validators.required),
      contact: new FormControl(),
    });
  }
  submitRegistration(){
    debugger
    if(this.bikeForm.valid){
      this.validMessage = 'Your bike registration has been submitted. Thank you!';
      this.bikeService.createBikeRegistration(this.bikeForm.value).subscribe(
        data => {
          console.log('entered data:',data);
          this.bikeForm.reset();
          return true;
        },
        error => {
          return Observable.throw(error);
        }
      )
    }else{
      this.validMessage = 'Please fill out the form befor submitting!';
    }
  }

}
