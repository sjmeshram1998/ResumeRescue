import { Component } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { DatabaseService } from '../database.service';
@Component({
  selector: 'app-professional-summary',
  templateUrl: './professional-summary.component.html',
  styleUrls: ['./professional-summary.component.css']
})
export class ProfessionalSummaryComponent {
  summaryForm: FormGroup;
  constructor(private userSkill: FormBuilder, private router: Router, private databaseService: DatabaseService){
    this.summaryForm=this.userSkill.group({
    summary: ['',[Validators.required]],
    interest: ['',[Validators.required ]]
  });
  }
  get summary(){
    return this.summaryForm.get('summary');
  }
  get interest(){
    return this.summaryForm.get('interest');
  }
  
  onSubmitOfSummaryForm(){
    if(this.summaryForm.valid){
      const formData = this.summaryForm.value;
      this.databaseService.saveSummaryForm(formData)
        .then(() => {
          console.log('Data saved successfully!');
          this.summaryForm.reset();
          this.router.navigate(['/save']);

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
    Object.keys(this.summaryForm.controls).forEach(key => {
      this.summaryForm.controls[key].markAsTouched();
    });
  }
  
  // goToSave(){
  //   this.router.navigate(['/save'])
  // }
  goToSkills(){
        this.router.navigate(['/skills'])

  }
}
