import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Tabs } from 'src/app/shared/models/tabs.model';
import { TabsService } from 'src/app/shared/services/tabs/tabs.service';
import { ProjectBasicInformationComponent } from '../project-basic-information/project-basic-information.component';
import { TimelineStatusSummaryComponent } from '../timeline-status-summary/timeline-status-summary.component';
import { EndOfContractualComponent } from '../end-of-contractual/end-of-contractual.component';

@Component({
  selector: 'app-project-information',
  templateUrl: './project-information.component.html',
  styleUrls: ['./project-information.component.scss']
})
export class ProjectInformationComponent implements OnInit, OnDestroy {
  subscriptions: Subscription[] = [];
  localization = {
    projectBasicInformation: "معلومات أساسية",
    TimelineStatusSummary: "ملخص حالة البرنامج الزمني",
    EndOfContractual: "النهاية التعاقدية"
  };

  tabContent: Tabs = {
    verticalTabs: false,
    activeTabIndex: 0,
    tabsComponentList: [
      {
        icon: '',
        title: this.localization.projectBasicInformation,
        Component: ProjectBasicInformationComponent,
        disabled: false,
        isVisible: true,
      },
      {
        icon: '',
        title: this.localization.TimelineStatusSummary,
        Component: TimelineStatusSummaryComponent,
        disabled: false,
        isVisible: true,
      },
      {
        icon: '',
        title: this.localization.EndOfContractual,
        Component: EndOfContractualComponent,
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
