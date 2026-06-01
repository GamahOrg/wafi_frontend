import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangePlanUnitsBuyersApprovalDetailsComponent } from './change-plan-units-buyers-approval-details.component';

describe('ChangePlanUnitsBuyersApprovalDetailsComponent', () => {
  let component: ChangePlanUnitsBuyersApprovalDetailsComponent;
  let fixture: ComponentFixture<ChangePlanUnitsBuyersApprovalDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangePlanUnitsBuyersApprovalDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChangePlanUnitsBuyersApprovalDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
