import { Component, OnInit } from '@angular/core';
import { TabCode } from '../../../models/tab-code.model';
import { CorrectionConstructionLicensesComponent } from './components/correction-construction-licenses/correction-construction-licenses.component';
import { Tabs } from 'src/app/shared/models/tabs.model';
import { TabsService } from 'src/app/shared/services/tabs/tabs.service';
import { SharedLicenseProjectService } from '../../../services/sharedLicenseProject/shared-license-project.service';
import { CorrectionLicenseProjectDeedsContainerComponent } from './components/correction-license-project-deeds-container/correction-license-project-deeds-container.component';

@Component({
  selector: 'app-deeds-and-building-permits-tab',
  templateUrl: './deeds-and-building-permits-tab.component.html',
  styleUrls: ['./deeds-and-building-permits-tab.component.scss'],
})
export class DeedsAndBuildingPermitsTabComponent implements OnInit {
  mainTabsComponentList = [
    {
      icon: '',
      title: 'الصكوك',
      Component: CorrectionLicenseProjectDeedsContainerComponent,
      disabled: false,
      id: 'ProjectLandTitleDeedsComponent',
      errNum: 0,
      tabCode: TabCode.licenseProjectDeed,
      tabErrors: [],
      isVisible: true,
      isCompleted: false,
    },

    {
      icon: '',
      title: 'الرخص الإنشائية',
      Component: CorrectionConstructionLicensesComponent,
      disabled: false,
      id: 'ConstructionLicensesComponent',
      errNum: 0,
      tabCode: TabCode.constructionLicense,
      tabErrors: [],
      isVisible: true,
      isCompleted: false,
    },
  ];
  licenseProjectId: string | null = null;

  tabContent: Tabs = {
    verticalTabs: true,
    activeTabIndex: 0,
    tabTitle: '',
    tabsComponentList: [],
  };
  constructor(
    private _tabsService: TabsService,
    private _sharedLicenseProjectService: SharedLicenseProjectService
  ) {}

  ngOnInit() {
    this.getLicenseProjectIdStorage();
    this.getDataVisibilityOfLicenseProject();
  }

  private getLicenseProjectIdStorage(): void {
    this.licenseProjectId =
      this._sharedLicenseProjectService.getLicenseProjectIdStorage();
    if (this.licenseProjectId) {
      this.getDataVisibilityOfLicenseProject();
    }
  }
  private getDataVisibilityOfLicenseProject() {
    var tabContent = new Tabs();

    tabContent.tabsComponentList = this.mainTabsComponentList;
    this._tabsService.updateVerticalTabContent(tabContent);
  }
}
