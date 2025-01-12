/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CreateReactivateLicenseRequestComponent } from './create-reactivate-license-request.component';

describe('CreateReactivateLicenseRequestComponent', () => {
  let component: CreateReactivateLicenseRequestComponent;
  let fixture: ComponentFixture<CreateReactivateLicenseRequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateReactivateLicenseRequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateReactivateLicenseRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
