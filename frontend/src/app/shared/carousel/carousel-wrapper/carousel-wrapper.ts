import { Component } from '@angular/core';
import { HeroCarousel } from '@app/shared/carousel/hero-carousel/hero-carousel';
import { MiniCarousel } from '@app/shared/carousel/mini-carousel/mini-carousel';

@Component({
  selector: 'app-carousel-wrapper',
  standalone: true,
  imports: [HeroCarousel, MiniCarousel],
  templateUrl: './carousel-wrapper.html',
  styleUrl: './carousel-wrapper.css',
})
export class CarouselWrapper {}
