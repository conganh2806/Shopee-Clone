import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Hotword } from './hotword';

describe('Hotword', () => {
  let component: Hotword;
  let fixture: ComponentFixture<Hotword>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Hotword]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Hotword);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
