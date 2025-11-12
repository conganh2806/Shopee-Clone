import { Component } from '@angular/core';
import { CategoryList } from '@features/homepage/category-list/category-list';

@Component({
  selector: 'app-homepage-main',
  standalone: true,
  imports: [CategoryList],
  templateUrl: './main.html',
  styleUrl: './main.scss',
})
export class MainComponent {}
