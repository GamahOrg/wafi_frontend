import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlannedEngineeringSupervisionReportsQualityAndBusinessProgressComponent } from './planned-engineering-supervision-reports-quality-and-business-progress.component';

describe('PlannedEngineeringSupervisionReportsQualityAndBusinessProgressComponent', () => {
  let component: PlannedEngineeringSupervisionReportsQualityAndBusinessProgressComponent;
  let fixture: ComponentFixture<PlannedEngineeringSupervisionReportsQualityAndBusinessProgressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlannedEngineeringSupervisionReportsQualityAndBusinessProgressComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlannedEngineeringSupervisionReportsQualityAndBusinessProgressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
