import { TestBed } from '@angular/core/testing';

import { RequestNotesService } from './request-notes.service';

describe('RequestNotesService', () => {
  let service: RequestNotesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RequestNotesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
