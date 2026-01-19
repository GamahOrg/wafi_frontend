import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subscription, map, of } from 'rxjs';
import { Configuration } from 'src/app/core/configurations/shared.config';
import { CoreResponseDTO } from 'src/app/core/models/core.model';
import {
  accordionComponent,
  accordionContent,
} from 'src/app/shared/models/accordion.model';
import { tabsComponent, Tabs } from 'src/app/shared/models/tabs.model';
import { AccordionService } from 'src/app/shared/services/accordion/accordion.service';
import { TabsService } from 'src/app/shared/services/tabs/tabs.service';

@Injectable()
export class DataVisibilityOfLicenseProjectService {
  DataVisibilityOfLicenseProject: BehaviorSubject<string[]> = new BehaviorSubject<string[]>([]);
  tabCodesHasValidtionError: BehaviorSubject<string[]> = new BehaviorSubject<string[]>([]);

  constructor(
    private _httpClient: HttpClient,
    private _tabsService: TabsService,
    private _accordionService: AccordionService
  ) {}

  GetLicenseRequestHeadersByLicenseProjectId(
    projectId: string
  ): Observable<string[]> {
    return this._httpClient
      .get<CoreResponseDTO<string[]>>(
        `${Configuration.APIs.LicenseRequestHeader.GetLicenseRequestHeadersByLicenseProjectId}/${projectId}`
      )
      .pipe(
        map((res: CoreResponseDTO<string[]>) => {
          return res.data as string[];
        })
      );
  }

  GetLicenseProjectProfileCompleteTap(
    projectId: string,
    isProfileComplte:boolean
  ): Observable<string[]> {
    return this._httpClient
      .get<CoreResponseDTO<string[]>>(
        `${Configuration.APIs.LicenseRequestHeader.GetLicenseProjectProfileCompleteTap}/${projectId}/${isProfileComplte}`
      )
      .pipe(
        map((res: CoreResponseDTO<string[]>) => {
          return res.data as string[];
        })
      );
  }

  GetCompletedLicenseProjectProfileTaps(
    projectId: string
  ): Observable<string[]> {
    return this._httpClient
      .get<CoreResponseDTO<string[]>>(
        `${Configuration.APIs.LicenseRequestHeader.GetCompletedLicenseProjectProfileTaps}/${projectId}`
      )
      .pipe(
        map((res: CoreResponseDTO<string[]>) => {
          return res.data as string[];
        })
      );
  }

  getDataVisibilityOfLicenseProject(): Observable<string[]> {
    return this.DataVisibilityOfLicenseProject.asObservable();
  }
  updateDataVisibilityOfLicenseProject(data: string[]) {
    this.DataVisibilityOfLicenseProject.next(data);
  }
  resetDataVisibilityOfLicenseProject() {
    this.DataVisibilityOfLicenseProject.next([]);
  }

  getTabCodesHasValidtionError(): Observable<string[]> {
    return this.tabCodesHasValidtionError.asObservable();
  }
  updateTabCodesHasValidtionError(data: string[]) {
    this.tabCodesHasValidtionError.next(data);
  }
  resetTabCodesHasValidtionError() {
    this.tabCodesHasValidtionError.next([]);
  }

  getDataVisibilityOfLicenseProjectForCertainTab(
    subscriptions: Subscription[],
    mainTabsComponentList: tabsComponent[],
    resetIndex: boolean,
    updateVirticalTab: boolean,
    service: null | any = null,
    secondTap: boolean = false
  ): void {

    // var tabContent = new Tabs();
    // tabContent.tabsComponentList = mainTabsComponentList;
    // this.updateTabContent(tabContent, updateVirticalTab, service);

    subscriptions.push(
      this.getDataVisibilityOfLicenseProject().subscribe((res: string[]) => {

        var tabContent = new Tabs;
        tabContent.tabsComponentList = []
        mainTabsComponentList.forEach(tab => {
          if (res.includes(tab.tabCode as string)) {
            tabContent.tabsComponentList.push(tab);
          }
        });

        this.updateTabContent(tabContent, updateVirticalTab, service);
        if (resetIndex) {

          this.resetTabsIndex(service,secondTap);
        }

      })
    )
  }

  getDataVisibilityOfLicenseProjectForCertainAccordion(
    subscriptions: Subscription[],
    mainAccordionComponentList: accordionComponent[],
    accordionContent: accordionContent
  ): void {
    subscriptions.push(
      this.getDataVisibilityOfLicenseProject().subscribe((res: string[]) => {
        mainAccordionComponentList.forEach((accordion) => {
          if (res.includes(accordion.accordionCode as string)) {
            accordionContent.accordionComponentList.push(accordion);
          }
        });
        this._accordionService.updateAccordionContent(
          accordionContent as accordionContent
        );
      })
    );
  }

  private updateTabContent(
    tabContent: Tabs,
    updateVirticalTab: boolean,
    service: null | any,
    secondTap: boolean = false
  ): void {
    debugger
    if (service) {
      if (updateVirticalTab) {
        service.updateVerticalTabContent(tabContent);
      } else {
        if (secondTap) {
          service.updateSecondTabContent(tabContent);
        } else {
          service.updateTabContent(tabContent);
        }
      }
    } else {
      if (updateVirticalTab) {
        if (secondTap) {
          this._tabsService.updateSecondTabContent(tabContent);
        } else {
          this._tabsService.updateVerticalTabContent(tabContent);
        }
      } else {
        if (secondTap) {
          this._tabsService.updateSecondTabContent(tabContent);
        } else {
          this._tabsService.updateTabContent(tabContent);
        }
      }
    }
  }

  private resetTabsIndex(
    service: null | any,
    secondTap: boolean = false
  ): void {
    if (service) {
      if (secondTap) {
        service.updateActiveSecondTabIndex(0);
        service.updateActiveVerticalTabIndex(0);
      } else {
        service.updateActiveTabIndex(0);
        service.updateActiveVerticalTabIndex(0);
      }
    } else {
      if (secondTap) {
        this._tabsService.updateActiveSecondTabIndex(0);
        this._tabsService.updateActiveVerticalTabIndex(0);
      } else {
        this._tabsService.updateActiveTabIndex(0);
        this._tabsService.updateActiveVerticalTabIndex(0);
      }
    }
  }
}
