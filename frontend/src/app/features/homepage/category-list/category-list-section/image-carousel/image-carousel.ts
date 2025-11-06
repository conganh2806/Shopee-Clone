import { Component, signal, computed, WritableSignal, effect, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageCarouselItem } from '@features/homepage/category-list/category-list-section/image-carousel-item/image-carousel-item';
import { CarouselNavButton } from '@app/shared/components/carousel-nav-button/carousel-nav-button';
import { toSignal } from '@angular/core/rxjs-interop';
import { CategoryItemData } from '@app/core/data/category.data';

@Component({
  selector: 'image-carousel',
  standalone: true,
  imports: [CommonModule, ImageCarouselItem, CarouselNavButton],
  templateUrl: './image-carousel.html',
  styleUrl: './image-carousel.css',
})
export class ImageCarousel {
  private readonly ITEMS_PER_COLUMN = 2;
  private readonly VISIBLE_COLUMNS = 10;

  private categoryService = inject(CategoryItemData);

  categoryItems = toSignal(
    this.categoryService.getCategoryItems(), // <--- Gọi service
    { initialValue: [] } // Cung cấp giá trị ban đầu (rất quan trọng)
  );

  constructor() {
    effect(() => {
      console.log('--- Carousel Debug (Fitted Width) ---');
      console.log('Trang (index):', this.currentPageIndex());
      console.log('Tổng số trang:', this.totalPages());
      console.log('Tổng Width % (cho ul):', this.totalWidthPercentage());
      console.log('Max Transform %:', this.maxTransformPercentage());
      console.log('Transform hiện tại:', this.carouselTransform());
      console.log('---------------------------------');
    });
  }

  currentPageIndex = signal(0);

  totalColumns = computed(() => {
    return Math.ceil(this.categoryItems().length / this.ITEMS_PER_COLUMN);
  });

  totalPages = computed(() => {
    if (this.totalColumns() === 0) return 1;
    return Math.ceil(this.totalColumns() / this.VISIBLE_COLUMNS);
  });

  totalWidthPercentage = computed(() => {
    return (this.totalColumns() / this.VISIBLE_COLUMNS) * 100;
  });

  maxTransformPercentage = computed(() => {
    return Math.min(0, 100 - this.totalWidthPercentage());
  });

  carouselTransform = computed(() => {
    const index = this.currentPageIndex();
    const totalPages = this.totalPages();
    const maxTransformPercentage = this.maxTransformPercentage();

    if (index === totalPages - 1) {
      return `translateX(${maxTransformPercentage}%)`;
    }

    const transformValue = index * -100;

    return `translateX(${transformValue}%)`;
  });

  canGoNext = computed(() => this.currentPageIndex() < this.totalPages() - 1);
  canGoPrev = computed(() => this.currentPageIndex() > 0);

  goToNextPage() {
    if (this.canGoNext()) {
      this.currentPageIndex.update((index) => index + 1);
      console.log(this.currentPageIndex());
    }
  }

  goToPrevPage() {
    if (this.canGoPrev()) {
      this.currentPageIndex.update((index) => index - 1);
      console.log(this.currentPageIndex());
    }
  }
}
