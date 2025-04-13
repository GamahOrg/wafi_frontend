import { TestBed } from '@angular/core/testing';

import { LicenseProjectQualityNoticeService } from './license-project-quality-notice.service';

describe('LicenseProjectQualityNoticeService', () => {
  let service: LicenseProjectQualityNoticeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LicenseProjectQualityNoticeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
