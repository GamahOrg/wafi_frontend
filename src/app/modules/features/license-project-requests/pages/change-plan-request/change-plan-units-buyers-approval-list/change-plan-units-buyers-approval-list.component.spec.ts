import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangePlanUnitsBuyersApprovalListComponent } from './change-plan-units-buyers-approval-list.component';

describe('ChangePlanUnitsBuyersApprovalListComponent', () => {
  let component: ChangePlanUnitsBuyersApprovalListComponent;
  let fixture: ComponentFixture<ChangePlanUnitsBuyersApprovalListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangePlanUnitsBuyersApprovalListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChangePlanUnitsBuyersApprovalListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
