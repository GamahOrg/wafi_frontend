import { TestBed } from '@angular/core/testing';

import { RenewQualifyingListService } from './renew-qualifying-list.service';

describe('RenewQualifyingListService', () => {
  let service: RenewQualifyingListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RenewQualifyingListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
