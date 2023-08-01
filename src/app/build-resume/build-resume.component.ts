import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { DatabaseService } from '../database.service';
import { FormProgressService } from '../form-progress.service';

@Component({
  selector: 'app-build-resume',
  templateUrl: './build-resume.component.html',
  styleUrls: ['./build-resume.component.css']
})
export class BuildResumeComponent {
  buildResumeForm: FormGroup;
constructor(private fb: FormBuilder, private router: Router, private databaseService: DatabaseService, private formProgress: FormProgressService){
  this.buildResumeForm=this.fb.group({
    create:[''],
    upload: ['']
  })
}
get create(){
  return this.buildResumeForm.get('create')
}
get upload(){
  return this.buildResumeForm.get('upload')
}
onSubmitBuildResumeForm(){
    
  if(this.buildResumeForm.valid){
    const formData = this.buildResumeForm.value;
    this.databaseService.saveBuildResumeForm(formData)
      .then(() => {
        console.log('Data saved successfully!');
        this.buildResumeForm.reset();
        this.router.navigate(['/personal-info']);

      })
      .catch(error => {
        console.error('Error saving data:', error);
      });
}
}
}
