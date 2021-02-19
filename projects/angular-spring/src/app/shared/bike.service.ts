import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class BikeService {
  private baseUrl: string = 'http://localhost:8080/api/v1/bikes/';
  constructor(private http: HttpClient) { }
  getBikes(){
    // return this.http.get(this.baseUrl);
    //using auth0
    let token = localStorage.getItem('access_token');
    return this.http.get(this.baseUrl,
      {headers: new HttpHeaders().set('Authorization','Bearer '+token)}
      );
  }
  getBike(id){
    // return this.http.get(this.baseUrl+id);
    //using auth0
    let token = localStorage.getItem('access_token');
    return this.http.get(this.baseUrl+id,
      {headers: new HttpHeaders().set('Authorization','Bearer '+token)}
      );
  }
  createBikeRegistration(bike){
    let body = JSON.stringify(bike);
    return this.http.post(this.baseUrl,body,httpOptions);
  }
}
