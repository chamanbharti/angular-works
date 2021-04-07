import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  user = {
    username: '',
    userId: ''
  };
  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.authService.userInfo.subscribe( value => {
      if(value){
        this.user.userId = value.userid;
        this.user.username = value.username;
      }
    })
  }

}
