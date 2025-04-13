import { TestBed } from '@angular/core/testing';

import { YaqeenService } from './yaqeen.service';

describe('IntegrationService', () => {
  let service: YaqeenService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(YaqeenService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
