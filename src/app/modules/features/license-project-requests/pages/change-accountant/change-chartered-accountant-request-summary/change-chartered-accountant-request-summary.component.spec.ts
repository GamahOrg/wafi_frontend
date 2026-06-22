/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ChangeCharteredAccountantRequestSummaryComponent } from './change-chartered-accountant-request-summary.component';

describe('ChangeCharteredAccountantRequestSummaryComponent', () => {
  let component: ChangeCharteredAccountantRequestSummaryComponent;
  let fixture: ComponentFixture<ChangeCharteredAccountantRequestSummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChangeCharteredAccountantRequestSummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangeCharteredAccountantRequestSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
