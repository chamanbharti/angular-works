import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpEventType
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    /*
    console.log('Request is on its way')
    return next.handle(request);
    */

    /*
   // Manipulating Request Objects
    console.log('Request is on its way');
    console.log(request.url);
    const modifiedRequest = request.clone({
      headers: request.headers.append('Auth','xyz')
    });
    return next.handle(modifiedRequest);
    */

    /*
    // Response Interceptors
    console.log('Request is on its way');
    console.log(request.url);
    const modifiedRequest = request.clone({
      headers: request.headers.append('Auth','xyz')
    });
    return next.handle(modifiedRequest)
    .pipe(
      tap(event => {
        if(event.type == HttpEventType.Response) {
          console.log('Response arrived, boday data');
          console.log(event.body);
        }
      })
    );
    */

      // Multiple Interceptors
    const modifiedRequest = request.clone({
      headers: request.headers.append('Auth','xyz')
    });
    return next.handle(modifiedRequest);
    
  }
}
