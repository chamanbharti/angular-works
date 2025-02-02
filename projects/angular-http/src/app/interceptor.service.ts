import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService {

  constructor(private http: HttpClient) { }

  fetch(){
    return this.http.get('https://jsonplaceholder.typicode.com/todos/1');
  }
}
