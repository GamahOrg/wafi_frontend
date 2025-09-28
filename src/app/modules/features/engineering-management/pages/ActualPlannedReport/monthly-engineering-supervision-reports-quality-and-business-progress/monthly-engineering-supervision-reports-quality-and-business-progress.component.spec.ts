import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthlyEngineeringSupervisionReportsQualityAndBusinessProgressComponent } from './monthly-engineering-supervision-reports-quality-and-business-progress.component';

describe('MonthlyEngineeringSupervisionReportsQualityAndBusinessProgressComponent', () => {
  let component: MonthlyEngineeringSupervisionReportsQualityAndBusinessProgressComponent;
  let fixture: ComponentFixture<MonthlyEngineeringSupervisionReportsQualityAndBusinessProgressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MonthlyEngineeringSupervisionReportsQualityAndBusinessProgressComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MonthlyEngineeringSupervisionReportsQualityAndBusinessProgressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
