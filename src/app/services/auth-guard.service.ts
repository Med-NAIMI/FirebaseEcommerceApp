import { Injectable } from '@angular/core';
import {  ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../services/auth.service';

import { Observable, Subject } from 'rxjs';
import {  switchMap, map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService,private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {


    // let subject = new Subject<boolean>();

      return this.authService.user$
      .pipe(
        map(user=> {if(user) return true;
          else {this.router.navigate(['/login'], {queryParams: {returnUrl: state.url }})
            return false;}
        }

        )
      )

    //   .subscribe(user => {

    //       if(user) {
    //         // subject.next(true);
            
    //       }
    //       else   {this.router.navigate(['/login'], {queryParams: {returnUrl: state.url }}); 
    //           //  subject.next(false);
              
    //           }
    // })
    // // return subject;
  }
}
