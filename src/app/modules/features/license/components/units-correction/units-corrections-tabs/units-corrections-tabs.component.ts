import { Component, OnInit } from '@angular/core';

import { Subscription } from 'rxjs';
import {
  RequestValidation,
  TabsError,
} from 'src/app/core/models/request-validation.model';
import { Tabs, tabsComponent } from 'src/app/shared/models/tabs.model';
import { TabsService } from 'src/app/shared/services/tabs/tabs.service';
import { TabCode } from '../../../models/tab-code.model';
import { DataVisibilityOfLicenseProjectService } from '../../../services/data-visibility-of-license-project/data-visibility-of-license-project.service';
import { LicenseRequestService } from '../../../services/license-request.service';
import { SharedLicenseProjectService } from '../../../services/sharedLicenseProject/shared-license-project.service';

import { UnitsAndArchitecturalDesignsTabComponent } from '../Units-and-architectural-designs-tab/Units-and-architectural-designs-tab.component';
import { DeedsAndBuildingPermitsTabComponent } from '../deeds-and-building-permits-tab/deeds-and-building-permits-tab.component';
import { LicenseRequestHeaderService } from '../../../services/license-request-header.service';
import { UnitCorrectionService } from '../../../services/unit-correction/unit-correction.service';
import { mockedData } from '../../../models/unit-correction.model';

@Component({
  selector: 'app-units-corrections-tabs',
  templateUrl: './units-corrections-tabs.component.html',
  styleUrls: ['./units-corrections-tabs.component.scss'],
})
export class UnitsCorrectionsTabsComponent implements OnInit {
  subscriptions: Subscription[] = [];
  validationError: RequestValidation | null = null;
  licenseProjectId: string | null = null;
  completedTapCodes: string[] = [];
  mainTabsComponentList: tabsComponent[] = [
    {
      number: 1,
      title: 'الصكوك ورخص البناء',
      Component: DeedsAndBuildingPermitsTabComponent,
      disabled: false,
      id: 'MainData',
      errNum: 0,
      tabCode: TabCode.DeedsAndBuildingPermits,
      tabErrors: [],
      isVisible: true,
      isCompleted: false,
    },
    {
      number: 2,
      title: 'الوحدات والتصاميم المعمارية',
      Component: UnitsAndArchitecturalDesignsTabComponent,
      disabled: false,
      id: 'ProjectData',
      errNum: 0,
      tabCode: TabCode.UnitsAndArchitecturalDesigns,
      tabErrors: [],
      isVisible: true,
      isCompleted: false,
    },
  ];
  tabContent: Tabs = {
    verticalTabs: true,
    activeTabIndex: 0,
    tabTitle: '',
    tabsComponentList: [],
  };
  constructor(
    private _tabsService: TabsService,
    private unitCorrectionService: UnitCorrectionService,
    private _sharedLicenseProjectService: SharedLicenseProjectService
  ) {}
  ngOnInit(): void {
    this.updateTabContent();
    this.getLicenseProjectIdStorage();
    this.GetLicenseRequestHeaderByRequestId();
  }
  private GetLicenseRequestHeaderByRequestId(): void {
    if (this.licenseProjectId) {
      this.unitCorrectionService.setZonesTabData([]);
      this.unitCorrectionService.setUnitsCorrectionData(mockedData);
      this.unitCorrectionService.setDeedsTabData(mockedData.deedsTabData);
      this.unitCorrectionService.setConstructionLicensesTabData(mockedData.constructionLicensesTabData);
      this.unitCorrectionService.setZonesAndBlocksTabData(mockedData.zonesAndBlocksTabData);
      this.unitCorrectionService.setUnitTypesTabData(mockedData.unitTypesAndCodesTabsData);
      this.unitCorrectionService.setLicenseProjectDesignFilesTabData(mockedData.licenseProjectDesignFilesTabData);
    }
  }
  private getLicenseProjectIdStorage(): void {
    this.licenseProjectId =
      this._sharedLicenseProjectService.getLicenseProjectIdStorage();
  }
  private updateTabContent() {
    this.tabContent.tabsComponentList = this.mainTabsComponentList;
    this._tabsService.updateTabContent(this.tabContent);
    this._tabsService.updateActiveTabIndex(0);
    this._tabsService.updateActiveVerticalTabIndex(0);
  }
  ngOnDestroy(): void {
    this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe());
  }
}
