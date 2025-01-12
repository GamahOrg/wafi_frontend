import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LicenseRequestStatementOfExpectedAnnualCashFlowsComponent } from './license-request-statement-of-expected-annual-cash-flows.component';

describe('LicenseRequestStatementOfExpectedAnnualCashFlowsComponent', () => {
  let component: LicenseRequestStatementOfExpectedAnnualCashFlowsComponent;
  let fixture: ComponentFixture<LicenseRequestStatementOfExpectedAnnualCashFlowsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LicenseRequestStatementOfExpectedAnnualCashFlowsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LicenseRequestStatementOfExpectedAnnualCashFlowsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
