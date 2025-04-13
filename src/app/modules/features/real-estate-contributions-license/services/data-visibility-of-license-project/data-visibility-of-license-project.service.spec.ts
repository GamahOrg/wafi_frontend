import { TestBed } from '@angular/core/testing';

import { DataVisibilityOfLicenseProjectService } from './data-visibility-of-license-project.service';

describe('DataVisibilityOfLicenseProjectService', () => {
  let service: DataVisibilityOfLicenseProjectService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataVisibilityOfLicenseProjectService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
