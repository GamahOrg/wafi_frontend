import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Tabs, tabsComponent } from 'src/app/shared/models/tabs.model';
import { LicenseRequestTabCode } from '../../../license/models/tab-code.model';
import { DataVisibilityOfLicenseProjectService } from '../../../license/services/data-visibility-of-license-project/data-visibility-of-license-project.service';
import { UserRequestTypeEnum } from '../../../license/enums/user-request-type';
import { LicenseProjectRequestStatusEnum } from '../../enums/license-project-request-status.enum';
import { ProjectLicenseServiceDetailsService } from '../../services/project-license-service-details.service';
import { Router } from '@angular/router';
import { Configuration } from 'src/app/core/configurations/shared.config';
import { ToastrNotificatioService } from 'src/app/core/services/toastr-notification/toastr-notificatio.service';
import { ProjectRequestLocalStorageService } from '../../services/project-request-local-storage.service';
import { TransferAmountsBetweenSubAccountsInEscrowAccountRequestDetailsDto } from '../../models/transfer-amount-between-subaccounts-in-escrow-dto';
import { TransferAmountsBetweenSubaccountsInEscrowaccountRequestService } from '../../services/transfer-amounts-between-subaccounts-in-escrowaccount-request.service';
import { TransferAmountSummaryComponent } from '../../components/transfer-amount-summary/transfer-amount-summary.component';

@Component({
  selector: 'app-transfer-amounts-between-subaccounts-in-escrow-account-summary',
  templateUrl: './transfer-amounts-between-subaccounts-in-escrow-account-summary.component.html',
  styleUrls: ['./transfer-amounts-between-subaccounts-in-escrow-account-summary.component.scss']
})
export class TransferAmountsBetweenSubaccountsInEscrowAccountSummaryComponent implements OnInit {
  subscriptions: Subscription[] = [];
  id: string | null = '';
  availabilityToUpdate = false;
  licenseProjectRequestId : string | null = '';
  detailsDto?: TransferAmountsBetweenSubAccountsInEscrowAccountRequestDetailsDto;
  localization = {
    send: 'إرسال الطلب',
    sendToParties: 'إرسال الطلب لأطراف المشروع',
    approvalDecisions: 'الموافقه على الاقرارات',
  };
  mainTabsComponentList: tabsComponent[] = [
    {
      icon: 'person',
      title: 'بيانات الطلب',
      Component: TransferAmountSummaryComponent,
      disabled: false,
      id: 'MainData',
      errNum: 0,
      tabCode: LicenseRequestTabCode.MainRequest,
      tabErrors: [],
      isVisible: true,
    },
  ];
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
    LicenseRequestTabCode.AccountantData,
  ];
  constructor(
    private _transferAmountsBetweenSubaccountsInEscrowaccountRequestService: TransferAmountsBetweenSubaccountsInEscrowaccountRequestService,
    private _dataVisibilityOfLicenseProjectService: DataVisibilityOfLicenseProjectService,
    private projectLicenseServiceDetailsService: ProjectLicenseServiceDetailsService,
    private _router: Router,
    private _projectRequestLocalStorageService: ProjectRequestLocalStorageService,
    private _toastrNotificatioService: ToastrNotificatioService
  ) {}
  ngOnInit(): void {
    this.updateDataVisibilityOfLicenseProject();
    this.observeDataVisibilityOfLicenseProject();
    this.getLicenseProjectRequestId();
  }
  get licenseProjectRequestStatusEnum() {
    return LicenseProjectRequestStatusEnum;
  }

  requestUserType: UserRequestTypeEnum | null = null;

  get userRequestTypeEnum() {
    return UserRequestTypeEnum;
  }
  getLicenseProjectRequestId() {
    this.id = this._projectRequestLocalStorageService.getSelectedProjectLicenseRequestIdFromLocalStorage();
    this.getDetails();
  }
  getDetails() {
    this.subscriptions.push(
      this._transferAmountsBetweenSubaccountsInEscrowaccountRequestService
        .getDetails(this.id as string)
        .subscribe((res: TransferAmountsBetweenSubAccountsInEscrowAccountRequestDetailsDto) => {
          this.detailsDto = res
          this._transferAmountsBetweenSubaccountsInEscrowaccountRequestService.selectedRequest$.next(
            res
          );
        })
    );
  }
  private updateDataVisibilityOfLicenseProject() {
    this._dataVisibilityOfLicenseProjectService.updateDataVisibilityOfLicenseProject(
      this.tabCodes
    );
  }

  private observeDataVisibilityOfLicenseProject() {
    this._dataVisibilityOfLicenseProjectService.getDataVisibilityOfLicenseProjectForCertainTab(
      this.subscriptions,
      this.mainTabsComponentList,
      true,
      false
    );
  }

  resetDataVisibilityOfLicenseProject() {
    this._dataVisibilityOfLicenseProjectService.resetDataVisibilityOfLicenseProject();
  }
  create() {
    this.projectLicenseServiceDetailsService
      .Create(this.id!)
      .subscribe((res) => {
        // this._toastrNotificatioService.showSuccess('تم ارسال الطلب');
        this._router.navigate([
          `${Configuration.modules.wafi}/${Configuration.modules.licenseProjectRequests}/${Configuration.pages.licenseProjectRequests.licenseProjectRequestList}`,
        ]);
      });
  }
}
