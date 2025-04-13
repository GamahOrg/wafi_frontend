import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { LanguageService } from 'src/app/core/services/language/language.service';
import { customerResponse } from 'src/app/shared/models/customer.model';
import { UserDataService } from 'src/app/core/services/user-data/user-data.service';
import { Router } from '@angular/router';
import { Configuration } from 'src/app/core/configurations/shared.config';
import { Direction } from 'src/app/core/models/enums/direction';
import { ToastrNotificatioService } from 'src/app/core/services/toastr-notification/toastr-notificatio.service';
import { Title } from "@angular/platform-browser";
import { StorageService } from 'src/app/core/services/storage/storage.service';
import { LoginUserTypeEnum } from 'src/app/modules/auth/models/login.model';
@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export default class LayoutComponent implements OnInit, OnDestroy {
  bodyDirection: any = Direction.rtl;
  subscriptions: Subscription[] = [];
  userData: customerResponse | null = null;
  appTitle: string = "الهيئة العامة للعقار ";
  loginUserType: string | null = "";
  loginUserTypeEnum: LoginUserTypeEnum | null = null;

  constructor(
    private _languageService: LanguageService,
    private _userDataService: UserDataService,
    private _storageService: StorageService,
    private _router: Router,
    private _toastrNotificatioService: ToastrNotificatioService,
    private titleService: Title
  ) {
  }
  private setAppTitle() {
    this.titleService.setTitle(this.appTitle);
  }
  ngOnInit(): void {
    this.getLoginUserType()
    this.setAppTitle();
    this.observeDirectionChange();
  }
  getLoginUserType(): void {
    this.loginUserType = this._storageService.getLoginUserType()
    this.loginUserTypeEnum = Number(this.loginUserType) as LoginUserTypeEnum;
    this.getCustomer()
  }
  getCustomer(): void {
    this.subscriptions.push(
      this._userDataService
        .GetCustomer(this.loginUserTypeEnum as LoginUserTypeEnum)
        .subscribe((res: customerResponse | null) => {
          if (res) {
            this.userData = res;
            this.updateCustomerData(res);
            if (!this.userData.isEmployee) {
              if (this.loginUserTypeEnum === LoginUserTypeEnum.delegateWafiPartner && res.facilities.length === 0) {
                this._toastrNotificatioService.showInfo("مفوض لا يوجد لديه منشأة !")
                this.logout();
              } else if (res.facilities && res.facilities.length === 0 && this.loginUserTypeEnum === LoginUserTypeEnum.wafiPartner) {
                this._router.navigate([
                  `${Configuration.modules.auth}/${Configuration.pages.auth.registration}`,
                ]);
              }
            }
          }
        })
    );
  }
  private logout(): void {
    this.clearLocalStorage();
    this.navigateToLogin()
  }
  private navigateToLogin(): void {
    // this._router.navigate([`${Configuration.modules.auth}/${Configuration.pages.auth.wafiService}`])
    this._router.navigate([`${Configuration.modules.landing}`])
  }
  private clearLocalStorage(): void {
    localStorage.clear()
  }
  updateCustomerData(customerData: customerResponse): void {
    this._userDataService.updateCustomerData(customerData);
  }
  observeDirectionChange(): void {
    this.subscriptions.push(
      this._languageService
        .observeDirection()
        .subscribe((direction: Direction) => {
          this.bodyDirection = Direction[direction];
        })
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription: Subscription) => {
      subscription.unsubscribe();
    });
  }
}
