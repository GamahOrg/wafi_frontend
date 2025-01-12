/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ReactivaiteLicenseRequestDeveloperSummaryComponent } from './reactivaite-license-request-developer-summary.component';

describe('ReactivaiteLicenseRequestDeveloperSummaryComponent', () => {
  let component: ReactivaiteLicenseRequestDeveloperSummaryComponent;
  let fixture: ComponentFixture<ReactivaiteLicenseRequestDeveloperSummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReactivaiteLicenseRequestDeveloperSummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactivaiteLicenseRequestDeveloperSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
