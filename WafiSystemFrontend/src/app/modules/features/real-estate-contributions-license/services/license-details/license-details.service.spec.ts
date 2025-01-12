import { TestBed } from '@angular/core/testing';

import { LicenseDetailsService } from './license-details.service';

describe('LicenseDetailsService', () => {
  let service: LicenseDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LicenseDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
