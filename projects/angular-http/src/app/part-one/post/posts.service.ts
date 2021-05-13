import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Post } from './post.model';

@Injectable({providedIn: 'root'})
export class PostsService {
  private baseUrl = 'http://localhost:8080/api/v1';
  private headers = new HttpHeaders({'Content-Type': 'application/json'});
  private options = {headers: this.headers};

    // Error Handling with Subjects
    error = new Subject<string>();

  constructor(private http: HttpClient) {}

  createAndStorePost(title: string, content: string): any {
   // const postData: Post = { title: title, content: content };
    const postData: Post = { title, content };
    return this.http.post<{ name: string }>(this.baseUrl + '/post', postData);
  }

    fetchPosts(): any{
      return this.http
        .get<{ [key: string]: Post }>(
          this.baseUrl + '/posts'
        )
        .pipe(
          map(responseData => {
            const postsArray: Post[] = [];
            for (const key in responseData) {
              if (responseData.hasOwnProperty(key)) {
                // postsArray.push({ ...responseData[key], id: key });
                postsArray.push({ ...responseData[key]});
              }
            }
            return postsArray;
          }),
          // handle catch error
          catchError(errorRes => {
            // send to analytics server
           return throwError(errorRes);
          })
        );
    }
    onClearPost(id: number): any {
      // Send Http request
      return this.http.delete(this.baseUrl + '/post/' + id);
    }

    onClearPosts(): any {
      // Send Http request
      return this.http.delete(this.baseUrl + '/posts');
    }
}
