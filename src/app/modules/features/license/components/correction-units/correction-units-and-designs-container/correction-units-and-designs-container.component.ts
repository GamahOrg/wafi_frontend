import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Tabs, tabsComponent } from 'src/app/shared/models/tabs.model';
import { TabCode } from '../../../models/tab-code.model';
import { DataVisibilityOfLicenseProjectService } from '../../../services/data-visibility-of-license-project/data-visibility-of-license-project.service';
import { TabsService } from 'src/app/shared/services/tabs/tabs.service';
import { CorrectionZonesBlocksBuildingsComponent } from '../correction-zones-blocks-buildings/correction-zones-blocks-buildings.component';
import { CorrectionUnitTypesComponent } from '../correction-unit-types/correction-unit-types.component';
import { CorrectionProjectUnitCodesComponent } from '../correction-project-unit-codes/correction-project-unit-codes.component';
import { CorrectionArchitecturalDesignsComponent } from '../correction-architectural-designs/correction-architectural-designs.component';

@Component({
  selector: 'app-correction-units-and-designs-container',
  templateUrl: './correction-units-and-designs-container.component.html',
  styleUrls: ['./correction-units-and-designs-container.component.scss']
})
export class CorrectionUnitsAndDesignsContainerComponent implements OnInit, OnDestroy {
  subscriptions: Subscription[] = [];

  mainTabsComponentList: tabsComponent[] = [
    {
      icon: '',
      title: 'الزون والبلوكات والعمائر',
      Component: CorrectionZonesBlocksBuildingsComponent,
      disabled: false,
      id: 'CorrectionZonesBlocksBuildings',
      errNum: 0,
      tabCode: TabCode.correctionZonesBlocksBuildings,
      tabErrors: [],
      isVisible: true,
    },
    {
      icon: '',
      title: 'أنواع الوحدات بالبلوك / العمارة',
      Component: CorrectionUnitTypesComponent,
      disabled: false,
      id: 'CorrectionUnitTypes',
      errNum: 0,
      tabCode: TabCode.correctionUnitTypes,
      tabErrors: [],
      isVisible: true,
    },
    {
      icon: '',
      title: 'اكواد وحدات المشروع',
      Component: CorrectionProjectUnitCodesComponent,
      disabled: false,
      id: 'CorrectionProjectUnitCodes',
      errNum: 0,
      tabCode: TabCode.correctionProjectUnitCodes,
      tabErrors: [],
      isVisible: true,
    },
    {
      icon: '',
      title: 'التصاميم المعمارية والمخططات الهندسية',
      Component: CorrectionArchitecturalDesignsComponent,
      disabled: false,
      id: 'CorrectionArchitecturalDesigns',
      errNum: 0,
      tabCode: TabCode.correctionArchitecturalDesigns,
      tabErrors: [],
      isVisible: true,
    },
  ];

  tabContent: Tabs = {
    verticalTabs: true,
    activeTabIndex: 0,
    tabTitle: '',
    tabsComponentList: []
  };

  constructor(
    private _dataVisibilityOfLicenseProjectService: DataVisibilityOfLicenseProjectService,
    private _tabsService: TabsService,
  ) { }

  ngOnInit(): void {
    // Initialize tabs immediately without backend dependency
    this.updateTabContent();
    // Note: Not calling getDataVisibilityOfLicenseProject() to keep tabs visible without backend dependency
  }

  private updateTabContent(): void {
    this.tabContent.tabsComponentList = this.mainTabsComponentList;
    this._tabsService.updateVerticalTabContent(this.tabContent);
    this._tabsService.updateActiveVerticalTabIndex(0);
  }

  private getDataVisibilityOfLicenseProject() {
    this._dataVisibilityOfLicenseProjectService.getDataVisibilityOfLicenseProjectForCertainTab(
      this.subscriptions,
      this.mainTabsComponentList,
      false,
      true
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe());
  }
}
