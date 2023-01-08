import { FireBaseService } from './../services/fire-base.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { SharingService } from '../services/sharing.service';
import { UserService } from '../services/user.service';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
 
  @Output() isLogout = new EventEmitter<void>() 

  

  displayName:string="";
  constructor(private userService: UserService, private auth:AuthService, private router: Router, private sharing:SharingService) { 
    this.userService.getCurrentUser()
        .then(user=> this.displayName = user.displayName!=null? user.displayName: user.email);	
    this.sharing.isUserLoggedIn
				.subscribe(value => {
						if(value){
                     this.userService.getCurrentUser()
                          .then(user=> this.displayName = user.displayName!=null? user.displayName: user.email);	
            }
            else{
              this.displayName="";
            }
          })

  }

  ngOnInit(): void {
  }

  logout(){
    this.auth.logout();
    this.router.navigateByUrl("/login");
  // location.href="/login"
  }
  

}
