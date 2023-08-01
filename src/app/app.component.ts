import { Component, OnInit } from '@angular/core';
import { DatabaseService } from './database.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'resume';
    formData: any;
    form_id: any
  // personalDetails: boolean;
  // experienceDetails: boolean;
constructor(private databaseService: DatabaseService, private router: Router){}
 
  // this.personalDetails=databaseService['formData'].personalDetails;
  // this.experienceDetails=databaseService['formData'].experienceDetails;
  // if(this.personalDetails==true){
  //   this.router.navigate(['/experience']);

//   ngOnInit(): void {
//     const userId = 'form_ id'; // Replace with the actual user ID
//     this.databaseService.getUserData().subscribe((data) => {
//       this.form_id = data;
//       // You can access the user-specific data in the "userData" variable here
//       console.log(this.form_id);
//     });
// }
}