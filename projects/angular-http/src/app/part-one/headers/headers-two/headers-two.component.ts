import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-headers-two',
  templateUrl: './headers-two.component.html',
  styleUrls: ['./headers-two.component.css']
})
export class HeadersTwoComponent implements OnInit {

  todos: any;
  private url = 'https://jsonplaceholder.typicode.com/todos';
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getData();
  }

  /*
   HttpClient Headers
   * We can send Headers with our http calls
   * HttpHeaders are immutable-the can not be modified
   * some of the examplea of various http headers are
     * Authorization
     * Content-type

    * We can add Headers to
      * POST
      * GET
      * DELETE
      * PUT

      * Extremely important and useful concept specially when working with RESTFUL APIs

    * We define the headers using httpheaders

    * HttpHeader consists of below 7 methods
      * Append
      * Has
      * Get
      * Keys
      * getAll
      * Set
      * delete
  */

/*
 getData(){
   const httpHeaders = new HttpHeaders({
     'content-type': 'application/json',
     'Authorization': 'chamanbharti'
   });

   this.http.get(this.url, {headers: httpHeaders})
   .subscribe( response => {
     console.log(response);
     this.todos = response;
   });
 }
 */

/*
getData(){
  let httpHeaders = new HttpHeaders({
    'content-type': 'application/json',
    'Authorization': 'chamanbharti'
  });

  // Headers are immutable
  // custom headers
  httpHeaders = httpHeaders.set('chaman-bharti', '1129');
  this.http.get(this.url, {headers: httpHeaders})
  .subscribe( response => {
    console.log(response);
    this.todos = response;
  });
}
*/


getData(): void {
  let httpHeaders = new HttpHeaders({
    'content-type': 'application/json',
    'Authorization': 'chamanbharti',
    'timeOutSeconds': '3000'
  });

  // Headers are immutable
  // custom headers
  httpHeaders = httpHeaders.set('chaman-bharti', '1129');
  let time = httpHeaders.get('timeOutSeconds');
  if(time === '3000'){
    // at the api - we can check if  Authorization is empty - redirect user to login screen
    // some custom logic
    httpHeaders = httpHeaders.set('Authorization','test');
  }
  this.http.get(this.url, {headers: httpHeaders})
  .subscribe( response => {
    console.log(response);
    this.todos = response;
  });
}


}
