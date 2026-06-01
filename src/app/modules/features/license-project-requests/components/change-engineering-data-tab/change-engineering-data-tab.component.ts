import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Tabs } from 'src/app/shared/models/tabs.model';
import { TabsService } from 'src/app/shared/services/tabs/tabs.service';
import { ProjectLicenseServiceDetailsService } from '../../services/project-license-service-details.service';
import { LicenseProjectRequestTypeEnum } from '../../enums/license-project-request-type.enum';
import { ChangeEngineeringRequestDataSubtabComponent } from '../change-engineering-request-data-subtab/change-engineering-request-data-subtab.component';
import { ChangeEngineeringAgreementDataSubtabComponent } from '../change-engineering-agreement-data-subtab/change-engineering-agreement-data-subtab.component';

@Component({
  selector: 'app-change-engineering-data-tab',
  templateUrl: './change-engineering-data-tab.component.html',
  styleUrls: ['./change-engineering-data-tab.component.scss'],
})
export class ChangeEngineeringDataTabComponent implements OnInit, OnDestroy {
  subscriptions: Subscription[] = [];

  requestType: number | null = null;
  readonly licenseProjectRequestTypeEnum = LicenseProjectRequestTypeEnum;

  subTabContent: Tabs = {
    verticalTabs: false,
    activeTabIndex: 0,
    tabsComponentList: [
      { icon: '', title: 'بيانات الطلب',      Component: ChangeEngineeringRequestDataSubtabComponent,    disabled: false, isVisible: true },
      { icon: '', title: 'بيانات الاتفاقية',  Component: ChangeEngineeringAgreementDataSubtabComponent,  disabled: false, isVisible: true },
    ],
  };

  constructor(
    private _projectLicenseServiceDetailsService: ProjectLicenseServiceDetailsService,
    private _tabsService: TabsService,
  ) {}

  ngOnInit(): void {
    this.subscriptions.push(
      this._projectLicenseServiceDetailsService.selectRequest$.subscribe(res => {
        if (res) this.requestType = res.licenseProjectRequestTypeId;
      })
    );
    this._tabsService.updateVerticalTabContent(this.subTabContent);
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(s => s.unsubscribe());
  }
}