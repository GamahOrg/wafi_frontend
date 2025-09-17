import { Component, Input } from '@angular/core';
import { Subscription } from 'rxjs';
import { Tabs } from '../../models/tabs.model';
import { TabsService } from '../../services/tabs/tabs.service';
import { RequestTimelineService } from '../../services/request-timeline/request-timeline.service';
@Component({
  selector: 'app-vertical-tabs',
  templateUrl: './vertical-tabs.component.html',
  styleUrls: ['./vertical-tabs.component.scss'],
})
export class VerticalTabsComponent {
  @Input() tabClassName?: string = '';

  subscriptions: Subscription[] = [];
  tabContent: Tabs = new Tabs();
  
  constructor(
    private _tabsService: TabsService,
    private requestTimelineService: RequestTimelineService
  ) {}

  ngOnInit(): void {
    this.observeVerticalTabsContent();
    this.observeActiveVerticalTabIndex();
  }

  observeVerticalTabsContent(): void {
    this.subscriptions.push(
      this._tabsService
        .getVerticalTabContent()
        .subscribe((tabContent: Tabs) => {
          // console.log("observeVerticalTabsContent tabContent", tabContent)
          this.tabContent = tabContent;
        })
    );
  }

  updateActiveTabIndex(index: number) {
    this.tabContent.activeTabIndex = index;
    this._tabsService.updateActiveVerticalTabIndex(index);
  }

  observeActiveVerticalTabIndex() {
    this.subscriptions.push(
      this._tabsService.getActiveVerticalTabIndex().subscribe((res: number) => {
        this.tabContent.activeTabIndex = res;
        this.requestTimelineService.updateRequestId(null);
      })
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe());
  }

}
