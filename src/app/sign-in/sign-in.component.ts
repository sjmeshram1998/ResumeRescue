import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import {  FormBuilder, Validators} from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {
constructor(private loginBuider: FormBuilder,private auth: AngularFireAuth, private router: Router ){}
loginForm = this.loginBuider.group({
  uname: ["",[Validators.required]],
  pwd: ["",[Validators.required]]
})
get uname(){
  return this.loginForm.get('uname');
}
get pwd(){
  return this.loginForm.get('pwd');
}

// this.authService.onSubmitOfLoginForm(this.email,this.password)
// onSubmitOfLoginForm(){
    
//   this.auth.signInWithEmailAndPassword(uname,pwd).then(result=>{
//     this.router.navigate(['']);
//   }).catch (error=>{
//     this.router.navigate(['/login'])
//   })

// }

onSubmitOfLoginForm() {
  const unameValue = this.uname?.value; // Retrieve the value of the email control
  const pwdValue = this.pwd?.value; // Retrieve the value of the password control

  if (unameValue && pwdValue) {
    this.auth.signInWithEmailAndPassword(unameValue, pwdValue)
      .then(result => {
        console.log(result.user);
      })
      .catch(error => {
        alert(error);
      });
  }
}
}