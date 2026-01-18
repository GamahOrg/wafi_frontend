import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Tabs, tabsComponent } from 'src/app/shared/models/tabs.model';
import { TabCode } from '../../../models/tab-code.model';
import { DataVisibilityOfLicenseProjectService } from '../../../services/data-visibility-of-license-project/data-visibility-of-license-project.service';
import { TabsService } from 'src/app/shared/services/tabs/tabs.service';
import { CorrectionLicenseProjectDeedsComponent } from '../correction-license-project-deeds/correction-license-project-deeds.component';
import { CorrectionConstructionLicensesComponent } from '../correction-construction-licenses/correction-construction-licenses.component';

@Component({
  selector: 'app-correction-license-project-deeds-container',
  templateUrl: './correction-license-project-deeds-container.component.html',
  styleUrls: ['./correction-license-project-deeds-container.component.scss']
})
export class CorrectionLicenseProjectDeedsContainerComponent implements OnInit, OnDestroy {
  subscriptions: Subscription[] = [];

  mainTabsComponentList: tabsComponent[] = [
    {
      icon: '',
      title: 'الصكوك',
      Component: CorrectionLicenseProjectDeedsComponent,
      disabled: false,
      id: 'CorrectionLicenseProjectDeeds',
      errNum: 0,
      tabCode: TabCode.correctionLicenseProjectDeeds,
      tabErrors: [],
      isVisible: true,
    },
    {
      icon: '',
      title: 'الرخص الإنشائية (البناء)',
      Component: CorrectionConstructionLicensesComponent,
      disabled: false,
      id: 'CorrectionConstructionLicenses',
      errNum: 0,
      tabCode: TabCode.correctionConstructionLicenses,
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
