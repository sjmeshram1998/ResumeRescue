import { NgOptimizedImage } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { FormArray } from '@angular/forms';
import { Router } from '@angular/router';
import { DatabaseService } from '../database.service';
@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {
skillsForm: FormGroup;
constructor(private userSkill: FormBuilder, private router: Router, private databaseService: DatabaseService){
  this.skillsForm=this.userSkill.group({
  skill1: ['',[Validators.required]],
  skill_level1: ['',[Validators.required ]],
  skill2: ['',[Validators.required]],
  skill_level2: ['',[Validators.required ]],
  skill3: ['',[Validators.required]],
  skill_level3: ['',[Validators.required ]],
});
}
get skill1(){
  return this.skillsForm.get('skill1');
}
get skill_level1(){
  return this.skillsForm.get('skill_level1');
}
get skill2(){
  return this.skillsForm.get('skill1');
}
get skill_level2(){
  return this.skillsForm.get('skill_level1');
}
get skill3(){
  return this.skillsForm.get('skill1');
}
get skill_level3(){
  return this.skillsForm.get('skill_level1');
}
onSubmitOfskillsForm(){
  if(this.skillsForm.valid){
    const formData = this.skillsForm.value;
    this.databaseService.saveSkillsForm(formData)
      .then(() => {
        console.log('Data saved successfully!');
        this.skillsForm.reset();
        this.router.navigate(['/summary']);

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
  Object.keys(this.skillsForm.controls).forEach(key => {
    this.skillsForm.controls[key].markAsTouched();
  });
}

goToSummary(){
  this.router.navigate(['/school'])
}
}
