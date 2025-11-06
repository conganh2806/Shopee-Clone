import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselNavButton } from './carousel-nav-button.component';

describe('CarouselNavButton', () => {
  let component: CarouselNavButton;
  let fixture: ComponentFixture<CarouselNavButton>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarouselNavButton]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarouselNavButton);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
