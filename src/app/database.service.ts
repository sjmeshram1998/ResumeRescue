import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  [x: string]: any;
  auth() {
    throw new Error('Method not implemented.');
  }
form_id: string ="";

  constructor(private database: AngularFireDatabase) { }
  
  // saveFormData(formData: any){
  //   return this.database.list('formData').push(formData);
  // }

  saveRegisterForm(formData: any){
    // this.database.list('formData').push(formData);
    var id= this.database.database.ref().child('formData').push().key;
    formData.id = id!;
    this.form_id= id!;
    return this.database.database.ref().child('formData').child(id!).set(formData);
    // return this.database.database.ref().child('formData').child(this.form_id).update(formData);
  }
  saveLoginForm(formData: any){
    return this.database.database.ref().child('formData').child(this.form_id).update(formData);
  }
  saveBuildResumeForm(formData: any){
      
    return this.database.database.ref().child('formData').child(this.form_id).update(formData);
  }
  savePersonalDetailsForm(formData: any){
     // return this.database.list('formData').push(formData);
      var id= this.database.database.ref().child('formData').push().key;
      formData.id = id!;
      this.form_id= id!;
      // return this.database.database.ref().child('formData').child(id!).set(formData);
      formData.personalDetails=true;
      return this.database.database.ref().child('formData').child(this.form_id).update(formData);

    }
  
    saveExperienceDetailsForm(formData: any){
      // return this.database.list('formData').push(formData);
      formData.experienceDetails=true;

    return this.database.database.ref().child('formData').child(this.form_id).update(formData);
    }
    saveSchoolDetailsForm(formData: any){
      formData.schoolDetails=true;
      return this.database.database.ref().child('formData').child(this.form_id).update(formData);
    }
    saveSkillsForm(formData: any){
      formData.skillsDetails=true;
      return this.database.database.ref().child('formData').child(this.form_id).update(formData);
    }
    saveSummaryForm(formData: any){
      formData.summaryDetails=true;
      return this.database.database.ref().child('formData').child(this.form_id).update(formData);
    }
    getUserData(): Observable<any> {
      return this.database.object('id').valueChanges();
    }
  
    // setStep(step: number): void {
    //   this.currentStep = step;
    // }
    // resetForm(): void {
    //   this.currentStep = 1;
    //   this.formData = {};
    // }
}
