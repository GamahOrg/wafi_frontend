import { Component } from '@angular/core';
import { LicenseProjectRequestDto } from '../../models/request-header-details';
import { UserRequestTypeEnum } from '../../../license/enums/user-request-type';
import { Subscription } from 'rxjs';
import { tabsComponent } from 'src/app/shared/models/tabs.model';
import { LicenseRequestTabCode } from '../../../license/models/tab-code.model';
import { ChangeLicenseProjectBuyerOrTenantContractRequestMainDataSummaryComponent } from '../../components/change-license-project-buyer-or-tenant-contract-request-main-data-summary/change-license-project-buyer-or-tenant-contract-request-main-data-summary.component';
import { DataVisibilityOfLicenseProjectService } from '../../../license/services/data-visibility-of-license-project/data-visibility-of-license-project.service';
import { ProjectRequestLocalStorageService } from '../../services/project-request-local-storage.service';
import { ChangeLicenseProjectBuyerOrTenantContractRequestService } from '../../services/change-license-project-buyer-or-tenant-contract-request.service';
import { UserDataService } from 'src/app/core/services/user-data/user-data.service';
import { customerResponse } from 'src/app/shared/models/customer.model';
import { ProjectLicenseServiceDetailsService } from '../../services/project-license-service-details.service';
import { ToastrNotificatioService } from 'src/app/core/services/toastr-notification/toastr-notificatio.service';
import { Router } from '@angular/router';
import { Configuration } from 'src/app/core/configurations/shared.config';
import { LicenseProjectRequestStatusEnum } from '../../enums/license-project-request-status.enum';
@Component({
  selector: 'app-change-license-project-buyer-or-tenant-contract-request-summary',
  templateUrl: './change-license-project-buyer-or-tenant-contract-request-summary.component.html',
  styleUrls: ['./change-license-project-buyer-or-tenant-contract-request-summary.component.scss']
})
export class ChangeLicenseProjectBuyerOrTenantContractRequestSummaryComponent {
facilityId?:string
  requestId?: string | null;
  request!: LicenseProjectRequestDto;
  availabilityToUpdate = false
  requestUserType: UserRequestTypeEnum | null = null;
  userRequestTypeEnum=UserRequestTypeEnum;
  licenseProjectRequestStatusEnum=LicenseProjectRequestStatusEnum;
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
      Component: ChangeLicenseProjectBuyerOrTenantContractRequestMainDataSummaryComponent,
      disabled: false,
      id: 'MainData',
      errNum: 0,
      tabCode: LicenseRequestTabCode.MainRequest,
      tabErrors: [],
      isVisible: true,
}

  ]
   constructor(
       private projectLicenseServiceDetailsService: ProjectLicenseServiceDetailsService,
             private _dataVisibilityOfLicenseProjectService: DataVisibilityOfLicenseProjectService,
                 private projectRequestLocalStorageService: ProjectRequestLocalStorageService,
                     private _toastrNotificatioService: ToastrNotificatioService,
                     private _router: Router,
                     private _userDataService: UserDataService,
          private _changeLicenseProjectBuyerOrTenantContractRequestService: ChangeLicenseProjectBuyerOrTenantContractRequestService,
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
        
        this._changeLicenseProjectBuyerOrTenantContractRequestService.getLicenseProjectDetailsById(this.requestId).subscribe(res => {
          if (res) {
            this.request=res.licenseProjectRequest;
            this.getUserType();
            this._changeLicenseProjectBuyerOrTenantContractRequestService.setChangeLicenseProjectBuyerOrTenantContractRequest(res)
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
            this._toastrNotificatioService.showSuccess('تم إرسال الطلب')
            this._router.navigate([`${Configuration.modules.wafi}/${Configuration.modules.licenseProjectRequests}/${Configuration.pages.licenseProjectRequests.licenseProjectRequestList}`]);
            console.log(res);
      
          })
        }
    ngOnDestroy(): void {
      this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe());
    }
}