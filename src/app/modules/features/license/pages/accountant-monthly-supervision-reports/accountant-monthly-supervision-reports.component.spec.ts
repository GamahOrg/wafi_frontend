import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountantMonthlySupervisionReportsComponent } from './accountant-monthly-supervision-reports.component';

describe('AccountantMonthlySupervisionReportsComponent', () => {
  let component: AccountantMonthlySupervisionReportsComponent;
  let fixture: ComponentFixture<AccountantMonthlySupervisionReportsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountantMonthlySupervisionReportsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccountantMonthlySupervisionReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
