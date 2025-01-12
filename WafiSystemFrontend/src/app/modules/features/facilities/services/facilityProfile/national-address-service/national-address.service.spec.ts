import { TestBed } from '@angular/core/testing';

import { NationalAddressService } from './national-address.service';

describe('NationalAddressService', () => {
  let service: NationalAddressService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NationalAddressService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
