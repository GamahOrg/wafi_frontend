import { TestBed } from '@angular/core/testing';

import { ProjectBusinessCaseReportService } from './project-business-case-report.service';

describe('ProjectBusinessCaseReportService', () => {
  let service: ProjectBusinessCaseReportService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProjectBusinessCaseReportService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
