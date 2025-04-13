import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LicenseRequestLicenseProjectExpectedFundingSourceComponent } from './license-request-license-project-expected-funding-source.component';

describe('LicenseRequestLicenseProjectExpectedFundingSourceComponent', () => {
  let component: LicenseRequestLicenseProjectExpectedFundingSourceComponent;
  let fixture: ComponentFixture<LicenseRequestLicenseProjectExpectedFundingSourceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LicenseRequestLicenseProjectExpectedFundingSourceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LicenseRequestLicenseProjectExpectedFundingSourceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
