/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CancelLicenseEngineeringSummaryComponent } from './cancel-license-engineering-summary.component';

describe('CancelLicenseEngineeringSummaryComponent', () => {
  let component: CancelLicenseEngineeringSummaryComponent;
  let fixture: ComponentFixture<CancelLicenseEngineeringSummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CancelLicenseEngineeringSummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CancelLicenseEngineeringSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
