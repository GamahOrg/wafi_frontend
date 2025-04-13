import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeriodicCharteredAccountantReportDetailsComponent } from './periodic-chartered-accountant-report-details.component';

describe('PeriodicCharteredAccountantReportDetailsComponent', () => {
  let component: PeriodicCharteredAccountantReportDetailsComponent;
  let fixture: ComponentFixture<PeriodicCharteredAccountantReportDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PeriodicCharteredAccountantReportDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PeriodicCharteredAccountantReportDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
