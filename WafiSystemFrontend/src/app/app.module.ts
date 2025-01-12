import { GoogleAnalyticsService } from './shared/services/GoogleAnalytics.service';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreModule } from './core/core.module';
import {HttpClient, HttpClientModule} from '@angular/common/http';
// import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
// import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import { ToastContainerModule, ToastNoAnimationModule, ToastrModule } from 'ngx-toastr';
// AoT requires an exported function for factories
// export function HttpLoaderFactory(httpClient: HttpClient) {
//   return new TranslateHttpLoader(httpClient);
// }
@NgModule({
  declarations: [
    AppComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CoreModule,
    HttpClientModule,
    // TranslateModule.forRoot({
    //   loader: {
    //     provide: TranslateLoader,
    //     useFactory: HttpLoaderFactory,
    //     deps: [HttpClient]
    //   }
    // }),
    ToastNoAnimationModule,
    ToastrModule.forRoot(),
    ToastContainerModule
  ],
  providers: [
    GoogleAnalyticsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
