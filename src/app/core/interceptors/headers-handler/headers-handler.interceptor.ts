import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpContextToken,
  HttpResponse,
} from '@angular/common/http';
import { Observable, map } from 'rxjs';
// import { ChangeLanguageService } from 'src/app/services/changeLanguage/change-language.service';
export const fileUploader = new HttpContextToken(() => false);
@Injectable()
export class HeadersHandlerInterceptor implements HttpInterceptor {
  constructor(
    // private changeLanguageService: ChangeLanguageService
  ) { }

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    // add authorization to request header
    if (localStorage.getItem('token') !== null) {
      const token = 'Bearer ' + localStorage.getItem('token');
      if (token) {
        req = req.clone({
          headers: req.headers.set('Authorization', `${token}`),
        });
      }
    }

    // this.changeLanguageService.getSelectedLang().subscribe((data) => {
    req = req.clone({
      headers: req.headers.set('Accept-Language', 'ar-EG'),
    });

    if (req.context.get(fileUploader) === true) {
      req = req.clone({
        reportProgress: true,
        responseType: 'json',
      });
      return next.handle(req);
    } else {
      // add content type to request header
      if (!req.headers.has('Content-Type')) {
        req = req.clone({
          headers: req.headers.set('Content-Type', 'application/json'),
        });
      }
      return next.handle(req);
    }
  }
}
