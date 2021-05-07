import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {

  // Approach I
  /*
  userActivated = false;
  constructor(
    private userService: UserService
    ) {}

  ngOnInit(): void{
    this.userService.activatedEmitter.subscribe(
      didActivated => {
        this.userActivated = didActivated;
      }
    );
  }
*/

// Approach II avoid memory leak
userActivated = false;
private activatedSub: Subscription;
constructor(
  private userService: UserService
  ) {}

ngOnInit(): void{
 this.activatedSub = this.userService.activatedEmitter.subscribe(
    didActivated => {
      this.userActivated = didActivated;
    }
  );
}

  ngOnDestroy(): void {
    this.activatedSub.unsubscribe();
  }
}
