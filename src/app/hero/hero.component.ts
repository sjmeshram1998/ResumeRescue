import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import {  Form, FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import {Output,EventEmitter} from '@angular/core'
import { DatabaseService } from '../database.service';
@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
    // loginForm: FormGroup; 
  isSubmitted = false;
  authenticated = false;
  showModel: boolean = false;
  showRegisterForm: boolean = true;
  RegisterForm: FormGroup;
  loginForm: FormGroup;
  // decorator for username button on navbar starts
  @Output() verified = new EventEmitter<string>();
  // decorator for username button on navbar ends


  constructor(private registerBuilder: FormBuilder,
              private auth: AngularFireAuth,     
              private router: Router, 
              private loginBuider: FormBuilder, 
              private databaseService: DatabaseService
              ){
    this.RegisterForm = this.registerBuilder.group({
      email : ["",[Validators.required]],
      password : ["",[Validators.required]]
    })
    this.loginForm = this.loginBuider.group({
      uname: ["",[Validators.required]],
      pwd: ["",[Validators.required]]
    })

  }
//registration form starts
get email(){
  return this.RegisterForm.get('email');
}
get password(){
  return this.RegisterForm.get('password');
}
get uname(){
  return this.loginForm.get('uname');
}
get pwd(){
  return this.loginForm.get('pwd');
}
// Sign out
signOut() {
  this.auth.signOut()
    .then(() => {
     
    })
    .catch((error) => {

    });
  }

onSubmissionOfRegisterForm() {
  const emailValue = this.email?.value; // Retrieve the value of the email control
  const passwordValue = this.password?.value; // Retrieve the value of the password control

  if (emailValue && passwordValue) {
    this.auth.createUserWithEmailAndPassword(emailValue, passwordValue)
      .then((userCredential) => {
        const user = userCredential.user;
        const formData = this.RegisterForm.value;
        this.databaseService.saveRegisterForm(formData); // Save data to Realtime Database
        // this.verified.emit(emailValue);
        alert("registration successfull");
        // this.databaseService.saveRegisterForm(formData)
      })
      .catch(error => {
        alert(error);
      });
  }
  
  }
  // saveRegisterForm(){
  //   const formData = this.RegisterForm.value;
  //     this.databaseService.saveRegisterForm(formData)
  // }

  // saveLoginForm(){
  //   const formData = this.loginForm.value;
  //     this.databaseService.saveLoginForm(formData)
  // }

// registration form ends
onSubmitOfLoginForm() {
  const unameValue = this.uname?.value; // Retrieve the value of the email control
  const pwdValue = this.pwd?.value; // Retrieve the value of the password control

  if (unameValue && pwdValue) {
    this.auth.signInWithEmailAndPassword(unameValue, pwdValue)
      .then(result => {
        this.authenticated=true;

        console.log(result.user);
      })
      .catch(error => {
        alert(error);
      });
  }
}
  // login form ends

// form toggle
toggleForm() {
  this.showRegisterForm = !this.showRegisterForm;
}
// form toggle ends

// modal code

openModel(){
  const modelDiv = document.getElementById('exampleModal');
  if(modelDiv!=null){
    modelDiv.style.display= 'block';
  }
}
// modal code ends
}