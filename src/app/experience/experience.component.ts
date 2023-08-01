import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DatabaseService } from '../database.service';
import { DateValidatorsService } from '../date-validators.service';
import { DatePipe } from '@angular/common';

// import { DatabaseService } from '../database.service';
@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent  {
  experienceInfoForm: FormGroup;
  formArray: any[]= [];
  maxDate: string;

  // experienceArray!: FormArray;
constructor(private fb: FormBuilder,private router: Router, private databaseService: DatabaseService, private DateValidators: DateValidatorsService){
  //  private dbService: DatabaseService
    this.experienceInfoForm = this.fb.group({
      job_title:['',[Validators.required]],
      employer: ['',[Validators.required]],
      city: ['',[Validators.required]],
      country:['',[Validators.required]], 
      emp_start_date: ['',[Validators.required,]],
      emp_end_date: ['',[Validators.required]]   
 });
 this.maxDate = new Date().toISOString().split('T')[0];

}
get job_title(){
return this.experienceInfoForm.get('job_title');
}
get employer(){
return this.experienceInfoForm.get('employer');
}
get city(){
return this.experienceInfoForm.get('city');
}
get country(){
  return this.experienceInfoForm.get('country');
}
get emp_start_date(){
  return this.experienceInfoForm.get('emp_start_date');
}
get emp_end_date(){
  return this.experienceInfoForm.get('emp_end_date');
}
  goToPersonalDetails(){
    this.router.navigate(['/personal-info'])
  }
  onSubmitExperienceInfoForm(){
    
    if(this.experienceInfoForm.valid){
      const formData = this.experienceInfoForm.value;
      this.databaseService. saveExperienceDetailsForm(formData)
        .then(() => {
          console.log('Data saved successfully!');
          this.experienceInfoForm.reset();
          this.router.navigate(['/school']);

        })
        .catch(error => {
          console.error('Error saving data:', error);
        });
  }
    
    else{
      this.experienceInfoFormControlsAsTouched();
  
    }
  }
  experienceInfoFormControlsAsTouched(){
    Object.keys(this.experienceInfoForm.controls).forEach(key => {
      this.experienceInfoForm.controls[key].markAsTouched();
    });
  
  }
  
  // validateDate()
  // {
  //   if(this.experienceInfoForm.value.emp_start_date < this.experienceInfoForm.value.emp_start_date
  //     )

  //   alert("start date should less than end date and do not select future date")

  // }
 
}
