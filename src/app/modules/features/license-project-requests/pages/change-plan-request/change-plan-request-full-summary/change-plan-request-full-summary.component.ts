import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription, filter, take } from 'rxjs';
import { Router } from '@angular/router';
import { Configuration } from 'src/app/core/configurations/shared.config';
import { Tabs } from 'src/app/shared/models/tabs.model';
import { TabsService } from 'src/app/shared/services/tabs/tabs.service';
import {
  ChangePlanApprovalService,
  ChangePlanStageDto,
  ChangePlanStatusEnum,
  FacilityTypeCategoryEnum,
} from '../../../services/change-plan-approval.service';
import { LicenseProjectRequestStatusEnum } from '../../../enums/license-project-request-status.enum';
import { ProjectRequestLocalStorageService } from '../../../services/project-request-local-storage.service';
import { UserDataService } from 'src/app/core/services/user-data/user-data.service';
import { customerResponse } from 'src/app/shared/models/customer.model';
import { ChangePlanDataTabComponent } from '../../../components/change-plan-data-tab/change-plan-data-tab.component';
import { ChangePlanNotesTabComponent } from '../../../components/change-plan-notes-tab/change-plan-notes-tab.component';
import { ChangePlanEventsTabComponent } from '../../../components/change-plan-events-tab/change-plan-events-tab.component';

@Component({
  selector: 'app-change-plan-request-full-summary',
  templateUrl: './change-plan-request-full-summary.component.html',
  styleUrls: ['./change-plan-request-full-summary.component.scss'],
})
export class ChangePlanRequestFullSummaryComponent implements OnInit, OnDestroy {
  stages: ChangePlanStageDto[] = [];
  subscriptions: Subscription[] = [];
  requestId: string | null = null;
  showProcessingNotesBtn = false;
  requestStatusId: number | null = null;
  readonly CancelledConsultantOrAccountant = LicenseProjectRequestStatusEnum.CancelledConsultantOrAccountantIncomplete;
  readonly CancelledDeedOwnersTimeout = LicenseProjectRequestStatusEnum.CancelledDeedOwnersApprovalTimeout;
  private facilityTypeCategory: number | null = null;
  private changePlanId: string | null = null;
  private facilityId: string | null = null;

  tabContent: Tabs = {
    verticalTabs: false,
    activeTabIndex: 0,
    tabsComponentList: [
      { icon: '', title: 'بيانات الطلب', Component: ChangePlanDataTabComponent, disabled: false, isVisible: true },
      { icon: '', title: 'ملاحظات الطلب', Component: ChangePlanNotesTabComponent, disabled: false, isVisible: true },
      { icon: '', title: 'سجل احداث الطلب', Component: ChangePlanEventsTabComponent, disabled: false, isVisible: true },
    ],
  };

  constructor(
    private _changePlanApprovalService: ChangePlanApprovalService,
    private _projectRequestLocalStorageService: ProjectRequestLocalStorageService,
    private _tabsService: TabsService,
    private _userDataService: UserDataService,
    private _router: Router,
  ) { }

  ngOnInit(): void {

    this._tabsService.updateTabContent(this.tabContent);
    this.requestId = this._projectRequestLocalStorageService.getSelectedProjectLicenseRequestIdFromLocalStorage();
    if (this.requestId) {
      this.loadStages(this.requestId);
      this.loadRequestStatus(this.requestId);
    }
    this.subscriptions.push(
      this._userDataService.getCustomerData().pipe(
        filter((res: customerResponse | null) => !!res?.facilities?.length),
        take(1)
      ).subscribe((res: customerResponse | null) => {
        const facilityId = res!.facilities![0].id;
        if (this.requestId) this.loadButtonVisibility(this.requestId, facilityId);
      })
    );
  }

  loadRequestStatus(requestId: string): void {
    this.subscriptions.push(
      this._changePlanApprovalService.getChangePlanFullDetails(requestId).subscribe(details => {
        if (details) this.requestStatusId = details.statusId;
      })
    );
  }

  loadButtonVisibility(requestId: string, facilityId: string): void {
    this.facilityId = facilityId;
    this.subscriptions.push(
      this._changePlanApprovalService.getChangePlanFullDetails(requestId, facilityId).subscribe(details => {
        if (!details) return;
        const cat = details.facilityTypeCategory;
        this.facilityTypeCategory = cat ?? null;
        this.changePlanId = details.id;
        this.requestStatusId = details.statusId;
        if (cat === FacilityTypeCategoryEnum.Engineering || cat === FacilityTypeCategoryEnum.Accountant) {
          this.showProcessingNotesBtn = details.showProcessNotesButton;
        } else {
          this.showProcessingNotesBtn = details.statusId === ChangePlanStatusEnum.CustomerFeedback;
        }
      })
    );
  }

  openProcessingNotes(): void {

    const cat = this.facilityTypeCategory;
    if (cat === FacilityTypeCategoryEnum.Engineering || cat === FacilityTypeCategoryEnum.Accountant) {
      if (this.changePlanId) {
        this._changePlanApprovalService.setSelectedApproval(this.changePlanId, cat, this.facilityId ?? undefined);
      }
      this._router.navigate([
        `${Configuration.modules.wafi}/${Configuration.modules.licenseProjectRequests}/${Configuration.pages.licenseProjectRequests.changePlanApprovalDetails}`,
      ]);
    }
    else if (cat === FacilityTypeCategoryEnum.Developer) {
      this._router.navigate([
        `${Configuration.modules.wafi}/${Configuration.modules.licenseProjectRequests}/${Configuration.pages.licenseProjectRequests.createLicenseProjectChangePlanRequest}/${this.requestId}`,
      ]);
    } else {
      this._changePlanApprovalService.triggerOpenProcessingNotes();
    }
  }

  loadStages(requestId: string): void {
    this.subscriptions.push(
      this._changePlanApprovalService.getChangePlanStages(requestId).subscribe(res => {
        this.stages = res;
      })
    );
  }

  navigateToDeedOwnersStatus(): void {
    this._router.navigate([
      `${Configuration.modules.wafi}/${Configuration.modules.licenseProjectRequests}/${Configuration.pages.licenseProjectRequests.changePlanDeedOwnersStatus}`,
    ]);
  }

  ngOnDestroy(): void {
    this._tabsService.resetTabContent();
    this.subscriptions.forEach(s => s.unsubscribe());
  }
}
