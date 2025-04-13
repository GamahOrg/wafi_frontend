/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ChangeAccountKeeperRequestDetailsComponent } from './change-account-keeper-request-details.component';

describe('ChangeAccountKeeperRequestDetailsComponent', () => {
  let component: ChangeAccountKeeperRequestDetailsComponent;
  let fixture: ComponentFixture<ChangeAccountKeeperRequestDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChangeAccountKeeperRequestDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangeAccountKeeperRequestDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
