import { Component } from '@angular/core';
import { FormGroup, FormArray, Validators, FormBuilder, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { DatabaseService } from '../database.service';
@Component({
  selector: 'app-school',
  templateUrl: './school.component.html',
  styleUrls: ['./school.component.css']
})
export class SchoolComponent {
 schoolInfoForm: FormGroup;
 maxDate: string;

  constructor(private schoolInfo: FormBuilder,private router: Router, private databaseService: DatabaseService){
  this.schoolInfoForm=this.schoolInfo.group({
      schoolName: ['',[Validators.required]],
      schoolLocation: ['',[Validators.required]],
      degree: ['',[Validators.required]],
      field: ['',[Validators.required]],
      educationStartDate:['',[Validators.required]],
      educationEndDate:['',[Validators.required]],
  });
  this.maxDate = new Date().toISOString().split('T')[0];

  }
  get schoolName(){
    return this.schoolInfoForm.get('schoolName')
  }
  get schoolLocation(){
    return this.schoolInfoForm.get('schoolLocation')
  }
  get degree(){
    return this.schoolInfoForm.get('degree')
  }
  get field(){
    return this.schoolInfoForm.get('degree')
  }
  get educationStartDate(){
    return this.schoolInfoForm.get('educationStartDate')
  }
  get educationEndDate(){
    return this.schoolInfoForm.get('educationEndDate')
  }

  onSubmitOfSchoolInfo(){
    if(this.schoolInfoForm.valid){
      const formData = this.schoolInfoForm.value;
      this.databaseService.saveSchoolDetailsForm(formData)
        .then(() => {
          console.log('Data saved successfully!');
          this.schoolInfoForm.reset();
          this.router.navigate(['/skills']);

        })
        .catch(error => {
          console.error('Error saving data:', error);
        });
    }
    else{
      this.markFormControlsAsTouched();
    }
  }
  markFormControlsAsTouched() {
    Object.keys(this.schoolInfoForm.controls).forEach(key => {
      this.schoolInfoForm.controls[key].markAsTouched();
    });
  }
  goToSchool(){
    this.router.navigate(['/school'])
  }
  validateDate()
  {
    this.schoolInfoForm.value.emp_start_date < this.schoolInfoForm.value.emp_start_date
  }
}
