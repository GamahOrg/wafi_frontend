/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ProjectLicenseRequestTimeLineComponent } from './project-license-request-time-line.component';

describe('ProjectLicenseRequestTimeLineComponent', () => {
  let component: ProjectLicenseRequestTimeLineComponent;
  let fixture: ComponentFixture<ProjectLicenseRequestTimeLineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectLicenseRequestTimeLineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectLicenseRequestTimeLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
