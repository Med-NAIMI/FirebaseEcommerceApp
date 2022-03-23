import { Injectable } from '@angular/core';

import { AngularFireAuth } from '@angular/fire/auth';
import { ActivatedRoute, Router } from '@angular/router';
import * as firebase from "firebase";
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // user: any;
  // userName: string | null | undefined

  user$: Observable<firebase.User | null>;
  
  constructor(private AfAuth: AngularFireAuth,private route: ActivatedRoute, private router: Router) { 
    // AfAuth.authState.subscribe(user => {
    //   this.user = user;
    //   this.userName=user?.displayName;
    //   console.log(this.user);
    //   console.log("auth "+this.userName);
    // });

    this.user$=this.AfAuth.authState;
  }

  login(){
    let returnUrl= this.route.snapshot.queryParamMap.get('returnUrl') || '/';
    localStorage.setItem("returnUrl",returnUrl);

    this.AfAuth.auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider());
  }

  logout(){
    this.router.navigate(['/login']);
    this.AfAuth.auth.signOut();
  }
}
