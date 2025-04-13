/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { GoogleAnalyticsService } from './GoogleAnalytics.service';

describe('Service: GoogleAnalytics', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GoogleAnalyticsService]
    });
  });

  it('should ...', inject([GoogleAnalyticsService], (service: GoogleAnalyticsService) => {
    expect(service).toBeTruthy();
  }));
});
