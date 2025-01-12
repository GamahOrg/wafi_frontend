import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeriodicCharteredAccountantReportListComponent } from './periodic-chartered-accountant-report-list.component';

describe('PeriodicCharteredAccountantReportListComponent', () => {
  let component: PeriodicCharteredAccountantReportListComponent;
  let fixture: ComponentFixture<PeriodicCharteredAccountantReportListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PeriodicCharteredAccountantReportListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PeriodicCharteredAccountantReportListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
