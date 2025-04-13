import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Configuration } from 'src/app/core/configurations/shared.config';
import {Title} from "@angular/platform-browser";
@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent {
  localization = {
    // pleaseChoose: "نأمل اختيار وجهتك",
    pleaseChoose: "قم بالبدء بمشروعك عقاري",
    or: "او",
    enter: "دخول",
    realEstateContributions: "المساهمات عقارية",
    wafi: "البيع على الخارطة",
    appTitle: "الهيئة العامة للعقار",
    beta: "اطلاق تجريبي"
  }
  constructor(
    private _router: Router,
    private titleService:Title
  ) {
  }
  ngOnInit(): void {
    this.setAppTitle();
  }
  private setAppTitle() {
    this.titleService.setTitle(this.localization.appTitle);
  }

  /**
   * navigateToWafiLogin
   */
  public navigateToWafiLogin(): void {
    this._router.navigateByUrl(`${Configuration.modules.auth}/${Configuration.pages.auth.login}`);
  }
  /**
   * navigateToRealEstateContributionsLogin
   */
  public navigateToRealEstateContributionsLogin() {
    this._router.navigateByUrl(`${Configuration.modules.realEstateContributionsAuth}/${Configuration.pages.realEstateContributionsAuth.login}`);

  }
}
