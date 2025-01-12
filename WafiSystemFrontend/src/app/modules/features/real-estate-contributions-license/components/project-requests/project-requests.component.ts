import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Tabs } from 'src/app/shared/models/tabs.model';
import { TabsService } from 'src/app/shared/services/tabs/tabs.service';
import { RegularRequestsComponent } from '../regular-requests/regular-requests.component';
import { IrregularRequestsComponent } from '../irregular-requests/irregular-requests.component';

@Component({
  selector: 'app-project-requests',
  templateUrl: './project-requests.component.html',
  styleUrls: ['./project-requests.component.scss']
})
export class ProjectRequestsComponent implements OnInit, OnDestroy {
  subscriptions: Subscription[] = [];
  localization = {
    regularRequests: "طلبات اعتيادية",
    irregularRequests: "طلبات غير اعتيادية"
  };

  tabContent: Tabs = {
    verticalTabs: false,
    activeTabIndex: 0,
    tabsComponentList: [
      {
        icon: '',
        title: this.localization.regularRequests,
        Component: RegularRequestsComponent,
        disabled: false,
        isVisible: true,
      },
      {
        icon: '',
        title: this.localization.irregularRequests,
        Component: IrregularRequestsComponent,
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
