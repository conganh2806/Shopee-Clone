import { Component } from '@angular/core';
import { CategoryListHeader } from '@app/pages/homepage/category-list/category-list-header/category-list-header.component';
import { CategoryListSection } from '@app/pages/homepage/category-list/category-list-section/category-list-section.component';

@Component({
  selector: 'home-category-list',
  standalone: true,
  imports: [CategoryListHeader, CategoryListSection],
  templateUrl: './category-list.html',
  styleUrl: './category-list.css',
})
export class CategoryList {}
