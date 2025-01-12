import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Tabs } from '../../models/tabs.model';

@Injectable()
export class TabsService {
  tabContent: BehaviorSubject<Tabs>=new BehaviorSubject<Tabs>(new Tabs)
  verticalTabContent: BehaviorSubject<Tabs>=new BehaviorSubject<Tabs>(new Tabs)
  activeTabIndex: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  activeVerticalTabIndex: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  constructor() { }
    // update 
    updateTabContent(tabs: Tabs) {
      this.tabContent.next(tabs)
    }
    resetTabContent() {
      this.tabContent.next(new Tabs)
    }
    // get 
    getTabContent(): Observable<Tabs> {
      return this.tabContent.asObservable()
    }
    // update 
    updateVerticalTabContent(tabs: Tabs) {
      this.verticalTabContent.next(tabs)
    }
    // get 
    getVerticalTabContent(): Observable<Tabs> {
      return this.verticalTabContent.asObservable()
    }
    updateActiveTabIndex(index: number) {
      this.activeTabIndex.next(index)
    }
    // get 
    getActiveTabIndex(): Observable<number> {
      return this.activeTabIndex.asObservable()
    }
    updateActiveVerticalTabIndex(index: number) {
      this.activeVerticalTabIndex.next(index)
    }
    // get 
    getActiveVerticalTabIndex(): Observable<number> {
      return this.activeVerticalTabIndex.asObservable()
    }
}
