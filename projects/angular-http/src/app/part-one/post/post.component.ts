import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { Post } from './post.model';
import { PostsService } from './posts.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit{
  // without using service
  private baseUrl = 'http://localhost:8080/api/v1';
  private headers = new HttpHeaders({'Content-Type': 'application/json'});
  private options = {headers: this.headers};
  loadedPosts: any = [];
  isFetching = false;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchPost();
  }


// onCreatePost(postData: { title: string; content: string }): void{
  onCreatePost(postData: Post): void{
    // Send Http request
    // console.log(postData);
    this.http.post(this.baseUrl + '/post', postData, this.options).subscribe(
      responseData => {
        console.log(responseData);
      }
    );
    this.fetchPost();
  }

  onFetchPosts(): void {
    // Send Http request
    this.fetchPost();

  }
  private fetchPost(): void{
    this.isFetching = true;
     /*
  // step I
    this.http.get(this.baseUrl + '/posts')
    .subscribe(
      response => {
        this.isFetching = false;
        console.log(response);
        this.loadedPosts = response;
        console.log('loadedPosts:', this.loadedPosts);
      }
    );
    */

    /*
    //  step II
    this.http.get(this.baseUrl + '/posts')
    .pipe(
      map(responseData => {
        const postsArray = [];
        for (const key in responseData) {
          if (responseData.hasOwnProperty(key)) {
            postsArray.push({...responseData[key], id: key});
          }
        }
        console.log('postsArray:', postsArray);
        return postsArray;
      })
    )
    .subscribe(
      response => {
        this.isFetching = false;
        console.log(response);
        this.loadedPosts = response;
        console.log('loadedPosts:', this.loadedPosts);
      }
    );
   */
    // step III
/*
 this.http.get(this.baseUrl + '/posts')
    .pipe(
      map((responseData: {[key: string]: Post}) => {
        const postsArray: Post[] = [];
        for (const key in responseData) {
          if (responseData.hasOwnProperty(key)) {
            postsArray.push({...responseData[key], id: key});
          }
        }
        console.log('postsArray:', postsArray);
        return postsArray;
      })
    )
    .subscribe(
      response => {
        this.isFetching = false;
        console.log(response);
        this.loadedPosts = response;
        console.log('loadedPosts:', this.loadedPosts);
      }
    );
   */
    // step IV
    this.http.get<{[key: string]: Post}>(this.baseUrl + '/posts')
    .pipe(
      map(responseData => {
        const postsArray: Post[] = [];
        for (const key in responseData) {
          if (responseData.hasOwnProperty(key)) {
            postsArray.push({...responseData[key], id: key});
          }
        }
        console.log('postsArray:', postsArray);
        return postsArray;
      })
    )
    .subscribe(
      response => {
        this.isFetching = false;
        console.log(response);
        this.loadedPosts = response;
        console.log('loadedPosts:', this.loadedPosts);
      }
    );

  }

  onClearPosts(): void {
    // Send Http request
  }
}
