import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OTPInputComponent } from './otp-input.component';

describe('OTPInputComponent', () => {
  let component: OTPInputComponent;
  let fixture: ComponentFixture<OTPInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OTPInputComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OTPInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
