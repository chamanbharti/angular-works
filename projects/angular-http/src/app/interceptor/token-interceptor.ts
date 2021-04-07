import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import { catchError, finalize, retry } from "rxjs/operators";

@Injectable()
export class TokenInterceptor implements HttpInterceptor{

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<unknown>>{
debugger
       // add auth token
       // in production you would get the token value from an auth service
    //    const hardcodedToken = 'C5HA8M4N';
    //    const requestWithAuth = request.clone({
    //        setHeaders: {
    //            Authorization: `Bearer ${hardcodedToken}`
    //        }
    //    });

    //     console.log('requestWithAuth:'+requestWithAuth);
    //     return next.handle(requestWithAuth);

    const hardcodedToken = 'C5HA8M4N';
    const requestWithAuth = request.clone({
        setHeaders: {
            Authorization: `Bearer ${hardcodedToken}`
        }
    });

     console.log('requestWithAuth:'+requestWithAuth);
     return next.handle(requestWithAuth)
     .pipe(
        // retry on failure
        retry(2),
        // handle error
        catchError( (error: HttpErrorResponse) =>{
            alert(`HTTP Error: ${request.url}`);
            return throwError(error);
        }),

        // profiling
        finalize( () =>{
            const profilingMessage = `${request.method} ${request.urlWithParams}`;
            alert(`profilingMessage: ${profilingMessage}`);
        })

        );

    }
}