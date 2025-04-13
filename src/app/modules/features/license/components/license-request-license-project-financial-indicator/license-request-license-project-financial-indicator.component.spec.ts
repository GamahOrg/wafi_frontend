import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LicenseRequestLicenseProjectFinancialIndicatorComponent } from './license-request-license-project-financial-indicator.component';

describe('LicenseRequestLicenseProjectFinancialIndicatorComponent', () => {
  let component: LicenseRequestLicenseProjectFinancialIndicatorComponent;
  let fixture: ComponentFixture<LicenseRequestLicenseProjectFinancialIndicatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LicenseRequestLicenseProjectFinancialIndicatorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LicenseRequestLicenseProjectFinancialIndicatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
