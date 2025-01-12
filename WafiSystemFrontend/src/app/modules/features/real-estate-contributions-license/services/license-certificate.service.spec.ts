import { TestBed } from '@angular/core/testing';

import { LicenseCertificateService } from './license-certificate.service';

describe('LicenseCertificateService', () => {
  let service: LicenseCertificateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LicenseCertificateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
