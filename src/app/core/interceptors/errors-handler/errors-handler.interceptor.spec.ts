import { TestBed } from '@angular/core/testing';

import { ErrorsHandlerInterceptor } from './errors-handler.interceptor';

describe('ErrorsHandlerInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      ErrorsHandlerInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: ErrorsHandlerInterceptor = TestBed.inject(ErrorsHandlerInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
