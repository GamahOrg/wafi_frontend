import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Tabs } from 'src/app/shared/models/tabs.model';
import { TabsService } from 'src/app/shared/services/tabs/tabs.service';
import { NewQualityNoticesComponent } from '../new-quality-notices/new-quality-notices.component';
import { PreviousQualityNoticesComponent } from '../previous-quality-notices/previous-quality-notices.component';

@Component({
  selector: 'app-quality-notices',
  templateUrl: './quality-notices.component.html',
  styleUrls: ['./quality-notices.component.scss']
})
export class QualityNoticesComponent implements OnInit, OnDestroy {
  subscriptions: Subscription[] = [];
  localization = {
    newQualityNotices: "إشعارات الجودة الجديدة",
    previousQualityNotices: "إشعارات الجودة السابقة",
  };

  tabContent: Tabs = {
    verticalTabs: false,
    activeTabIndex: 0,
    tabsComponentList: [
      {
        icon: '',
        title: this.localization.newQualityNotices,
        Component: NewQualityNoticesComponent,
        disabled: false,
        isVisible: true,
      },
      {
        icon: '',
        title: this.localization.previousQualityNotices,
        Component: PreviousQualityNoticesComponent,
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
