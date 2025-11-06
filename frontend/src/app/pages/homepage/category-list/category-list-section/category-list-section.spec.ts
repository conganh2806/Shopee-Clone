import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryListSection } from './category-list-section.component';

describe('CategoryListSection', () => {
  let component: CategoryListSection;
  let fixture: ComponentFixture<CategoryListSection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CategoryListSection],
    }).compileComponents();

    fixture = TestBed.createComponent(CategoryListSection);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
