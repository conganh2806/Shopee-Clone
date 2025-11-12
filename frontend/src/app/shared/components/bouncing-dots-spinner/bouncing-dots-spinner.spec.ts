import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BouncingDotsSpinner } from './bouncing-dots-spinner';

describe('BouncingDotsSpinner', () => {
  let component: BouncingDotsSpinner;
  let fixture: ComponentFixture<BouncingDotsSpinner>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BouncingDotsSpinner]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BouncingDotsSpinner);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
