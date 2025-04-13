import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LicenseRequestFinalBeneficiaryContractComponent } from './license-request-final-beneficiary-contract.component';

describe('LicenseRequestFinalBeneficiaryContractComponent', () => {
  let component: LicenseRequestFinalBeneficiaryContractComponent;
  let fixture: ComponentFixture<LicenseRequestFinalBeneficiaryContractComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LicenseRequestFinalBeneficiaryContractComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LicenseRequestFinalBeneficiaryContractComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
