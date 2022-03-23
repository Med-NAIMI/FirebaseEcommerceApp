import { Component, OnInit } from '@angular/core';
import { appUser } from '../models/app-user';
import { AuthService } from '../services/auth.service';


@Component({
  selector: 'bs-navbar',
  templateUrl: './bs-navbar.component.html',
  styleUrls: ['./bs-navbar.component.css']
})
export class BsNavbarComponent  {
appUser: appUser | undefined;

  constructor( private authService: AuthService) { 
   this.authService.appUser$.subscribe(user=> this.appUser=user)
  }

  logout(){
    this.authService.logout();
  }

}
