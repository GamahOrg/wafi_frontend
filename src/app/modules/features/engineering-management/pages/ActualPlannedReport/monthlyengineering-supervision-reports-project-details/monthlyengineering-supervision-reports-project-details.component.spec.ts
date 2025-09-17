import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthlyengineeringSupervisionReportsProjectDetailsComponent } from './monthlyengineering-supervision-reports-project-details.component';

describe('MonthlyengineeringSupervisionReportsProjectDetailsComponent', () => {
  let component: MonthlyengineeringSupervisionReportsProjectDetailsComponent;
  let fixture: ComponentFixture<MonthlyengineeringSupervisionReportsProjectDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MonthlyengineeringSupervisionReportsProjectDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MonthlyengineeringSupervisionReportsProjectDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
