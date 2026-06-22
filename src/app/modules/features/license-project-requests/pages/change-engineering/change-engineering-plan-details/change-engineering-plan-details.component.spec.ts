/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ChangeEngineeringPlanDetailsComponent } from './change-engineering-plan-details.component';

describe('ChangeEngineeringPlanDetailsComponent', () => {
  let component: ChangeEngineeringPlanDetailsComponent;
  let fixture: ComponentFixture<ChangeEngineeringPlanDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChangeEngineeringPlanDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangeEngineeringPlanDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
