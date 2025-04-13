import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { CancelLicenseProjectSummaryComponent } from '../cancel-license-project-summary/cancel-license-project-summary.component';
import { CancelLicenseDeveloperSummaryComponent } from '../cancel-license-developer-summary/cancel-license-developer-summary.component';
import { CancelLicenseEngineeringSummaryComponent } from '../cancel-license-engineering-summary/cancel-license-engineering-summary.component';
import { CancelLicenseAccountantSummaryComponent } from '../cancel-license-accountant-summary/cancel-license-accountant-summary.component';
import { DataVisibilityOfLicenseProjectService } from '../../../license/services/data-visibility-of-license-project/data-visibility-of-license-project.service';
import { LicenseRequestTabCode } from '../../../license/models/tab-code.model';
import { CancelLicenseRequestService } from '../../services/cancel-license-request.service';
import { ProjectRequestLocalStorageService } from '../../services/project-request-local-storage.service';
import { UserRequestTypeEnum } from '../../../license/enums/user-request-type';
import { UserDataService } from 'src/app/core/services/user-data/user-data.service';
import { customerResponse } from 'src/app/shared/models/customer.model';
import { ProjectLicenseServiceDetailsService } from '../../services/project-license-service-details.service';

@Component({
  selector: 'app-cancel-license-main-data-summary',
  templateUrl: './cancel-license-main-data-summary.component.html',
  styleUrls: ['./cancel-license-main-data-summary.component.scss']
})
export class CancelLicenseMainDataSummaryComponent implements OnInit, OnDestroy {
  subscriptions: Subscription[] = [];
  facilityId: string = '';
  userRequestType?: UserRequestTypeEnum | null = null;
  mainTabsComponentList = [
    {
      icon: '',
      title: 'بيانات المشروع',
      Component: CancelLicenseProjectSummaryComponent,
      disabled: false,
      id: 'CancelLicenseProjectSummaryComponent',
      errNum: 0,
      tabCode: LicenseRequestTabCode.ProjectData,
      tabErrors: [],
      isVisible: true,
    },
    {
      icon: '',
      title: 'البيانات من المطور',
      Component: CancelLicenseDeveloperSummaryComponent,
      disabled: false,
      id: 'CancelLicenseDeveloperSummaryComponent',
      errNum: 0,
      tabCode: LicenseRequestTabCode.DeveloperData,
      tabErrors: [],
      isVisible: true,
    },
    {
      icon: '',
      title: 'البيانات من الاستشارى الهندسى',
      Component: CancelLicenseEngineeringSummaryComponent,
      disabled: false,
      id: 'CancelLicenseEngineeringSummaryComponent',
      errNum: 0,
      tabCode: LicenseRequestTabCode.EngineeringConsultantData,
      tabErrors: [],
      isVisible: true,
    },
    {
      icon: '',
      title: 'البيانات من المحاسب القانونى',
      Component: CancelLicenseAccountantSummaryComponent,
      disabled: false,
      id: 'CancelLicenseAccountantSummaryComponent',
      errNum: 0,
      tabCode: LicenseRequestTabCode.AccountantData,
      tabErrors: [],
      isVisible: true,
    },

  ];
  constructor(
    private _userDataService: UserDataService,
    private projectLicenseServiceDetailsService: ProjectLicenseServiceDetailsService,
    private cancelLicenseRequestService: CancelLicenseRequestService,
    private projectRequestLocalStorageService: ProjectRequestLocalStorageService,
    private _dataVisibilityOfLicenseProjectService: DataVisibilityOfLicenseProjectService,
  ) { };
  ngOnInit(): void {
    this.getRequestDetails()
    this.obseveCustomerData();
  }
  private getDataVisibilityOfLicenseProject() {
    if (this.userRequestType) {
      switch (this.userRequestType) {
        case UserRequestTypeEnum.RealEstateDeveloper:
          this.mainTabsComponentList = [
            {
              icon: '',
              title: 'بيانات المشروع',
              Component: CancelLicenseProjectSummaryComponent,
              disabled: false,
              id: 'CancelLicenseProjectSummaryComponent',
              errNum: 0,
              tabCode: LicenseRequestTabCode.ProjectData,
              tabErrors: [],
              isVisible: true,
            },
            {
              icon: '',
              title: 'البيانات من المطور',
              Component: CancelLicenseDeveloperSummaryComponent,
              disabled: false,
              id: 'CancelLicenseDeveloperSummaryComponent',
              errNum: 0,
              tabCode: LicenseRequestTabCode.DeveloperData,
              tabErrors: [],
              isVisible: true,
            },
            {
              icon: '',
              title: 'البيانات من الاستشارى الهندسى',
              Component: CancelLicenseEngineeringSummaryComponent,
              disabled: false,
              id: 'CancelLicenseEngineeringSummaryComponent',
              errNum: 0,
              tabCode: LicenseRequestTabCode.EngineeringConsultantData,
              tabErrors: [],
              isVisible: true,
            },
            {
              icon: '',
              title: 'البيانات من المحاسب القانونى',
              Component: CancelLicenseAccountantSummaryComponent,
              disabled: false,
              id: 'CancelLicenseAccountantSummaryComponent',
              errNum: 0,
              tabCode: LicenseRequestTabCode.AccountantData,
              tabErrors: [],
              isVisible: true,
            },

          ];
          break;
        case UserRequestTypeEnum.Accountant:
          this.mainTabsComponentList = [
            {
              icon: '',
              title: 'بيانات المشروع',
              Component: CancelLicenseProjectSummaryComponent,
              disabled: false,
              id: 'CancelLicenseProjectSummaryComponent',
              errNum: 0,
              tabCode: LicenseRequestTabCode.ProjectData,
              tabErrors: [],
              isVisible: true,
            },
            {
              icon: '',
              title: 'البيانات من المحاسب القانونى',
              Component: CancelLicenseAccountantSummaryComponent,
              disabled: false,
              id: 'CancelLicenseAccountantSummaryComponent',
              errNum: 0,
              tabCode: LicenseRequestTabCode.AccountantData,
              tabErrors: [],
              isVisible: true,
            },
        
          ];
          break;
        case UserRequestTypeEnum.EngineeringConsultant:
        case UserRequestTypeEnum.ProjectManager:
          this.mainTabsComponentList = [
            {
              icon: '',
              title: 'بيانات المشروع',
              Component: CancelLicenseProjectSummaryComponent,
              disabled: false,
              id: 'CancelLicenseProjectSummaryComponent',
              errNum: 0,
              tabCode: LicenseRequestTabCode.ProjectData,
              tabErrors: [],
              isVisible: true,
            },
            {
              icon: '',
              title: 'البيانات من الاستشارى الهندسى',
              Component: CancelLicenseEngineeringSummaryComponent,
              disabled: false,
              id: 'CancelLicenseEngineeringSummaryComponent',
              errNum: 0,
              tabCode: LicenseRequestTabCode.EngineeringConsultantData,
              tabErrors: [],
              isVisible: true,
            },
        
          ];
          break;
      }
    }

    this._dataVisibilityOfLicenseProjectService.getDataVisibilityOfLicenseProjectForCertainTab(this.subscriptions, this.mainTabsComponentList, false, true)
  }

  obseveCustomerData(): void {
    this.subscriptions.push(
      this._userDataService
        .getCustomerData()
        .subscribe((res: customerResponse | null) => {
          if (res && res.facilities && res.facilities.length > 0) {
            this.facilityId = res?.facilities[0]?.id || '';
            this.getUserRequestType();
          }
        })
    );
  }



  getUserRequestType() {
    let requestId = this.projectRequestLocalStorageService.getSelectedProjectLicenseRequestIdFromLocalStorage();
    if (requestId) {
      this.subscriptions.push(
        this.projectLicenseServiceDetailsService
          .getUserRequestType(requestId as string, this.facilityId)
          .subscribe((res: UserRequestTypeEnum | null) => {
            this.userRequestType = res;
            this.projectLicenseServiceDetailsService.requestUserType$.next(res);
            this.getDataVisibilityOfLicenseProject();
          })
      );
    }
  }
  getRequestDetails() {
    let requestId = this.projectRequestLocalStorageService.getSelectedProjectLicenseRequestIdFromLocalStorage();
    if (requestId) {
      this.cancelLicenseRequestService.getLicenseProjectDetailsById(requestId).subscribe(res => {
        this.cancelLicenseRequestService.selectedRequest$.next(res);
      })
    }

  }
  ngOnDestroy(): void {
    this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe());
  }

}
