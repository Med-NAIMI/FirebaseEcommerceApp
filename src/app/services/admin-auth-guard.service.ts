import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import {  switchMap, map } from 'rxjs/operators';
import { UserService } from '../user.service';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AdminAuthGuard implements CanActivate{

  constructor(private authService: AuthService, private userService: UserService) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean>  {

    // let mySubject: Subject<boolean>=new Subject<boolean>();
    
    return this.authService.appUser$.pipe(
          map(user => user.isAdmin)
    )  
    // .subscribe(
    //   user=>{
    //       if(user.isAdmin){
    //     // mySubject.next(true);
    //       }else{
    //     // mySubject.next(false);
    //       }
    // }
    // )

    // return mySubject  ;
    


  }


}
