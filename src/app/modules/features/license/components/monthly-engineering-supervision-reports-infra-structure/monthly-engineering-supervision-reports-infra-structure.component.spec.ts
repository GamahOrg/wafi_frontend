import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthlyEngineeringSupervisionReportsInfraStructureComponent } from './monthly-engineering-supervision-reports-infra-structure.component';

describe('MonthlyEngineeringSupervisionReportsInfraStructureComponent', () => {
  let component: MonthlyEngineeringSupervisionReportsInfraStructureComponent;
  let fixture: ComponentFixture<MonthlyEngineeringSupervisionReportsInfraStructureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MonthlyEngineeringSupervisionReportsInfraStructureComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MonthlyEngineeringSupervisionReportsInfraStructureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
