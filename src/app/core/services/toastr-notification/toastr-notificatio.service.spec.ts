import { TestBed } from '@angular/core/testing';

import { ToastrNotificatioService } from './toastr-notificatio.service';

describe('ToastrNotificatioService', () => {
  let service: ToastrNotificatioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ToastrNotificatioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
