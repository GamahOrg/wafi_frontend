import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LicenseRequestPriceFinancialAnalysisComponent } from './license-request-price-financial-analysis.component';

describe('LicenseRequestPriceFinancialAnalysisComponent', () => {
  let component: LicenseRequestPriceFinancialAnalysisComponent;
  let fixture: ComponentFixture<LicenseRequestPriceFinancialAnalysisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LicenseRequestPriceFinancialAnalysisComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LicenseRequestPriceFinancialAnalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
