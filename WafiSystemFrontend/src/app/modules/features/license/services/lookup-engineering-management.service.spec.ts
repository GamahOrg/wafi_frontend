import { TestBed } from '@angular/core/testing';

import { LookupEngineeringManagementService } from './lookup-engineering-management.service';

describe('LookupEngineeringManagementService', () => {
  let service: LookupEngineeringManagementService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LookupEngineeringManagementService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
