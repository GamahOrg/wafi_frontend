import { TestBed } from '@angular/core/testing';

import { FacilityProfileService } from './facility-profile.service';

describe('FacilityProfileService', () => {
  let service: FacilityProfileService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FacilityProfileService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
