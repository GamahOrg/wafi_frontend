/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { LincenseProjectZonesComponent } from './lincense-project-zones.component';

describe('LincenseProjectZonesComponent', () => {
  let component: LincenseProjectZonesComponent;
  let fixture: ComponentFixture<LincenseProjectZonesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LincenseProjectZonesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LincenseProjectZonesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
