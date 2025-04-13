import { TestBed } from '@angular/core/testing';

import { HeadersHandlerInterceptor } from './headers-handler.interceptor';

describe('HeadersHandlerInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      HeadersHandlerInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: HeadersHandlerInterceptor = TestBed.inject(HeadersHandlerInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
