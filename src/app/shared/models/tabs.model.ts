import { Type } from '@angular/core';

export class Tabs {
  verticalTabs: boolean = false;
  activeTabIndex: number = 0;
  tabTitle?: string;
  tabsComponentList: tabsComponent[] = [];
}
export interface tabsComponent {
  icon?: string;
  number?: number;
  title: string;
  Component?: Type<any> | null;
  disabled: boolean;
  isVisible: boolean;
  id?: string;
  errNum?: number;
  tabCode?: string;
  tabErrors?: tabError[];
  isCompleted?: boolean;
  children?: tabsComponent[];
}
export interface tabError {
  errorCode: string;
  errorMessage: string;
}
