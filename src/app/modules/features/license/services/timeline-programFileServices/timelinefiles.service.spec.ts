import { TestBed } from '@angular/core/testing';

import { TimelinefilesService } from './timelinefiles.service';

describe('TimelinefilesService', () => {
  let service: TimelinefilesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TimelinefilesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
