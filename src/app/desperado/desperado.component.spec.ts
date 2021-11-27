import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesperadoComponent } from './desperado.component';

describe('DesperadoComponent', () => {
  let component: DesperadoComponent;
  let fixture: ComponentFixture<DesperadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DesperadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DesperadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
