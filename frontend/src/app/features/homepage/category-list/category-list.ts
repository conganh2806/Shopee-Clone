import { Component } from '@angular/core';
import { CategoryListHeader } from '@features/homepage/category-list/category-list-header/category-list-header';
import { CategoryListSection } from '@features/homepage/category-list/category-list-section/category-list-section';

@Component({
  selector: 'home-category-list',
  standalone: true,
  imports: [CategoryListHeader, CategoryListSection],
  templateUrl: './category-list.html',
  styleUrl: './category-list.css',
})
export class CategoryList {}
