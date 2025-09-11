import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotwordItem } from './hotword-item';

describe('HotwordItem', () => {
  let component: HotwordItem;
  let fixture: ComponentFixture<HotwordItem>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HotwordItem]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HotwordItem);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
