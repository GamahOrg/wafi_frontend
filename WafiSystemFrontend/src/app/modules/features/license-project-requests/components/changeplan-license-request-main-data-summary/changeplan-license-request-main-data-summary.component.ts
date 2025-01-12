import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { DataVisibilityOfLicenseProjectService } from '../../../license/services/data-visibility-of-license-project/data-visibility-of-license-project.service';
import { LicenseRequestTabCode } from '../../../license/models/tab-code.model';
import { ChangeplanLicenseRequestProjectSummaryComponent } from '../changeplan-license-request-project-summary/changeplan-license-request-project-summary.component';
import { ChangeplanLicenseRequestEngineeringSummaryComponent } from '../changeplan-license-request-engineering-summary/changeplan-license-request-engineering-summary.component';
import { ChangeplanLicenseRequestAccountantSummaryComponent } from '../changeplan-license-request-accountant-summary/changeplan-license-request-accountant-summary.component';
import { ChangeplanLicenseRequestDeveloperSummaryComponent } from '../changeplan-license-request-developer-summary/changeplan-license-request-developer-summary.component';
import { ProjectLicenseServiceDetailsService } from '../../services/project-license-service-details.service';
import { UserDataService } from 'src/app/core/services/user-data/user-data.service';
import { customerResponse } from 'src/app/shared/models/customer.model';
import { ProjectRequestLocalStorageService } from '../../services/project-request-local-storage.service';
import { UserRequestTypeEnum } from '../../../license/enums/user-request-type';

@Component({
  selector: 'app-changeplan-license-request-main-data-summary',
  templateUrl: './changeplan-license-request-main-data-summary.component.html',
  styleUrls: ['./changeplan-license-request-main-data-summary.component.scss']
})
export class ChangeplanLicenseRequestMainDataSummaryComponent implements OnInit, OnDestroy {
  subscriptions: Subscription[] = [];
  facilityId: string = '';
  userRequestType?: UserRequestTypeEnum | null = null;
  mainTabsComponentList = [
    {
      icon: '',
      title: 'بيانات المشروع',
      Component: ChangeplanLicenseRequestProjectSummaryComponent,
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
      Component: ChangeplanLicenseRequestDeveloperSummaryComponent,
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
      Component: ChangeplanLicenseRequestEngineeringSummaryComponent,
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
      Component: ChangeplanLicenseRequestAccountantSummaryComponent,
      disabled: false,
      id: 'CancelLicenseAccountantSummaryComponent',
      errNum: 0,
      tabCode: LicenseRequestTabCode.AccountantData,
      tabErrors: [],
      isVisible: true,
    },

  ];
  constructor(
    //private _licenseRequestService: LicenseRequestService,
    private _userDataService: UserDataService,
    private projectRequestLocalStorageService: ProjectRequestLocalStorageService,
    private projectLicenseServiceDetailsService: ProjectLicenseServiceDetailsService,
    private _dataVisibilityOfLicenseProjectService: DataVisibilityOfLicenseProjectService,
  ) { };
  ngOnInit(): void {   
    this.obseveCustomerData()
  }
  private getDataVisibilityOfLicenseProject() {
    if (this.userRequestType != null) {
      switch (this.userRequestType) {
        case UserRequestTypeEnum.RealEstateDeveloper:
          this.mainTabsComponentList = [
            {
              icon: '',
              title: 'بيانات المشروع',
              Component: ChangeplanLicenseRequestProjectSummaryComponent,
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
              Component: ChangeplanLicenseRequestDeveloperSummaryComponent,
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
              Component: ChangeplanLicenseRequestEngineeringSummaryComponent,
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
              Component: ChangeplanLicenseRequestAccountantSummaryComponent,
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
              Component: ChangeplanLicenseRequestProjectSummaryComponent,
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
              Component: ChangeplanLicenseRequestAccountantSummaryComponent,
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
              Component: ChangeplanLicenseRequestProjectSummaryComponent,
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
              Component: ChangeplanLicenseRequestEngineeringSummaryComponent,
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

  ngOnDestroy(): void {
    this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe());
  }

}
