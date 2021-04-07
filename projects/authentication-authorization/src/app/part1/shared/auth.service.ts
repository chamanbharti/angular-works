import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userInfo: BehaviorSubject<any> = new BehaviorSubject(null);
  jwtHelper = new JwtHelperService();
  constructor(private http:HttpClient) {
    this.loadUserInfo();
  }

  loadUserInfo() {
    const userData = this.userInfo.getValue();
    if(!userData){
     const accessToken = localStorage.getItem('access_token');
     if(accessToken){
      const decryptedUser = this.jwtHelper.decodeToken(accessToken);
      console.log(decryptedUser);
      const data = {
        access_token: accessToken,
        refresh_token: localStorage.getItem('refresh_token'),
        username: decryptedUser.username,
        userid: decryptedUser.sub,
        tokenExpiration: decryptedUser.exp
      };
      this.userInfo.next(data);
     }
    }
  }

  userLogin(userPayload){
    console.log(userPayload);
    const accessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IlRlc3QiLCJzdWIiOjIsImlhdCI6MTYwNDMwOTc0OSwiZXhwIjoxNjA0MzA5ODA5fQ.jHez9kegJ7GT1AO5A2fQp6Dg9A6PBmeiDW1YPaCQoYs';
    const refreshToken = 'dummy';
    localStorage.setItem('access_token', accessToken);
    localStorage.setItem('refresh_token', refreshToken);

    const decryptedUser = this.jwtHelper.decodeToken(accessToken);
    console.log(decryptedUser);
    const data = {
      access_token: accessToken,
      refresh_token: refreshToken,
      username: decryptedUser.username,
      userid: decryptedUser.sub,
      tokenExpiration: decryptedUser.exp
    };
    this.userInfo.next(data);
  }

  login(data): Observable<any>{
    console.log('inside server')
    return this.http.post('http://localhost:8080/api/authenticate/login',data);
  }
}
