/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CertifiedLicenseDataFormComponent } from './certified-license-data-form.component';

describe('CertifiedLicenseDataFormComponent', () => {
  let component: CertifiedLicenseDataFormComponent;
  let fixture: ComponentFixture<CertifiedLicenseDataFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CertifiedLicenseDataFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CertifiedLicenseDataFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
