import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditChangeplanLicenseRequestDeveloperSummaryComponent } from './add-edit-changeplan-license-request-developer-summary.component';

describe('AddEditChangeplanLicenseRequestDeveloperSummaryComponent', () => {
  let component: AddEditChangeplanLicenseRequestDeveloperSummaryComponent;
  let fixture: ComponentFixture<AddEditChangeplanLicenseRequestDeveloperSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditChangeplanLicenseRequestDeveloperSummaryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddEditChangeplanLicenseRequestDeveloperSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
