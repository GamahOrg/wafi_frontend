import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthlyEngineeringSupervisionReportsRisksAndSafetyComponent } from './monthly-engineering-supervision-reports-risks-and-safety.component';

describe('MonthlyEngineeringSupervisionReportsRisksAndSafetyComponent', () => {
  let component: MonthlyEngineeringSupervisionReportsRisksAndSafetyComponent;
  let fixture: ComponentFixture<MonthlyEngineeringSupervisionReportsRisksAndSafetyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MonthlyEngineeringSupervisionReportsRisksAndSafetyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MonthlyEngineeringSupervisionReportsRisksAndSafetyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
