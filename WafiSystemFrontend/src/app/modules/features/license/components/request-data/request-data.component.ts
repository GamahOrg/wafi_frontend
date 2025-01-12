import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Tabs } from 'src/app/shared/models/tabs.model';
import { RequestPhaseTypes, requestPhase } from '../../../qualifying/dataModels/request-details.model';
import { TabsService } from 'src/app/shared/services/tabs/tabs.service';
import { LicenseDetailsService } from '../../services/license-details/license-details.service';
import { LicenseRequestMainDataComponent } from '../license-request-main-data/license-request-main-data.component';
import { LicenseRequestProjectDataComponent } from '../license-request-project-data/license-request-project-data.component';
import { LicenseRequestFeasibilityStudyComponent } from '../license-request-feasibility-study/license-request-feasibility-study.component';
import { LicenseRequestProjectPartiesComponent } from '../license-request-project-parties/license-request-project-parties.component';
import { DataVisibilityOfLicenseProjectService } from '../../services/data-visibility-of-license-project/data-visibility-of-license-project.service';
import { TabCode } from '../../models/tab-code.model';

@Component({
  selector: 'app-request-data',
  templateUrl: './request-data.component.html',
  styleUrls: ['./request-data.component.scss'],
  providers: [TabsService],
})
export class RequestDataComponent implements OnInit, OnDestroy {
  subscriptions: Subscription[] = [];
  mainTabsComponentList =
    [
      {
        icon: 'person',
        title: 'البيانات الأساسية',
        Component: LicenseRequestMainDataComponent,
        disabled: false,
        id: 'MainData',
        errNum: 0,
        tabCode: TabCode.mainData,
        tabErrors: [],
        isVisible: true,
      },
      {
        icon: 'holiday_village',
        title: 'بيانات المشروع',
        Component: LicenseRequestProjectDataComponent,
        disabled: false,
        id: 'ProjectData',
        errNum: 0,
        tabCode: TabCode.projectData,
        tabErrors: [],
        isVisible: true,
      },
      {
        icon: 'insert_drive_file',
        title: 'دراسة الجدوى',
        Component: LicenseRequestFeasibilityStudyComponent,
        disabled: false,
        id: 'FeasibilityStudy',
        errNum: 0,
        tabCode: TabCode.feasibilityStudy,
        tabErrors: [],
        isVisible: true,
      },
      {
        icon: 'people',
        title: 'أطراف المشروع',
        Component: LicenseRequestProjectPartiesComponent,
        disabled: false,
        id: 'ProjectParties',
        errNum: 0,
        tabCode: TabCode.projectParties,
        tabErrors: [],
        isVisible: true,
      }
    ]
  tabContent: Tabs = {
    verticalTabs: false,
    activeTabIndex: 0,
    tabsComponentList:
      []
  }
  get RequestPhaseTypes() {
    return RequestPhaseTypes
  }
  requestPhases: requestPhase[] | null = null;

  constructor(
    private _tabsService: TabsService,
    private _licenseDetailsService: LicenseDetailsService,
    private _dataVisibilityOfLicenseProjectService: DataVisibilityOfLicenseProjectService,
  ) { }

  ngOnInit(): void {
    this.observeDataVisibilityOfLicenseProject();
    this.observeRequestPhases();

  }
  observeRequestPhases() {
    this.subscriptions.push(
      this._licenseDetailsService.requestPhases$.subscribe((res: requestPhase[]) => {
        this.requestPhases = res
      })
    )
  }
  private observeDataVisibilityOfLicenseProject() {
    
    this._tabsService.resetTabContent();
    this.tabContent.tabsComponentList = []
    this.tabContent = new Tabs()
    this._dataVisibilityOfLicenseProjectService.getDataVisibilityOfLicenseProjectForCertainTab(this.subscriptions, this.mainTabsComponentList, true, false, this._tabsService)
  }




  private resetTabsIndex(): void {
    this._tabsService.updateActiveTabIndex(0);
    this._tabsService.updateActiveVerticalTabIndex(0);
  }


  private updateTabContent() {
    this._tabsService.updateTabContent(this.tabContent)
  }
  ngOnDestroy(): void {
    this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe());
  }
}
