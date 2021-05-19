import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PartOneRoutingModule } from './part-one-routing.module';
import { PostComponent } from './post/post.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ErrorHandlingComponent } from './errors/error-handling/error-handling.component';
import { PostUsingServiceComponent } from './post-using-service/post-using-service.component';
import { CatchErrorComponent } from './errors/catch-error/catch-error.component';
import { HeadersComponent } from './headers/headers/headers.component';
import { ParamsComponent } from './params/params/params.component';
import { HeadersTwoComponent } from './headers/headers-two/headers-two.component';
import { ParamsTwoComponent } from './params/params-two/params-two.component';
import { ResponseComponent } from './responses/response/response.component';
import { AuthInterceptor } from '../interceptor/auth.interceptor';
import { LoggingInterceptor } from '../interceptor/logging-interceptor';


@NgModule({
  declarations: [PostComponent, ErrorHandlingComponent, PostUsingServiceComponent, CatchErrorComponent, HeadersComponent, ParamsComponent, HeadersTwoComponent, ParamsTwoComponent, ResponseComponent],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    PartOneRoutingModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS, 
      useClass: AuthInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS, 
      useClass: LoggingInterceptor,
      multi: true
    }
  ]
})
export class PartOneModule { }
