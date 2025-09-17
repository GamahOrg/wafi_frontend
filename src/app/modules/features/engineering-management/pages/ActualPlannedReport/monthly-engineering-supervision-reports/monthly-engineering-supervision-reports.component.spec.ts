import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthlyEngineeringSupervisionReportsComponent } from './monthly-engineering-supervision-reports.component';

describe('MonthlyEngineeringSupervisionReportsComponent', () => {
  let component: MonthlyEngineeringSupervisionReportsComponent;
  let fixture: ComponentFixture<MonthlyEngineeringSupervisionReportsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MonthlyEngineeringSupervisionReportsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MonthlyEngineeringSupervisionReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
