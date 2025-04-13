import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthlyEngineeringSupervisionReportsWorkStatusReportsComponent } from './monthly-engineering-supervision-reports-work-status-reports.component';

describe('MonthlyEngineeringSupervisionReportsWorkStatusReportsComponent', () => {
  let component: MonthlyEngineeringSupervisionReportsWorkStatusReportsComponent;
  let fixture: ComponentFixture<MonthlyEngineeringSupervisionReportsWorkStatusReportsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MonthlyEngineeringSupervisionReportsWorkStatusReportsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MonthlyEngineeringSupervisionReportsWorkStatusReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
