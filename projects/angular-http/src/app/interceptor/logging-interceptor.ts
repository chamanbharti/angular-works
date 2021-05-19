import { HttpEvent, HttpEventType, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { tap } from "rxjs/operators";

@Injectable()
export class LoggingInterceptor implements HttpInterceptor{

    intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>>{
        /*
        console.log(`inside logging interceptor clone:${request.clone}`);
        console.log(`inside logging interceptor url:${request.url}`);
        console.log(`inside logging interceptor headers:${request.headers.keys}`);
        console.log(`inside logging interceptor params:${request.params}`);
        console.log(`inside logging interceptor method:${request.method}`);
        console.log(`inside logging interceptor body:${request.body}`);
        let httpAuth = request.headers.get('Authorization');
        httpAuth = 'addingValueFromInterceptor'+httpAuth;
        request.headers.set('Authorization', httpAuth);
        console.log(httpAuth)
        return next.handle(request);
        */

        console.log(`Outgoing request`);
        console.log(request.url);
        console.log(request.headers);
        return next.handle(request)
        .pipe(
            tap(event => {
                if(event.type == HttpEventType.Response) {
                    console.log(`Incoming response`);
                    console.log(event.body); 
                }
            })
        );

    }
}