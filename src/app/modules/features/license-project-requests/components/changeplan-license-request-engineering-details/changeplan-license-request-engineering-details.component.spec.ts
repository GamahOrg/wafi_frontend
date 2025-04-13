/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ChangeplanLicenseRequestEngineeringDetailsComponent } from './changeplan-license-request-engineering-details.component';

describe('ChangeplanLicenseRequestEngineeringDetailsComponent', () => {
  let component: ChangeplanLicenseRequestEngineeringDetailsComponent;
  let fixture: ComponentFixture<ChangeplanLicenseRequestEngineeringDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChangeplanLicenseRequestEngineeringDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangeplanLicenseRequestEngineeringDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
