import { Component, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { customerResponse } from 'src/app/shared/models/customer.model';
import { UserDataService } from 'src/app/core/services/user-data/user-data.service';
import { Configuration } from 'src/app/core/configurations/shared.config';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { StorageService } from 'src/app/core/services/storage/storage.service';
import { LoginUserTypeEnum } from 'src/app/modules/auth/models/login.model';
import { RatingComponent } from 'src/app/shared/components/rating/rating.component';
import { ButtonType } from 'src/app/shared/models/enums/button-type.model';
import { PopupData } from 'src/app/shared/models/popup.model';
import { PopupService } from 'src/app/shared/services/popup/popup.service';
import { RatingTypeEnum } from 'src/app/shared/models/enums/rating.enum';
import { RatingService } from 'src/app/shared/services/rating/rating.service';
import { ToastrNotificatioService } from 'src/app/core/services/toastr-notification/toastr-notificatio.service';
import { UserRatingUpdateDto } from 'src/app/shared/models/rating-request.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  subscriptions: Subscription[] = [];
  baseUrl = `${environment.baseURL}/`;
  baseImagePath: string = './assets/images/layout/header/';
  userData: customerResponse | null = null;
  loginUserType: string | null = '';
  loginUserTypeEnum: LoginUserTypeEnum | null = null;
  localization = {
    beta: 'اطلاق تجريبي',
  };
  links = Configuration;
  constructor(
    private _userDataService: UserDataService,
    private _storageService: StorageService,
    private _router: Router,
    private _popupService: PopupService,
    private _ratingService: RatingService,
    private _toastrNotificationService: ToastrNotificatioService,
  ) {}
  ngOnInit(): void {
    this.getLoginUserType();
    this.obseveCustomerData();
    this.observePopupConfirmAction();
  }
  observePopupConfirmAction(): void {
    this.subscriptions.push(
      this._popupService.cancelAction.subscribe(() => {
        const ratingData = this._ratingService.currentRatingData.value;

        if (!ratingData) return;
        if (ratingData && ratingData.id == 'starRatingComponentPopup')
          this._popupService.dismissDialog();
      }),
    );
    this.subscriptions.push(
      this._popupService.confirmAction.subscribe(() => {
        const ratingData = this._ratingService.currentRatingData.value;

        if (!ratingData) return;
        if (ratingData && ratingData.id == 'starRatingComponentPopup') {
          this.submitRating(ratingData);
        }
      }),
    );
  }
  obseveCustomerData(): void {
    this.subscriptions.push(
      this._userDataService
        .getCustomerData()
        .subscribe((res: customerResponse | null) => {
          this.userData = res;
        }),
    );
  }
  logout(): void {
    this.clearLocalStorage();
    this.navigateToLogin();
  }
  getLoginUserType(): void {
    this.loginUserType = this._storageService.getLoginUserType();
    this.loginUserTypeEnum = Number(this.loginUserType) as LoginUserTypeEnum;
  }
  private navigateToLogin(): void {
    // this._router.navigate([`${Configuration.modules.auth}/${Configuration.pages.auth.wafiService}`])
    this._router.navigate([`${Configuration.modules.landing}`]);
  }
  private clearLocalStorage(): void {
    localStorage.clear();
  }
  openRatingModal(): void {
    let Data = {
      id: 'starRatingComponentPopup',
      minWidth: '30vw',
      iconClass: 'hgi hgi-stroke hgi-message-question',
      title: `قيّم تجربتك معنا`,
      component: RatingComponent,
      data: {
        ratingType: RatingTypeEnum.PlatformUsability,
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
  submitRating(PopupData: UserRatingUpdateDto) {
    this._ratingService
      .createRating({
        ratingType: RatingTypeEnum.PlatformUsability,
        ratingValue: PopupData.ratingValue,
        notes: PopupData.notes,
        browserType: PopupData.browserType,
        facilityId: this.userData?.facilities?.[0]?.id,
      })
      .subscribe((res) => {
        this._toastrNotificationService.showSuccess('تم إرسال تقييمك بنجاح!');
        this._popupService.dismissDialog();
      });
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription: Subscription) => {
      subscription.unsubscribe();
    });
  }
}
