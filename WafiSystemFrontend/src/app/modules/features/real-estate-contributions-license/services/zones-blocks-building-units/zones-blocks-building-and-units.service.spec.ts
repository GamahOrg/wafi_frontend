import { TestBed } from '@angular/core/testing';

import { ZonesBlocksBuildingAndUnitsService } from './zones-blocks-building-and-units.service';

describe('ZonesBlocksBuildingAndUnitsService', () => {
  let service: ZonesBlocksBuildingAndUnitsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ZonesBlocksBuildingAndUnitsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
