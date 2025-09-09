import { Component } from '@angular/core';
import { HeroCarousel } from '../hero-carousel/hero-carousel';
import { MiniCarousel } from '../mini-carousel/mini-carousel';

@Component({
  selector: 'app-carousel-wrapper',
  imports: [HeroCarousel, MiniCarousel],
  templateUrl: './carousel-wrapper.html',
  styleUrl: './carousel-wrapper.css'
})
export class CarouselWrapper {

}
