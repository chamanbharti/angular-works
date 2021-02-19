import { Component, OnInit } from '@angular/core';
import { repos } from '../../core/models/repos';
import { GithubService } from '../../core/services/github.service';

@Component({
  selector: 'app-repo-list',
  templateUrl: './repo-list.component.html',
  styleUrls: ['./repo-list.component.css']
})
export class RepoListComponent implements OnInit {

  userName: string = 'angular';
  repos: repos[];
  loading: boolean = false;
  errorMessage;
  constructor(private githubService: GithubService) { }

  ngOnInit(): void {
  }
  public getRepos(){
    this.loading = true;
    this.errorMessage = '';
    this.githubService.getRepos(this.userName)
    .subscribe(
      (response) => {
        this.repos = response;
      },
      (error) => {
        console.log('inside onError()')
        this.errorMessage = error;
        this.loading = false;
      },
      () => {
        this.loading = false;
      }
    )
  }
}
