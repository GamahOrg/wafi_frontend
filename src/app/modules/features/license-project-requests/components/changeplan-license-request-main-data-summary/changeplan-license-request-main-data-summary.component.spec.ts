/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ChangeplanLicenseRequestMainDataSummaryComponent } from './changeplan-license-request-main-data-summary.component';

describe('ChangeplanLicenseRequestMainDataSummaryComponent', () => {
  let component: ChangeplanLicenseRequestMainDataSummaryComponent;
  let fixture: ComponentFixture<ChangeplanLicenseRequestMainDataSummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChangeplanLicenseRequestMainDataSummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangeplanLicenseRequestMainDataSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
