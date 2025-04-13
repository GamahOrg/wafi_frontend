import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LicenseBeneficiaryContractFormAdditionalTermsComponent } from './license-beneficiary-contract-form-additional-terms.component';

describe('LicenseBeneficiaryContractFormAdditionalTermsComponent', () => {
  let component: LicenseBeneficiaryContractFormAdditionalTermsComponent;
  let fixture: ComponentFixture<LicenseBeneficiaryContractFormAdditionalTermsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LicenseBeneficiaryContractFormAdditionalTermsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LicenseBeneficiaryContractFormAdditionalTermsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
