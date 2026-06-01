import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { PaginationService } from 'src/app/shared/services/pagination/pagination.service';
import { pagination } from 'src/app/shared/models/pagination.model';
import { PopupService } from 'src/app/shared/services/popup/popup.service';
import { confirmationPopupData } from 'src/app/shared/models/popup.model';
import { ToastrNotificatioService } from 'src/app/core/services/toastr-notification/toastr-notificatio.service';
import { FileUploader } from 'src/app/shared/models/file-uploader.model';
import { Configuration } from 'src/app/core/configurations/shared.config';
import { environment } from 'src/environments/environment';

import {
  ChangePlanApprovalDetailsDto,
  ChangePlanSoldUnitPagedDto,
  ChangePlanApprovalService,
  FacilityTypeCategoryEnum,
  ProcessConsultantNotesDto,
  ProcessAccountantNotesDto,
} from '../../../services/change-plan-approval.service';
import { LicenseProjectRequestStatusEnum } from '../../../enums/license-project-request-status.enum';

@Component({
  selector: 'app-change-plan-approval-details',
  templateUrl: './change-plan-approval-details.component.html',
  styleUrls: ['./change-plan-approval-details.component.scss'],
  providers: [PaginationService],
})
export class ChangePlanApprovalDetailsComponent implements OnInit, OnDestroy {
  subscriptions: Subscription[] = [];
  id: string = '';
  details: ChangePlanApprovalDetailsDto | null = null;
  baseUrl = `${environment.baseURL}/`;
  isRequirementsCompleted = false;
  showProcessNotesButton = false;
  isCancelled = false;
  soldUnits: ChangePlanSoldUnitPagedDto[] = [];
  FacilityTypeCategoryEnum = FacilityTypeCategoryEnum;

  // Engineering form
  engineeringForm = new FormGroup({
    reasonsAndJustifications: new FormControl('', [Validators.required]),
  });

  // Accountant form
  accountantForm = new FormGroup({
    totalProjectCosts: new FormControl<number | null>(null, [Validators.required]),
    constructionCostsAvailableAmount: new FormControl<number | null>({ value: null, disabled: true }),
    administrativeAndMarketingAvailableAmount: new FormControl<number | null>({ value: null, disabled: true }),
    custodyAvailableAmount: new FormControl<number | null>({ value: null, disabled: true }),
  });

  // File uploader
  bankStatementFileId: string | null = null;
  bankStatementFileName: string | null = null;
  bankStatementUploaderData: FileUploader = {
    multiple: false,
    allowedExtensions: ['.jpg', '.png', '.pdf'],
    allowedExtensionsText: 'jpg, png, pdf',
    maxFileSizeMB: 2,
  } as FileUploader;

  soldUnitsPagination: pagination = {
    currentPage: 1,
    pageCount: 0,
    pageSize: 10,
    totalCount: 0,
  };

  constructor(
    private _router: Router,
    private _service: ChangePlanApprovalService,
    private _paginationService: PaginationService,
    private _popupService: PopupService,
    private _toastr: ToastrNotificatioService
  ) { }

  get hasBankStatementFile(): boolean {
    return !!(this.details?.latestBankStatementFile || this.bankStatementFileId);
  }

  get canApproveOrReject(): boolean {
    if (!this.details) return false;
    return this.details.deedOwners.some(d => d.approvalStatus === 1);
  }

  ngOnInit(): void {
    this.id = this._service.getSelectedChangePlanId() || '';
    if (this.id) {
      this.loadDetails();
      this.watchPaginationActions();
    }
  }

  loadDetails(): void {
    const facilityTypeCategory = this._service.getFacilityTypeCategory() ?? undefined;
    const facilityId = this._service.getSelectedFacilityId() ?? undefined;
    this.subscriptions.push(
      this._service.getApprovalDetails(this.id, facilityTypeCategory, facilityId).subscribe((res) => {
        this.details = res;
        if (res) {
          this.isCancelled = res.statusId === LicenseProjectRequestStatusEnum.CancelledConsultantOrAccountantIncomplete
            || res.statusId === LicenseProjectRequestStatusEnum.CancelledDeedOwnersApprovalTimeout;
          this.isRequirementsCompleted =
            (res.facilityTypeCategory === FacilityTypeCategoryEnum.Engineering && res.isConsultantRequirementsCompleted) ||
            (res.facilityTypeCategory === FacilityTypeCategoryEnum.Accountant && res.isAccountantRequirementsCompleted);
          this.showProcessNotesButton = res.showProcessNotesButton;
          if (res.showProcessNotesButton) {
            this.isRequirementsCompleted = false;
          }
          this.engineeringForm.patchValue({
            reasonsAndJustifications: res.reasonsAndJustificationsForChangingProjectPlan || '',
          });
          this.accountantForm.patchValue({
            totalProjectCosts: res.totalProjectCosts,
            constructionCostsAvailableAmount: res.constructionCostsAvailableAmount,
            administrativeAndMarketingAvailableAmount: res.administrativeAndMarketingAvailableAmount,
            custodyAvailableAmount: res.custodyAvailableAmount,
          });
          this.loadSoldUnits();
        }
      })
    );
  }

  loadSoldUnits(): void {
    this.subscriptions.push(
      this._service
        .getSoldUnitsPaged({
          changePlanRequestId: this.id,
          pageNumber: this.soldUnitsPagination.currentPage,
          pageSize: this.soldUnitsPagination.pageSize,
        })
        .subscribe((res) => {
          if (res.isDone && res.data) {
            this.soldUnits = res.data.results;
            this.soldUnitsPagination.pageSize = res.data.pageSize;
            this.soldUnitsPagination.totalCount = res.data.totalCount;
            this.soldUnitsPagination.pageCount = res.data.pageCount;
            this._paginationService.updatePaginationData(this.soldUnitsPagination);
          }
        })
    );
  }

  // === Developer: Approve ===
  onApprove(): void {
    if (!this.details) return;
    const data: confirmationPopupData = {
      id: 'change-plan-approve',
      popupType: 'primary',
      title: `تأكيد الموافقة على طلب تغيير خطة مشروع ${this.details.projectName || ''}`,
      staticMessage: `هل أنت متأكد من اعتماد تغيير خطة مشروع ${this.details.projectName || ''}؟`,
      dynamicMessage: '',
      acceptButtonText: 'تأكيد',
    };
    this._popupService.updateConfirmationPopupData(data);

    const sub = this._popupService.confirmAction.subscribe((result) => {
      if (result && (result as confirmationPopupData).id === 'change-plan-approve') {
        this._popupService.dismissDialog();
        this.submitApproval();
        sub.unsubscribe();
      }
    });
    this.subscriptions.push(sub);
  }

  private submitApproval(): void {
    if (!this.details) return;

    this.subscriptions.push(
      this._service.updateDeedOwnerApprovalStatus({
        licenseProjectChangePlanRequestId: this.details.id,
        approvalStatus: 2,
        facilityId: this._service.getSelectedFacilityId() ?? null,
      }).subscribe((res) => {
        if (res.isDone) {
          this._toastr.showSuccess('تم اعتماد طلب تغيير خطة المشروع من جهتكم بنجاح');
          this.loadDetails();
        }
      })
    );
  }

  // === Developer: Reject ===
  onReject(): void {
    if (!this.details) return;
    const data: confirmationPopupData = {
      id: 'change-plan-reject',
      popupType: 'primary',
      title: 'ما هو سبب رفض طلب تغيير خطة المشروع؟',
      staticMessage: '',
      dynamicMessage: '',
      controlTitle: 'سبب الرفض',
      acceptButtonText: 'ارسال سبب الرفض',
    };
    this._popupService.updateRejectionConfirmationPopupData(data);

    const sub = this._popupService.confirmAction.subscribe((result: any) => {
      //console.log('[reject-caller] received', result);
      if (result && result.id === 'change-plan-reject') {
        this._popupService.dismissDialog();
        this.submitRejection(result.data || result.notes || '');
        sub.unsubscribe();
      }
    });
    this.subscriptions.push(sub);
  }

  private submitRejection(reason: string): void {
    if (!this.details) return;

    this.subscriptions.push(
      this._service.updateDeedOwnerApprovalStatus({
        licenseProjectChangePlanRequestId: this.details.id,
        approvalStatus: 3,
        rejectionReason: reason,
        facilityId: this._service.getSelectedFacilityId() ?? null,
      }).subscribe((res) => {
        if (res.isDone) {
          this._toastr.showSuccess('تم رفض الطلب بنجاح');
          this.loadDetails();
        }
      })
    );
  }

  // === Engineering: Save Draft ===
  onSaveDraftEngineering(): void {
    if (!this.details) return;
    this.subscriptions.push(
      this._service.updateEngineeringRequirements({
        id: this.details.id,
        reasonsAndJustificationsForChangingProjectPlan:
          this.engineeringForm.value.reasonsAndJustifications || '',
        isDraft: true,
      }).subscribe((res) => {
        if (res.isDone) {
          this.isRequirementsCompleted = res.data ?? false;
          this._toastr.showSuccess('تم حفظ البيانات كمسودة');
        }
      })
    );
  }

  // === Engineering: Submit ===
  onSubmitEngineering(): void {
    if (!this.details || this.engineeringForm.invalid) {
      this.engineeringForm.markAllAsTouched();
      return;
    }
    this.subscriptions.push(
      this._service.updateEngineeringRequirements({
        id: this.details.id,
        reasonsAndJustificationsForChangingProjectPlan:
          this.engineeringForm.value.reasonsAndJustifications || '',
        isDraft: false,
      }).subscribe((res) => {
        if (res.isDone) {
          this.isRequirementsCompleted = res.data ?? false;
          this._toastr.showSuccess('تم استكمال وإرسال الطلب بنجاح');
          this.loadDetails();
        }
      })
    );
  }

  // === Accountant: Save Draft ===
  onSaveDraftAccountant(): void {
    if (!this.details) return;
    this.subscriptions.push(
      this._service.updateAccountantRequirements({
        id: this.details.id,
        totalProjectCosts: this.accountantForm.value.totalProjectCosts || 0,
        latestBankStatementFileId: this.bankStatementFileId || undefined,
        isDraft: true,
      }).subscribe((res) => {
        if (res.isDone) {
          this.isRequirementsCompleted = res.data ?? false;
          this._toastr.showSuccess('تم حفظ البيانات كمسودة');
        }
      })
    );
  }

  // === Accountant: Submit ===
  onSubmitAccountant(): void {
    if (!this.details || this.accountantForm.invalid) {
      this.accountantForm.markAllAsTouched();
      return;
    }
    this.subscriptions.push(
      this._service.updateAccountantRequirements({
        id: this.details.id,
        totalProjectCosts: this.accountantForm.value.totalProjectCosts || 0,
        latestBankStatementFileId: this.bankStatementFileId || undefined,
        isDraft: false,
      }).subscribe((res) => {
        if (res.isDone) {
          this.isRequirementsCompleted = res.data ?? false;
          this._toastr.showSuccess('تم استكمال وإرسال الطلب بنجاح');
          this.loadDetails();
        }
      })
    );
  }

  onBankStatementFileUploaded(filesData: any): void {
    if (!filesData.eventRes.data || filesData.eventRes.data.length === 0) {
      this.bankStatementFileId = null;
      this.bankStatementFileName = null;
      return;
    }
    filesData.eventRes.data.forEach((data: any) => {
      this.bankStatementFileId = data.id;
      this.bankStatementFileName = data.fileName || data.name || null;
    });
  }

  deleteBankStatementFile(): void {
    this.bankStatementFileId = null;
    this.bankStatementFileName = null;
    if (this.details) {
      this.details.latestBankStatementFile = null as any;
    }
  }

  onProcessNotes(): void {
    if (!this.details) return;
    const cat = this.details.facilityTypeCategory;
    if (cat === FacilityTypeCategoryEnum.Engineering) {
      const dto: ProcessConsultantNotesDto = {
        id: this.details.id,
        reasonsAndJustificationsForChangingProjectPlan:
          this.engineeringForm.value.reasonsAndJustifications ?? null,
      };
      this.subscriptions.push(
        this._service.processConsultantNotes(dto).subscribe(res => {
          if (res.isDone) {
            this.showProcessNotesButton = false;
            this.isRequirementsCompleted = true;
            this._toastr.showSuccess('تم معالجة الطلب بنجاح');
          } else if (res.message) {
            this._toastr.showError(res.message);
          }
        })
      );
    } else if (cat === FacilityTypeCategoryEnum.Accountant) {
      const dto: ProcessAccountantNotesDto = {
        id: this.details.id,
        totalProjectCosts: this.accountantForm.value.totalProjectCosts ?? null,
        latestBankStatementFileId: this.bankStatementFileId,
      };
      this.subscriptions.push(
        this._service.processAccountantNotes(dto).subscribe(res => {
          if (res.isDone) {
            this.showProcessNotesButton = false;
            this.isRequirementsCompleted = true;
            this._toastr.showSuccess('تم معالجة الطلب بنجاح');
          } else if (res.message) {
            this._toastr.showError(res.message);
          }
        })
      );
    }
  }

  goBackToList(): void {
    const facilityType = this._service.getFacilityTypeCategory();
    const route = facilityType === FacilityTypeCategoryEnum.OwnerDeed
      ? Configuration.pages.licenseProjectRequests.changePlanDeedOwnerApprovals
      : Configuration.pages.licenseProjectRequests.changePlanListApprovals;
    this._router.navigateByUrl(
      `${Configuration.modules.wafi}/${Configuration.modules.licenseProjectRequests}/${route}`
    );
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

  navigateToLicenseProjectsAccounatantDetails(tabIndex: number = 0): void {
    debugger;
    if (this.details?.licenseProjecId) {
      localStorage.setItem('licenseProjectId', this.details.licenseProjecId);
      localStorage.setItem('projectDetailsActiveTab', tabIndex.toString());
      this._router.navigateByUrl(
        `${Configuration.modules.wafi}/${Configuration.modules.license}/${Configuration.pages.license.licenseProjectsAccountantDetails}`,
      );
    }
  }

  private watchPaginationActions(): void {
    this.subscriptions.push(
      this._paginationService.getPageClicked().subscribe((nextPage: number) => {
        if (this.soldUnitsPagination.currentPage !== nextPage) {
          this.soldUnitsPagination.currentPage = nextPage;
          this.loadSoldUnits();
        }
      })
    );
  }

  getApprovalStatusClass(status: number): string {
    switch (status) {
      case 2: return 'green';
      case 3: return 'red';
      default: return 'orange';
    }
  }

  getStatusClass(statusId?: LicenseProjectRequestStatusEnum | null) {
    switch (statusId) {
      case LicenseProjectRequestStatusEnum.Approved:
        return 'green';

      case LicenseProjectRequestStatusEnum.Rejected:
      case LicenseProjectRequestStatusEnum.RejectedFromNewAccountant:
        return 'red';

      default:
        return 'orange';
    }
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((s) => s.unsubscribe());
  }
}
