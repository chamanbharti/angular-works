import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GithubComponent } from './github/github.component';
import { RepoListComponent } from './repo-list/repo-list.component';

// const routes: Routes = [
//   {
//     path: 'github',  component: GithubComponent,
//       children :[
//                   { path: 'list', component: RepoListComponent},
//                 ]
//  }
// ];

@NgModule({
  imports: [
    // RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class GithubRoutingModule { }
