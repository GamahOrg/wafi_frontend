import { Component } from '@angular/core';
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
import { ChangePartiesAgreementRequestService } from '../../services/change-parties-agreement-request.service';
import { ChangePartiesAgreementDetialsDto } from '../../models/change-parties-agreement-request-dto';
import { ChangePartiesAgreementSummaryComponent } from '../../components/change-parties-agreement-summary/change-parties-agreement-summary.component';

@Component({
  selector: 'app-change-parties-agreement-request-summary',
  templateUrl: './change-parties-agreement-request-summary.component.html',
  styleUrls: ['./change-parties-agreement-request-summary.component.scss']
})
export class ChangePartiesAgreementRequestSummaryComponent {
  subscriptions: Subscription[] = [];
  id: string | null = '';
  availabilityToUpdate = false;
  licenseProjectRequestId : string | null = '';
  changeCharteredAccountantRequestDetailsDto?: ChangePartiesAgreementDetialsDto;
  localization = {
    send: 'إرسال الطلب',
    sendToParties: 'إرسال الطلب لأطراف المشروع',
    approvalDecisions: 'الموافقه على الاقرارات',
  };
  mainTabsComponentList: tabsComponent[] = [
    {
      icon: 'person',
      title: 'بيانات الطلب',
      Component: ChangePartiesAgreementSummaryComponent,
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
    private _changePartiesAgreementRequestService: ChangePartiesAgreementRequestService,
    private _dataVisibilityOfLicenseProjectService: DataVisibilityOfLicenseProjectService,
    private projectLicenseServiceDetailsService: ProjectLicenseServiceDetailsService,
    private _router: Router,
    private _projectRequestLocalStorageService: ProjectRequestLocalStorageService,
    private _toastrNotificatioService: ToastrNotificatioService
  ) {}
  ngOnInit(): void {
    this.updateDataVisibilityOfLicenseProject();
    this.observeDataVisibilityOfLicenseProject();
    this.getCharteredAccountId();
  }
  get licenseProjectRequestStatusEnum() {
    return LicenseProjectRequestStatusEnum;
  }

  requestUserType: UserRequestTypeEnum | null = null;

  get userRequestTypeEnum() {
    return UserRequestTypeEnum;
  }
  getCharteredAccountId() {
    this.id = this._projectRequestLocalStorageService.getSelectedProjectLicenseRequestIdFromLocalStorage();
    this.getDetails();
  }
  getDetails() {
    this.subscriptions.push(
      this._changePartiesAgreementRequestService
        .getChangePartiesAgreementDetails(this.id as string)
        .subscribe((res: ChangePartiesAgreementDetialsDto) => {
          this.licenseProjectRequestId = res?.licenseProjectRequestId
          this.changeCharteredAccountantRequestDetailsDto = res
          this._changePartiesAgreementRequestService.selectedRequest$.next(
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
      .Create(this.licenseProjectRequestId!)
      .subscribe((res) => {
        // this._toastrNotificatioService.showSuccess('تم ارسال الطلب');
        this._router.navigate([
          `${Configuration.modules.wafi}/${Configuration.modules.licenseProjectRequests}/${Configuration.pages.licenseProjectRequests.licenseProjectRequestList}`,
        ]);
      });
  }
}
