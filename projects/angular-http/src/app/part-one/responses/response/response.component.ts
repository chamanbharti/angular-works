import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Post } from '../../post/post.model';
import { PostsService } from '../../post/posts.service';

@Component({
  selector: 'app-response',
  templateUrl: './response.component.html',
  styleUrls: ['./response.component.css']
})
export class ResponseComponent implements OnInit {
  private baseUrl = 'http://localhost:8080/api/v1';
 // handling http responses
 loadedPosts: Post[] = [];
 isFetching = false;
 // Handling Errors without subject
  error = null;
  // Error Handling with Subjects
  private errorSub: Subscription;

 constructor(
   private http: HttpClient,
   private postsService: PostsService) {}

 ngOnInit(): void {
   this.errorSub = this.postsService.error
   .subscribe(
     errorMessage => {
       this.error = errorMessage;
     }
   );
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
     },
     error => {
       this.isFetching = false;
       this.error = error.message;
       console.log(error);
     }
   );
 }
onCreatePost(postData: Post): void{
   // Send Http request
   this.postsService.createAndStorePost(postData.title, postData.content).subscribe(
     posts => {
       console.log('response:', posts);
       this.loadedPosts = posts;
       this.fetchPost();
     },
     error => {
       this.error.next(error.message);
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
 ngOnDestroy(): void {
   this.errorSub.unsubscribe();
 }
 onHandleError(): void {
   this.error = null;
 }

}
