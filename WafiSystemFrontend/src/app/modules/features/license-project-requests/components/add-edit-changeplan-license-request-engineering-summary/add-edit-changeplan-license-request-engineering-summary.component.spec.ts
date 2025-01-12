import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditChangeplanLicenseRequestEngineeringSummaryComponent } from './add-edit-changeplan-license-request-engineering-summary.component';

describe('AddEditChangeplanLicenseRequestEngineeringSummaryComponent', () => {
  let component: AddEditChangeplanLicenseRequestEngineeringSummaryComponent;
  let fixture: ComponentFixture<AddEditChangeplanLicenseRequestEngineeringSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditChangeplanLicenseRequestEngineeringSummaryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddEditChangeplanLicenseRequestEngineeringSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
