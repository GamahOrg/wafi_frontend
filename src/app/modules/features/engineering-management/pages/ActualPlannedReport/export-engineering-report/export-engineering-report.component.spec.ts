import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ExportEngineeringReportComponent } from './export-engineering-report.component';


describe('ExportEngineeringReportComponent', () => {
  let component: ExportEngineeringReportComponent;
  let fixture: ComponentFixture<ExportEngineeringReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExportEngineeringReportComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExportEngineeringReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
