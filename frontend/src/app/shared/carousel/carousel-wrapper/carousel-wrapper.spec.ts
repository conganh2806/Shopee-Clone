import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselWrapper } from './carousel-wrapper.component';

describe('CarouselWrapper', () => {
  let component: CarouselWrapper;
  let fixture: ComponentFixture<CarouselWrapper>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarouselWrapper],
    }).compileComponents();

    fixture = TestBed.createComponent(CarouselWrapper);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
