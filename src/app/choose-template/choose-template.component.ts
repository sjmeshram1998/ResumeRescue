import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ImgTemplateService } from '../img-template.service';

@Component({
  selector: 'app-choose-template',
  templateUrl: './choose-template.component.html',
  styleUrls: ['./choose-template.component.css']
})
export class ChooseTemplateComponent {
  loadMoreBtn=false;
  templates;
constructor(private router: Router, private imgService: ImgTemplateService){
    this.templates=this.imgService.getAll();
}
  // chooseTempToBuildResume(){
  //   this.router.navigateByUrl("/choose-template/build-resume/");
  // }
  loadMore(){
    this.loadMoreBtn=!this.loadMoreBtn;
  }



}
