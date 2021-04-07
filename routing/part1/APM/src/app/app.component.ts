import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'pm-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  pageTitle: string = 'Acme Product Management';

  constructor(private router: Router){

  }

  logOut(): void {
    // do some processing
    // this.router.navigate(['/welcome']); // stardard syntax
    // this.router.navigate('/welcome'); // short-cut syntax
    this.router.navigateByUrl('/welcome'); // complete url path

  }
}
