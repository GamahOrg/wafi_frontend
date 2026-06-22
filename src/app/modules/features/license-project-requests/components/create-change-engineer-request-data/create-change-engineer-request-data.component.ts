import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { FileUploader } from 'src/app/shared/models/file-uploader.model';
import { ChangeLicenseProjectEngineeringRequestService } from '../../services/change-license-project-engineering-request.service';
import { UserDataService } from 'src/app/core/services/user-data/user-data.service';
import { ToastrNotificatioService } from 'src/app/core/services/toastr-notification/toastr-notificatio.service';
import { Configuration } from 'src/app/core/configurations/shared.config';
import { FacilityShortDto } from '../../models/request-header-details';
import { ChangeEngineeringRequestDraftDto } from '../../models/change-engineering-request-draft-dto';
import { SaveChangeEngineeringRequestDto } from '../../models/save-change-engineering-request-dto';
import { customerResponse } from 'src/app/shared/models/customer.model';
import { TabsService } from 'src/app/shared/services/tabs/tabs.service';

@Component({
  selector: 'app-create-change-engineer-request-data',
  templateUrl: './create-change-engineer-request-data.component.html',
  styleUrls: ['./create-change-engineer-request-data.component.scss'],
})
export class CreateChangeEngineerRequestDataComponent implements OnInit, OnDestroy {
  @Input() readOnly = false;
  subscriptions: Subscription[] = [];
  requestId: string | null = null;
  licenseProjectId: string = '';
  facilityId: string = '';
  draftData: ChangeEngineeringRequestDraftDto | null = null;
  showValidation: boolean = false;

  form = this._formBuilder.group({
    reasons: this._formBuilder.control<string | null>(null, [Validators.required]),
    hasClearance: this._formBuilder.control<boolean | null>(null, [Validators.required]),
    noClearanceReason: this._formBuilder.control<string | null>(null),
  });

  singleFilesUploaderData: FileUploader = { multiple: false } as FileUploader;

  newEngineeringFacility: FacilityShortDto | null = null;
  alternativeConsultingOfficeAgreementId: string | null = null;
  clearanceEngineeringConsultantFileId: string | null = null;
  previousConsultingOfficeReportId: string | null = null;

  existingAlternativeConsultingOfficeAgreement: any = null;
  existingClearanceEngineeringConsultantFile: any = null;
  existingPreviousConsultingOfficeReport: any = null;

  get controls() {
    return this.form.controls;
  }

  constructor(
    private _changeLicenseProjectEngineeringRequestService: ChangeLicenseProjectEngineeringRequestService,
    private _router: Router,
    private _route: ActivatedRoute,
    private _formBuilder: FormBuilder,
    private _userDataService: UserDataService,
    private _toastrNotificationService: ToastrNotificatioService,
    private _tabsService: TabsService,
    private _location: Location,
  ) {}

  ngOnInit(): void {
    this.readOnly = this.readOnly || this._changeLicenseProjectEngineeringRequestService.isReadOnly();
    this.requestId = this._changeLicenseProjectEngineeringRequestService.getChangeEngineerRequestId();
    this.observeCustomerData();
    this.loadDraftData();
  }

  private observeCustomerData(): void {
    this.subscriptions.push(
      this._userDataService
        .getCustomerData()
        .subscribe((res: customerResponse | null) => {
          this.facilityId = res?.facilities[0]?.id || '';
        }),
    );
  }

  private loadDraftData(): void {
    if (this.requestId) {
      this.subscriptions.push(
        this._changeLicenseProjectEngineeringRequestService
          .getDraftById(this.requestId)
          .subscribe((res) => {
            if (res) {
              this.draftData = res;
              this.licenseProjectId = res.licenseProjectId;
              this.patchForm(res);
            }
          }),
      );
    }
  }

  private patchForm(data: ChangeEngineeringRequestDraftDto): void {
    this.form.patchValue({
      reasons: data.reasons,
      hasClearance: data.hasClearance,
      noClearanceReason: data.noClearanceReason,
    });

    this.alternativeConsultingOfficeAgreementId = data.alternativeConsultingOfficeAgreementId;
    this.existingAlternativeConsultingOfficeAgreement = data.alternativeConsultingOfficeAgreement;
    this.clearanceEngineeringConsultantFileId = data.clearanceEngineeringConsultantFileId;
    this.existingClearanceEngineeringConsultantFile = data.clearanceEngineeringConsultantFile;
    this.previousConsultingOfficeReportId = data.previousConsultingOfficeReportId;
    this.existingPreviousConsultingOfficeReport = data.previousConsultingOfficeReport;
  }

  onPreviousConsultingOfficeReportUploaded(filesData: any): void {
    if (!filesData?.eventRes?.data?.length) {
      this.previousConsultingOfficeReportId = null;
      return;
    }
    this.previousConsultingOfficeReportId = filesData.eventRes.data[0].id;
    this.existingPreviousConsultingOfficeReport = null;
  }

  onClearanceEngineeringConsultantFileUploaded(filesData: any): void {
    if (!filesData?.eventRes?.data?.length) {
      this.clearanceEngineeringConsultantFileId = null;
      return;
    }
    this.clearanceEngineeringConsultantFileId = filesData.eventRes.data[0].id;
    this.existingClearanceEngineeringConsultantFile = null;
  }

  onAlternativeConsultingOfficeAgreementUploaded(filesData: any): void {
    if (!filesData?.eventRes?.data?.length) {
      this.alternativeConsultingOfficeAgreementId = null;
      return;
    }
    this.alternativeConsultingOfficeAgreementId = filesData.eventRes.data[0].id;
    this.existingAlternativeConsultingOfficeAgreement = null;
  }

  private buildPayload(isDraft: boolean): SaveChangeEngineeringRequestDto {
    return {
      requestId: this.requestId!,
      licenseProjectId: this.licenseProjectId,
      facilityId: this.facilityId,
      reasons: this.controls.reasons.value,
      hasClearance: this.controls.hasClearance.value,
      noClearanceReason: this.controls.noClearanceReason.value,
      alternativeConsultingOfficeAgreementId: this.alternativeConsultingOfficeAgreementId,
      clearanceEngineeringConsultantFileId: this.clearanceEngineeringConsultantFileId,
      previousConsultingOfficeReportId: this.previousConsultingOfficeReportId,
      isDraft,
    };
  }

  private isFormValid(): boolean {
    this.showValidation = true;
    if (!this.controls.reasons.value) return false;
    if (this.controls.hasClearance.value === null) return false;
    if (this.controls.hasClearance.value === true && !this.clearanceEngineeringConsultantFileId) return false;
    if (this.controls.hasClearance.value === false && !this.controls.noClearanceReason.value) return false;
    if (!this.previousConsultingOfficeReportId) return false;
    return true;
  }

  private notifyMissingRequiredFields(): void {
    this._toastrNotificationService.showError('يرجى تعبئة جميع الحقول المطلوبة قبل المتابعة');
  }

  onSave(isDraft: boolean): void {
    if (!this.isFormValid()) {
      this.notifyMissingRequiredFields();
      return;
    }

    this.subscriptions.push(
      this._changeLicenseProjectEngineeringRequestService
        .updateDraft(this.buildPayload(isDraft))
        .subscribe((res) => {
          if (res.isDone) {
            this._toastrNotificationService.showSuccess(
              isDraft ? 'تم الحفظ كمسودة بنجاح' : 'تم إرسال الطلب بنجاح',
            );
            if (!isDraft) {
              this._router.navigate([
                '../../' + Configuration.pages.licenseProjectRequests.licenseProjectRequestList,
              ], { relativeTo: this._route });
            }
          }
        }),
    );
  }

  onSaveAndNext(): void {
    if (!this.isFormValid()) {
      this.notifyMissingRequiredFields();
      return;
    }

    this.subscriptions.push(
      this._changeLicenseProjectEngineeringRequestService
        .updateDraft(this.buildPayload(true))
        .subscribe((res) => {
          if (res.isDone) {
            this._toastrNotificationService.showSuccess('تم الحفظ بنجاح');
            this._tabsService.updateActiveTabIndex(1);
          }
        }),
    );
  }

  onCancel(): void {
    this._location.back();
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe());
  }
}
