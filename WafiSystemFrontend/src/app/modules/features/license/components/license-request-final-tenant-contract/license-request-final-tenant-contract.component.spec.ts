/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { LicenseRequestFinalTenantContractComponent } from './license-request-final-tenant-contract.component';

describe('LicenseRequestFinalTenantContractComponent', () => {
  let component: LicenseRequestFinalTenantContractComponent;
  let fixture: ComponentFixture<LicenseRequestFinalTenantContractComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LicenseRequestFinalTenantContractComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LicenseRequestFinalTenantContractComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
