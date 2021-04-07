import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../shared/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginData = {
    username: '',
    password: ''
  }
  constructor( private authService: AuthService,
              private router: Router) { }

  ngOnInit(): void {
  }

  userLogin(){
    debugger
   // console.log(JSON.stringify(this.loginData));
    // this.authService.userLogin(this.loginData);
    // calling server
    if(this.loginData){
      this.authService.login(this.loginData).subscribe( result => {
        if(result.id){
         // console.log(result)
         // alert('user logged successfully');
          this.router.navigate(['/dashboard']);
        }else{
          console.log(result)
        }
      });
    }

  }

}
