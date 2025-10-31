import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryListHeader } from './category-list-header.component';

describe('CategoryListHeader', () => {
  let component: CategoryListHeader;
  let fixture: ComponentFixture<CategoryListHeader>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CategoryListHeader],
    }).compileComponents();

    fixture = TestBed.createComponent(CategoryListHeader);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
