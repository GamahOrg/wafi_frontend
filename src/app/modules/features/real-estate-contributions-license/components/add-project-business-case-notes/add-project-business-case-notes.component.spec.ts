import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddProjectBusinessCaseNotesComponent } from './add-project-business-case-notes.component';

describe('AddProjectBusinessCaseNotesComponent', () => {
  let component: AddProjectBusinessCaseNotesComponent;
  let fixture: ComponentFixture<AddProjectBusinessCaseNotesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddProjectBusinessCaseNotesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddProjectBusinessCaseNotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
