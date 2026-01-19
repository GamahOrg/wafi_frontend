/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DeedsAndBuildingPermitsTabComponent } from './deeds-and-building-permits-tab.component';

describe('DeedsAndBuildingPermitsTabComponent', () => {
  let component: DeedsAndBuildingPermitsTabComponent;
  let fixture: ComponentFixture<DeedsAndBuildingPermitsTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeedsAndBuildingPermitsTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeedsAndBuildingPermitsTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
