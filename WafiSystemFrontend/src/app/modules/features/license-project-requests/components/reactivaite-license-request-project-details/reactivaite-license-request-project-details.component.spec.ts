/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ReactivaiteLicenseRequestProjectDetailsComponent } from './reactivaite-license-request-project-details.component';

describe('ReactivaiteLicenseRequestProjectDetailsComponent', () => {
  let component: ReactivaiteLicenseRequestProjectDetailsComponent;
  let fixture: ComponentFixture<ReactivaiteLicenseRequestProjectDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReactivaiteLicenseRequestProjectDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactivaiteLicenseRequestProjectDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
