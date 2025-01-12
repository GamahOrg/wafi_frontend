import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpContextToken
} from '@angular/common/http';
import { EMPTY, empty, Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
export const securityAPI = new HttpContextToken(() => false);
@Injectable()
export class BaseURlHandlerInterceptor implements HttpInterceptor {
  constructor() { }

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const BaseURL: any = environment.baseURL;
    const securityURl: any = environment.securityURl;
    // console.log("req", req);
    // if (!req.url) {
    //   return EMPTY
    // }
    if(req.url){

      if (!req.url.includes('i18n')) {
        if (req.context.get(securityAPI) === true) {
          req = req.clone({
            url: securityURl + req.url,
          });
        }else{
          req = req.clone({
            url: BaseURL + req.url,
          });
        }
      }
    }
    return next.handle(req);
  } 
}
