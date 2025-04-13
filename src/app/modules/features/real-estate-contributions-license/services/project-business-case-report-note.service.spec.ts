import { TestBed } from '@angular/core/testing';

import { ProjectBusinessCaseReportNoteService } from './project-business-case-report-note.service';

describe('ProjectBusinessCaseReportNoteService', () => {
  let service: ProjectBusinessCaseReportNoteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProjectBusinessCaseReportNoteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
