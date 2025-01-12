import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectBusinessCaseReportListComponent } from './project-business-case-report-list.component';

describe('ProjectBusinessCaseReportListComponent', () => {
  let component: ProjectBusinessCaseReportListComponent;
  let fixture: ComponentFixture<ProjectBusinessCaseReportListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectBusinessCaseReportListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectBusinessCaseReportListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
