import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CategoryItem } from '@core/models/category-item';
import { CategoryItemData } from '../data/category.data';

@Injectable({
  providedIn: 'root',
})
export class CategoryService extends CategoryItemData {
  private http = inject(HttpClient);

  constructor(...args: unknown[]);

  public constructor() {
    super();
  }

  private dataUrl = 'assets/data/category-items.json';

  getCategoryItems(): Observable<CategoryItem[]> {
    return this.http.get<CategoryItem[]>(this.dataUrl);
  }
}
