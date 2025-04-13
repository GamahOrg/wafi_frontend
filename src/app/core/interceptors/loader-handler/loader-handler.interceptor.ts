import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
} from '@angular/common/http';
import { finalize, map, Observable, tap } from 'rxjs';
import { LoaderService } from '../../services/loader/loader.service';
// import { Configuration } from 'src/app/shared/configurations/shared.config';
// import { SharedDataService } from 'src/app/shared/services/shared-data.service';
// import { SharedResponseModel } from '../../../shared/models/shared.model';
// import { LoaderService } from 'src/app/shared/services/loader/loader.service';

@Injectable()
export class LoaderHandlerInterceptor implements HttpInterceptor {
  constructor(private _loaderService: LoaderService) {}
  counter: number = 0;
  intercept(
    req: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
      this.counter++;

      // console.log("this.counter", this.counter);

      this._loaderService.showLoader.next(true);
    return next.handle(req).pipe(
      finalize(()=> {
        this.counter--
        // console.log("this.counter finalize", this.counter);
        if (this.counter == 0) {
          setTimeout(() => {
            this._loaderService.showLoader.next(false);
          }, 500);
        }
      }),
      // map((event: HttpEvent<any>) => {return event})
      // map((event: HttpEvent<any>) => {
      //   if (event instanceof HttpResponse) {
      //       this.counter--;
      //       if (this.counter == 0) {
      //         setTimeout(() => {
      //           this._loaderService.showLoader.next(false);
      //         }, 500);
      //       }
      //   }
      //   return event;
      // })
    );
  }
}

