import { TestBed } from '@angular/core/testing';

import { LicenseProjectRiskService } from './license-project-risk.service';

describe('LicenseProjectRiskService', () => {
  let service: LicenseProjectRiskService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LicenseProjectRiskService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
