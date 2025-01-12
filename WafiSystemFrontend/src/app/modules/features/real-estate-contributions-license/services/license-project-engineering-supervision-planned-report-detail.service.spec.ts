import { TestBed } from '@angular/core/testing';

import { LicenseProjectEngineeringSupervisionPlannedReportDetailService } from './license-project-engineering-supervision-planned-report-detail.service';

describe('LicenseProjectEngineeringSupervisionPlannedReportDetailService', () => {
  let service: LicenseProjectEngineeringSupervisionPlannedReportDetailService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LicenseProjectEngineeringSupervisionPlannedReportDetailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
