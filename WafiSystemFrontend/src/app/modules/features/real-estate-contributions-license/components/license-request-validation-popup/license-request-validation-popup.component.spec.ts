import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LicenseRequestValidationPopupComponent } from './license-request-validation-popup.component';

describe('LicenseRequestValidationPopupComponent', () => {
  let component: LicenseRequestValidationPopupComponent;
  let fixture: ComponentFixture<LicenseRequestValidationPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LicenseRequestValidationPopupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LicenseRequestValidationPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
