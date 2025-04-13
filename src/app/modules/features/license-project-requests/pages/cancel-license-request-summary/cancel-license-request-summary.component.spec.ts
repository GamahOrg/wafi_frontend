/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CancelLicenseRequestSummaryComponent } from './cancel-license-request-summary.component';

describe('CancelLicenseRequestSummaryComponent', () => {
  let component: CancelLicenseRequestSummaryComponent;
  let fixture: ComponentFixture<CancelLicenseRequestSummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CancelLicenseRequestSummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CancelLicenseRequestSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
