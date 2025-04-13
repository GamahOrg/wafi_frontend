/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CreateChangeAccountKeeperRequestComponent } from './create-change-account-keeper-request.component';

describe('CreateChangeAccountKeeperRequestComponent', () => {
  let component: CreateChangeAccountKeeperRequestComponent;
  let fixture: ComponentFixture<CreateChangeAccountKeeperRequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateChangeAccountKeeperRequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateChangeAccountKeeperRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
