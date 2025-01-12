/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { RequestTimelineService } from './request-timeline.service';

describe('Service: RequestTimeline', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RequestTimelineService]
    });
  });

  it('should ...', inject([RequestTimelineService], (service: RequestTimelineService) => {
    expect(service).toBeTruthy();
  }));
});
