import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription, filter, take } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { Configuration } from 'src/app/core/configurations/shared.config';
import {
  ChangePlanApprovalDetailsDto,
  ChangePlanApprovalService,
  FacilityTypeCategoryEnum,
} from '../../services/change-plan-approval.service';
import { LicenseProjectRequestStatusEnum } from '../../enums/license-project-request-status.enum';
import { ProjectRequestLocalStorageService } from '../../services/project-request-local-storage.service';
import { UserDataService } from 'src/app/core/services/user-data/user-data.service';
import { customerResponse } from 'src/app/shared/models/customer.model';
import { FileUploader } from 'src/app/shared/models/file-uploader.model';
import { ToastrNotificatioService } from 'src/app/core/services/toastr-notification/toastr-notificatio.service';

@Component({
  selector: 'app-change-plan-data-tab',
  templateUrl: './change-plan-data-tab.component.html',
  styleUrls: ['./change-plan-data-tab.component.scss'],
})
export class ChangePlanDataTabComponent implements OnInit, OnDestroy {
  details: ChangePlanApprovalDetailsDto | null = null;
  subscriptions: Subscription[] = [];
  baseUrl = environment.baseURL;
  requestId: string | null = null;
  FacilityTypeCategoryEnum = FacilityTypeCategoryEnum;
  LicenseProjectRequestStatusEnum = LicenseProjectRequestStatusEnum;
  showProcessNotesButton = false;
  isRequirementsCompleted = false;
  private facilityId: string | null = null;
  reasonsAndJustifications: string = '';

  accountantForm = new FormGroup({
    totalProjectCosts: new FormControl<number | null>(null, [Validators.required]),
    constructionCostsAvailableAmount: new FormControl<number | null>({ value: null, disabled: true }),
    administrativeAndMarketingAvailableAmount: new FormControl<number | null>({ value: null, disabled: true }),
    custodyAvailableAmount: new FormControl<number | null>({ value: null, disabled: true }),
  });

  bankStatementFileId: string | null = null;
  bankStatementUploaderData: FileUploader = {
    multiple: false,
    allowedExtensions: ['.jpg', '.png', '.pdf'],
    allowedExtensionsText: 'jpg, png, pdf',
    maxFileSizeMB: 2,
  } as FileUploader;

  constructor(
    private _changePlanApprovalService: ChangePlanApprovalService,
    private _projectRequestLocalStorageService: ProjectRequestLocalStorageService,
    private _userDataService: UserDataService,
    private _toastr: ToastrNotificatioService,
    private _router: Router,
  ) { }

  ngOnInit(): void {

    this.requestId = this._projectRequestLocalStorageService.getSelectedProjectLicenseRequestIdFromLocalStorage();
    this.subscriptions.push(
      this._userDataService.getCustomerData().pipe(
        filter((res: customerResponse | null) => !!res?.facilities?.length),
        take(1)
      ).subscribe((res: customerResponse | null) => {
        this.facilityId = res!.facilities![0].id;
        if (this.requestId) this.loadDetails(this.requestId);
      })
    );
    this.subscriptions.push(
      this._changePlanApprovalService.openProcessingNotesTrigger$.subscribe(() => {
        this.onProcessNotes();
      })
    );
  }

  loadDetails(requestId: string): void {
    this.subscriptions.push(
      this._changePlanApprovalService.getChangePlanFullDetails(requestId, this.facilityId ?? undefined).subscribe(res => {
        if (res) {
          this.details = res;
          this.showProcessNotesButton = res.showProcessNotesButton;
          this.isRequirementsCompleted =
            (res.facilityTypeCategory === FacilityTypeCategoryEnum.Engineering && res.isConsultantRequirementsCompleted) ||
            (res.facilityTypeCategory === FacilityTypeCategoryEnum.Accountant && res.isAccountantRequirementsCompleted);
          // if (res.showProcessNotesButton) {
          //   this.isRequirementsCompleted = false;
          // }
          this.reasonsAndJustifications = res.reasonsAndJustificationsForChangingProjectPlan || ''
          this.accountantForm.patchValue({
            totalProjectCosts: res.totalProjectCosts,
            constructionCostsAvailableAmount: res.constructionCostsAvailableAmount,
            administrativeAndMarketingAvailableAmount: res.administrativeAndMarketingAvailableAmount,
            custodyAvailableAmount: res.custodyAvailableAmount,
          });
        }
      })
    );
  }

  onProcessNotes(): void {
    if (!this.details) return;
    const cat = this.details.facilityTypeCategory;
    if (cat === FacilityTypeCategoryEnum.Engineering) {
      this.subscriptions.push(
        this._changePlanApprovalService.processConsultantNotes({
          id: this.details.id,
          reasonsAndJustificationsForChangingProjectPlan: this.reasonsAndJustifications ?? null,
        }).subscribe(res => {
          if (res.isDone) {
            this.showProcessNotesButton = false;
            this._toastr.showSuccess('تم معالجة الطلب بنجاح');
          }
        })
      );
    } else if (cat === FacilityTypeCategoryEnum.Accountant) {
      this.subscriptions.push(
        this._changePlanApprovalService.processAccountantNotes({
          id: this.details.id,
          totalProjectCosts: this.accountantForm.value.totalProjectCosts ?? null,
          latestBankStatementFileId: this.bankStatementFileId,
        }).subscribe(res => {
          if (res.isDone) {
            this.showProcessNotesButton = false;
            this._toastr.showSuccess('تم معالجة الطلب بنجاح');
          }
        })
      );
    }
  }

  onBankStatementFileUploaded(filesData: any): void {
    if (!filesData.eventRes.data || filesData.eventRes.data.length === 0) {
      this.bankStatementFileId = null;
      return;
    }
    filesData.eventRes.data.forEach((data: any) => {
      this.bankStatementFileId = data.id;
    });
  }

  navigateToProjectDetails(tabIndex: number = 0): void {
    if (this.details?.licenseProjecId) {
      localStorage.setItem('licenseProjectId', this.details.licenseProjecId);
      localStorage.setItem('projectDetailsActiveTab', tabIndex.toString());
      this._router.navigateByUrl(
        `${Configuration.modules.wafi}/${Configuration.modules.engineeringManagement}/${Configuration.pages.license.projectDetails}`
      );
    }
  }

  getApprovalStatusClass(status: number): string {
    switch (status) {
      case 2: return 'green';
      case 3: return 'red';
      default: return 'orange';
    }
  }
  openApprovalLetter(): void {
    if (this.details?.generatedModelFile?.filePath) {
      window.open(this.baseUrl + this.details.generatedModelFile.filePath, '_blank');
    }
  }

  getStatusPillClass(statusId: number): string {
    const approvedStatuses = [7, 10, 11];
    const rejectedStatuses = [8, 13, 18, 19, 20, 21, 23, 26, 28];
    const draftStatuses = [0];

    if (approvedStatuses.includes(statusId)) return 'green';
    if (rejectedStatuses.includes(statusId)) return 'red';
    if (draftStatuses.includes(statusId)) return 'black';
    return 'orange';
  }
  daysDifference(): number | string {
    if (!this.details?.previousProjectEndDate || !this.details?.projectEndDate) return '-';
    const prev = new Date(this.details.previousProjectEndDate);
    const next = new Date(this.details.projectEndDate);
    return Math.round((next.getTime() - prev.getTime()) / (1000 * 60 * 60 * 24));
  }

  ngOnDestroy(): void { this.subscriptions.forEach(s => s.unsubscribe()); }
}
