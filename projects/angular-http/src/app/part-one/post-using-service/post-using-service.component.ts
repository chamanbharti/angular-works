import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Post } from '../post/post.model';
import { PostsService } from '../post/posts.service';

@Component({
  selector: 'app-post-using-service',
  templateUrl: './post-using-service.component.html',
  styleUrls: ['./post-using-service.component.css']
})
export class PostUsingServiceComponent implements OnInit {

  // with service
  loadedPosts: Post[] = [];
  isFetching = false;
  constructor(
    private http: HttpClient,
    private postsService: PostsService) {}

  ngOnInit(): void {
    this.fetchPost();
  }
  onFetchPosts(): void {
    this.fetchPost();
  }
  private fetchPost(): void{
    this.isFetching = true;
    this.postsService.fetchPosts().subscribe(
      posts => {
        this.isFetching = false;
        this.loadedPosts = posts;
        console.log('loadedPosts:', this.loadedPosts);
      }
    );
  }
 onCreatePost(postData: Post): void{
    // Send Http request
    this.postsService.createAndStorePost(postData.title, postData.content).subscribe(
      posts => {
        this.loadedPosts = posts;
        this.fetchPost();
      }
    );
  }

  onClearPost(id: number): void {
    this.postsService.onClearPost(id).subscribe(
     () => {
      this.fetchPost();
     }
    );
  }

  onClearPosts(): void {
    this.postsService.onClearPosts().subscribe(
     () => {
       this.loadedPosts = [];
     }
    );
  }

}
