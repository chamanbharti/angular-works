import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PartOneRoutingModule } from './part-one-routing.module';
import { PostComponent } from './post/post.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ErrorHandlingComponent } from './errors/error-handling/error-handling.component';
import { PostUsingServiceComponent } from './post-using-service/post-using-service.component';
import { CatchErrorComponent } from './errors/catch-error/catch-error.component';


@NgModule({
  declarations: [PostComponent, ErrorHandlingComponent, PostUsingServiceComponent, CatchErrorComponent],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    PartOneRoutingModule
  ]
})
export class PartOneModule { }
