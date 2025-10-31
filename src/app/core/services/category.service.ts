import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CategoryItem } from '@core/models/category-item';
import { CategoryItemData } from '../data/category.data';

@Injectable({
  providedIn: 'root',
})
export class CategoryService extends CategoryItemData {
  public constructor(private http: HttpClient) {
    super();
  }

  private dataUrl = 'assets/data/category-items.json';

  getCategoryItems(): Observable<CategoryItem[]> {
    return this.http.get<CategoryItem[]>(this.dataUrl);
  }
}
