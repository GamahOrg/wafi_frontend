import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditActualValueWorkStatuesReportComponent } from './add-edit-actual-value-work-statues-report.component';

describe('AddEditActualValueWorkStatuesReportComponent', () => {
  let component: AddEditActualValueWorkStatuesReportComponent;
  let fixture: ComponentFixture<AddEditActualValueWorkStatuesReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditActualValueWorkStatuesReportComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddEditActualValueWorkStatuesReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
