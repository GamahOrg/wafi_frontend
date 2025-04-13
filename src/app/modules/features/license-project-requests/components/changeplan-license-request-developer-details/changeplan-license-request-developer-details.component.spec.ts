/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ChangeplanLicenseRequestDeveloperDetailsComponent } from './changeplan-license-request-developer-details.component';

describe('ChangeplanLicenseRequestDeveloperDetailsComponent', () => {
  let component: ChangeplanLicenseRequestDeveloperDetailsComponent;
  let fixture: ComponentFixture<ChangeplanLicenseRequestDeveloperDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChangeplanLicenseRequestDeveloperDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangeplanLicenseRequestDeveloperDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
