import { Component, OnInit, type OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Tabs, tabsComponent } from 'src/app/shared/models/tabs.model';
import { LicenseRequestTabCode } from '../../../license/models/tab-code.model';
import { DataVisibilityOfLicenseProjectService } from '../../../license/services/data-visibility-of-license-project/data-visibility-of-license-project.service';
import { ReactivaiteLicenseRequestMainDataSummaryComponent } from '../../components/reactivaite-license-request-main-data-summary/reactivaite-license-request-main-data-summary.component';
import { ReactivateLicenseService } from '../../services/reactivate-license.service';
import { ProjectRequestLocalStorageService } from '../../services/project-request-local-storage.service';
import  { ToastrNotificatioService } from 'src/app/core/services/toastr-notification/toastr-notificatio.service';
import  { ProjectLicenseServiceDetailsService } from '../../services/project-license-service-details.service';
import  { Router } from '@angular/router';
import  { LicenseProjectRequestDto } from '../../models/request-header-details';
import { LicenseProjectRequestStatusEnum } from '../../enums/license-project-request-status.enum';
import { Configuration } from 'src/app/core/configurations/shared.config';
import  { UserRequestTypeEnum } from '../../../license/enums/user-request-type';
import  { customerResponse } from 'src/app/shared/models/customer.model';
import  { UserDataService } from 'src/app/core/services/user-data/user-data.service';

@Component({
  selector: 'app-reactivate-license-request-summary',
  templateUrl: './reactivate-license-request-summary.component.html',
  styleUrls: ['./reactivate-license-request-summary.component.scss']
})
export class ReactivateLicenseRequestSummaryComponent implements OnInit, OnDestroy {

  requestId?: string | null;
  request!: LicenseProjectRequestDto;
  availabilityToUpdate = false
  localization = {
    send: "إرسال الطلب",
    approvalDecisions: "الموافقه على الاقرارات",
  };
  subscriptions: Subscription[] = [];
  mainTabsComponentList: tabsComponent[] = [
    {
      icon: 'person',
      title: 'بيانات الطلب',
      Component: ReactivaiteLicenseRequestMainDataSummaryComponent,
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

  requestUserType: UserRequestTypeEnum | null = null;
  facilityId?:string
  constructor(
    private _toastrNotificatioService: ToastrNotificatioService,
    private _router: Router,
    private _userDataService: UserDataService,
    private projectLicenseServiceDetailsService: ProjectLicenseServiceDetailsService,
    private projectRequestLocalStorageService: ProjectRequestLocalStorageService,
    private reactivateLicenseService: ReactivateLicenseService,
    private _dataVisibilityOfLicenseProjectService: DataVisibilityOfLicenseProjectService,
  ) { }

  ngOnInit() {
    this.obseveCustomerData()
    this.updateDataVisibilityOfLicenseProject();
    this.observeDataVisibilityOfLicenseProject();
    this.getRequestDetailsHeader();
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
  get userRequestTypeEnum() {
    return UserRequestTypeEnum;
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
      this.reactivateLicenseService.getRequestDetails(this.requestId).subscribe(res => {       
        this.reactivateLicenseService.selectedRequest$.next(res);
      })
    }
  }



  getRequestDetailsHeader() {
    
    this.requestId = this.projectRequestLocalStorageService.getSelectedProjectLicenseRequestIdFromLocalStorage();
    if (this.requestId) {
      this.projectLicenseServiceDetailsService.getRequestHeaderDetails(this.requestId).subscribe(res => {
        if (res) {
          this.request = res;
          console.log(res);
          
          this.projectLicenseServiceDetailsService.selectRequest$.next(res);
          this.getUserType()
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

            console.log('getUserRequestType');
            console.log(res);
            
            this.projectLicenseServiceDetailsService.requestUserType$.next(res)
          })
      );
    }
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
      // this._toastrNotificatioService.showSuccess('تم ارسال الطلب')
      this._router.navigate([ `${Configuration.modules.wafi}/${Configuration.modules.licenseProjectRequests}/${Configuration.pages.licenseProjectRequests.licenseProjectRequestList}`]);
      console.log(res);

    })
  }
  ngOnDestroy(): void {
    this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe());
  }
}
