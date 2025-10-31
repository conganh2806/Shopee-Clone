import { Component, Input } from '@angular/core';
import { CategoryItem } from '@app/core/models/category-item';

@Component({
  selector: 'image-carousel-item',
  standalone: true,
  imports: [],
  templateUrl: './image-carousel-item.html',
  styleUrl: './image-carousel-item.css',
})
export class ImageCarouselItem {
  @Input({ required: true }) categoryItem!: CategoryItem;
}
