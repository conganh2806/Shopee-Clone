import { Component } from '@angular/core';
import { ImageCarousel } from '@pages/homepage/category-list/category-list-section/image-carousel/image-carousel.component';

@Component({
  selector: 'category-list-section',
  standalone: true,
  imports: [ImageCarousel],
  templateUrl: './category-list-section.html',
  styleUrl: './category-list-section.css',
})
export class CategoryListSection {}
