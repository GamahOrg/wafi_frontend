import { Component } from '@angular/core';
// import { TranslateService } from '@ngx-translate/core';
import { Configuration } from 'src/app/core/configurations/shared.config';
import { LanguageService } from 'src/app/core/services/language/language.service';

@Component({
  selector: 'app-language',
  templateUrl: './language.component.html',
  styleUrls: ['./language.component.scss'],
})
export class LanguageComponent {
  currentLang: string = '';
  languages = Configuration.languages;
  baseImagePath: string = './assets/images/layout/header/';

  constructor(
    // public translate: TranslateService,
    private _languageService: LanguageService
  ) {
    this._languageService.currentLang.subscribe(x=>{
        this.currentLang = x;
    })
  }

  onChnage(e: any) {
    this._languageService.updateCurrentLang(e);
    // this._languageService.updateDirection();
  }
}
