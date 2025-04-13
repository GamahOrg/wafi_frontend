import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditChangeEngineerSummaryComponent } from './add-edit-change-engineer-summary.component';

describe('AddEditChangeEngineerSummaryComponent', () => {
  let component: AddEditChangeEngineerSummaryComponent;
  let fixture: ComponentFixture<AddEditChangeEngineerSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditChangeEngineerSummaryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddEditChangeEngineerSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
