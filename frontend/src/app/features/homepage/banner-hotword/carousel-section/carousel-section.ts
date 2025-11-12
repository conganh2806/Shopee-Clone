import { Component } from '@angular/core';
import { HeroCarousel } from '@app/shared/carousel/hero-carousel/hero-carousel';
import { MiniCarousel } from '@app/shared/carousel/mini-carousel/mini-carousel';

@Component({
  selector: 'app-carousel-section',
  imports: [HeroCarousel, MiniCarousel],
  templateUrl: './carousel-section.html',
  styleUrl: './carousel-section.scss',
})
export class CarouselSection {}
