import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeriodicCharteredAccountantReportComponent } from './periodic-chartered-accountant-report.component';

describe('PeriodicCharteredAccountantReportComponent', () => {
  let component: PeriodicCharteredAccountantReportComponent;
  let fixture: ComponentFixture<PeriodicCharteredAccountantReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PeriodicCharteredAccountantReportComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PeriodicCharteredAccountantReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
