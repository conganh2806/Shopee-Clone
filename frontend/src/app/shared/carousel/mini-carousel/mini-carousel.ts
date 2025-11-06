import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-mini-carousel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './mini-carousel.html',
  styleUrl: './mini-carousel.css',
})
export class MiniCarousel {
  banners = [
    {
      imgSrc: 'images/carousel/mini/sg-11134258-7ren5-mdu0lrp9wus40f_xhdpi.jpg',
      alt: 'Image 1',
      link: '#',
    },
    {
      imgSrc: 'images/carousel/mini/sg-11134258-7renh-mdu0lpwwgay2e4_xhdpi.jpg',
      alt: 'Image 2',
      link: '#',
    },
  ];
}
