import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinalBeneficiaryContractComponent } from './final-beneficiary-contract.component';

describe('FinalBeneficiaryContractComponent', () => {
  let component: FinalBeneficiaryContractComponent;
  let fixture: ComponentFixture<FinalBeneficiaryContractComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinalBeneficiaryContractComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FinalBeneficiaryContractComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
