/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ChangeCharteredAccountRequestDetailsComponent } from './change-chartered-account-request-details.component';

describe('ChangeCharteredAccountRequestDetailsComponent', () => {
  let component: ChangeCharteredAccountRequestDetailsComponent;
  let fixture: ComponentFixture<ChangeCharteredAccountRequestDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChangeCharteredAccountRequestDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangeCharteredAccountRequestDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
