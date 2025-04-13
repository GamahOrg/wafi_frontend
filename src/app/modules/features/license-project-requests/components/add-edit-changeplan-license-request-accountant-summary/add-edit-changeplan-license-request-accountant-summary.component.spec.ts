import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditChangeplanLicenseRequestAccountantSummaryComponent } from './add-edit-changeplan-license-request-accountant-summary.component';

describe('AddEditChangeplanLicenseRequestAccountantSummaryComponent', () => {
  let component: AddEditChangeplanLicenseRequestAccountantSummaryComponent;
  let fixture: ComponentFixture<AddEditChangeplanLicenseRequestAccountantSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditChangeplanLicenseRequestAccountantSummaryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddEditChangeplanLicenseRequestAccountantSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
