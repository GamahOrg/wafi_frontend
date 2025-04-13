/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ChangeplanLicenseRequestDeveloperSummaryComponent } from './changeplan-license-request-developer-summary.component';

describe('ChangeplanLicenseRequestDeveloperSummaryComponent', () => {
  let component: ChangeplanLicenseRequestDeveloperSummaryComponent;
  let fixture: ComponentFixture<ChangeplanLicenseRequestDeveloperSummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChangeplanLicenseRequestDeveloperSummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangeplanLicenseRequestDeveloperSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
