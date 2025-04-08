import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WithdrawSurplusBeforeProjectEndRequestSummaryComponent } from './withdraw-surplus-before-project-end-request-summary.component';

describe('WithdrawSurplusBeforeProjectEndRequestSummaryComponent', () => {
  let component: WithdrawSurplusBeforeProjectEndRequestSummaryComponent;
  let fixture: ComponentFixture<WithdrawSurplusBeforeProjectEndRequestSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WithdrawSurplusBeforeProjectEndRequestSummaryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WithdrawSurplusBeforeProjectEndRequestSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
