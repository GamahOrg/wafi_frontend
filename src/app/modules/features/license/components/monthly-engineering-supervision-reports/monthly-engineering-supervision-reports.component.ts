import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Tabs } from 'src/app/shared/models/tabs.model';
import { TabsService } from 'src/app/shared/services/tabs/tabs.service';
import { PositionOfTheRequiredAppropriationsFromTheAuthoritiesComponent } from '../position-of-the-required-appropriations-from-the-authorities/position-of-the-required-appropriations-from-the-authorities.component';
import { MonthlyEngineeringSupervisionReportsInfraStructureComponent } from '../monthly-engineering-supervision-reports-infra-structure/monthly-engineering-supervision-reports-infra-structure.component';
import { MonthlyEngineeringSupervisionReportsRisksAndSafetyComponent } from '../monthly-engineering-supervision-reports-risks-and-safety/monthly-engineering-supervision-reports-risks-and-safety.component';
import { MonthlyengineeringSupervisionReportsProjectDetailsComponent } from '../monthlyengineering-supervision-reports-project-details/monthlyengineering-supervision-reports-project-details.component';
import { MonthlyEngineeringSupervisionReportsQualityAndBusinessProgressComponent } from '../monthly-engineering-supervision-reports-quality-and-business-progress/monthly-engineering-supervision-reports-quality-and-business-progress.component';
import { ShowActualValueWorkStatuesReportComponent } from '../show-actual-value-work-statues-report/show-actual-value-work-statues-report.component';
import { ActualNotesComponent } from '../actual-notes/actual-notes.component';
import { DangerLogComponent } from '../danger-log/danger-log.component';
import { ProblemLogComponent } from '../problem-log/problem-log.component';
import { LicenseProjectScopeEnum } from '../../../real-estate-contributions-license/dataModels/project-basic-data.dto';
import { ProjectBasicDataService } from '../../services/licenseProjects/project-basic-data.service';
import { SharedLicenseProjectService } from '../../services/sharedLicenseProject/shared-license-project.service';

@Component({
  selector: 'app-monthly-engineering-supervision-reports',
  templateUrl: './monthly-engineering-supervision-reports.component.html',
  styleUrls: ['./monthly-engineering-supervision-reports.component.scss']
})
export class MonthlyEngineeringSupervisionReportsComponent implements OnInit, OnDestroy {
  subscriptions: Subscription[] = [];
  licenseProjectId: string | null = '00000000-0000-0000-0000-000000000000';
  isSuperstructureScope: boolean = false;

  localization = {
    MonthlyEngineeringSupervisionReportsWorkStatusReports: "تقارير حالة الأعمال",
    MonthlyEngineeringSupervisionReportsQualityAndBusinessProgress: "الجودة وتقدم الأعمال",
    MonthlyengineeringSupervisionReportsProjectDetails: "تفاصيل المشروع",
    MonthlyEngineeringSupervisionReportsRisksAndSafety: "المخاطر والسلامة",
    MonthlyEngineeringSupervisionReportsInfraStructure: "البنية التحتية",
    positionOfTheRequiredAppropriationsFromTheAuthorities: "موقف الاعتمادات المطلوبة من الجهات",
    ProjectStatusSummary:'ملخص حالة المشروع',  
    DangerLog:"سجل المخاطر",
    ProblemLog:"سجل المشاكل",
    ProjectNotesSummary:'الملاحظات', 
  };

  tabContent: Tabs = {
    verticalTabs: false,
    activeTabIndex: 0,
    tabsComponentList: [ 
      {
        icon: '',
        title: this.localization.ProjectStatusSummary,
        Component: ShowActualValueWorkStatuesReportComponent,
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
      {
        icon: '',
        title: this.localization.DangerLog,
        Component: DangerLogComponent,
        disabled: false,
        isVisible: true,
      },
 
      {
        icon: '',
        title: this.localization.ProblemLog,
        Component: ProblemLogComponent,
        disabled: false,
        isVisible: true,
      },

      {
        icon: '',
        title: this.localization.ProjectNotesSummary,
        Component: ActualNotesComponent,
        disabled: false,
        isVisible: true,
      },
      
    ],
  };

  constructor(
    private _tabsService: TabsService,
    private _sharedLicenseProjectService: SharedLicenseProjectService,
    private _projectBasicDataService: ProjectBasicDataService,
  ) { }

  ngOnInit(): void {
    this.getLicenseProjectIdStorage();
    // this.updateTabContent();
  }

  private getLicenseProjectIdStorage(): void {
    this.licenseProjectId = this._sharedLicenseProjectService.getLicenseProjectIdStorage();
    if (this.licenseProjectId) {
      this.getEngineeringConsultantProjectsList();
      this.updateTabContent();
    }
  }

  getEngineeringConsultantProjectsList(): void {
    this.subscriptions.push(
      this._projectBasicDataService.GetMainDataByLicenseProjectId(this.licenseProjectId as string)
        .subscribe((res) => {
          if (res && res.data){
            this.isSuperstructureScope = res.data.licenseProjectScope?.code == LicenseProjectScopeEnum.Superstructure;
            this.updateTabContent();
          }
        })
    );
  }

  private updateTabContent(): void {
    if(this.isSuperstructureScope)
      this.tabContent.tabsComponentList = this.tabContent.tabsComponentList.filter(x => x.title !== this.localization.MonthlyEngineeringSupervisionReportsInfraStructure);

    this._tabsService.updateVerticalTabContent(this.tabContent);
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe());
  }

}
