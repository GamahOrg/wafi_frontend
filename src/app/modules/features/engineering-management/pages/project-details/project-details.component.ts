import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Tabs } from 'src/app/shared/models/tabs.model';
import { TabsService } from 'src/app/shared/services/tabs/tabs.service';
import { RecommendationsComponent } from '../recommendations/recommendations.component';
import { EngineerProblemLogComponent } from '../problem-log/problem-log.component';
import { DangersRecordsComponent } from '../dangers-records/dangers-records.component';
import { LicenseProjectQualityNoticeContainerComponent } from '../license-project-quality-notice-container/license-project-quality-notice-container.component';
import { TimeScheduleComponent } from '../time-schedule/time-schedule.component';
import { PlannedEngineeringSupervisionReportsComponent } from '../PlannedReport/planned-engineering-supervision-reports/planned-engineering-supervision-reports.component';
import { ActualValueReportContainerComponent } from '../ActualPlannedReport/actual-value-report-container/actual-value-report-container.component';
import { UserDataService } from 'src/app/core/services/user-data/user-data.service';
import { customerResponse } from 'src/app/shared/models/customer.model';
import { QualificationType } from '../../../qualifying/dataModels/enum/qualification-request-type';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.scss'],
  standalone: false
})
export class ProjectDetailsComponent implements OnInit, OnDestroy {
  subscriptions: Subscription[] = [];
  localization = {
    projectInformation: "معلومات المشروع",
    timeSchedule: "البرنامج الزمني",
    plannedEngineeringSupervisionReports: "تقرير الإشراف الهندسي (القيم المخططة)",
    monthlyEngineeringSupervisionReports: "تقرير استشاري الإشراف الهندسي الشهري",
    qualityNotices: "إشعارات الجودة",
    projectRequests: "طلبات المشروع",
    ProjectBusinessCaseReport: "تقرير حالة الأعمال",
    plannedEngineeringSupervisionReportsActualResult: "تقرير الإشراف الهندسي (القيم الفعلىه)",
    recommendations: 'سجل التوصيات',
    DangerLog: 'سجل المخاطر',
    ProblemLog: 'سجل المشاكل',
  };

  tabContent: Tabs = {
    verticalTabs: false,
    activeTabIndex: 0,
    tabsComponentList: [

      {
        icon: '',
        title: this.localization.timeSchedule,
        Component: TimeScheduleComponent,
        disabled: false,
        isVisible: true,
      },
      {
        icon: '',
        title: this.localization.plannedEngineeringSupervisionReports,
        Component: PlannedEngineeringSupervisionReportsComponent,
        disabled: false,
        isVisible: true,
      },
      {
        icon: '',
        title: this.localization.monthlyEngineeringSupervisionReports,
        Component: ActualValueReportContainerComponent,
        disabled: false,
        isVisible: true,
      },
      {
        icon: '',
        title: this.localization.recommendations,
        Component: RecommendationsComponent,
        disabled: false,
        isVisible: true,
      },
      {
        icon: '',
        title: this.localization.ProblemLog,
        Component: EngineerProblemLogComponent,
        disabled: false,
        isVisible: true,
      },
      {
        icon: '',
        title: this.localization.DangerLog,
        Component: DangersRecordsComponent,
        disabled: false,
        isVisible: true,
      },
      {
        icon: '',
        title: this.localization.qualityNotices,
        Component: LicenseProjectQualityNoticeContainerComponent,
        disabled: false,
        isVisible: true,
      },
    ],
  };

  constructor(
    private _tabsService: TabsService,
    private _userDataService: UserDataService,
  ) { }

  ngOnInit(): void {
    this.obseveCustomerData()
  }

  userData: customerResponse | null = null;
  obseveCustomerData(): void {
    this.subscriptions.push(
      this._userDataService
        .getCustomerData()
        .subscribe((res: customerResponse | null) => {
          this.userData = res;
          if (this.userData && this.userData.facilities && this.userData.facilities.length > 0)
            this.checkIfAccountantFacility(this.userData.facilities[0].id)
        })
    );
  }

  isAccountant: boolean = false;
  isEngineer: boolean = false;
  isDeveloper: boolean = false;
  public checkIfAccountantFacility(facilityId: string): void {
    this.subscriptions.push(
      this._userDataService.getFacilityQualificationTypeCode(facilityId).subscribe((res: string | null) => {
        this.isAccountant = res == QualificationType.accountantQualificationRequest;
        this.isEngineer = res == QualificationType.engineeringConsultantQualificationRequest;
        this.isDeveloper = res == QualificationType.realStateDeveloperQualificationRequest ||
          res == QualificationType.realEstateDeveloperSpecializingInRealEstateParticipation;
        this.updateTabContent()
      })
    )
  }
  private updateTabContent(): void {

    if (this.isDeveloper) {
      this.tabContent.tabsComponentList = [
        {
          icon: '',
          title: this.localization.recommendations,
          Component: RecommendationsComponent,
          disabled: false,
          isVisible: true,
        },
        {
          icon: '',
          title: this.localization.ProblemLog,
          Component: EngineerProblemLogComponent,
          disabled: false,
          isVisible: true,
        },
        {
          icon: '',
          title: this.localization.DangerLog,
          Component: DangersRecordsComponent,
          disabled: false,
          isVisible: true,
        },
        {
          icon: '',
          title: this.localization.qualityNotices,
          Component: LicenseProjectQualityNoticeContainerComponent,
          disabled: false,
          isVisible: true,
        },
      ]
    }



    this._tabsService.updateTabContent(this.tabContent);
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe());
  }

}
