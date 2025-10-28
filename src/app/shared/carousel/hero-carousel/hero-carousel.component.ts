import { Component, OnInit, OnDestroy, signal, computed, WritableSignal } from '@angular/core';
import { CommonModule } from '@angular/common';

interface CarouselImage {
  src: string;
  alt: string;
}

@Component({
  selector: 'app-hero-carousel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero-carousel.html',
  styleUrl: './hero-carousel.css',
})
export class HeroCarousel implements OnInit, OnDestroy {
  images: WritableSignal<CarouselImage[]> = signal([
    { src: 'images/carousel/hero/sg-11134258-7rdxo-mdoe3o2uaqqs2d_xxhdpi.jpg', alt: 'Image 1' },
    { src: 'images/carousel/hero/sg-11134258-7rdyc-mdoea5q6dpk4f8_xxhdpi.jpg', alt: 'Image 2' },
    { src: 'images/carousel/hero/vn-11134258-7ras8-mdq0iifj5f3g73_xxhdpi.jpg', alt: 'Image 3' },
    { src: 'images/carousel/hero/sg-11134258-7rene-mdu1o2ntxktgee_xxhdpi.png', alt: 'Image 4' },
  ]);

  currentIndex = signal(0);

  totalImages = computed(() => this.images().length);

  itemWidth = computed(() => {
    const total = this.totalImages();
    return total > 0 ? 100 / total : 0;
  });

  totalWidth = computed(() => this.totalImages() * 100);

  transformStyle = computed(() => {
    const percentage = this.itemWidth() * this.currentIndex();
    return `translateX(-${percentage}%)`;
  });

  nextSlide() {
    this.currentIndex.update((index) => (index + 1) % this.totalImages());
  }

  prevSlide() {
    this.currentIndex.update((index) => (index - 1 + this.totalImages()) % this.totalImages());
  }

  goToSlide(index: number) {
    if (index >= 0 && index < this.totalImages()) {
      this.currentIndex.set(index);
    }
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
    if (this.autoPlayInterval) {
      clearInterval(this.autoPlayInterval);
    }
  }
}
