import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-http-params',
  templateUrl: './http-params.component.html',
  styleUrls: ['./http-params.component.css']
})
export class HttpParamsComponent implements OnInit {
  todos: any;
  private url = 'https://jsonplaceholder.typicode.com/todos';
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getData();
  }

  /*
   HttpClient HttpParams
   * We can send the Params with our HTTP calls
   * HttpParams are immutable-the can not be modified
   * Some of examples of various http params are
      * sending id for update or delete api calls

    * We can add Params to
      * POST
      * GET
      * DELETE
      * PUT

      * Extremely important and useful concept specially when working with RESTFUL APIs

    * We define the params using HttpParams

    * HttpParams consists of below 8 methods
      * Append
      * Has
      * Get
      * Keys
      * getAll
      * Set
      * delete
      * toString
  */
  getData(){
    debugger
     //using HttpParams
      // const httpParams = new HttpParams({
      //   fromObject: {
      //     userId: '2'
      //   }
      // });
   //https://jsonplaceholder.typicode.com/todos?userId=2

      // const httpParams = new HttpParams({
      //   fromObject: {
      //     userId: '2',
      //     id: '27'
      //   }
      // });
   //https://jsonplaceholder.typicode.com/todos?userId=2&id=27

  //  const httpParams = new HttpParams({
  //   fromObject: {
  //     userId: '1',
  //     id: '13',
  //     completed:'false'
  //   }
  // });

  // const httpParams = new HttpParams({
  //   fromString: `userId=${1}&id=${13}&completed=${false}`
  // });

   //https://jsonplaceholder.typicode.com/todos?userId=1&id=13&completed=false

    const httpParams = new HttpParams({
    fromObject: {
      userId: '1',
      id: ['13','14'],
      completed:'false'
    }
  });
  let httpHeaders = new HttpHeaders({
    'content-type': 'application/json',
    'Authorization': 'chamanbharti',
    'timeOutSeconds': '3000'
  });

  // Headers are immutable
  // custom headers
  httpHeaders = httpHeaders.set('chaman-bharti', '1129');

  // https://jsonplaceholder.typicode.com/todos?userId=1&id=13&id=14&completed=false
    this.http.get(this.url,{headers: httpHeaders,params: httpParams})
    .subscribe( response => {
      console.log(response);
      this.todos = response;
    });
  }
}
