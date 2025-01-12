/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CancelLicenseDeveloperSummaryComponent } from './cancel-license-developer-summary.component';

describe('CancelLicenseDeveloperSummaryComponent', () => {
  let component: CancelLicenseDeveloperSummaryComponent;
  let fixture: ComponentFixture<CancelLicenseDeveloperSummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CancelLicenseDeveloperSummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CancelLicenseDeveloperSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
