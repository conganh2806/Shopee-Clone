import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiniCarousel } from './mini-carousel.component';

describe('MiniCarousel', () => {
  let component: MiniCarousel;
  let fixture: ComponentFixture<MiniCarousel>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MiniCarousel],
    }).compileComponents();

    fixture = TestBed.createComponent(MiniCarousel);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
