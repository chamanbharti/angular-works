import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoComponent } from './todo/todo.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { httpInterceptorProviders } from './interceptor';
import { HttpHeadersComponent } from './http-headers/http-headers.component';
import { HttpParamsComponent } from './http-params/http-params.component';
import { HttpGetComponent } from './http-methods/http-get/http-get.component';
import { HttpPostComponent } from './http-methods/http-post/http-post.component';
import { HttpPutComponent } from './http-methods/http-put/http-put.component';
import { HttpPatchComponent } from './http-methods/http-patch/http-patch.component';
import { HttpDeleteComponent } from './http-methods/http-delete/http-delete.component';
import { HttpHeadComponent } from './http-methods/http-head/http-head.component';
import { HttpJsonpComponent } from './http-methods/http-jsonp/http-jsonp.component';
import { HttpOptionsComponent } from './http-methods/http-options/http-options.component';
import { LoggingInterceptor } from './interceptor/logging-interceptor';
import { TokenInterceptor } from './interceptor/token-interceptor';


@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    HttpHeadersComponent,
    HttpParamsComponent,
    HttpGetComponent,
    HttpPostComponent,
    HttpPutComponent,
    HttpPatchComponent,
    HttpDeleteComponent,
    HttpHeadComponent,
    HttpJsonpComponent,
    HttpOptionsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    // httpInterceptorProviders
    {provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
