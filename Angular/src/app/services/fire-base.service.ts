import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FireBaseService {
  // igLoggedIn = false
  // constructor(public firebaseAuth : AngularFireAuth) { }
  // async signin(email: string, password: string){
  //   await this.firebaseAuth.signInWithEmailAndPassword(email,password)
  //   .then(res =>{
  //     this.igLoggedIn = true
  //     localStorage.setItem('user',JSON.stringify(res.user))

  //   })
  }

  // async signup(email: string, password: string){
  //   await this.firebaseAuth.createUserWithEmailAndPassword(email,password)
  //   .then(res =>{
  //     this.igLoggedIn = true
  //     localStorage.setItem('user',JSON.stringify(res.user))

  //   })
  // }
  // logout(){
  //   this.firebaseAuth.signOut()
  //   localStorage.removeItem('user')
  // }

