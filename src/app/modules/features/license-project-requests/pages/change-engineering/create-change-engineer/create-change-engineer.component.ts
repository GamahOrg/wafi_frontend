import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { ChangeLicenseProjectEngineeringRequestService } from '../../../services/change-license-project-engineering-request.service';
import { TabsService } from 'src/app/shared/services/tabs/tabs.service';
import { Tabs } from 'src/app/shared/models/tabs.model';
import { CreateChangeEngineerRequestDataComponent } from '../../../components/create-change-engineer-request-data/create-change-engineer-request-data.component';
import { ChangeLicenseprojectEngineeringConsultantsContainerComponent } from '../../../components/change-licenseproject-engineering-consultants-container/change-licenseproject-engineering-consultants-container.component';
import { ProjectRequestLocalStorageService } from '../../../services/project-request-local-storage.service';

@Component({
  selector: 'app-create-change-engineer',
  templateUrl: './create-change-engineer.component.html',
  styleUrls: ['./create-change-engineer.component.scss'],
})
export class CreateChangeEngineerComponent implements OnInit, OnDestroy {
  @Input() readOnly = false;
  subscriptions: Subscription[] = [];

  tabContent: Tabs = {
    verticalTabs: false,
    activeTabIndex: 0,
    tabsComponentList: [
      {
        title: 'بيانات الطلب',
        Component: CreateChangeEngineerRequestDataComponent,
        disabled: false,
        isVisible: true,
      },
      {
        title: 'بيانات الاتفاقية',
        Component: ChangeLicenseprojectEngineeringConsultantsContainerComponent,
        disabled: false,
        isVisible: true,
      },
    ],
  };

  constructor(
    private _route: ActivatedRoute,
    private _tabsService: TabsService,
    private _changeLicenseProjectEngineeringRequestService: ChangeLicenseProjectEngineeringRequestService,
    private _projectRequestLocalStorageService: ProjectRequestLocalStorageService,
  ) {}

  ngOnInit(): void {
    const requestId = this.readOnly
      ? this._projectRequestLocalStorageService.getSelectedProjectLicenseRequestIdFromLocalStorage()
      : this._route.snapshot.paramMap.get('requestId');

    if (requestId) {
      this._changeLicenseProjectEngineeringRequestService.setChangeEngineerRequestId(requestId);
      this.loadEngineeringRequestDetails(requestId);
    }

    if (this.readOnly) {
      this._changeLicenseProjectEngineeringRequestService.setReadOnly(true);
      this._tabsService.updateVerticalTabContent(this.tabContent);
    } else {
      this._tabsService.updateTabContent(this.tabContent);
    }
  }

  private loadEngineeringRequestDetails(requestId: string): void {
    this.subscriptions.push(
      this._changeLicenseProjectEngineeringRequestService
        .getLicenseProjectDetailsById(requestId)
        .subscribe((res) => {
          if (res) {
            this._changeLicenseProjectEngineeringRequestService.setLicenseProjectRequestChangeEngineer(res);
          }
        }),
    );
  }

  ngOnDestroy(): void {
    this._changeLicenseProjectEngineeringRequestService.resetLicenseProjectRequestChangeEngineer();
    this._changeLicenseProjectEngineeringRequestService.resetReadOnly();
    if (!this.readOnly) {
      this._tabsService.updateActiveTabIndex(0);
      this._tabsService.resetTabContent();
    }
    this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe());
  }
}
