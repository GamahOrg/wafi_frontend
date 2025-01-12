import { TestBed } from '@angular/core/testing';

import { LicenseProjectUnitService } from './license-project-unit.service';

describe('LicenseProjectUnitService', () => {
  let service: LicenseProjectUnitService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LicenseProjectUnitService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
