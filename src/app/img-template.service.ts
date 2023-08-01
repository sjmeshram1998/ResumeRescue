import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImgTemplateService {

  constructor() { }
  getAll(){
    return [
      {
        templateURL:'./assets/template1.png',
        btnName: 'Select Template'
      },
      {
        templateURL:'./assets/template2.png',
        btnName: 'Select Template'
      },      
      {
        templateURL:'./assets/template3.png',
        btnName: 'Select Template'
      },     
      {
        templateURL:'./assets/template4.png',
        btnName: 'Select Template'
      },
       {
        templateURL:'./assets/template5.png',
        btnName: 'Select Template'
      }, 
      {
        templateURL:'./assets/template6.png',
        btnName: 'Select Template'
      }, 
      {
        templateURL:'./assets/template7.png',
        btnName: 'Select Template'
      }, 
      {
        templateURL:'./assets/template8.png',
        btnName: 'Select Template'
      }, 
      {
        templateURL:'./assets/template9.png',
        btnName: 'Select Template'
      },
       {
        templateURL:'./assets/template10.png',
        btnName: 'Select Template'
      },
      {
        templateURL:'./assets/template11.png',
        btnName: 'Select Template'
      },
      {
        templateURL:'./assets/template12.png',
        btnName: 'Select Template'
      },
    ]
    
  }
}
