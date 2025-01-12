import { TestBed } from '@angular/core/testing';

import { BaseURlHandlerInterceptor } from './base-url-handler.interceptor';

describe('BaseURlHandlerInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      BaseURlHandlerInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: BaseURlHandlerInterceptor = TestBed.inject(BaseURlHandlerInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
