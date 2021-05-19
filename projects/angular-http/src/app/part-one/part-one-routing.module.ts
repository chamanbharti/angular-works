import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CatchErrorComponent } from './errors/catch-error/catch-error.component';
import { ErrorHandlingComponent } from './errors/error-handling/error-handling.component';
import { HeadersComponent } from './headers/headers/headers.component';
import { HeadersTwoComponent } from './headers/headers-two/headers-two.component';
import { PostComponent } from './post/post.component';
import { ParamsComponent } from './params/params/params.component';
import { ParamsTwoComponent } from './params/params-two/params-two.component';
import { ResponseComponent } from './responses/response/response.component';

const routes: Routes = [
  {path: 'post', component: PostComponent},
  {path: 'post-with-error', component: ErrorHandlingComponent},
  {path: 'catch-error', component: CatchErrorComponent},
  {path: 'headers1', component: HeadersComponent},
  {path: 'headers2', component: HeadersTwoComponent},
  {path: 'params1', component: ParamsComponent},
  {path: 'params2', component: ParamsTwoComponent},
  {path: 'response', component: ResponseComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PartOneRoutingModule { }
