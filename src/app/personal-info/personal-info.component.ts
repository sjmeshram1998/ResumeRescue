import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl, FormArray } from '@angular/forms';
import { Router } from '@angular/router';
import { DatabaseService } from '../database.service';

@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.css']
})
export class PersonalInfoComponent {
  personalDetailsForm : FormGroup;
  isSubmitted: boolean=false;
 constructor(private pInfo: FormBuilder, private router: Router, private databaseService: DatabaseService)
  
  {
 this.personalDetailsForm =this.pInfo.group({
  fname:["",[Validators.required,]],
  lname:["",[Validators.required]],
  // profileImage:["",Validators.required],
  address:["",Validators.required],
  city:["",Validators.required],
  state:["",Validators.required],
  zip:["",[Validators.required,Validators.pattern('[0-9]{6}')]],
  email:["",[Validators.required,Validators.email]],
  phone:["",[Validators.required,Validators.pattern('^[6-9]\\d{9}$')]],
 }) 
}

get fname(){
    return this.personalDetailsForm.get('fname');
}
get lname(){
  return this.personalDetailsForm.get('lname');
}
get email(){
  return this.personalDetailsForm.get('email');
}
get zip(){
  return this.personalDetailsForm.get('zip')
}
get phone(){
  return this.personalDetailsForm.get('phone')
}
get address(){
  return this.personalDetailsForm.get('address')
}
get city(){
  return this.personalDetailsForm.get('city')
}
get state(){
  return this.personalDetailsForm.get('state')
}
onSubmitOfPersonalInfo(){
  if(this.personalDetailsForm.valid){
    // console.log("success")
    
    const formData = this.personalDetailsForm.value;
      this.databaseService.savePersonalDetailsForm(formData)
        .then(() => {
          console.log('Data saved successfully!');
          this.personalDetailsForm.reset();
          // this.router.navigate(['/experience']);

        })
        .catch(error => {
          console.error('Error saving data:', error);
        });
  }
  else{
    // this.markFormControlsAsTouched();
  }
}


// markFormControlsAsTouched() {
//   Object.keys(this.personalDetailsForm.controls).forEach(key => {
//     this.personalDetailsForm.controls[key].markAsTouched();
//   });
// }

goToBuildResume(){
  this.router.navigate(['/build-resume'])
}

// nextStep(): void {
//   // Perform validation and data processing

//   // Save form data to the service
//   this.formService.setFormData(formData);

//   // Proceed to the next step
//   this.formService.setStep(2);
// }
}
