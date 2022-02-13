import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BirthdaySecondsComponent } from './birthday-seconds.component';

describe('BirthdaySecondsComponent', () => {
  let component: BirthdaySecondsComponent;
  let fixture: ComponentFixture<BirthdaySecondsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BirthdaySecondsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BirthdaySecondsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
