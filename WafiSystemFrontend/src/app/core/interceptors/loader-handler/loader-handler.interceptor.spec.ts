import { TestBed } from '@angular/core/testing';

import { LoaderHandlerInterceptor } from './loader-handler.interceptor';

describe('LoaderHandlerInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      LoaderHandlerInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: LoaderHandlerInterceptor = TestBed.inject(LoaderHandlerInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
