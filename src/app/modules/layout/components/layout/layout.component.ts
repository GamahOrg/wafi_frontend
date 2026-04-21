import { Component, OnDestroy, OnInit } from '@angular/core';
import { forkJoin, Observable, Subscription } from 'rxjs';
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
import { SharedLicenseProjectService } from 'src/app/modules/features/license/services/sharedLicenseProject/shared-license-project.service';

interface RatingQueueItem {
  type: RatingTypeEnum;
  status: RatingStatusDto;
}

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
facilityId: string | null = null;
  private ratingQueue: RatingQueueItem[] = [];
  private currentQueueIndex: number = 0;

  constructor(
    private _languageService: LanguageService,
    private _userDataService: UserDataService,
    private _storageService: StorageService,
    private _router: Router,
    private _toastrNotificatioService: ToastrNotificatioService,
    private titleService: Title,
    private _ratingService: RatingService,
    private _popupService: PopupService,
    private _sharedLicenseProjectService: SharedLicenseProjectService,
  ) {}

  private setAppTitle() {
    this.titleService.setTitle(this.appTitle);
  }

  ngOnInit(): void {
    this.getLoginUserType();
    this.setAppTitle();
    this.observeDirectionChange();
    
  }


 

  startRatingFlowWithFacilityId(): void {
    if (this._storageService.getIsFirstLoading() == 'true') {

      forkJoin([
        this._ratingService.getUserRecommendationRatingStatus(),
        this._ratingService.getInstantLicenseRatingStatus(),
        this._ratingService.getDeveloperContractDocumentationRatingStatus(this.facilityId!),
        this._ratingService.getBuyerContractDocumentationRatingStatusForLogin(true),
        this._ratingService.getBuyerContractDocumentationRatingStatusForLogin(false),
      ]).subscribe(([recommendation, licenses, developerContract, buyerOldContract, buyerUnifiedContract]) => {
        this.buildRatingQueue(recommendation!, licenses!, developerContract!, buyerOldContract!, buyerUnifiedContract!);
        this.observeRatingActions();
        this._storageService.setIsFirstLoading(false);
        this.showNextRating();
      });
    }
  }
  startRatingFlowWithoutFacilityId(): void {
    if (this._storageService.getIsFirstLoading() == 'true') {

      forkJoin([
        this._ratingService.getUserRecommendationRatingStatus(),
        this._ratingService.getInstantLicenseRatingStatus(),
        this._ratingService.getBuyerContractDocumentationRatingStatusForLogin(true),
        this._ratingService.getBuyerContractDocumentationRatingStatusForLogin(false),
      ]).subscribe(([recommendation, licenses, buyerOldContract, buyerUnifiedContract]) => {
        this.buildRatingQueue(recommendation!, licenses!, null, buyerOldContract!, buyerUnifiedContract!);
        this.observeRatingActions();
        this._storageService.setIsFirstLoading(false);
        this.showNextRating();
      });
    }
  }

  // ─── Queue ────────────────────────────────────────────────────────────────

  private buildRatingQueue(
    recommendation: RatingStatusDto,
    licenses: RatingStatusDto[],
    developerContract: RatingStatusDto|null,
    buyerOldContract: RatingStatusDto,
    buyerUnifiedContract: RatingStatusDto,
  ): void {
    this.ratingQueue = [];
    this.currentQueueIndex = 0;

    // To add a new rating type: push it here in the desired order
    licenses?.filter((x) => x.shouldShowRating).forEach((status) => {
      this.ratingQueue.push({ type: RatingTypeEnum.InstantLicenseServiceEaseOfUse, status });
    });

    if (recommendation?.shouldShowRating)
      this.ratingQueue.push({ type: RatingTypeEnum.UserRecommendation, status: recommendation });

    if (developerContract?.shouldShowRating)
      this.ratingQueue.push({ type: RatingTypeEnum.DeveloperContractDocumentation, status: developerContract });

    if (buyerOldContract?.shouldShowRating)
      this.ratingQueue.push({ type: RatingTypeEnum.BuyerContractDocumentation, status: buyerOldContract });

    if (buyerUnifiedContract?.shouldShowRating)
      this.ratingQueue.push({ type: RatingTypeEnum.BuyerUnifiedContractDocumentation, status: buyerUnifiedContract });
  }

  private showNextRating(): void {
    if (this.currentQueueIndex >= this.ratingQueue.length) return;
    const item = this.ratingQueue[this.currentQueueIndex];
    const data: PopupData = {
      id: `Rating_${this.currentQueueIndex}`,
      minWidth: '30vw',
      iconClass: 'hgi hgi-stroke hgi-message-question',
      title: `قيّم تجربتك معنا`,
      component: RatingComponent,
      data: { ratingType: item.type },
      buttons: [
        {
          icon: '',
          title: 'تخطي',
          actionType: ButtonType.cancel,
          isVisable: true,
          isDisables: false,
        },
        {
          icon: '',
          title: 'ارسل التقييم',
          actionType: ButtonType.confirm,
          isVisable: true,
          isDisables: false,
        },
      ],
    } as PopupData;
    this._popupService.updatePopupData(data);
  }

  // ─── Observers ────────────────────────────────────────────────────────────

  private observeRatingActions(): void {
    this.subscriptions.push(
      this._popupService.cancelAction.subscribe((res) => {
        if (!res) return;
        const ratingData = this._ratingService.currentRatingData.value;
        if (!ratingData?.id?.startsWith('Rating_')) return;
        this.handleRatingDismiss();
      }),
    );
    this.subscriptions.push(
      this._popupService.confirmAction.subscribe(() => {
        const ratingData = this._ratingService.currentRatingData.value;
        if (!ratingData?.id?.startsWith('Rating_')) return;
        this.handleRatingSubmit(ratingData);
      }),
    );
  }

  // ─── Submit / Dismiss ─────────────────────────────────────────────────────

  private handleRatingSubmit(ratingData: UserRatingUpdateDto): void {
    const item = this.ratingQueue[this.currentQueueIndex];
    if (!item) return;
    this._ratingService
      .createRating({
        ratingType: item.type,
        ratingValue: ratingData.ratingValue,
        notes: ratingData.notes,
        browserType: ratingData.browserType,
        licenseProjectId: item.status.licenseProjectId,
        triggerType: item.status.triggerType,
      })
      .subscribe((res) => {
        this._toastrNotificatioService.showSuccess(res.message || 'تم إرسال التقييم بنجاح');
        this._ratingService.currentRatingData.next(null);
        this._popupService.dismissDialog();
        this.currentQueueIndex++;
        this.showNextRating();
      });
  }

  private handleRatingDismiss(): void {
    const item = this.ratingQueue[this.currentQueueIndex];
    if (!item) return;
    this._ratingService
      .dismissRating({
        ratingType: item.type,
        licenseProjectId: item.status.licenseProjectId,
        triggerType: item.status.triggerType,
      })
      .subscribe((res) => {
        this._toastrNotificatioService.showInfo(res.message || 'تم تخطي التقييم');
        this._ratingService.currentRatingData.next(null);
        this._popupService.dismissDialog();
        this.currentQueueIndex++;
        this.showNextRating();
      });
  }

  // ─── User / Auth ──────────────────────────────────────────────────────────

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
            if (
              res.facilities?.length > 0 &&
              res.facilities[0].facilityTypeCategory != null
            ) {
              let facilityTypeCategory = res.facilities[0].facilityTypeCategory;
              this._userDataService.setFacilityTypeCategoryInLocalStorage(
                res.facilities[0].facilityTypeCategory,
              );
            }
            if (!this.userData.isEmployee) {
              if (
                this.loginUserTypeEnum === LoginUserTypeEnum.delegateWafiPartner &&
                res.facilities.length === 0
              ) {
                this._toastrNotificatioService.showInfo('مفوض لا يوجد لديه منشأة !');
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
            if(this.userData?.facilities && this.userData?.facilities.length > 0){
              this.facilityId = this.userData?.facilities[0].id as string;
              this.startRatingFlowWithFacilityId();
            }else{
              this.startRatingFlowWithoutFacilityId();
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
      this._languageService.observeDirection().subscribe((direction: Direction) => {
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
