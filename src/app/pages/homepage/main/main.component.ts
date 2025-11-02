import { Component } from '@angular/core';
import { CategoryList } from '@pages/homepage/category-list/category-list.component';
import { RecommendProducts } from '@app/pages/homepage/main/recommend-products/recommend-products.component';

@Component({
  selector: 'app-homepage-main',
  standalone: true,
  imports: [CategoryList, RecommendProducts],
  templateUrl: './main.html',
  styleUrl: './main.css',
})
export class MainComponent {}
