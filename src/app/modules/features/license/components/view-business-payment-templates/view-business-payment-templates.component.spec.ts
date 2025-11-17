/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ViewBusinessPaymentTemplatesComponent } from './view-business-payment-templates.component';

describe('ViewBusinessPaymentTemplatesComponent', () => {
  let component: ViewBusinessPaymentTemplatesComponent;
  let fixture: ComponentFixture<ViewBusinessPaymentTemplatesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewBusinessPaymentTemplatesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewBusinessPaymentTemplatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
