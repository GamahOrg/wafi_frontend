/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CancelLicenseAccountantDetailsComponent } from './cancel-license-accountant-details.component';

describe('CancelLicenseAccountantDetailsComponent', () => {
  let component: CancelLicenseAccountantDetailsComponent;
  let fixture: ComponentFixture<CancelLicenseAccountantDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CancelLicenseAccountantDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CancelLicenseAccountantDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
