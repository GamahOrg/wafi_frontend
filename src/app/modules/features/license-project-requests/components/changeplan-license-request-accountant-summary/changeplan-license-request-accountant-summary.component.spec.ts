/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ChangeplanLicenseRequestAccountantSummaryComponent } from './changeplan-license-request-accountant-summary.component';

describe('ChangeplanLicenseRequestAccountantSummaryComponent', () => {
  let component: ChangeplanLicenseRequestAccountantSummaryComponent;
  let fixture: ComponentFixture<ChangeplanLicenseRequestAccountantSummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChangeplanLicenseRequestAccountantSummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangeplanLicenseRequestAccountantSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
