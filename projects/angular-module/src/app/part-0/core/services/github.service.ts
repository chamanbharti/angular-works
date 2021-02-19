import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { repos } from '../models/repos';

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  baseURL:string="https://api.github.com/";

   constructor(private http:HttpClient){
   }
   getRepos(userName: string): Observable<repos[]>{
    return this.http.get<repos[]>(this.baseURL+'users/'+userName+"/repos");
   }
}
