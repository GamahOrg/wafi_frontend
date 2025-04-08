import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditChangeProjectNameSummaryComponent } from './add-edit-change-project-name-summary.component';

describe('AddEditChangeProjectNameSummaryComponent', () => {
  let component: AddEditChangeProjectNameSummaryComponent;
  let fixture: ComponentFixture<AddEditChangeProjectNameSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditChangeProjectNameSummaryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddEditChangeProjectNameSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
