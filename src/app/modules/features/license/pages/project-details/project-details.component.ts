import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Tabs } from 'src/app/shared/models/tabs.model';
import { TabsService } from 'src/app/shared/services/tabs/tabs.service';
import { TimeScheduleComponent } from '../../components/time-schedule/time-schedule.component';
import { PlannedEngineeringSupervisionReportsComponent } from '../../components/planned-engineering-supervision-reports/planned-engineering-supervision-reports.component';
import { ProjectBusinessCaseContainerComponent } from '../../components/project-business-case-container/project-business-case-container.component';
import { LicenseProjectQualityNoticeContainerComponent } from '../../components/license-project-quality-notice-container/license-project-quality-notice-container.component';
import { ActualValueReportContainerComponent } from '../../components/actual-value-report-container/actual-value-report-container.component';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.scss']
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
    ProjectBusinessCaseReport:"تقرير حالة الأعمال",
    plannedEngineeringSupervisionReportsActualResult: "تقرير الإشراف الهندسي (القيم الفعلية)",
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
      {
        icon: '',
        title: this.localization.monthlyEngineeringSupervisionReports,
        Component: ActualValueReportContainerComponent,
        disabled: false,
        isVisible: true,
      },   
      {
        icon: '',
        title: this.localization.ProjectBusinessCaseReport,
        Component: ProjectBusinessCaseContainerComponent,
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
