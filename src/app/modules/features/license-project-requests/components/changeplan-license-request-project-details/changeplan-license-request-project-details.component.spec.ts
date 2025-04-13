/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ChangeplanLicenseRequestProjectDetailsComponent } from './changeplan-license-request-project-details.component';

describe('ChangeplanLicenseRequestProjectDetailsComponent', () => {
  let component: ChangeplanLicenseRequestProjectDetailsComponent;
  let fixture: ComponentFixture<ChangeplanLicenseRequestProjectDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChangeplanLicenseRequestProjectDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangeplanLicenseRequestProjectDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
