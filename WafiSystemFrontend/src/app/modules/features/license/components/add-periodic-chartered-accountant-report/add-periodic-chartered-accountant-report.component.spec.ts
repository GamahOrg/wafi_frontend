import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPeriodicCharteredAccountantReportComponent } from './add-periodic-chartered-accountant-report.component';

describe('AddPeriodicCharteredAccountantReportComponent', () => {
  let component: AddPeriodicCharteredAccountantReportComponent;
  let fixture: ComponentFixture<AddPeriodicCharteredAccountantReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddPeriodicCharteredAccountantReportComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddPeriodicCharteredAccountantReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
