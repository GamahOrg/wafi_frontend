import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeneficiaryContractFormAdditionalTermsFormComponent } from './beneficiary-contract-form-additional-terms-form.component';

describe('BeneficiaryContractFormAdditionalTermsFormComponent', () => {
  let component: BeneficiaryContractFormAdditionalTermsFormComponent;
  let fixture: ComponentFixture<BeneficiaryContractFormAdditionalTermsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BeneficiaryContractFormAdditionalTermsFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BeneficiaryContractFormAdditionalTermsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
