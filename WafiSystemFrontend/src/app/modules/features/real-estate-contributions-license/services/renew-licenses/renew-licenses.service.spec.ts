import { TestBed } from '@angular/core/testing';

import { RenewLicensesService } from './renew-licenses.service';

describe('RenewLicensesService', () => {
  let service: RenewLicensesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RenewLicensesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
