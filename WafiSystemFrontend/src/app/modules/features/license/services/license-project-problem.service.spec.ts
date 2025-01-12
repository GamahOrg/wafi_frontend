import { TestBed } from '@angular/core/testing';

import { LicenseProjectProblemService } from './license-project-problem.service';

describe('LicenseProjectProblemService', () => {
  let service: LicenseProjectProblemService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LicenseProjectProblemService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
