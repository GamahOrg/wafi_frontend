import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Configuration } from 'src/app/core/configurations/shared.config';
import { QualificationTypeCode } from 'src/app/core/enums/qualification-type-code';
import { UserDataService } from 'src/app/core/services/user-data/user-data.service';
import { customerResponse } from 'src/app/shared/models/customer.model';
import { PopupData, notePopupData } from 'src/app/shared/models/popup.model';
import { PopupService } from 'src/app/shared/services/popup/popup.service';
import { RequestService } from '../../../qualifying/services/requests/request-service.service';
import { QualificationServiceRequestService } from '../../../qualifying/services/qualification-type/qualification-service-request.service';
import { ToastrNotificatioService } from 'src/app/core/services/toastr-notification/toastr-notificatio.service';
import { RequestSuccessResponse, RequestValidation } from 'src/app/core/models/request-validation.model';
import { RequestValidationService } from 'src/app/core/services/request-validation/request-validation.service';
import { RequestValidationPopupComponent } from '../../../qualifying/components/request-validation-popup/request-validation-popup.component';
import { ButtonType } from 'src/app/shared/models/enums/button-type.model';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-declaration-popup',
  templateUrl: './declaration-popup.component.html',
  styleUrls: ['./declaration-popup.component.scss'],
})
export class DeclarationPopupComponent implements OnInit, OnDestroy {
  subscriptions: Subscription[] = [];
  userData: customerResponse | null = null;
  code: string = QualificationTypeCode.upgradeDegree;
  period: number = 1;

  declarationForm = this._FB.group({
    data: [false, Validators.requiredTrue],
    resposability: [false, Validators.requiredTrue],
    promise: [false, Validators.requiredTrue],
  });

  showError: boolean = false;
  errorMessage: string = '';

  constructor(
    private _FB: FormBuilder,
    private _userDataService: UserDataService,
    private _popupService: PopupService,
    private _router: Router,
    private _requestService: RequestService,
    private _qualificationServiceRequestService: QualificationServiceRequestService,
    private _toastrNotificatioService: ToastrNotificatioService,
    private _requestValidationService: RequestValidationService,
    private _dialogRef: MatDialogRef<DeclarationPopupComponent>
  ) { }

  ngOnInit(): void {
    this.subscriptions.push(
      this._userDataService
        .getCustomerData()
        .subscribe((res: customerResponse | null) => {
          this.userData = res;
        }),
    );
  }

  createOrRenewRequest(): void {
    this.creatRequest();
  }

  creatRequest(): void {
    this.subscriptions.push(
      this._qualificationServiceRequestService
        .Create(
          this.userData?.facilities[0].id as string,
          this.code,
          this.period,
        )
          .subscribe((res: RequestSuccessResponse | RequestValidation | null) => {
          if (res && 'requestCode' in res && 'id' in res) {
            this.setRequestIdInLocalStorage(res.id);
            this._popupService.dismissDialog();
            this.openConfirmaDialog(res.requestCode);
            this._requestService.clearFacilityIdFromLocalStorage();
          } else {
            this.handleGeneralError(res  as RequestValidation);
          }
        }),
    );
  }
  closeWithResult() {
    this._dialogRef.close({
      showError: this.showError,
      errorMessage: this.errorMessage
    });
  }
  private handleGeneralError(res: RequestValidation): void {
    if (!res || !res.tabs || !res.tabs.length) return;

    const generalTab = res.tabs.find((x) => x.tabCode == 'General');
    if (generalTab && generalTab.tabErrors && generalTab.tabErrors.length) {
      this.showError = true;
      this.errorMessage = generalTab.tabErrors[0].errorMessage;
      this.closeWithResult();
      return;
    }

    this._requestValidationService.updateRequestValidation(res);
    this._requestValidationService.updateQualificationRequestData({
      period: this.period,
      type: this.code,
    });
    this._dialogRef.close();
    this.openValidationDialog();
  }

  private openValidationDialog(): void {
    const data = {
      title: `التحقق من بيانات طلب رفع درجة التأهيل `,
      component: RequestValidationPopupComponent,
      buttons: [
        {
          icon: '',
          title: 'إلغاء',
          actionType: ButtonType.cancel,
          isVisable: true,
          isDisables: false,
        },
        {
          icon: '',
          title: 'إستكمال البيانات',
          actionType: ButtonType.confirm,
          isVisable: true,
          isDisables: false,
        },
      ],
    } as PopupData;
    this._popupService.updatePopupData(data);
  }

  setRequestIdInLocalStorage(id: string) {
    this._requestService.setSelectedRequestIdInLocalStorage(id);
  }

  openConfirmaDialog(res: string): void {
    let Data = {
      imagePath: 'assets/images/auth/ForgotPass.svg',
      title: 'تم انشاء الطلب بنجاح',
      staticMessage: 'تم انشاء طلبك بنجاح ويمكنك عرض الطلب',
      dynamicMessage: res,
      buttonText: 'عرض الطلب',
      buttonLink:
        Configuration.modules.wafi +
        '/' +
        Configuration.modules.qualifying +
        '/' +
        Configuration.pages.qualifying.requestDetails,
      surveyTitle: 'نأمل منكم تقييم تجربتكم عبر الرابط التالي',
      surveyLink: 'https://survey.rega.gov.sa/s/cma9hk9c3000ec1es1bwvq82d',
    } as notePopupData;
    this._popupService.updateNotePopupData(Data);
  }

  cancelRequest(): void {
    this._popupService.dismissDialog();
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe());
  }
}
