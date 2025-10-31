import { Component } from '@angular/core';
import { CategoryList } from '@pages/homepage/category-list/category-list.component';

@Component({
  selector: 'app-homepage-main',
  standalone: true,
  imports: [CategoryList],
  templateUrl: './main.html',
  styleUrl: './main.css',
})
export class MainComponent {}
