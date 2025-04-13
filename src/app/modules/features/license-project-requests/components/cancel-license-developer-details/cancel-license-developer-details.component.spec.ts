/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CancelLicenseDeveloperDetailsComponent } from './cancel-license-developer-details.component';

describe('CancelLicenseDeveloperDetailsComponent', () => {
  let component: CancelLicenseDeveloperDetailsComponent;
  let fixture: ComponentFixture<CancelLicenseDeveloperDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CancelLicenseDeveloperDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CancelLicenseDeveloperDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
