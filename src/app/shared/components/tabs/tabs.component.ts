import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Tabs } from '../../models/tabs.model';
import { TabsService } from '../../services/tabs/tabs.service';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss'],
})
export class TabsComponent implements OnInit, OnDestroy {
  @Input() tabClassName?: string = '';
  @Input() hasProgress?: boolean = false;
  @Input() ProgressPercentage?: number = 60;

  subscriptions: Subscription[] = [];
  tabContent: Tabs = new Tabs();
  constructor(private _tabsService: TabsService) {}
  ngOnInit(): void {
    this.observeTabsContent();
    this.observeActiveTabIndex();
  }
  observeTabsContent(): void {
    this.subscriptions.push(
      this._tabsService.getTabContent().subscribe((tabContent: Tabs) => {
        this.tabContent = tabContent;
      })
      );
    }
    updateActiveTabIndex(event: any) {
      
      this.tabContent.activeTabIndex = event.index;
      this.restVerticalTabIndex()
      this._tabsService.updateActiveTabIndex(event.index)
    }
    private restVerticalTabIndex(){
      this._tabsService.updateActiveVerticalTabIndex(0)
    }
    observeActiveTabIndex() {
      this.subscriptions.push(
        this._tabsService.getActiveTabIndex().subscribe((res: number)=>{
          this.tabContent.activeTabIndex = res
          if(this.tabContent.activeTabIndex  === 0)  this.restVerticalTabIndex()
        })
      )
    }
  
  ngOnDestroy(): void {
    this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe());
  }
}
