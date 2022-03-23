import { Injectable } from '@angular/core';
import { AngularFireModule} from '@angular/fire';
import { AngularFireDatabase } from '@angular/fire/database';
import {  AngularFireObject } from 'angularfire2/database';

import * as firebase from 'firebase';
import { Observable } from 'rxjs';
import { appUser } from './models/app-user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private db: AngularFireDatabase) {
    
   }
   save(user: firebase.User){
      this.db.object('/users/'+user.uid).update({
        nama: user.displayName,
        email:user.email
      })

  }

  get(uid: string | undefined): Observable<appUser>
  {
    return this.db.object('/users/'+uid).valueChanges() as Observable<appUser>;
  }
}
