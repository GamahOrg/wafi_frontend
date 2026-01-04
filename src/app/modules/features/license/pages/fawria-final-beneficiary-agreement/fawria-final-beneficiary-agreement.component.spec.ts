import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FawriaFinalBeneficiaryAgreementComponent } from './fawria-final-beneficiary-agreement.component';

describe('FawriaFinalBeneficiaryAgreementComponent', () => {
  let component: FawriaFinalBeneficiaryAgreementComponent;
  let fixture: ComponentFixture<FawriaFinalBeneficiaryAgreementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FawriaFinalBeneficiaryAgreementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FawriaFinalBeneficiaryAgreementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
