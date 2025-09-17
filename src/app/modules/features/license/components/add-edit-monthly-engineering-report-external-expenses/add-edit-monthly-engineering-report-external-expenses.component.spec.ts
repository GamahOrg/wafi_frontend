/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AddEditMonthlyEngineeringReportExternalExpensesComponent } from './add-edit-monthly-engineering-report-external-expenses.component';

describe('AddEditMonthlyEngineeringReportExternalExpensesComponent', () => {
  let component: AddEditMonthlyEngineeringReportExternalExpensesComponent;
  let fixture: ComponentFixture<AddEditMonthlyEngineeringReportExternalExpensesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddEditMonthlyEngineeringReportExternalExpensesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditMonthlyEngineeringReportExternalExpensesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
