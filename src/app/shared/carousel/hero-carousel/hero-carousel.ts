import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero-carousel',
  imports: [CommonModule],
  templateUrl: './hero-carousel.html',
  styleUrl: './hero-carousel.css'
})
export class HeroCarousel implements OnInit, OnDestroy{
  images = [
    { src: 'images/carousel/hero/sg-11134258-7rdxo-mdoe3o2uaqqs2d_xxhdpi.jpg', alt: 'Image 1' },
    { src: 'images/carousel/hero/sg-11134258-7rdyc-mdoea5q6dpk4f8_xxhdpi.jpg', alt: 'Image 2' },
    { src: 'images/carousel/hero/vn-11134258-7ras8-mdq0iifj5f3g73_xxhdpi.jpg', alt: 'Image 3' },
    { src: 'images/carousel/hero/sg-11134258-7rene-mdu1o2ntxktgee_xxhdpi.png', alt: 'Image 4' },
  ]

  currentIndex = 0;

  get totalImages() {
    return this.images.length;
  }

  getTotalWidth() { 
    return this.totalImages * 100;
  }

  getItemWidth() {
    return 100 / this.totalImages;
  }

  getTransformStyle() {
    const percentage = (100 / this.totalImages) * this.currentIndex;
    return `translateX(-${percentage}%)`;
  }

  nextSlide() {
    this.currentIndex = (this.currentIndex + 1) % this.totalImages;
  }

  prevSlide() {
    this.currentIndex = (this.currentIndex - 1 + this.totalImages) % this.totalImages;
  }

  goToSlide(index: number) {
    if (index >= 0 && index < this.totalImages) {
      this.currentIndex = index;
    }
  }

  trackByIndex(index: number, item: any): number {
    return index;
  }

  private autoPlayInterval: any;

  ngOnInit() {
    this.startAutoPlay();
  }

  ngOnDestroy() {
    this.stopAutoPlay();
  }

  startAutoPlay() {
    this.autoPlayInterval = setInterval(() => {
      this.nextSlide();
    }, 3000);
  }

  stopAutoPlay() {
    if(this.autoPlayInterval) {
      clearInterval(this.autoPlayInterval);
    }
  }
}
