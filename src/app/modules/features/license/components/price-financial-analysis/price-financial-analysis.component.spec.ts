import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PriceFinancialAnalysisComponent } from './price-financial-analysis.component';

describe('PriceFinancialAnalysisComponent', () => {
  let component: PriceFinancialAnalysisComponent;
  let fixture: ComponentFixture<PriceFinancialAnalysisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PriceFinancialAnalysisComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PriceFinancialAnalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
