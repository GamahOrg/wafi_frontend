import { TestBed } from '@angular/core/testing';

import { RequestValidationService } from './request-validation.service';

describe('RequestValidationService', () => {
  let service: RequestValidationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RequestValidationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
