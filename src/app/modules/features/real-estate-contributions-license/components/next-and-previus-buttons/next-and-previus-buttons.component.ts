import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription, combineLatest } from 'rxjs';
import { Tabs } from 'src/app/shared/models/tabs.model';
import { TabsService } from 'src/app/shared/services/tabs/tabs.service';
import { NextAndPreviusButtonsService } from '../../services/next-and-previous-buttons/next-and-previus-buttons.service';

@Component({
  selector: 'app-next-and-previus-buttons',
  templateUrl: './next-and-previus-buttons.component.html',
  styleUrls: ['./next-and-previus-buttons.component.scss']
})
export class NextAndPreviusButtonsComponent implements OnInit, OnDestroy {
  subscriptions: Subscription[] = [];

  nextBtnIsVisible: boolean = false;
  previousBtnIsVisible: boolean = false;
  saveAsDraftBtnIsVisible: boolean = false;
  tabContent: Tabs | null = null;
  VerticalTabContent: Tabs | null = null;
  activeTabIndex: number = 0;
  activeVerticalTabIndex: number = 0;
  localization = {
    next: 'التالي',
    saveAsDraft: 'حفظ كمسودة',
    previous: 'السابق',
  };
  constructor(
    private _tabsService: TabsService,
    private _nextAndPreviusButtonsService: NextAndPreviusButtonsService
  ) { }
  ngOnInit(): void {
    this.observeTabsContent();
    this.observeMoveToNextTab();
    this.ObserveSaveAsDraftBtnIsvisible();
  }
  private ObserveSaveAsDraftBtnIsvisible() {
    this.subscriptions.push(
      this._nextAndPreviusButtonsService.saveAsDraftBtnIsvisible.subscribe((res: boolean) => {
        this.saveAsDraftBtnIsVisible = res
      })
    )
  }
  private observeTabsContent(): void {
    this.subscriptions.push(
      combineLatest(
        {
          HorziontalTabContent: this._tabsService.getTabContent(),
          VerticalTabContent: this._tabsService.getVerticalTabContent(),
        }).pipe().subscribe({
          next: res => {
            this.tabContent = res.HorziontalTabContent;
            this.VerticalTabContent = res.VerticalTabContent;
            this.updateActiveTabIndex()
            this.updatePreviousBtnIsVisible();
            this.updateNextBtnIsVisible();
            // console.log('The next value is: ', res)
          },
          error: err => console.error('An error occurred :', err),
          complete: () => console.log('There are no more action happen.')
        })
    )
  }
  private updateActiveTabIndex() {
    this.activeTabIndex = this.tabContent?.activeTabIndex as number;
    this.activeVerticalTabIndex = this.VerticalTabContent?.activeTabIndex as number;
  }
  private updatePreviousBtnIsVisible(): void {
    this.previousBtnIsVisible = this.tabContent?.activeTabIndex == 0 && this.VerticalTabContent?.activeTabIndex == 0 ? false : true;
  }
  private updateNextBtnIsVisible(): void {
    let lastHorizontalTabIndex = this.tabContent?.tabsComponentList && this.tabContent?.tabsComponentList.length - 1
    let lastVerticalTabIndex = this.VerticalTabContent?.tabsComponentList && this.VerticalTabContent?.tabsComponentList.length - 1
    this.nextBtnIsVisible = this.tabContent?.activeTabIndex == lastHorizontalTabIndex && this.VerticalTabContent?.activeTabIndex == lastVerticalTabIndex ? false : true;
  }
  observeMoveToNextTab(): void {
    this.subscriptions.push(
      this._nextAndPreviusButtonsService.moveToNextTab.subscribe((res: null) => {
        let lastVerticalTabIndex = this.VerticalTabContent?.tabsComponentList && this.VerticalTabContent?.tabsComponentList.length - 1
        if (this.VerticalTabContent?.activeTabIndex == lastVerticalTabIndex) {
          this._tabsService.updateActiveTabIndex(this.activeTabIndex + 1);
        } else {
          this._tabsService.updateActiveVerticalTabIndex(this.activeVerticalTabIndex + 1);
        }
      })
    )
  }
  public next(): void {
    this._nextAndPreviusButtonsService.nextButtonIsClicked.emit()
  }
  public saveAsDraft(): void {
    this._nextAndPreviusButtonsService.saveAsDraftIsClicked.emit()
  }
  public back(): void {
    if (this.VerticalTabContent?.activeTabIndex == 0) {
      this._tabsService.updateActiveTabIndex(this.activeTabIndex - 1);
    } else {
      this._tabsService.updateActiveVerticalTabIndex(this.activeVerticalTabIndex - 1);
    }
  }
  ngOnDestroy(): void {
    this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe());
  }
}
