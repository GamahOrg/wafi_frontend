import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PopupService } from '../../../../../../shared/services/popup/popup.service';
import { ToastrNotificatioService } from '../../../../../../core/services/toastr-notification/toastr-notificatio.service';
import { SharedLicenseProjectService } from '../../../../license/services/sharedLicenseProject/shared-license-project.service';
import { DatePipe, Location } from '@angular/common';
import { LicenseProjectChangePlanRequestService } from '../../../services/license-project-change-plan-request.service';
import { FileUploader } from 'src/app/shared/models/file-uploader.model';
import { LicenseProjectDeedsOwnersDto } from '../../../models/license-project-deeds-owners-dto';
import { LicenseProjectSoldUnitsDto } from '../../../models/license-project-sold-units-dto';
import { LicenseProjectChangePlanSaveDto } from '../../../models/license-project-change-plan-save-dto';
import { customerResponse } from '../../../../../../shared/models/customer.model';
import { UserDataService } from '../../../../../../core/services/user-data/user-data.service';
import { Configuration } from '../../../../../../core/configurations/shared.config';
import { ChangePlanApprovalService, ProcessAccountantNotesDto, ProcessDeveloperNotesDto } from '../../../services/change-plan-approval.service';
import { environment } from '../../../../../../../environments/environment';

@Component({
  selector: 'app-create-license-project-change-plan-request',
  templateUrl: './create-license-project-change-plan-request.component.html',
  styleUrls: ['./create-license-project-change-plan-request.component.scss']
})
export class CreateLicenseProjectChangePlanRequestComponent implements OnDestroy {
  private _newDateSub!: Subscription;
  subscriptions: Subscription[] = [];
  userData: customerResponse | null = null;

  licenseProjectId: string | null = "00000000-0000-0000-0000-000000000000";
  requestId: string | null = null;
  facilityId: string | null = "00000000-0000-0000-0000-000000000000";
  customerId: string | null = "00000000-0000-0000-0000-000000000000";
  //form!: FormGroup;
  showValidation: boolean = false;
  twoDatesDifferenceDisplay: string = '';
  totalCumulativeDisplay: string = '';
  totalDays!: number;
  totalMonths!: number;
  baseUrl = `${environment.baseURL}/`;


  form = this._formBuilder.group({
    totalCumulativePreviousExtensionDurationDays: this._formBuilder.control<number | null>
      (null, [Validators.required]),
    previousChangeRequestCount: this._formBuilder.control<number | null>(null, [Validators.required]),
    certificateNumber: this._formBuilder.control<string | null>(null, [Validators.required]),
    projectName: this._formBuilder.control<string | null>(null, [Validators.required]),

    startOnDate: this._formBuilder.control<string | null>(null, [Validators.required]),
    endOnDate: this._formBuilder.control<string | null>(null, [Validators.required]),
    changePlanJustification: this._formBuilder.control<string | null>(null, [Validators.required]),
    newProjectEndDate: this._formBuilder.control<string | null>(null, [Validators.required]),
    totalCumulativePreviousExtensionDurationDaysAfterRequest: this._formBuilder.control<number | null>
      (null, [Validators.required]),
    twoDatesDifference: this._formBuilder.control<number | null>(null, [Validators.required]),
    hasCoerciveCircumstance: this._formBuilder.control<boolean | null>(null, [Validators.required]),
  });

  singleFilesUploaderData: FileUploader = { multiple: false } as FileUploader;
  coerciveCircumstanceFileId: string | null = null;
  coerciveCircumstanceFile: any = null;

  deedsOwnersListData: LicenseProjectDeedsOwnersDto[] = [];
  deedOwnerUploaders: FileUploader[] = [];
  deedOwnerApprovalFileIds: (string | null)[] = [];
  deedOwnerExistingFiles: (any | null)[] = [];
  isNoteProcessingStage = false;
  isSendProcessingStage = false;
  id = '';

  soldUnitsListData: LicenseProjectSoldUnitsDto[] = [];
  soldUnitsNewDates: (Date | null)[] = [];
  isViewOnly = false;
  constructor(
    private _popupService: PopupService,
    private _formBuilder: FormBuilder,
    private _toastrNotificationService: ToastrNotificatioService,
    private _sharedLicenseProjectService: SharedLicenseProjectService,
    private _licenseProjectChangePlanRequestService: LicenseProjectChangePlanRequestService,
    private datePipe: DatePipe,
    private _router: Router,
    private _route: ActivatedRoute,
    private _userDataService: UserDataService,
    private _location: Location,
    private _service: ChangePlanApprovalService,

  ) { }


  ngOnInit(): void {
    //const id = this._route.snapshot.paramMap.get('licenseProjectId');
    // this.licenseProjectId = id;
    //this.licenseProjectId = '30F750B2-AC42-4F9F-8DF4-A5ED06662022';

    this.requestId = this._route.snapshot.paramMap.get('requestId');
    this.isViewOnly = this._route.snapshot.queryParamMap.get('viewOnly') === 'true';
    this._sharedLicenseProjectService.setLicenseRequestIdInLocalStorage(this.requestId as string);

    this.getDraftByRequestId();
    this.obseveCustomerData();

    this._newDateSub = this.controls.newProjectEndDate.valueChanges.subscribe(() => {
      //
      const endOnDate = this.controls.endOnDate.value;
      const newDate = this.controls.newProjectEndDate.value;

      // Reset previous error
      this.controls.newProjectEndDate.setErrors(null);

      if (endOnDate && newDate) {
        const start = new Date(new Date(endOnDate).toDateString());
        const end = new Date(new Date(newDate).toDateString());

        if (end <= start) {
          // ❗ Set custom error
          this.controls.newProjectEndDate.setErrors({
            invalidDate: true
          });
          //rest the values
          this.twoDatesDifferenceDisplay = '';
          this.totalCumulativeDisplay = '';
          return; // ❗ Stop calculation
        }
      }
      this.calculateDatesDifference(true);
    });
  }

  ngOnDestroy(): void {
    this._newDateSub?.unsubscribe();
  }

  onCancel(): void {
    this._location.back();
  }

  onDeedOwnerFileUploaded(index: number, filesData: any): void {
    if (!filesData?.eventRes?.data?.length) {
      this.deedOwnerApprovalFileIds[index] = null;
      return;
    }
    this.deedOwnerApprovalFileIds[index] = filesData.eventRes.data[0].id;
    this.deedOwnerExistingFiles[index] = filesData.eventRes.data[0];
  }

  onRemoveDeedOwnerFile(index: number): void {
    this.deedOwnerApprovalFileIds[index] = null;
    this.deedOwnerExistingFiles[index] = null;
  }

  onCoerciveCircumstanceFileUploaded(filesData: any): void {
    if (!filesData?.eventRes?.data?.length) {
      this.coerciveCircumstanceFileId = null;
      return;
    }
    this.coerciveCircumstanceFileId = filesData.eventRes.data[0].id;
    this.coerciveCircumstanceFile = filesData.eventRes.data[0];
  }

  onRemoveCoerciveCircumstanceFile(): void {
    this.coerciveCircumstanceFileId = null;
    this.coerciveCircumstanceFile = null;
  }

  onSave(isDraft: boolean): void {
    debugger;

    if (this.controls.newProjectEndDate?.hasError('invalidDate')) {
      this._toastrNotificationService.showError(' يجب ان يكون تاريخ الانتهاء الجديد اكبر من التاريخ الحالي');
      return;
    }

    this.showValidation = true;
    if (this.form.invalid) return;
    const hasUnitDateErrors = this.soldUnitsListData.some((_, i) => !!this.getSoldUnitDateError(i));
    if (hasUnitDateErrors) return;
    if (this.controls.hasCoerciveCircumstance.value === true && !this.coerciveCircumstanceFileId) return;

    // console.log(this.deedOwnerApprovalFileIds);
    // const hasMissingOwnerFiles = this.deedOwnerApprovalFileIds.some(id => !id);
    // if (hasMissingOwnerFiles && this.shouldShowOwnerApproval()) return;

    if (this.hasMissingOwnerApprovalFiles()) {
      return;
    }
    const payload: LicenseProjectChangePlanSaveDto = {
      requestId: this.requestId,
      facilityId: this.facilityId ?? '',
      customerId: this.customerId ?? '',
      licenseProjectId: this.licenseProjectId!,
      newProjectEndDate: this.datePipe.transform(this.controls.newProjectEndDate.value, 'yyyy-MM-dd'),
      previousProjectEndDate: this.controls.endOnDate.value,

      changePlanJustification: this.controls.changePlanJustification.value,
      hasCoerciveCircumstance: this.controls.hasCoerciveCircumstance.value,
      coerciveCircumstanceFileId: this.coerciveCircumstanceFileId,
      twoDatesDifference: this.controls.twoDatesDifference.value,
      totalCumulativePreviousExtensionDurationDaysAfterRequest:
        this.controls.totalCumulativePreviousExtensionDurationDaysAfterRequest.value,
      soldUnits: this.soldUnitsListData.map((unit, i) => ({
        licenseProjectBuyerId: unit.licenseProjectBuyerId,
        newUnitHandoverDate: this.soldUnitsNewDates[i] ? this.datePipe.transform(this.soldUnitsNewDates[i], 'yyyy-MM-dd') : null,
        contractedHandoverDate: unit.contractedHandoverDate,

      })),
      deedOwners: this.deedsOwnersListData.map((owner, i) => ({
        licenseProjectLandOwnerId: owner.licenseProjectLandOwnerId,
        isCustomer: owner.isCustomer,
        isOwnerByDeveloper: owner.isOwnerByDeveloper,
        offlineOwnerApprovalFileId: this.deedOwnerApprovalFileIds[i],
      })),
      isDraft,
      previousChangeRequestCount: this.controls.previousChangeRequestCount.value,
      totalCumulativeAfterRequestExtensionDurationDisplay: this.totalCumulativeDisplay,
      totalCumulativePreviousExtensionDurationDisplay: this.controls.totalCumulativePreviousExtensionDurationDays.value!.toString(),
      twoEndDatesDifferenceDisplay: this.twoDatesDifferenceDisplay
    };

    const request$ = this._licenseProjectChangePlanRequestService.update(payload)


    request$.subscribe({
      next: (res) => {
        if (res.isDone) {
          if (isDraft) {
            this.requestId = res.data?.id ?? this.requestId;
            this._toastrNotificationService.showSuccess('تم الحفظ كمسودة بنجاح');
          } else {
            this._toastrNotificationService.showSuccess('تم إرسال الطلب بنجاح');
          }
          this._router.navigate(['../../' + Configuration.pages.licenseProjectRequests.licenseProjectRequestList], { relativeTo: this._route });
        }
      },
    });
  }

  private calculateDatesDifference(preserveExistingUnitDates = false): void {
    const endOnDate = this.controls.endOnDate.value;
    const newProjectEndDate = this.controls.newProjectEndDate.value;
    if (endOnDate && newProjectEndDate) {
      const start = new Date(endOnDate);
      const end = new Date(newProjectEndDate);

      // Total days for cumulative calculation
      const totalDays = Math.round((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24));
      this.controls.twoDatesDifference.setValue(totalDays, { emitEvent: false });

      // Pre-fill sold unit new dates with newProjectEndDate; skip already-set dates when loading saved data
      this.soldUnitsNewDates = this.soldUnitsNewDates.map(d => preserveExistingUnitDates && d ? d : new Date(newProjectEndDate));

      // Months + remaining days for display
      let months = (end.getFullYear() - start.getFullYear()) * 12 + (end.getMonth() - start.getMonth());
      let days = end.getDate() - start.getDate();
      if (days < 0) {
        months--;
        days += new Date(end.getFullYear(), end.getMonth(), 0).getDate();
      }

      const parts: string[] = [];
      if (months > 0) parts.push(`${months} ${months === 1 ? 'شهر' : 'شهور'}`);
      if (days > 0) parts.push(`${days} ${'يوم'}`);
      this.twoDatesDifferenceDisplay = parts.length ? parts.join(' و ') : '0 يوم';

      // Sum previous cumulative (totalMonths + totalDays from API) with current diff
      let cumulativeMonths = (this.totalMonths ?? 0) + months;
      let cumulativeDays = (this.totalDays ?? 0) + days;
      if (cumulativeDays >= 30) {
        cumulativeMonths += Math.floor(cumulativeDays / 30);
        cumulativeDays = cumulativeDays % 30;
      }

      const cumulativeParts: string[] = [];
      if (cumulativeMonths > 0) cumulativeParts.push(`${cumulativeMonths} ${cumulativeMonths === 1 ? 'شهر' : 'شهور'}`);
      if (cumulativeDays > 0) cumulativeParts.push(`${cumulativeDays} ${cumulativeDays === 1 ? 'يوم' : 'يوم'}`);
      this.totalCumulativeDisplay = cumulativeParts.length ? cumulativeParts.join(' و ') : '0 يوم';

      this.controls.totalCumulativePreviousExtensionDurationDaysAfterRequest.setValue(
        cumulativeMonths * 30 + cumulativeDays, { emitEvent: false }
      );
    } else {
      this.controls.twoDatesDifference.setValue(null, { emitEvent: false });
      this.controls.totalCumulativePreviousExtensionDurationDaysAfterRequest.setValue(null, { emitEvent: false });
      this.twoDatesDifferenceDisplay = '';
      this.totalCumulativeDisplay = '';
    }
  }

  getSoldUnitDateError(index: number): string | null {
    const newDate = this.soldUnitsNewDates[index];
    if (!newDate) return 'حقل مطلوب';

    const selected = new Date(new Date(newDate).toDateString());
    const newProjectEndDate = this.controls.newProjectEndDate.value;
    const contractedDate = this.soldUnitsListData[index]?.contractedHandoverDate;

    if (newProjectEndDate && selected > new Date(new Date(newProjectEndDate).toDateString())) {
      return 'لا يجوز أن يتجاوز تاريخ تسليم الوحدة تاريخ انتهاء المشروع الجديد.';
    }

    if (contractedDate) {
      const maxDate = new Date(new Date(contractedDate).toDateString());
      maxDate.setFullYear(maxDate.getFullYear() + 1);
      if (selected > maxDate) {
        return 'لا يجوز ان يتجاوز تاريخ تسليم الوحدة سنة واحدة من تاريخ التسليم المتعاقد عليه.';
      }
    }

    return null;
  }

  get controls() {
    return this.form.controls;
  }

  private obseveCustomerData(): void {
    this.subscriptions.push(
      this._userDataService.getCustomerData().subscribe((res: customerResponse | null) => {
        this.userData = res
        //console.log('userData', this.userData)
        if (this.userData?.facilities[0]) {
          this.facilityId = this.userData?.facilities[0]?.id;
          this.customerId = this.userData?.facilities[0]?.customersId;
        }

      })
    )
  }

  private getDraftByRequestId() {
    //// If reopening a draft, load saved editable data
    if (this.requestId) {
      this._licenseProjectChangePlanRequestService
        .getDraftById(this.requestId)
        .subscribe(draft => {
          this.totalDays = draft.totalCumulativePreviousExtensionRemainingDays;
          this.totalMonths = draft.totalCumulativePreviousExtensionMonths;
          this.isNoteProcessingStage = draft.isNoteProcessingStage;
          this.isSendProcessingStage = draft.isSendProcessingStage;
          this.id = draft.id;
          this.patchForm(draft)
        });
    }
  }

  private getLicenseProjectIdStorage(): void {
    if (this.licenseProjectId) {
      this._licenseProjectChangePlanRequestService
        .getLicenseProjectDetails(this.licenseProjectId)
        .subscribe(res => {
          this.totalDays = res.totalCumulativePreviousExtensionRemainingDays;
          this.totalMonths = res.totalCumulativePreviousExtensionMonths;
          this.patchForm(res);


        });
    }
  }

  patchForm(data: any) {
    // Read-only project fields
    this.form.patchValue({
      certificateNumber: data.certificateNumber,
      projectName: data.projectName,
      previousChangeRequestCount: data.previousChangeRequestCount,
      totalCumulativePreviousExtensionDurationDays: data.totalCumulativePreviousExtensionDuration,
      startOnDate: this.datePipe.transform(data.projectStartOnDate, 'yyyy-MM-dd'),
      endOnDate: this.datePipe.transform(data.projectEndOnDate, 'yyyy-MM-dd'),
    });

    // Editable fields from the changePlan request
    this.form.patchValue({
      changePlanJustification: data.justificationsAndReasons,
      hasCoerciveCircumstance: data.hasForceMajeure,
    });

    // Patch newProjectEndDate only if it has a real value (not 0001-01-01)
    const newEndDate = data.newProjectEndDate;
    if (newEndDate && !newEndDate.startsWith('0001')) {
      this.form.patchValue({ newProjectEndDate: newEndDate });
    }

    this.coerciveCircumstanceFileId = data.forceMajeureDocumentFileId ?? null;
    this.coerciveCircumstanceFile = data.forceMajeureDocumentFile ?? null;
    this.licenseProjectId = data.licenseProjectRequestId || this.licenseProjectId;

    // Deed owners table
    this.deedsOwnersListData = data.changePlanDeedOwners || [];
    this.deedOwnerUploaders = this.deedsOwnersListData.map(() => ({ multiple: false } as FileUploader));
    this.deedOwnerApprovalFileIds = this.deedsOwnersListData.map(
      (owner: any) => owner.offlineOwnerApprovalFileId ?? owner.offlineOwnerApprovalFile?.id ?? null
    );
    this.deedOwnerExistingFiles = this.deedsOwnersListData.map(
      (owner: any) => owner.offlineOwnerApprovalFile ?? null
    );

    // Sold units table
    this.soldUnitsListData = data.changePlanSoldUnits || [];
    this.soldUnitsNewDates = this.soldUnitsListData.map(
      (unit: any) => {
        const dateStr = (unit.newUnitHandoverDate && !unit.newUnitHandoverDate.startsWith('0001'))
          ? unit.newUnitHandoverDate
          : unit.contractedHandoverDate;
        if (!dateStr || dateStr.startsWith('0001')) return null;
        return new Date(dateStr);
      }
    );

    // Trigger calculated fields; preserve per-unit dates already loaded from API
    this.calculateDatesDifference(true);
  }

  shouldShowOwnerApproval(): boolean {
    return this.deedsOwnersListData?.some(
      owner => !owner.isCustomer && !owner.isOwnerByDeveloper
    );
  }

  private hasMissingOwnerApprovalFiles(): boolean {
    return this.deedsOwnersListData.some((owner, index) =>
      !owner.isCustomer &&
      !owner.isOwnerByDeveloper &&
      !this.deedOwnerApprovalFileIds[index]
    );
  }

  get isEndDateInvalid(): boolean {
    const start = this.form.get('endOnDate')?.value;
    const end = this.form.get('newProjectEndDate')?.value;

    return !!(start && end && new Date(end) > new Date(start));
  }

  onProcessNotes(): void {
    const dto: ProcessDeveloperNotesDto = {
      id: this.id,
      justificationsAndReasons: this.controls.changePlanJustification.value ?? null,
      hasForceMajeure: !!this.controls.hasCoerciveCircumstance.value,
      forceMajeureDocumentFileId: this.coerciveCircumstanceFileId,
    };
    this.subscriptions.push(
      this._service.processDeveloperNotes(dto).subscribe(res => {
        if (res.isDone) {
          this.getDraftByRequestId();
          this._toastrNotificationService.showSuccess('تم معالجة الطلب بنجاح');
        }
      })
    );
  }

}
