/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FinalTenantContractComponent } from './final-tenant-contract.component';

describe('FinalTenantCntractComponent', () => {
  let component: FinalTenantContractComponent;
  let fixture: ComponentFixture<FinalTenantContractComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinalTenantContractComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinalTenantContractComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
