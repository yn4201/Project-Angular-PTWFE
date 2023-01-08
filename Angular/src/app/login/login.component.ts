import { signInWithEmailAndPassword } from '@angular/fire/auth';
import { AuthenticationService } from './../services/authentication.service';
import { FireBaseService } from './../services/fire-base.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email: string ='';
  password: string ='';

  constructor(
    private auth:AuthService, 
    private router: Router,
    ){}
  ngOnInit(){
 
  }
  tryGoogleLogin(){

    this.auth.signinGmail().then(
      res=>{
          console.log("Đăng nhập thành công");
        //  alert("fshfksh")
           this.router.navigateByUrl("admin/item");
         // location.href="/items"
      })
      .catch(err=>{console.log(err)})
  }
  
  
  login(){

    if(this.email =='' || this.password ==''){
      alert('Vui lòng điền Email và Password ');
      return;
      }
    if(this.email ==''){
    alert('Mời bạn nhập email');
    return;
    }

    if(this.password ==''){
      alert('Mời bạn nhập password');
      return;
      }
    
      this.auth.login(this.email, this.password);
      this.email = '';
      this.password = '';
  }
}



