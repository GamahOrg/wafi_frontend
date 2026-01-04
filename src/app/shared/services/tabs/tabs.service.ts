import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Tabs } from '../../models/tabs.model';

@Injectable({
  providedIn: 'root'
})
export class TabsService {
  tabContent: BehaviorSubject<Tabs>=new BehaviorSubject<Tabs>(new Tabs)
  secondTabContent: BehaviorSubject<Tabs>=new BehaviorSubject<Tabs>(new Tabs)
  verticalTabContent: BehaviorSubject<Tabs>=new BehaviorSubject<Tabs>(new Tabs)
  activeTabIndex: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  activeSecondTabIndex: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  activeVerticalTabIndex: BehaviorSubject<number> = new BehaviorSubject<number>(0);

  // Unsaved changes tracking
  private hasUnsavedChanges: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  pendingTabIndex: BehaviorSubject<number | null> = new BehaviorSubject<number | null>(null);

  constructor() { }

  // Unsaved changes methods
  setUnsavedChanges(hasChanges: boolean): void {
    this.hasUnsavedChanges.next(hasChanges);
  }

  getUnsavedChanges(): boolean {
    return this.hasUnsavedChanges.value;
  }

  getUnsavedChanges$(): Observable<boolean> {
    return this.hasUnsavedChanges.asObservable();
  }

  confirmTabChange(): void {
    const pendingIndex = this.pendingTabIndex.value;
    if (pendingIndex !== null) {
      this.setUnsavedChanges(false);
      this.activeTabIndex.next(pendingIndex);
      this.pendingTabIndex.next(null);
    }
  }

  cancelTabChange(): void {
    this.pendingTabIndex.next(null);
  }
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

      updateSecondTabContent(tabs: Tabs) {
      this.secondTabContent.next(tabs)
    }
    resetSecondTabContent() {
      this.secondTabContent.next(new Tabs)
    }
    // get 
    getSecondTabContent(): Observable<Tabs> {
      return this.secondTabContent.asObservable()
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
    updateActiveSecondTabIndex(index: number) {
      this.activeSecondTabIndex.next(index)
    }
    // get 
    getActiveSecondTabIndex(): Observable<number> {
      return this.activeSecondTabIndex.asObservable()
    }
    updateActiveVerticalTabIndex(index: number) {
      this.activeVerticalTabIndex.next(index)
    }
    // get 
    getActiveVerticalTabIndex(): Observable<number> {
      return this.activeVerticalTabIndex.asObservable()
    }
}
