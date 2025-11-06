import { Observable } from 'rxjs';
import { CategoryItem } from '@core/models/category-item';

export abstract class CategoryItemData {
  abstract getCategoryItems(): Observable<CategoryItem[]>;
}
