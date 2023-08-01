import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
// import firebase from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private auth: AngularFireAuth, private router: Router) { }

  // signup(email: string, password: string) {
  //   return this.auth.createUserWithEmailAndPassword(email, password);
  // }
  // onSubmitOfLoginForm(uname: string, pwd: string){
    
  //   this.auth.signInWithEmailAndPassword(uname,pwd).then(result=>{
  //     this.router.navigate(['']);
  //   }).catch (error=>{
  //     this.router.navigate(['/login'])
  //   })
  
  // }
  // onSubmissionOfRegisterForm(email: string, password: string) {
  
  //     this.auth.createUserWithEmailAndPassword(email, password)
  //       .then(result => {
  //         alert("register");
  //         this.router.navigate(['/login'])
  //       })
  //       .catch(error => {
  //         alert(error);
  //         this.router.navigate(['/login'])

  //       });
    // }
  
    // logout(){
    //   this.auth.signOut().then(result=>{

    //   }),() => {
    //     alert(Error)
    //   }
    // }
}
