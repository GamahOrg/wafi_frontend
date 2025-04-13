import { TestBed } from '@angular/core/testing';

import { QualificationCertificatesService } from './qualification-certificates.service';

describe('QualificationCertificatesService', () => {
  let service: QualificationCertificatesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QualificationCertificatesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
