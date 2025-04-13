/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ReactivaiteLicenseRequestDeveloperDetailsComponent } from './reactivaite-license-request-developer-details.component';

describe('ReactivaiteLicenseRequestDeveloperDetailsComponent', () => {
  let component: ReactivaiteLicenseRequestDeveloperDetailsComponent;
  let fixture: ComponentFixture<ReactivaiteLicenseRequestDeveloperDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReactivaiteLicenseRequestDeveloperDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactivaiteLicenseRequestDeveloperDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
