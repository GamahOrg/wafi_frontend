import { TestBed } from '@angular/core/testing';

import { LicenseProjectQualityNoticeReplyService } from './license-project-quality-notice-reply.service';

describe('LicenseProjectQualityNoticeReplyService', () => {
  let service: LicenseProjectQualityNoticeReplyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LicenseProjectQualityNoticeReplyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
