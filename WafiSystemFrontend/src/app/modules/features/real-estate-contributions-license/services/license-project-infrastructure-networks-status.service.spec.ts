import { TestBed } from '@angular/core/testing';

import { LicenseProjectInfrastructureNetworksStatusService } from './license-project-infrastructure-networks-status.service';

describe('LicenseProjectInfrastructureNetworksStatusService', () => {
  let service: LicenseProjectInfrastructureNetworksStatusService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LicenseProjectInfrastructureNetworksStatusService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
