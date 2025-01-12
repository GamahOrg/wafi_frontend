import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatementOfExpectedAnnualCashFlowsComponent } from './statement-of-expected-annual-cash-flows.component';

describe('StatementOfExpectedAnnualCashFlowsComponent', () => {
  let component: StatementOfExpectedAnnualCashFlowsComponent;
  let fixture: ComponentFixture<StatementOfExpectedAnnualCashFlowsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatementOfExpectedAnnualCashFlowsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StatementOfExpectedAnnualCashFlowsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
