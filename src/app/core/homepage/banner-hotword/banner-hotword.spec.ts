import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerHotword } from './banner-hotword';

describe('BannerHotword', () => {
  let component: BannerHotword;
  let fixture: ComponentFixture<BannerHotword>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BannerHotword]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BannerHotword);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
