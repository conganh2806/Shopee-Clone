import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageCarouselItem } from './image-carousel-item.component';

describe('ImageCarouselItem', () => {
  let component: ImageCarouselItem;
  let fixture: ComponentFixture<ImageCarouselItem>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImageCarouselItem]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImageCarouselItem);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
