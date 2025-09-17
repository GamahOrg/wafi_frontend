/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AddEditConstructionWorkStatusComponent } from './add-edit-construction-work-status.component';

describe('AddEditConstructionWorkStatusComponent', () => {
  let component: AddEditConstructionWorkStatusComponent;
  let fixture: ComponentFixture<AddEditConstructionWorkStatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddEditConstructionWorkStatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditConstructionWorkStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
