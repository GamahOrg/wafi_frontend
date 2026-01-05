import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
  HttpResponse,
} from '@angular/common/http';
// import { catchError, map, Observable, of, tap, throwError } from 'rxjs';
// import { NotificationService } from 'src/app/shared/services/notifiaction-service/notification.service';
// import { NotificationData } from 'src/app/shared/models/notification.model';
// import { NotificationTypes } from 'src/app/shared/models/enums/notification-types.enum';
// import { SharedResponseModel } from 'src/app/shared/models/shared.model';
// import { Configuration } from 'src/app/shared/configurations/shared.config';
import { Router } from '@angular/router';
import { catchError, map, Observable, throwError } from 'rxjs';
import { Configuration } from '../../configurations/shared.config';
import { BaseResponse } from 'src/app/shared/models/base-response';
import { ToastrNotificatioService } from 'src/app/core/services/toastr-notification/toastr-notificatio.service';
import { LoaderService } from '../../services/loader/loader.service';

@Injectable()
export class ErrorsHandlerInterceptor implements HttpInterceptor {
  constructor(
    private _toastrNotificatioService: ToastrNotificatioService,
    private router: Router,
    private _loaderService: LoaderService
  ) {}

  intercept(
    req: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    return next.handle(req).pipe(
      map((event: HttpEvent<any>) => {
        if (event instanceof HttpResponse) {
          const skipErrorToast = req.headers.has('X-Skip-Error-Toast');
          if (!req.url.includes('i18n')&&!req.url.includes('CreateExcel') && !skipErrorToast) {
            let responseBody = event.body as BaseResponse<any>;
            if (responseBody && !responseBody.isDone) {
              this._toastrNotificatioService.showError(responseBody.message);
              this._loaderService.showLoader.next(false);
            }
          }
        }
        return event;
      }),
      catchError((error: HttpErrorResponse) => {
        this._loaderService.showLoader.next(false);
        console.log('in return of error handler interceptor', error);
        console.log('in return of error handler interceptor', error?.status);

        if (
          error?.status === Configuration.httpResponseStatusCode.badRequest ||
          error?.status ===
            Configuration.httpResponseStatusCode.paymentRequiredExperimental ||
          error?.status === Configuration.httpResponseStatusCode.notFound ||
          error?.status ===
            Configuration.httpResponseStatusCode.methodNotAllowed ||
          error?.status ===
            Configuration.httpResponseStatusCode.notAcceptable ||
          error?.status ===
            Configuration.httpResponseStatusCode.requestTimeout ||
          error?.status === Configuration.httpResponseStatusCode.conflict ||
          error?.status === Configuration.httpResponseStatusCode.gone ||
          error?.status === Configuration.httpResponseStatusCode.lengthRequired
        ) {
          let responseBody = error.error as BaseResponse<any>;
          if (!req.url.includes('i18n')) {
            if (responseBody) {
              if (!responseBody.isDone) {
                this._toastrNotificatioService.showError(
                  responseBody.message ? responseBody.message : error.statusText
                );
                this._loaderService.showLoader.next(false);
              }
            } else {
              this._toastrNotificatioService.showError(error.statusText);
              return throwError(() => error.statusText);
            }
          }
        }

        // Replaced with refresh token interceptor
        // if (
        //   error.status === Configuration.httpResponseStatusCode.unauthorized ||
        //   error.status === Configuration.httpResponseStatusCode.forbidden ||
        //   error.status ===
        //   Configuration.httpResponseStatusCode.proxyAuthenticationRequired
        // ) {

        //   // localStorage.clear();
        //   // this._toastrNotificatioService.showError(error.statusText);
        //   // this.router.navigate([Configuration.modules.auth]);
        //   // return throwError(() => error.statusText);
        // }

        if (
          error?.status ===
            Configuration.httpResponseStatusCode.internalServerError ||
          error?.status ===
            Configuration.httpResponseStatusCode.notImplemented ||
          error?.status === Configuration.httpResponseStatusCode.badGateway ||
          error?.status ===
            Configuration.httpResponseStatusCode.serviceUnavailable ||
          error?.status ===
            Configuration.httpResponseStatusCode.gatewayTimeout ||
          error?.status ===
            Configuration.httpResponseStatusCode.hTTPVersionNotSupported ||
          error?.status ===
            Configuration.httpResponseStatusCode.variantAlsoNegotiates ||
          error?.status ===
            Configuration.httpResponseStatusCode.insufficientStorage ||
          error?.status === Configuration.httpResponseStatusCode.loopDetected ||
          error?.status === Configuration.httpResponseStatusCode.notExtended ||
          error?.status ===
            Configuration.httpResponseStatusCode
              .networkAuthenticationRequired ||
          error?.status === Configuration.httpResponseStatusCode.unknownError
        ) {
          this._toastrNotificatioService.showError(error?.statusText);
          return throwError(() => error?.statusText);
        }

        return throwError(() => error?.statusText);
      })
    );
  }
}
