import { Injectable, EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  // Approach I
 // activatedEmitter = new EventEmitter<boolean>();

  // Approach II
  activatedEmitter = new Subject<boolean>();
  constructor() { }
}
