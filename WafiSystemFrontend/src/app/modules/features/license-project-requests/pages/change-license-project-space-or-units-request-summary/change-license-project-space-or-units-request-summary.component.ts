import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { LicenseProjectRequestDto } from '../../models/request-header-details';
import { UserRequestTypeEnum } from '../../../license/enums/user-request-type';
import { tabsComponent } from 'src/app/shared/models/tabs.model';
import { LicenseRequestTabCode } from '../../../license/models/tab-code.model';
import { DataVisibilityOfLicenseProjectService } from '../../../license/services/data-visibility-of-license-project/data-visibility-of-license-project.service';
import { ProjectRequestLocalStorageService } from '../../services/project-request-local-storage.service';
import { ChangeLicenseProjectSpaceOrUnitsRequestService } from '../../services/change-license-project-space-or-units-request.service';
import { ChangeLicenseProjectSpaceOrUnitsRequesMainDataSummaryComponent } from '../../components/change-license-project-space-or-units-reques-main-data-summary/change-license-project-space-or-units-reques-main-data-summary.component';
import { UserDataService } from 'src/app/core/services/user-data/user-data.service';
import { customerResponse } from 'src/app/shared/models/customer.model';
import { ProjectLicenseServiceDetailsService } from '../../services/project-license-service-details.service';
import { ToastrNotificatioService } from 'src/app/core/services/toastr-notification/toastr-notificatio.service';
import { Router } from '@angular/router';
import { Configuration } from 'src/app/core/configurations/shared.config';
import { LicenseProjectRequestStatusEnum } from '../../enums/license-project-request-status.enum';
@Component({
  selector: 'app-change-license-project-space-or-units-request-summary',
  templateUrl: './change-license-project-space-or-units-request-summary.component.html',
  styleUrls: ['./change-license-project-space-or-units-request-summary.component.scss']
})
export class ChangeLicenseProjectSpaceOrUnitsRequestSummaryComponent {
facilityId?:string
  requestId?: string | null;
  request!: LicenseProjectRequestDto;
  availabilityToUpdate = false
  userRequestTypeEnum=UserRequestTypeEnum;
  licenseProjectRequestStatusEnum=LicenseProjectRequestStatusEnum
  requestUserType: UserRequestTypeEnum | null = null;
  localization = {
    send: "إرسال الطلب",
    approvalDecisions: "الموافقه على الاقرارات",
    sendToParties: 'إرسال الطلب لأطراف المشروع',
  };
  subscriptions: Subscription[] = [];
  mainTabsComponentList: tabsComponent[] = [
    {
      icon: 'person',
      title: 'بيانات الطلب',
      Component: ChangeLicenseProjectSpaceOrUnitsRequesMainDataSummaryComponent,
      disabled: false,
      id: 'MainData',
      errNum: 0,
      tabCode: LicenseRequestTabCode.MainRequest,
      tabErrors: [],
      isVisible: true,
    },

  ]
  constructor(
     private projectLicenseServiceDetailsService: ProjectLicenseServiceDetailsService,
            private _dataVisibilityOfLicenseProjectService: DataVisibilityOfLicenseProjectService,
                private projectRequestLocalStorageService: ProjectRequestLocalStorageService,
                    private _toastrNotificatioService: ToastrNotificatioService,
                    private _router: Router,
                    private _userDataService: UserDataService,
        private _changeLicenseProjectSpaceOrUnitsRequestService: ChangeLicenseProjectSpaceOrUnitsRequestService,
  ) { }

  ngOnInit() {
    this.obseveCustomerData();
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
  tabCodes: string[] = [
    LicenseRequestTabCode.MainRequest,
    
  ];

  private updateDataVisibilityOfLicenseProject() {
    this._dataVisibilityOfLicenseProjectService.updateDataVisibilityOfLicenseProject(this.tabCodes)
  }

  private observeDataVisibilityOfLicenseProject() {
    this._dataVisibilityOfLicenseProjectService.getDataVisibilityOfLicenseProjectForCertainTab(this.subscriptions, this.mainTabsComponentList, true, false)
  }
  getRequestDetails() {
    
    this.requestId = this.projectRequestLocalStorageService.getSelectedProjectLicenseRequestIdFromLocalStorage();
    if (this.requestId) {
      
      this._changeLicenseProjectSpaceOrUnitsRequestService.getLicenseProjectDetailsById(this.requestId).subscribe(res => {
        if (res) {
          this.request=res.licenseProjectRequest;
          this.getUserType();
          this._changeLicenseProjectSpaceOrUnitsRequestService.setLicenseProjectRequestChangeUnitsOrSpaceProject(res)
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
              if (res){
                
                this.requestUserType = res;
              this.projectLicenseServiceDetailsService.requestUserType$.next(res)
            }})
        );
      }
    }
      create() {
        this.projectLicenseServiceDetailsService.Create(this.requestId!).subscribe(res => {
          // this._toastrNotificatioService.showSuccess('تم ارسال الطلب')
          this._router.navigate([`${Configuration.modules.wafi}/${Configuration.modules.licenseProjectRequests}/${Configuration.pages.licenseProjectRequests.licenseProjectRequestList}`]);
          console.log(res);
    
        })
      }
  ngOnDestroy(): void {
    this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe());
  }
}
