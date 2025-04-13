import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeneficiaryContractFormAdditionalTermsComponent } from './beneficiary-contract-form-additional-terms.component';

describe('BeneficiaryContractFormAdditionalTermsComponent', () => {
  let component: BeneficiaryContractFormAdditionalTermsComponent;
  let fixture: ComponentFixture<BeneficiaryContractFormAdditionalTermsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BeneficiaryContractFormAdditionalTermsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BeneficiaryContractFormAdditionalTermsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
