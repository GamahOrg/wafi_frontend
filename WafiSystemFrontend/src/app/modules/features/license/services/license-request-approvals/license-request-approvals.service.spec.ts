import { TestBed } from '@angular/core/testing';

import { LicenseRequestApprovalsService } from './license-request-approvals.service';

describe('LicenseRequestApprovalsService', () => {
  let service: LicenseRequestApprovalsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LicenseRequestApprovalsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
