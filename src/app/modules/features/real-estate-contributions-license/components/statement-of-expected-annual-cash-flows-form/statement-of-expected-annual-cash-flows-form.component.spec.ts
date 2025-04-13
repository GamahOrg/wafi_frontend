import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatementOfExpectedAnnualCashFlowsFormComponent } from './statement-of-expected-annual-cash-flows-form.component';

describe('StatementOfExpectedAnnualCashFlowsFormComponent', () => {
  let component: StatementOfExpectedAnnualCashFlowsFormComponent;
  let fixture: ComponentFixture<StatementOfExpectedAnnualCashFlowsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatementOfExpectedAnnualCashFlowsFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StatementOfExpectedAnnualCashFlowsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
