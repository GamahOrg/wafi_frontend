import { TestBed } from '@angular/core/testing';

import { EngineeringSupervisionPlannedReportActualInfrastructureService } from './engineering-supervision-planned-report-actual-infrastructure.service';

describe('EngineeringSupervisionPlannedReportActualInfrastructureService', () => {
  let service: EngineeringSupervisionPlannedReportActualInfrastructureService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EngineeringSupervisionPlannedReportActualInfrastructureService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
