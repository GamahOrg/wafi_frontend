import { TestBed } from '@angular/core/testing';

import { DetachedLicenseProjectUnitsService } from './detached-license-project-units.service';

describe('DetachedLicenseProjectUnitsService', () => {
  let service: DetachedLicenseProjectUnitsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DetachedLicenseProjectUnitsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
