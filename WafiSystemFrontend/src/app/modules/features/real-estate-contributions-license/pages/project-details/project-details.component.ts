import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Tabs } from 'src/app/shared/models/tabs.model';
import { TabsService } from 'src/app/shared/services/tabs/tabs.service';
import { SharedLicenseProjectService } from '../../services/sharedLicenseProject/shared-license-project.service';
import { ProjectInformationComponent } from '../../components/project-information/project-information.component';
import { TimeScheduleComponent } from '../../components/time-schedule/time-schedule.component';
import { PlannedEngineeringSupervisionReportsComponent } from '../../components/planned-engineering-supervision-reports/planned-engineering-supervision-reports.component';
import { MonthlyEngineeringSupervisionReportsComponent } from '../../components/monthly-engineering-supervision-reports/monthly-engineering-supervision-reports.component';
import { ProjectRequestsComponent } from '../../components/project-requests/project-requests.component';
import { DangerLogComponent } from '../../components/danger-log/danger-log.component';
import { ProblemLogComponent } from '../../components/problem-log/problem-log.component';
import { LicenseProjectQualityNoticeContainerComponent } from '../../components/license-project-quality-notice-container/license-project-quality-notice-container.component';
import { ProjectBusinessCaseContainerComponent } from '../../components/project-business-case-container/project-business-case-container.component';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.scss']
})
export class ProjectDetailsComponent implements OnInit, OnDestroy{

  subscriptions: Subscription[] = [];
  localization = {
    projectInformation: "معلومات المشروع",
    timeSchedule: "البرنامج الزمني",
    plannedEngineeringSupervisionReports: "تقرير الإشراف الهندسي (القيم المخططة)",
    monthlyEngineeringSupervisionReports: "تقرير استشاري الإشراف الهندسي الشهري",
    qualityNotices: "إشعارات الجودة",
    projectRequests: "طلبات المشروع",
    DangerLog:"سجل المخاطر",
    ProblemLog:"سجل المشاكل",
   ProjectBusinessCaseReport:"تقرير حالة الأعمال"
  };
  tabContent: Tabs = {
    verticalTabs: false,
    activeTabIndex: 0,
    tabsComponentList: [
      // {
      //   icon: '',
      //   title: this.localization.projectInformation,
      //   Component: ProjectInformationComponent,
      //   disabled: false,
      //   isVisible: true,
      // },
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
      // {
      //   icon: '',
      //   title: this.localization.ProjectBusinessCaseReport,
      //   Component: ProjectBusinessCaseContainerComponent,
      //   disabled: false,
      //   isVisible: true,
      // },
      // {
      //   icon: '',
      //   title: this.localization.monthlyEngineeringSupervisionReports,
      //   Component: MonthlyEngineeringSupervisionReportsComponent,
      //   disabled: false,
      //   isVisible: true,
      // },
      {
        icon: '',
        title: this.localization.qualityNotices,
        Component: LicenseProjectQualityNoticeContainerComponent,
        disabled: false,
        isVisible: true,
      },
      // {
      //   icon: '',
      //   title: this.localization.DangerLog,
      //   Component: DangerLogComponent,
      //   disabled: false,
      //   isVisible: true,
      // },
      // {
      //   icon: '',
      //   title: this.localization.ProblemLog,
      //   Component: ProblemLogComponent,
      //   disabled: false,
      //   isVisible: true,
      // },
      // {
      //   icon: '',
      //   title: this.localization.projectRequests,
      //   Component: ProjectRequestsComponent,
      //   disabled: false,
      //   isVisible: true,
      // },
    ],
  };
  constructor(
    private _tabsService: TabsService,
    private _sharedLicenseProjectService: SharedLicenseProjectService,
  ) { }

  ngOnInit(): void {
    this.updateTabContent()
  }
  private updateTabContent(): void {
    this._tabsService.updateTabContent(this.tabContent);
  }
  ngOnDestroy(): void {
    this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe());
  }
}
