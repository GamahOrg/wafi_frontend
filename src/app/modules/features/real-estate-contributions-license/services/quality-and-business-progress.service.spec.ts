import { TestBed } from '@angular/core/testing';

import { QualityAndBusinessProgressService } from './quality-and-business-progress.service';

describe('QualityAndBusinessProgressService', () => {
  let service: QualityAndBusinessProgressService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QualityAndBusinessProgressService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
