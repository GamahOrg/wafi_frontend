import { Component } from '@angular/core';
// import { FormBuilder, Validators } from '@angular/forms';

// import { TranslateService } from '@ngx-translate/core';
import { Configuration } from './core/configurations/shared.config';
import { LanguageService } from './core/services/language/language.service';
import { Subscription, every, iif, interval, map, mergeMap, sequenceEqual, tap } from 'rxjs';
import { StorageService } from './core/services/storage/storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  currentLang: string = '';
  constructor(
    // public translate: TranslateService,
    private _languageService: LanguageService,
    private _storageService: StorageService
  ) {
    // translate.addLangs(Configuration.languages);
    // translate.setDefaultLang(Configuration.defaultLang);
    // this._languageService.updateDirection();

    // Setting <html> attributes
    _languageService.currentLang.subscribe(lang => this.currentLang = lang);
    document.documentElement.lang = this.currentLang;
    document.dir = this.currentLang === 'en' ? 'ltr' : 'rtl';
  }
}


