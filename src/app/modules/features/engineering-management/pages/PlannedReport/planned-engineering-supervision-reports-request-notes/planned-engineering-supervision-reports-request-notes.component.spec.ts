import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlannedEngineeringSupervisionReportsRequestNotesComponent } from './planned-engineering-supervision-reports-request-notes.component';

describe('PlannedEngineeringSupervisionReportsRequestNotesComponent', () => {
  let component: PlannedEngineeringSupervisionReportsRequestNotesComponent;
  let fixture: ComponentFixture<PlannedEngineeringSupervisionReportsRequestNotesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlannedEngineeringSupervisionReportsRequestNotesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlannedEngineeringSupervisionReportsRequestNotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
