import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthRouteGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router){

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    // if(state.url == '/'){
    //   return true;
    // }
    const userData = this.authService.userInfo.getValue();
    console.log(JSON.stringify(userData));
    if(userData && userData.userid){
      if(state.url.indexOf('login') > -1){
        this.router.navigate(['/dashboard']);
        return false;
      }
    }else{
           if(state.url.indexOf('dashboard') > -1){
            this.router.navigate(['/login']);
            return false;
           }
    }

      return true;
  }

}
