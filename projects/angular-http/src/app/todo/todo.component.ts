import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { InterceptorService } from '../interceptor.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  todos: any;
  private url = 'https://jsonplaceholder.typicode.com/todos';
  constructor(private http: HttpClient, private interceptorService: InterceptorService) {

    // http.get(this.url)
    // .subscribe( response => {
    //   console.log(response);
    //   this.todos = response;
    // });

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

  const httpParams = new HttpParams({
    fromString: `userId=${1}&id=${13}&completed=${false}`
  });
   //https://jsonplaceholder.typicode.com/todos?userId=2&id=27&completed=true
    http.get(this.url,{params: httpParams})
    .subscribe( response => {
      console.log(response);
      this.todos = response;
    });

  }

  ngOnInit(): void {
  }

  createData(todo){
    let data = {
      title: todo.value
    };
    this.http.post(this.url,data)
    .subscribe( response => {
      console.log(response);
    });
  }

  fetch(){
    this.interceptorService.fetch()
    .subscribe( data => console.log(data));
  }
}
