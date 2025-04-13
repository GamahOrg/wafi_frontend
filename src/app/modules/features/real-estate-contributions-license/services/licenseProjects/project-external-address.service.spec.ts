import { TestBed } from '@angular/core/testing';

import { ProjectExternalAddressService } from './project-external-address.service';

describe('ProjectExternalAddressService', () => {
  let service: ProjectExternalAddressService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProjectExternalAddressService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
