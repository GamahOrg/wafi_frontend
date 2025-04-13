import { Injectable, Injector } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
  HttpErrorResponse
} from '@angular/common/http';
import { BehaviorSubject, Observable, catchError, filter, map, switchMap, take, throwError } from 'rxjs';
import { RefreshTokenService } from '../../services/refresh-token/refresh-token.service';
import { BaseResponse } from 'src/app/shared/models/base-response';
import { ToastrNotificatioService } from '../../services/toastr-notification/toastr-notificatio.service';
import { LoaderService } from '../../services/loader/loader.service';
import { Router } from '@angular/router';
import { StorageService } from '../../services/storage/storage.service';
import { Configuration } from '../../configurations/shared.config';

@Injectable()
export class RefreshTokenInterceptor implements HttpInterceptor {
  private refreshTokenInProgress = false;
  private refreshTokenSubject: BehaviorSubject<string|null> = new BehaviorSubject<string|null>(
    null
  );
  constructor(
    private _toastrNotificatioService: ToastrNotificatioService,
    private router: Router,
    private _loaderService: LoaderService,
    private _refreshTokenService: RefreshTokenService,
    private _storageService: StorageService) {

  }

  intercept(
    req: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    return next.handle(req).pipe(
      catchError((error: HttpErrorResponse) => {
        this._loaderService.showLoader.next(false);
        console.log('in return of error handler interceptor refresh', error);
        console.log('in return of error handler interceptor refresh', error.status);

        if (
          error.status === Configuration.httpResponseStatusCode.unauthorized ||
          error.status === Configuration.httpResponseStatusCode.forbidden ||
          error.status ===
          Configuration.httpResponseStatusCode.proxyAuthenticationRequired
        ) {
          return this.handleUnauthorized(req, next);
        }
        return throwError(() => error.statusText);
      })
    );
  }

  private handleUnauthorized(request: HttpRequest<any>, next: HttpHandler) {
    if (!this.refreshTokenInProgress) {
      this.refreshTokenInProgress = true;
      this.refreshTokenSubject.next(null);

      const token = this._storageService.getRefreshToken();
      this._loaderService.showLoader.next(true);

      if (token) {
        return this._refreshTokenService.refreshToken(token).pipe(
          switchMap((res: any) => {
            this.refreshTokenInProgress = false;
            if (res.data != null) {
              this._storageService.saveTokens(res.data);

              this.refreshTokenSubject.next(res.data.accessToken);

              return next.handle(this.addTokenHeader(request, res.data.accessToken));
            } else {
              this.refreshTokenInProgress = false;
              return this.logout();
            }
          }),
          catchError((error) => {
            this.refreshTokenInProgress = false;
            return this.logout();     
          })
        );
      }else{
        return this.logout();   
      }

    }

    return this.refreshTokenSubject.pipe(
      filter(token => token !== null),
      take(1),
      switchMap((token) => next.handle(this.addTokenHeader(request, token as string)))
    );
  }

  private logout() {
    localStorage.clear();
    this._toastrNotificatioService.showError('نأمل اعادة تسجيل الدخول');
    // this.router.navigate([Configuration.modules.auth]);
    this.router.navigate([Configuration.modules.landing]);
    // this.router.navigate([`${Configuration.modules.realEstateContributionsAuth}/${Configuration.pages.realEstateContributionsAuth.login}`])
  
    return throwError(() => 'Unauthorized');
  }
  
  private addTokenHeader(request: HttpRequest<any>, accessToken: string) {
    const token = 'Bearer ' + accessToken;
    return request.clone({ headers: request.headers.set('Authorization', token) });
  }

}
