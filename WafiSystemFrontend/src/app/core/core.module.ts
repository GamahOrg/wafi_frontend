import { APP_INITIALIZER, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { LanguageService } from './services/language/language.service';
// import { TranslateModule } from '@ngx-translate/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoaderHandlerInterceptor } from './interceptors/loader-handler/loader-handler.interceptor';
import { BaseURlHandlerInterceptor } from './interceptors/base-URL-handler/base-url-handler.interceptor';
import { HeadersHandlerInterceptor } from './interceptors/headers-handler/headers-handler.interceptor';
import { ErrorsHandlerInterceptor } from './interceptors/errors-handler/errors-handler.interceptor';
import { ToastrNotificatioService } from './services/toastr-notification/toastr-notificatio.service';
import { LoaderService } from './services/loader/loader.service';
import { UserDataService } from './services/user-data/user-data.service';
import { QualificationServiceRequestService } from '../modules/features/qualifying/services/qualification-type/qualification-service-request.service';
import { RequestValidationService } from './services/request-validation/request-validation.service';
import { RefreshTokenService } from './services/refresh-token/refresh-token.service';
import { StorageService } from './services/storage/storage.service';
import { RefreshTokenInterceptor } from './interceptors/refresh-handler/refresh-token.interceptor';
import { SignalRService } from './services/signalR/signal-r.service';
import { AuthGuard } from './guards/auth-guard/auth.guard';
import { TokenGuard } from './guards/token-guard/token.guard';
import { MailConfirmationComponent } from './pages/mail-confirmation/mail-confirmation.component';
import { MailConfirmationService } from './services/mail-confirmation/mail-confirmation.service';
import { LoaderComponent } from './components/loader/loader.component';

@NgModule({
  declarations: [
    LoaderComponent,
    MailConfirmationComponent
  ],
  providers: [
    LanguageService,
    LoaderService,
    StorageService,
    RefreshTokenService,
    ToastrNotificatioService,
    UserDataService,
    QualificationServiceRequestService,
    RequestValidationService,
    MailConfirmationService,
    AuthGuard,
    TokenGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoaderHandlerInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: BaseURlHandlerInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HeadersHandlerInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorsHandlerInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: RefreshTokenInterceptor,
      multi: true,
    },
    SignalRService,
    {
      provide: APP_INITIALIZER,
      useFactory: (signalrService: SignalRService) => () => signalrService.initiateSignalrConnection(),
      deps: [SignalRService],
      multi: true,
    }
  ],
  imports: [
    CommonModule,
    BrowserModule,
    // import HttpClientModule after BrowserModule.
    HttpClientModule,
    // TranslateModule.forChild(),
  ],
  exports:[
    LoaderComponent
  ]
})
export class CoreModule {}
