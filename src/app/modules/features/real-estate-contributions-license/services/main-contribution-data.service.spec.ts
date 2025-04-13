import { TestBed } from '@angular/core/testing';

import { MainContributionDataService } from './main-contribution-data.service';

describe('MainContributionDataService', () => {
  let service: MainContributionDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MainContributionDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
