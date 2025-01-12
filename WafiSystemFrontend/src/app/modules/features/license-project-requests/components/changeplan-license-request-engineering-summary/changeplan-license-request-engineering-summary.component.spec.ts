/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ChangeplanLicenseRequestEngineeringSummaryComponent } from './changeplan-license-request-engineering-summary.component';

describe('ChangeplanLicenseRequestEngineeringSummaryComponent', () => {
  let component: ChangeplanLicenseRequestEngineeringSummaryComponent;
  let fixture: ComponentFixture<ChangeplanLicenseRequestEngineeringSummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChangeplanLicenseRequestEngineeringSummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangeplanLicenseRequestEngineeringSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
