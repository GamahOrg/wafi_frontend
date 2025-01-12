/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ProjectLicenseRequestNotesComponent } from './project-license-request-notes.component';

describe('ProjectLicenseRequestNotesComponent', () => {
  let component: ProjectLicenseRequestNotesComponent;
  let fixture: ComponentFixture<ProjectLicenseRequestNotesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectLicenseRequestNotesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectLicenseRequestNotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
