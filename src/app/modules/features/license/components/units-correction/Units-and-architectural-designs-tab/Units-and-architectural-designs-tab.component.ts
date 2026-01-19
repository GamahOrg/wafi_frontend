import { Component, OnInit } from '@angular/core';
import { Tabs } from 'src/app/shared/models/tabs.model';
import { TabCode } from '../../../models/tab-code.model';
import { CorrectionLincenseProjectZonesComponent } from './Zones/correction-lincense-project-zones/correction-lincense-project-zones.component';
import { CorrectionProjectModuleModelsComponent } from './correction-project-module-models/correction-project-module-models.component';
import { CorrectionProjectUnitCodesComponent } from './correction-project-unit-codes/correction-project-unit-codes.component';
import { CorrectionArchitecturalDesignFilesComponent } from './correction-architectural-design-files/correction-architectural-design-files.component';
import { TabsService } from 'src/app/shared/services/tabs/tabs.service';
import { SharedLicenseProjectService } from '../../../services/sharedLicenseProject/shared-license-project.service';

@Component({
  selector: 'app-Units-and-architectural-designs-tab',
  templateUrl: './Units-and-architectural-designs-tab.component.html',
  styleUrls: ['./Units-and-architectural-designs-tab.component.scss'],
})
export class UnitsAndArchitecturalDesignsTabComponent implements OnInit {
  mainTabsComponentList = [
    {
      icon: '',
      title: 'الزون و بلوكات وعمائر',
      Component: CorrectionLincenseProjectZonesComponent,
      disabled: false,
      id: 'BlocksAndbuildingsAndunitsComponent',
      errNum: 0,
      tabCode: TabCode.licenseProjectZone,
      tabErrors: [],
      isVisible: true,
      isCompleted: false,
    },

    {
      icon: '',
      title: 'أنواع الوحدات بالبلوك / العمارة',
      Component: CorrectionProjectModuleModelsComponent,
      disabled: false,
      id: 'ProjectModuleModelsComponent',
      errNum: 0,
      tabCode: TabCode.licenseProjectModel,
      tabErrors: [],
      isVisible: true,
      isCompleted: false,
    },
    {
      icon: '',
      title: 'أكواد وحدات المشروع',
      Component: CorrectionProjectUnitCodesComponent,
      disabled: false,
      id: 'ProjectUnitCodesComponent',
      errNum: 0,
      tabCode: TabCode.licenseProjectCodes,
      tabErrors: [],
      isVisible: true,
      isCompleted: false,
    },
    {
      icon: '',
      title: 'ملفات التصاميم المعمارية للمشروع',
      Component: CorrectionArchitecturalDesignFilesComponent,
      disabled: false,
      id: 'ArchitecturalDesignFilesComponent',
      errNum: 0,
      tabCode: TabCode.licenseProjectDesign,
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
