import { HttpClient, HttpEventType, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject, throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
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
   /* 
   const postData: Post = { title, content };
    return this.http.post<{ name: string }>(this.baseUrl + '/post', 
    postData,
    {
      observe: 'response'
    }
    );
    */

    // using response type
    const postData: Post = { title, content };
    return this.http.post<{ name: string }>(this.baseUrl + '/post', 
    postData,
    {
      observe: 'response'
    }
    );
  }

    fetchPosts(): any{
      let searchParams = new HttpParams();
      searchParams = searchParams.append('print', 'pretty');
      searchParams = searchParams.append('custom', 'key');
      return this.http
        .get<{ [key: string]: Post }>(
          this.baseUrl + '/posts',
          // using headers
          {
            headers: new HttpHeaders({'Custom-Header' : 'Hello'}),
            // http params single
           // params: new HttpParams().set('print', 'pretty')
            // http params multiple
            params: searchParams,

          }
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
      /*
    // Send Http request
      return this.http.delete(this.baseUrl + '/posts');
    */

      /*
      return this.http.delete(this.baseUrl + '/posts',
      {
        observe: 'events'
      })
      .pipe(
        tap(event => {
          console.log(event);
        })
      );
      */

    return this.http.delete(this.baseUrl + '/posts',
    {
      observe: 'events',
    })
    .pipe(
      tap(event => {
        console.log(event);
        if(event.type === HttpEventType.Sent) {
          console.log('event type:',event.type);
        }
        if(event.type === HttpEventType.Response) {
          console.log('event type:',event.body);
        }
      })
    );
    }
}
