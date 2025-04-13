import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditNonConformityReportComponent } from './add-edit-non-conformity-report.component';

describe('AddEditNonConformityReportComponent', () => {
  let component: AddEditNonConformityReportComponent;
  let fixture: ComponentFixture<AddEditNonConformityReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditNonConformityReportComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddEditNonConformityReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
