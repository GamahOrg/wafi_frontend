/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ChangeAccountKeeperRequestSummaryComponent } from './change-account-keeper-request-summary.component';

describe('ChangeAccountKeeperRequestSummaryComponent', () => {
  let component: ChangeAccountKeeperRequestSummaryComponent;
  let fixture: ComponentFixture<ChangeAccountKeeperRequestSummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChangeAccountKeeperRequestSummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangeAccountKeeperRequestSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
