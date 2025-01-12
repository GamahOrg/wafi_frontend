import { TestBed } from '@angular/core/testing';

import { SharedLicenseProjectService } from './shared-license-project.service';

describe('SharedLicenseProjectService', () => {
  let service: SharedLicenseProjectService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SharedLicenseProjectService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
