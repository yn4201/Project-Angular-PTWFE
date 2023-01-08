import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  // isSignedIn = false
  email: string ='';
  password: string ='';

  constructor(private auth :AuthService) { }

  ngOnInit(){
    
  }
  
  register(){

    if(this.email ==''){
    alert('Please enter email');
    return;
    }

    if(this.password ==''){
      alert('Please enter password');
      return;
      }
      this.auth.register(this.email, this.password);
      this.email = '';
      this.password = '';
  }
}

