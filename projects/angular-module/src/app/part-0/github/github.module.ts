import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GithubRoutingModule } from './github-routing.module';
import { RepoListComponent } from './repo-list/repo-list.component';
import { GithubComponent } from './github/github.component';
import { GithubService } from '../core/services/github.service';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [RepoListComponent, GithubComponent],
  imports: [
    CommonModule,
    FormsModule,
    GithubRoutingModule
  ],
  providers: [GithubService]
})
export class GithubModule {
  constructor(){
    console.log('Github module loaded')
  }
}
