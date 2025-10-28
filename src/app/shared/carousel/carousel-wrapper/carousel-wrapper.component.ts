import { Component } from '@angular/core';
import { HeroCarousel } from '../hero-carousel/hero-carousel.component';
import { MiniCarousel } from '../mini-carousel/mini-carousel.component';

@Component({
  selector: 'app-carousel-wrapper',
  standalone: true,
  imports: [HeroCarousel, MiniCarousel],
  templateUrl: './carousel-wrapper.html',
  styleUrl: './carousel-wrapper.css',
})
export class CarouselWrapper {}
