/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ReactivaiteLicenseRequestProjectSummaryComponent } from './reactivaite-license-request-project-summary.component';

describe('ReactivaiteLicenseRequestProjectSummaryComponent', () => {
  let component: ReactivaiteLicenseRequestProjectSummaryComponent;
  let fixture: ComponentFixture<ReactivaiteLicenseRequestProjectSummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReactivaiteLicenseRequestProjectSummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactivaiteLicenseRequestProjectSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
