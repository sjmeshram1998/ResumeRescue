import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-ratings',
  templateUrl: './ratings.component.html',
  styleUrls: ['./ratings.component.css']
})
export class RatingsComponent {
  title = 'ng-carousel-demo';
  
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true
  }
  
    slides = [
      {
        id: 1,
        name: "Heather Owns",
        ratings: "4.5",
        desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam, reprehenderit enim necessitatibus id ipsa officia corrupti facilis soluta, adipisci quod ab tempora veritatis, iusto numquam suscipit tempore beatae nostrum cupiditate"
      },

      {
        id: 2,
        name: "Heather Owns",
        ratings: 4.5,
        desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam, reprehenderit enim necessitatibus id ipsa officia corrupti facilis soluta, adipisci quod ab tempora veritatis, iusto numquam suscipit tempore beatae nostrum cupiditate"
      },
      {
        id: 3,
        name: "Heather Owns",
        ratings: 4.5,
        desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam, reprehenderit enim necessitatibus id ipsa officia corrupti facilis soluta, adipisci quod ab tempora veritatis, iusto numquam suscipit tempore beatae nostrum cupiditate"
      },
      {
        id: 4,
        name: "Heather Owns",
        ratings: 4.5,
        desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam, reprehenderit enim necessitatibus id ipsa officia corrupti facilis soluta, adipisci quod ab tempora veritatis, iusto numquam suscipit tempore beatae nostrum cupiditate"
      },
      {
        id: 5,
        name: "Heather Owns",
        ratings: 4.5,
        desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam, reprehenderit enim necessitatibus id ipsa officia corrupti facilis soluta, adipisci quod ab tempora veritatis, iusto numquam suscipit tempore beatae nostrum cupiditate"
      },
      {
        id: 6,
        name: "Heather Owns",
        ratings: 4.5,
        desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam, reprehenderit enim necessitatibus id ipsa officia corrupti facilis soluta, adipisci quod ab tempora veritatis, iusto numquam suscipit tempore beatae nostrum cupiditate"
      },
      {
        id: 7,
        name: "Heather Owns",
        ratings: 4.5,
        desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam, reprehenderit enim necessitatibus id ipsa officia corrupti facilis soluta, adipisci quod ab tempora veritatis, iusto numquam suscipit tempore beatae nostrum cupiditate"
      },

    ];
}
