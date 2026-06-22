import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { Tabs } from 'src/app/shared/models/tabs.model';
import { TabsService } from 'src/app/shared/services/tabs/tabs.service';
import { Configuration } from 'src/app/core/configurations/shared.config';
import { ChangePlanApprovalService, ChangePlanStageDto, InvoiceData } from '../../services/change-plan-approval.service';
import { PopupService } from 'src/app/shared/services/popup/popup.service';
import { PopupData } from 'src/app/shared/models/popup.model';
import { LicenseProjectRequestInvoiceViewComponent } from '../../components/license-project-request-invoice-view/license-project-request-invoice-view.component';
import { ProjectRequestLocalStorageService } from '../../services/project-request-local-storage.service';
import { ProjectLicenseServiceDetailsService } from '../../services/project-license-service-details.service';
import { LicenseProjectRequestTypeEnum } from '../../enums/license-project-request-type.enum';
import { LicenseProjectRequestStatusEnum } from '../../enums/license-project-request-status.enum';
import { RequestDataTabComponent } from '../../components/request-data-tab/request-data-tab.component';
import { RequestNotesTabComponent } from '../../components/request-notes-tab/request-notes-tab.component';
import { RequestEventsTabComponent } from '../../components/request-events-tab/request-events-tab.component';
import { LicenseProjectRequestChangePlanFullDto } from '../../models/license-project-request-change-plan-full-dto';

@Component({
  selector: 'app-request-details',
  templateUrl: './request-details.component.html',
  styleUrls: ['./request-details.component.scss'],
})
export class RequestDetailsComponent implements OnInit, OnDestroy {
  stages: ChangePlanStageDto[] = [];
  subscriptions: Subscription[] = [];
  requestId: string | null = null;
  showProcessingNotesBtn = false;
  invoiceData: InvoiceData | null = null;

  private requestTypeId: LicenseProjectRequestTypeEnum | null = null;
  licenseProjectRequestChangePlanFull?: LicenseProjectRequestChangePlanFullDto;


  tabContent: Tabs = {
    verticalTabs: false,
    activeTabIndex: 0,
    tabsComponentList: [
      { icon: '', title: 'بيانات الطلب', Component: RequestDataTabComponent, disabled: false, isVisible: true },
      { icon: '', title: 'ملاحظات الطلب', Component: RequestNotesTabComponent, disabled: false, isVisible: true },
      { icon: '', title: 'سجل احداث الطلب', Component: RequestEventsTabComponent, disabled: false, isVisible: true },
    ],
  };

  constructor(
    private _changePlanApprovalService: ChangePlanApprovalService,
    private _projectRequestLocalStorageService: ProjectRequestLocalStorageService,
    private _projectLicenseServiceDetailsService: ProjectLicenseServiceDetailsService,
    private _popupService: PopupService,
    private _tabsService: TabsService,
    private _router: Router,
  ) {}

  ngOnInit(): void {
    this._tabsService.updateTabContent(this.tabContent);
    this.requestId = this._projectRequestLocalStorageService.getSelectedProjectLicenseRequestIdFromLocalStorage();
    if (this.requestId) {
      this.loadStages(this.requestId);
      this.loadRequestHeader(this.requestId);
      this.loadInvoice(this.requestId);
      this.getLicenseProjectDetailsById();
    }
  }
  private getLicenseProjectDetailsById(): void {

    this._changePlanApprovalService.getChangePlanFullDetails(this.requestId ?? '').subscribe({
      next: (details) => {
        if (details?.requestCode) {
         // console.log("details id =", details.id);
          this._changePlanApprovalService.setSelectedApproval(details.id, null); // deed owner mode

          
        } 
      },
      
    });

   
  }

  private loadRequestHeader(requestId: string): void {
    this.subscriptions.push(
      this._projectLicenseServiceDetailsService.getRequestHeaderDetails(requestId).subscribe((res) => {
        if (!res) return;
        this.requestTypeId = res.licenseProjectRequestTypeId;
        this.showProcessingNotesBtn = res.externalRequestStatusId === LicenseProjectRequestStatusEnum.CustomerFeedback;
      })
    );
  }

  private loadInvoice(requestId: string): void {
    this.subscriptions.push(
      this._changePlanApprovalService.getInvoice(requestId).subscribe((res) => {
        this.invoiceData = res;
      })
    );
  }

  openInvoicePopup(): void {
    const data: PopupData = {
      title: 'بيانات الفاتورة',
      iconClass: 'hgi hgi-stroke hgi-invoice-02',
      component: LicenseProjectRequestInvoiceViewComponent,
      data: { invoiceData: this.invoiceData },
      buttons:[]
    } as PopupData;
    this._popupService.updatePopupData(data);
  }

  openProcessingNotes(): void {
    const wafi = Configuration.modules.wafi;
    const lpr = Configuration.modules.licenseProjectRequests;
    const pages = Configuration.pages.licenseProjectRequests;

    if (this.requestTypeId === LicenseProjectRequestTypeEnum.ChangePlan) {
      this._router.navigate([`${wafi}/${lpr}/${pages.createLicenseProjectChangePlanRequest}/${this.requestId}`]);
    } else if (this.requestTypeId === LicenseProjectRequestTypeEnum.ChangeAccountant) {
      this._router.navigate([`${wafi}/${lpr}/${pages.createChangeLicenseProjectAccountantRequest}`]);
    } else if (this.requestTypeId === LicenseProjectRequestTypeEnum.ChangeEngineering) {
      this._router.navigate([`${wafi}/${lpr}/${pages.createchangeengineer}/${this.requestId}`]);
    }
  }

  navigateToDeedOwnersStatus(): void {
    if (!this.requestId) return;

    const navigate = () =>
      this._router.navigate([
        Configuration.modules.wafi,
        Configuration.modules.licenseProjectRequests,
        Configuration.pages.licenseProjectRequests.changePlanDeedOwnersStatus,
      ]);
    navigate();
  }

  loadStages(requestId: string): void {
    this.subscriptions.push(
      this._changePlanApprovalService.getChangePlanStages(requestId).subscribe((res: ChangePlanStageDto[]) => {
        this.stages = res;
      })
    );
  }

  ngOnDestroy(): void {
    this._tabsService.resetTabContent();
    this.subscriptions.forEach(s => s.unsubscribe());
  }
}
