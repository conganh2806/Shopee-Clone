import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecommendProducts } from './recommend-products.component';

describe('RecommendProducts', () => {
  let component: RecommendProducts;
  let fixture: ComponentFixture<RecommendProducts>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecommendProducts],
    }).compileComponents();

    fixture = TestBed.createComponent(RecommendProducts);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
