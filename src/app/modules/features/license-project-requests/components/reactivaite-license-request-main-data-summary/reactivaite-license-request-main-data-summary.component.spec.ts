/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ReactivaiteLicenseRequestMainDataSummaryComponent } from './reactivaite-license-request-main-data-summary.component';

describe('ReactivaiteLicenseRequestMainDataSummaryComponent', () => {
  let component: ReactivaiteLicenseRequestMainDataSummaryComponent;
  let fixture: ComponentFixture<ReactivaiteLicenseRequestMainDataSummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReactivaiteLicenseRequestMainDataSummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactivaiteLicenseRequestMainDataSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
