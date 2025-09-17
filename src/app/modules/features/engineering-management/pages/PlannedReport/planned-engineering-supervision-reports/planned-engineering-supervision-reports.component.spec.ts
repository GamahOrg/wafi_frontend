import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlannedEngineeringSupervisionReportsComponent } from './planned-engineering-supervision-reports.component';

describe('PlannedEngineeringSupervisionReportsComponent', () => {
  let component: PlannedEngineeringSupervisionReportsComponent;
  let fixture: ComponentFixture<PlannedEngineeringSupervisionReportsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlannedEngineeringSupervisionReportsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlannedEngineeringSupervisionReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
