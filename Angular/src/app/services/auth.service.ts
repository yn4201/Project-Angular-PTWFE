import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from 'firebase/compat/app';
import { Router } from '@angular/router';
import { SharingService } from './sharing.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private fireauth: AngularFireAuth,
    private afAuth: AngularFireAuth,
    private router:Router,
    private sharing : SharingService
  ) { }

  async signinGmail(){
    let provider = new firebase.auth.GoogleAuthProvider();
    return await  this.afAuth.signInWithPopup(provider).then(
      res=>{this.sharing.isUserLoggedIn.next(true)}
      
    );
    
           
  }
  //đăng ký
  register(email: string, password: string){
    this.fireauth.createUserWithEmailAndPassword(email,password).then( () => {
      alert('Đăng ký thành công');
      this.router.navigate(['/login']);
    }, err => {
      alert(err.message);
    this.router.navigate(['/signup']);
   })
  }

  logout(){
    return new Promise<any>((resolve,reject)=>{
      if (this.afAuth.user){    
        this.afAuth.signOut();
        this.sharing.isUserLoggedIn.next(false);
      //  resolve("log out");
      }else{
        reject();
      }
  
    })
  }

  login(email: string, password: string){
    this.fireauth.signInWithEmailAndPassword(email,password).then( () =>{
    localStorage.setItem('token','true');
    this.router.navigate(['/admin/item']);
  }, err => {
    alert(err.message);
    this.router.navigate(['/login']);
  })
  }



}
