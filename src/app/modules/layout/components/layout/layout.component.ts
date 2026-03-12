import { Component, OnDestroy, OnInit } from '@angular/core';
import { map, Observable, Subscription, switchMap, tap } from 'rxjs';
import { LanguageService } from 'src/app/core/services/language/language.service';
import { customerResponse } from 'src/app/shared/models/customer.model';
import { UserDataService } from 'src/app/core/services/user-data/user-data.service';
import { Router } from '@angular/router';
import { Configuration } from 'src/app/core/configurations/shared.config';
import { Direction } from 'src/app/core/models/enums/direction';
import { ToastrNotificatioService } from 'src/app/core/services/toastr-notification/toastr-notificatio.service';
import { Title } from '@angular/platform-browser';
import { StorageService } from 'src/app/core/services/storage/storage.service';
import { LoginUserTypeEnum } from 'src/app/modules/auth/models/login.model';
import {
  RatingStatusDto,
  UserRatingUpdateDto,
} from 'src/app/shared/models/rating-request.model';
import { RatingService } from 'src/app/shared/services/rating/rating.service';
import { RatingTypeEnum } from 'src/app/shared/models/enums/rating.enum';
import { PopupService } from 'src/app/shared/services/popup/popup.service';

import { PopupData } from 'src/app/shared/models/popup.model';
import { RatingComponent } from 'src/app/shared/components/rating/rating.component';
import { ButtonType } from 'src/app/shared/models/enums/button-type.model';
@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export default class LayoutComponent implements OnInit, OnDestroy {
  bodyDirection: any = Direction.rtl;
  subscriptions: Subscription[] = [];
  userData: customerResponse | null = null;
  appTitle: string = 'الهيئة العامة للعقار ';
  loginUserType: string | null = '';
  loginUserTypeEnum: LoginUserTypeEnum | null = null;
  recommendationRatingStatus!: RatingStatusDto;
  licenseRatingStatus!: RatingStatusDto[];
  selectedIndex: number = 0;
  constructor(
    private _languageService: LanguageService,
    private _userDataService: UserDataService,
    private _storageService: StorageService,
    private _router: Router,
    private _toastrNotificatioService: ToastrNotificatioService,
    private titleService: Title,
    private _ratingService: RatingService,
    private _popupService: PopupService,
  ) {}
  private setAppTitle() {
    this.titleService.setTitle(this.appTitle);
  }
  ngOnInit(): void {
    this.getLoginUserType();
    this.setAppTitle();
    this.observeDirectionChange();
    if (this._storageService.getIsFirstLoading() == 'true')
    this.checkRating().subscribe((res) => {
      this.observePopupConfirmAction();
      this._storageService.setIsFirstLoading(false);
    });
  }

  checkRating(): Observable<any> {
    return this._ratingService.getUserRecommendationRatingStatus().pipe(
      switchMap((res) => {
        if (res) this.recommendationRatingStatus = res;
        return this._ratingService.getInstantLicenseRatingStatus().pipe(
          tap((licenseRes) => {
            if (licenseRes)
              this.licenseRatingStatus = licenseRes.filter(
                (x) => x.shouldShowRating,
              );
            if (this.licenseRatingStatus.length > 0) {
              this.selectedIndex = 0;
              this.openRatingModal('stars', 0);
            }
          }),
        );
      }),
    );
  }
  openRatingModal(type: 'numbers' | 'stars' = 'numbers', index?: number): void {
    let Data = {
      id:
        type === 'numbers'
          ? 'UserRecommendation'
          : 'InstantLicenseServiceEaseOfUse' + index,
      minWidth: '30vw',
      iconClass: 'hgi hgi-stroke hgi-message-question',
      title: `قيّم تجربتك معنا`,
      component: RatingComponent,
      data: {
        ratingType:
          type === 'numbers'
            ? RatingTypeEnum.UserRecommendation
            : RatingTypeEnum.InstantLicenseServiceEaseOfUse,
      },
      buttons: [
        {
          icon: '',
          title: 'تخطي',
          actionType: ButtonType.cancel,
          isVisable: true,
          isDisables: false,
          // onclick: () => this.openNotesDialog()
        },
        {
          icon: '',
          title: 'ارسل التقييم',
          actionType: ButtonType.confirm,
          isVisable: true,
          isDisables: false,
          // onclick: () => this.openAssignEmployeeDialog()
        },
      ],
    } as PopupData;
    this._popupService.updatePopupData(Data);
  }
  observePopupConfirmAction(): void {
    this.subscriptions.push(
      this._popupService.cancelAction.subscribe((res) => {
        const ratingData = this._ratingService.currentRatingData.value;

        if (!ratingData) return;
        if (
          res &&
          (ratingData.id == 'UserRecommendation' ||
            ratingData.id.includes('InstantLicenseServiceEaseOfUse'))
        )
          this.dismissRating(ratingData);
      }),
    );
    this.subscriptions.push(
      this._popupService.confirmAction.subscribe(() => {
        const ratingData = this._ratingService.currentRatingData.value;

        if (!ratingData) return;
        if (
          ratingData &&
          (ratingData.id == 'UserRecommendation' ||
            ratingData.id.includes('InstantLicenseServiceEaseOfUse'))
        ) {
          this.submitRating(ratingData);
        }
      }),
    );
  }
  submitRating(PopupData: UserRatingUpdateDto) {
    const index = Number(PopupData.id.match(/\d+$/)?.[0]);
    this._ratingService
      .createRating({
        ratingType:
          PopupData.id == 'UserRecommendation'
            ? RatingTypeEnum.UserRecommendation
            : RatingTypeEnum.InstantLicenseServiceEaseOfUse,
        ratingValue: PopupData.ratingValue,
        notes: PopupData.notes,
        browserType: PopupData.browserType,
        licenseProjectId:
          PopupData.id == 'UserRecommendation'
            ? undefined
            : this.licenseRatingStatus[index].licenseProjectId,
        triggerType:
          PopupData.id == 'UserRecommendation'
            ? undefined
            : this.licenseRatingStatus[index].triggerType,
      })
      .subscribe((res) => {
        this._toastrNotificatioService.showSuccess(
          res.message || 'تم إرسال التقييم بنجاح',
        );
        this._popupService.dismissDialog();

        if (
          this.selectedIndex < this.licenseRatingStatus.length - 1 &&
          PopupData.id.includes('InstantLicenseServiceEaseOfUse')
        ) {
          this.selectedIndex++;
          this.openRatingModal('stars', this.selectedIndex);
        } else if (this.recommendationRatingStatus.shouldShowRating) {
          this.openRatingModal('numbers');
          this.recommendationRatingStatus.shouldShowRating = false;
        }
      });
  }
  private dismissRating(PopupData: any) {
    const index = Number(PopupData.id.match(/\d+$/)?.[0]);
    this._ratingService
      .dismissRating({
        ratingType:
          PopupData.id == 'UserRecommendation'
            ? RatingTypeEnum.UserRecommendation
            : RatingTypeEnum.InstantLicenseServiceEaseOfUse,
        licenseProjectId:
          PopupData.id == 'UserRecommendation'
            ? undefined
            : this.licenseRatingStatus[index].licenseProjectId,
        triggerType:
          PopupData.id == 'UserRecommendation'
            ? undefined
            : this.licenseRatingStatus[index].triggerType,
      })
      .subscribe((res) => {
        this._toastrNotificatioService.showInfo(
          res.message || 'تم تخطي التقييم ',
        );
        this._popupService.dismissDialog();

        if (
          this.selectedIndex < this.licenseRatingStatus.length - 1 &&
          PopupData.id.includes('InstantLicenseServiceEaseOfUse')
        ) {
          this.selectedIndex++;
          this.openRatingModal('stars', this.selectedIndex);
        } else if (this.recommendationRatingStatus.shouldShowRating) {
          this.openRatingModal('numbers');
          this.recommendationRatingStatus.shouldShowRating = false;
        }
      });
  }
  getLoginUserType(): void {
    this.loginUserType = this._storageService.getLoginUserType();
    this.loginUserTypeEnum = Number(this.loginUserType) as LoginUserTypeEnum;
    this.getCustomer();
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
              if (
                this.loginUserTypeEnum ===
                  LoginUserTypeEnum.delegateWafiPartner &&
                res.facilities.length === 0
              ) {
                this._toastrNotificatioService.showInfo(
                  'مفوض لا يوجد لديه منشأة !',
                );
                this.logout();
              } else if (
                res.facilities &&
                res.facilities.length === 0 &&
                this.loginUserTypeEnum === LoginUserTypeEnum.wafiPartner
              ) {
                this._router.navigate([
                  `${Configuration.modules.auth}/${Configuration.pages.auth.registration}`,
                ]);
              }
            }
          }
        }),
    );
  }
  private logout(): void {
    this.clearLocalStorage();
    this.navigateToLogin();
  }
  private navigateToLogin(): void {
    // this._router.navigate([`${Configuration.modules.auth}/${Configuration.pages.auth.wafiService}`])
    this._router.navigate([`${Configuration.modules.landing}`]);
  }
  private clearLocalStorage(): void {
    localStorage.clear();
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
        }),
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription: Subscription) => {
      subscription.unsubscribe();
    });
  }
}
