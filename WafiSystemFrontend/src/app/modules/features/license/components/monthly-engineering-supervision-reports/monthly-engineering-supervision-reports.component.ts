import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Tabs } from 'src/app/shared/models/tabs.model';
import { TabsService } from 'src/app/shared/services/tabs/tabs.service';
import { PositionOfTheRequiredAppropriationsFromTheAuthoritiesComponent } from '../position-of-the-required-appropriations-from-the-authorities/position-of-the-required-appropriations-from-the-authorities.component';
import { MonthlyEngineeringSupervisionReportsInfraStructureComponent } from '../monthly-engineering-supervision-reports-infra-structure/monthly-engineering-supervision-reports-infra-structure.component';
import { MonthlyEngineeringSupervisionReportsRisksAndSafetyComponent } from '../monthly-engineering-supervision-reports-risks-and-safety/monthly-engineering-supervision-reports-risks-and-safety.component';
import { MonthlyengineeringSupervisionReportsProjectDetailsComponent } from '../monthlyengineering-supervision-reports-project-details/monthlyengineering-supervision-reports-project-details.component';
import { MonthlyEngineeringSupervisionReportsQualityAndBusinessProgressComponent } from '../monthly-engineering-supervision-reports-quality-and-business-progress/monthly-engineering-supervision-reports-quality-and-business-progress.component';
import { MonthlyEngineeringSupervisionReportsWorkStatusReportsComponent } from '../monthly-engineering-supervision-reports-work-status-reports/monthly-engineering-supervision-reports-work-status-reports.component';

@Component({
  selector: 'app-monthly-engineering-supervision-reports',
  templateUrl: './monthly-engineering-supervision-reports.component.html',
  styleUrls: ['./monthly-engineering-supervision-reports.component.scss']
})
export class MonthlyEngineeringSupervisionReportsComponent implements OnInit, OnDestroy {
  subscriptions: Subscription[] = [];

  localization = {
    MonthlyEngineeringSupervisionReportsWorkStatusReports: "تقارير حالة الأعمال",
    MonthlyEngineeringSupervisionReportsQualityAndBusinessProgress: "الجودة وتقدم الأعمال",
    MonthlyengineeringSupervisionReportsProjectDetails: "تفاصيل المشروع",
    MonthlyEngineeringSupervisionReportsRisksAndSafety: "المخاطر والسلامة",
    MonthlyEngineeringSupervisionReportsInfraStructure: "البنية التحتية",
    positionOfTheRequiredAppropriationsFromTheAuthorities: "موقف الاعتمادات المطلوبة من الجهات"
  };

  tabContent: Tabs = {
    verticalTabs: false,
    activeTabIndex: 0,
    tabsComponentList: [
      {
        icon: '',
        title: this.localization.MonthlyEngineeringSupervisionReportsWorkStatusReports,
        Component: MonthlyEngineeringSupervisionReportsWorkStatusReportsComponent,
        disabled: false,
        isVisible: true,
      },
      {
        icon: '',
        title: this.localization.MonthlyEngineeringSupervisionReportsQualityAndBusinessProgress,
        Component: MonthlyEngineeringSupervisionReportsQualityAndBusinessProgressComponent,
        disabled: false,
        isVisible: true,
      },
      {
        icon: '',
        title: this.localization.MonthlyengineeringSupervisionReportsProjectDetails,
        Component: MonthlyengineeringSupervisionReportsProjectDetailsComponent,
        disabled: false,
        isVisible: true,
      },
      {
        icon: '',
        title: this.localization.MonthlyEngineeringSupervisionReportsRisksAndSafety,
        Component: MonthlyEngineeringSupervisionReportsRisksAndSafetyComponent,
        disabled: false,
        isVisible: true,
      },
      {
        icon: '',
        title: this.localization.MonthlyEngineeringSupervisionReportsInfraStructure,
        Component: MonthlyEngineeringSupervisionReportsInfraStructureComponent,
        disabled: false,
        isVisible: true,
      },
      {
        icon: '',
        title: this.localization.positionOfTheRequiredAppropriationsFromTheAuthorities,
        Component: PositionOfTheRequiredAppropriationsFromTheAuthoritiesComponent,
        disabled: false,
        isVisible: true,
      },
      
    ],
  };

  constructor(
    private _tabsService: TabsService,
  ) { }

  ngOnInit(): void {
    this.updateTabContent();
  }

  private updateTabContent(): void {
    this._tabsService.updateVerticalTabContent(this.tabContent);
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe());
  }
}
