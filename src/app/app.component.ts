import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './services/auth.service';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FirebaseEcommerceApp';

  constructor(router:Router, authService: AuthService,private userService:UserService){

    authService.user$.subscribe(user=> {
      if(user){
        this.userService.save(user);

        let returnUrl:string =localStorage.getItem('returnUrl') || "/";
        router.navigateByUrl(returnUrl);
      }

    })
    
  }
}
