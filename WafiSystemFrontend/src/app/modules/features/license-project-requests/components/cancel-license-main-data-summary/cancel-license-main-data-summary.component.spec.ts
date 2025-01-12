/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CancelLicenseMainDataSummaryComponent } from './cancel-license-main-data-summary.component';

describe('CancelLicenseMainDataSummaryComponent', () => {
  let component: CancelLicenseMainDataSummaryComponent;
  let fixture: ComponentFixture<CancelLicenseMainDataSummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CancelLicenseMainDataSummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CancelLicenseMainDataSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
