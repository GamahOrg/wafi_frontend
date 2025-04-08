import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Tabs, tabsComponent } from 'src/app/shared/models/tabs.model';
import { CancelLicenseMainDataSummaryComponent } from '../../components/cancel-license-main-data-summary/cancel-license-main-data-summary.component';
import { DataVisibilityOfLicenseProjectService } from '../../../license/services/data-visibility-of-license-project/data-visibility-of-license-project.service';
import { RequestValidation } from 'src/app/core/models/request-validation.model';
import { LicenseRequestTabCode } from '../../../license/models/tab-code.model';
import { ToastrNotificatioService } from 'src/app/core/services/toastr-notification/toastr-notificatio.service';
import { ProjectLicenseServiceDetailsService } from '../../services/project-license-service-details.service';
import { Router } from '@angular/router';
import { LicenseProjectRequestDto } from '../../models/request-header-details';
import { Configuration } from 'src/app/core/configurations/shared.config';
import { LicenseProjectRequestStatusEnum } from '../../enums/license-project-request-status.enum';
import { ProjectRequestLocalStorageService } from '../../services/project-request-local-storage.service';
import { UserRequestTypeEnum } from '../../../license/enums/user-request-type';
import { UserDataService } from 'src/app/core/services/user-data/user-data.service';
import type { customerResponse } from 'src/app/shared/models/customer.model';

@Component({
  selector: 'app-cancel-license-request-summary',
  templateUrl: './cancel-license-request-summary.component.html',
  styleUrls: ['./cancel-license-request-summary.component.scss']
})
export class CancelLicenseRequestSummaryComponent implements OnInit, OnDestroy {

  facilityId?:string
  requestId?: string | null;
  request!: LicenseProjectRequestDto;
  availabilityToUpdate = false
  localization = {
    send: "إرسال الطلب",
    sendToParties: 'إرسال الطلب لأطراف المشروع',
    approvalDecisions: "الموافقه على الاقرارات",
  };
  subscriptions: Subscription[] = [];
  mainTabsComponentList: tabsComponent[] = [
    {
      icon: 'person',
      title: 'بيانات الطلب',
      Component: CancelLicenseMainDataSummaryComponent,
      disabled: false,
      id: 'MainData',
      errNum: 0,
      tabCode: LicenseRequestTabCode.MainRequest,
      tabErrors: [],
      isVisible: true,
    },

  ]
  tabContent: Tabs = {
    verticalTabs: false,
    activeTabIndex: 0,
    tabsComponentList: [],
  };

  tabCodes: string[] = [
    LicenseRequestTabCode.MainRequest,
    LicenseRequestTabCode.ProjectData,
    LicenseRequestTabCode.DeveloperData,
    LicenseRequestTabCode.EngineeringConsultantData,
    LicenseRequestTabCode.AccountantData
  ];

  constructor(
    private projectRequestLocalStorageService: ProjectRequestLocalStorageService,
    private _toastrNotificatioService: ToastrNotificatioService,
    private _router: Router,
    private _userDataService: UserDataService,
    private projectLicenseServiceDetailsService: ProjectLicenseServiceDetailsService,
    private _dataVisibilityOfLicenseProjectService: DataVisibilityOfLicenseProjectService,
  ) { }

  ngOnInit() {
    this.obseveCustomerData()
    this.updateDataVisibilityOfLicenseProject();
    this.observeDataVisibilityOfLicenseProject();
    this.getRequestDetails()
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

  requestUserType: UserRequestTypeEnum | null = null;

  get userRequestTypeEnum() {
    return UserRequestTypeEnum;
  }

  private updateDataVisibilityOfLicenseProject() {
    this._dataVisibilityOfLicenseProjectService.updateDataVisibilityOfLicenseProject(this.tabCodes)
  }

  private observeDataVisibilityOfLicenseProject() {
    this._dataVisibilityOfLicenseProjectService.getDataVisibilityOfLicenseProjectForCertainTab(this.subscriptions, this.mainTabsComponentList, true, false)
  }

  resetDataVisibilityOfLicenseProject() {
    this._dataVisibilityOfLicenseProjectService.resetDataVisibilityOfLicenseProject()
  }

  private updateRequestValidation(data: RequestValidation) {
    // this._licenseRequestService.updateRequestValidation(
    //   data as RequestValidation
    // );
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
        this._toastrNotificatioService.showSuccess('تم ارسال الطلب لأطراف المشروع')
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
      //this._toastrNotificatioService.showSuccess('تم ارسال الطلب')
      this._router.navigate([`${Configuration.modules.wafi}/${Configuration.modules.licenseProjectRequests}/${Configuration.pages.licenseProjectRequests.licenseProjectRequestList}`]);
      console.log(res);

    })
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe());
  }
}
