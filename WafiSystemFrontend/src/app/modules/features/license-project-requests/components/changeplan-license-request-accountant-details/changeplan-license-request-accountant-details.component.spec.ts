/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ChangeplanLicenseRequestAccountantDetailsComponent } from './changeplan-license-request-accountant-details.component';

describe('ChangeplanLicenseRequestAccountantDetailsComponent', () => {
  let component: ChangeplanLicenseRequestAccountantDetailsComponent;
  let fixture: ComponentFixture<ChangeplanLicenseRequestAccountantDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChangeplanLicenseRequestAccountantDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangeplanLicenseRequestAccountantDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
