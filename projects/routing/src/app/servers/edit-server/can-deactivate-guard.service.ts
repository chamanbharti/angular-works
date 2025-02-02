import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

export interface CanComponentDeactivate{
 
    canDeactivate: () => Observable<boolean> | Promise<boolean> | boolean;

}
export class CanDeactivateGuard implements CanDeactivate<CanComponentDeactivate> {
    canDeactivate(
        component: CanComponentDeactivate,
        currentRoute: ActivatedRouteSnapshot,
        nextSate?: RouterStateSnapshot
        ): Observable<boolean> | Promise<boolean> | boolean{
           return component.canDeactivate(); 
        }
}