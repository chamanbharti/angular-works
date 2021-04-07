
import { Injectable } from "@angular/core";
import { HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";

@Injectable()
export class AuthHeaderInterceptor implements HttpInterceptor{
    intercept(request: HttpRequest<any>, next: HttpHandler){

        console.log('auth interceptor provider');
        // logic
        console.log('request url:'+request.url);
        const authToken = 'My Auth Token';
        const authReq = request.clone(
            {
                setHeaders: {Authorization: authToken}
            });
        return next.handle(request);
    }
}