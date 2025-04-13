import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditHealthAndSafetyMonitoringComponent } from './add-edit-health-and-safety-monitoring.component';

describe('AddEditHealthAndSafetyMonitoringComponent', () => {
  let component: AddEditHealthAndSafetyMonitoringComponent;
  let fixture: ComponentFixture<AddEditHealthAndSafetyMonitoringComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditHealthAndSafetyMonitoringComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddEditHealthAndSafetyMonitoringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
