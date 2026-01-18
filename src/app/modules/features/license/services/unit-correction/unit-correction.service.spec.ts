/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { UnitCorrectionService } from './unit-correction.service';

describe('Service: UnitCorrection', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UnitCorrectionService]
    });
  });

  it('should ...', inject([UnitCorrectionService], (service: UnitCorrectionService) => {
    expect(service).toBeTruthy();
  }));
});
