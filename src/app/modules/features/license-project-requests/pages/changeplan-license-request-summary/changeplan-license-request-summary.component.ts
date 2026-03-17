import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { LincenseRequestProjectService } from '../../services/lincense-request-project.service';
import { DataVisibilityOfLicenseProjectService } from '../../../license/services/data-visibility-of-license-project/data-visibility-of-license-project.service';
import { PopupService } from 'src/app/shared/services/popup/popup.service';
import { SharedLicenseProjectService } from '../../../license/services/sharedLicenseProject/shared-license-project.service';
import { LicenseRequestTabCode } from '../../../license/models/tab-code.model';
import { tabsComponent } from 'src/app/shared/models/tabs.model';
import { ChangeplanLicenseRequestMainDataSummaryComponent } from '../../components/changeplan-license-request-main-data-summary/changeplan-license-request-main-data-summary.component';
import { ProjectLicenseServiceDetailsService } from '../../services/project-license-service-details.service';
import { ProjectRequestLocalStorageService } from '../../services/project-request-local-storage.service';
import { LicenseProjectRequestDto } from '../../models/request-header-details';
import { LicenseProjectRequestStatusEnum } from '../../enums/license-project-request-status.enum';
import { RequestValidation } from 'src/app/core/models/request-validation.model';
import { ToastrNotificatioService } from 'src/app/core/services/toastr-notification/toastr-notificatio.service';
import { ButtonType } from 'src/app/shared/models/enums/button-type.model';
import { RequestValidationPopupComponent } from '../../../qualifying/components/request-validation-popup/request-validation-popup.component';
import { PopupData } from 'src/app/shared/models/popup.model';
import { RequestValidationService } from 'src/app/core/services/request-validation/request-validation.service';
import { Router } from '@angular/router';
import { Configuration } from 'src/app/core/configurations/shared.config';
import  { UserRequestTypeEnum } from '../../../license/enums/user-request-type';
import  { UserDataService } from 'src/app/core/services/user-data/user-data.service';
import  { customerResponse } from 'src/app/shared/models/customer.model';

@Component({
  selector: 'app-changeplan-license-request-summary',
  templateUrl: './changeplan-license-request-summary.component.html',
  styleUrls: ['./changeplan-license-request-summary.component.scss']
})
export class ChangeplanLicenseRequestSummaryComponent implements OnInit {
  facilityId?:string
  requestId?: string | null;
  request!: LicenseProjectRequestDto;
  availabilityToUpdate = false
  localization = {
    send: "إرسال الطلب",
    approvalDecisions: "الموافقة على الإقرارات",
    sendToParties: 'إرسال الطلب لأطراف المشروع',
  };
  subscriptions: Subscription[] = [];
  mainTabsComponentList: tabsComponent[] = [
    {
      icon: 'person',
      title: 'بيانات الطلب',
      Component: ChangeplanLicenseRequestMainDataSummaryComponent,
      disabled: false,
      id: 'MainData',
      errNum: 0,
      tabCode: LicenseRequestTabCode.MainRequest,
      tabErrors: [],
      isVisible: true,
    },

  ]

  requestUserType: UserRequestTypeEnum | null = null;

  tabCodes: string[] = [
    LicenseRequestTabCode.MainRequest,
    LicenseRequestTabCode.ProjectData,
    LicenseRequestTabCode.DeveloperData,
    LicenseRequestTabCode.EngineeringConsultantData,
    LicenseRequestTabCode.AccountantData
  ];

  get userRequestTypeEnum() {
    return UserRequestTypeEnum;
  }

  constructor(
    private _requestValidationService: RequestValidationService,
    private _popupService: PopupService,
    private _toastrNotificatioService: ToastrNotificatioService,
    private _router: Router,
    private _userDataService: UserDataService,
    private projectLicenseServiceDetailsService: ProjectLicenseServiceDetailsService,
    private projectRequestLocalStorageService: ProjectRequestLocalStorageService,
    private _dataVisibilityOfLicenseProjectService: DataVisibilityOfLicenseProjectService,
  ) { }

  ngOnInit() {
    this.obseveCustomerData()
    this.updateDataVisibilityOfLicenseProject();
    this.observeDataVisibilityOfLicenseProject();
    this.getRequestDetails();
  }

  obseveCustomerData(): void {
    this.subscriptions.push(
      this._userDataService
        .getCustomerData()
        .subscribe((res: customerResponse | null) => {
          if (res && res.facilities && res.facilities.length > 0) {
            this.facilityId = res?.facilities[0]?.id || '';
          }
        })
    );
  }

  get licenseProjectRequestStatusEnum() {
    return LicenseProjectRequestStatusEnum;
  }
  private updateDataVisibilityOfLicenseProject() {
    this._dataVisibilityOfLicenseProjectService.updateDataVisibilityOfLicenseProject(this.tabCodes)
  }

  private observeDataVisibilityOfLicenseProject() {
    this._dataVisibilityOfLicenseProjectService.getDataVisibilityOfLicenseProjectForCertainTab(this.subscriptions, this.mainTabsComponentList, true, false)
  }

  getRequestDetails() {
    this.requestId = this.projectRequestLocalStorageService.getSelectedProjectLicenseRequestIdFromLocalStorage();
    if (this.requestId) {
      this.projectLicenseServiceDetailsService.getRequestHeaderDetails(this.requestId).subscribe(res => {
        if (res) {
          this.request = res;
          this.getUserType()
          this.projectLicenseServiceDetailsService.selectRequest$.next(res);
        }
      })
    }

  }

  getUserType() {
    if (this.request.id && this.request.facilityId) {
      this.subscriptions.push(
        this.projectLicenseServiceDetailsService
          .getUserRequestType(this.request.id!, this.facilityId!)
          .subscribe((res: UserRequestTypeEnum | null) => {
            if (res)
              this.requestUserType = res;
            this.projectLicenseServiceDetailsService.requestUserType$.next(res)
          })
      );
    }
  }

 

  sendToParties() {
    this.projectLicenseServiceDetailsService.sendRequestForParties(this.requestId!).subscribe(res => {
      if (res) {
        this._toastrNotificatioService.showSuccess('تم إرسال الطلب لأطراف المشروع')
        this.request = res;
        this.projectLicenseServiceDetailsService.selectRequest$.next(res);
      }
    })
  }
  create() {
    this.projectLicenseServiceDetailsService.Create(this.requestId!).subscribe(res => {
      // if (res.requestCode && res.id) {
      //   this.setRequestIdInLocalStorage(res.id);
      //   this.openConfirmaDialog(res.requestCode);
      //   this._requestService.clearFacilityIdFromLocalStorage();
      // } else {
      //   this.requestValidationData = res;
      //   this.checkGeneralErrorTabsIsExist();
      // }
      //this._toastrNotificatioService.showSuccess('تم إرسال الطلب')
      this._router.navigate([ `${Configuration.modules.wafi}/${Configuration.modules.licenseProjectRequests}/${Configuration.pages.licenseProjectRequests.licenseProjectRequestList}`]);
      console.log(res);

    })
  }

  goToDetails() {

  }

  requestValidationData: RequestValidation | null = null;
  private checkGeneralErrorTabsIsExist() {
    if (
      this.requestValidationData &&
      this.requestValidationData.tabs &&
      this.requestValidationData.tabs.length
    ) {
      if (this.requestValidationData.tabs.find((x) => x.tabCode == 'General')) {
        this._toastrNotificatioService.showError(
          this.requestValidationData.tabs[0].tabErrors[0].errorMessage
        );
      } else {
        this.updateRequestValidation(this.requestValidationData);
        this.openValidationDialog();
        //this.updateQualificationRequestData();
      }
    }
  }

  // private updateQualificationRequestData(): void {
  //   this._requestValidationService.updateQualificationRequestData({
  //     period: this.period,
  //     type: this.code,
  //   });
  // }
  private updateRequestValidation(data: RequestValidation) {
    this._requestValidationService.updateRequestValidation(
      data as RequestValidation
    );
  }
  RequestCode?: string;
  openValidationDialog(): void {
    let Data = {
      title: `التحقق من بيانات طلب
          ${this.RequestCode} `,
      component: RequestValidationPopupComponent,
      buttons: [
        {
          icon: '',
          title: 'إلغاء',
          actionType: ButtonType.cancel,
          isVisable: true,
          isDisables: false,
          // onclick: () => this.openNotesDialog()
        },
        {
          icon: '',
          title: 'إستكمال البيانات',
          actionType: ButtonType.confirm,
          isVisable: true,
          isDisables: false,
          // onclick: () => this.openAssignEmployeeDialog()
        },
      ],
    } as PopupData;
    this._popupService.updatePopupData(Data);
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe());
  }

}
