import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Tabs, tabsComponent } from 'src/app/shared/models/tabs.model';
import { TabCode } from '../../../models/tab-code.model';
import { RequestValidation } from '../../../dataModels/request-validation.model';
import { CorrectingLicenseprojectDeedsViewOnlyComponent } from '../correcting-licenseproject-deeds-view-only/correcting-licenseproject-deeds-view-only.component';
import { TabsService } from 'src/app/shared/services/tabs/tabs.service';

@Component({
  selector: 'app-correcting-project-data',
  templateUrl: './correcting-project-data.component.html',
  styleUrls: ['./correcting-project-data.component.scss']
})
export class CorrectingProjectDataComponent implements OnInit, OnDestroy {
  subscriptions: Subscription[] = [];
  validationError: RequestValidation | null = null;

  mainTabsComponentList: tabsComponent[] = [    
    {
      icon: '',
      title: 'الصكوك',
      Component: CorrectingLicenseprojectDeedsViewOnlyComponent,
      disabled: false,
      id: 'correctingLicenseProjectDeeds',
      errNum: 0,
      tabCode: TabCode.correctionLicenseProjectDeeds,
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
     private _tabsService: TabsService,
  ) {}

  ngOnInit(): void {
    this.updateTabContent();
  }

   private updateTabContent(): void {
    this.tabContent.tabsComponentList = this.mainTabsComponentList;
    this._tabsService.updateVerticalTabContent(this.tabContent);
    this._tabsService.updateActiveVerticalTabIndex(0);
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe());
  }
}
