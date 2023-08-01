import { Directive, HostListener } from '@angular/core';
import { Location } from '@angular/common';
@Directive({
  selector: '[appHistoryPage]'
})
export class HistoryPageDirective {

  constructor(private location: Location) { }

  @HostListener('click')
  onClick(){
    this.location.back();
  }
}
