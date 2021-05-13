import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CatchErrorComponent } from './errors/catch-error/catch-error.component';
import { ErrorHandlingComponent } from './errors/error-handling/error-handling.component';
import { PostComponent } from './post/post.component';

const routes: Routes = [
  {path: 'post', component: PostComponent},
  {path: 'post-with-error', component: ErrorHandlingComponent},
  {path: 'catch-error', component: CatchErrorComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PartOneRoutingModule { }
