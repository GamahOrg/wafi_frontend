/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ChangeplanLicenseRequestMainDataDetailsComponent } from './changeplan-license-request-main-data-details.component';

describe('ChangeplanLicenseRequestMainDataDetailsComponent', () => {
  let component: ChangeplanLicenseRequestMainDataDetailsComponent;
  let fixture: ComponentFixture<ChangeplanLicenseRequestMainDataDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChangeplanLicenseRequestMainDataDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangeplanLicenseRequestMainDataDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
