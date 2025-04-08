import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditChangeLicenseProjectSpaceOrUnitsSummaryComponent } from './add-edit-change-license-project-space-or-units-summary.component';

describe('AddEditChangeLicenseProjectSpaceOrUnitsSummaryComponent', () => {
  let component: AddEditChangeLicenseProjectSpaceOrUnitsSummaryComponent;
  let fixture: ComponentFixture<AddEditChangeLicenseProjectSpaceOrUnitsSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditChangeLicenseProjectSpaceOrUnitsSummaryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddEditChangeLicenseProjectSpaceOrUnitsSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
