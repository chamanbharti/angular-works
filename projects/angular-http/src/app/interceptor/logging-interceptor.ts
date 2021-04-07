import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class LoggingInterceptor implements HttpInterceptor{

    intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>>{
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

    }
}