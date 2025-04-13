import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditEngineeringSupervisionReportsProjectDetailsComponent } from './add-edit-engineering-supervision-reports-project-details.component';

describe('AddEditEngineeringSupervisionReportsProjectDetailsComponent', () => {
  let component: AddEditEngineeringSupervisionReportsProjectDetailsComponent;
  let fixture: ComponentFixture<AddEditEngineeringSupervisionReportsProjectDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditEngineeringSupervisionReportsProjectDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddEditEngineeringSupervisionReportsProjectDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
