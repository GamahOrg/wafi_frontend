import { TestBed } from '@angular/core/testing';

import { PlannedEngineerProjectDetailsService } from './planned-engineer-project-details.service';

describe('PlannedEngineerProjectDetailsService', () => {
  let service: PlannedEngineerProjectDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlannedEngineerProjectDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
