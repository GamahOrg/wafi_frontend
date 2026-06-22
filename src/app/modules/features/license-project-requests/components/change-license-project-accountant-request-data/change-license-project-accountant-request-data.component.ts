import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Subscription, Observable, map } from 'rxjs';
import { FileUploader } from 'src/app/shared/models/file-uploader.model';
import { ToastrNotificatioService } from 'src/app/core/services/toastr-notification/toastr-notificatio.service';
import { environment } from 'src/environments/environment';
import { ProjectRequestLocalStorageService } from '../../services/project-request-local-storage.service';
import { ChangeLicenseProjectAccountantRequestService } from '../../services/change-license-project-accountant-request.service';
import {
  ChangeLicenseAccountantRequestDataDto,
  SysFileDto,
  UpdateRequestDataPageDto,
} from '../../models/change-license-project-accountant-request-data-dto';

@Component({
  selector: 'app-change-license-project-accountant-request-data',
  templateUrl:
    './change-license-project-accountant-request-data.component.html',
  styleUrls: [
    './change-license-project-accountant-request-data.component.scss',
  ],
})
export class ChangeLicenseProjectAccountantRequestDataComponent
  implements OnInit, OnDestroy {
  subscriptions: Subscription[] = [];
  requestData: ChangeLicenseAccountantRequestDataDto | null = null;
  showValidation = false;
  baseUrl = `${environment.baseURL}/`;
  @Input() handleNotes = false;
  @Input() showNotesPage = false;


  form = this._formBuilder.group({
    justificationsAndReasons: this._formBuilder.control<string | null>(null, [
      Validators.required,
    ]),
    ReasonsForNotFinalizingAccountantClearance: this._formBuilder.control<string | null>(null),
    isClearanceAccountantDone: this._formBuilder.control<boolean | null>(null, [
      Validators.required,
    ]),
  });

  singleFileUploaderData: FileUploader = { multiple: false } as FileUploader;

  clearanceAccountantFileId: string | null = null;
  clearanceAccountantFile: SysFileDto | null = null;

  workDeliveryReportFileId: string | null = null;
  workDeliveryReportFile: SysFileDto | null = null;

  constructor(
    private _formBuilder: FormBuilder,
    private _service: ChangeLicenseProjectAccountantRequestService,
    private _projectRequestLocalStorageService: ProjectRequestLocalStorageService,
    private _toastrNotificationService: ToastrNotificatioService
  ) { }

  ngOnInit(): void {
    this.loadRequestData();
  }

  get controls() {
    return this.form.controls;
  }

  get isClearanceAccountantDone(): boolean | null {
    return this.controls.isClearanceAccountantDone.value;
  }

  private loadRequestData(): void {
    const id =
      this._projectRequestLocalStorageService.getSelectedProjectLicenseRequestIdFromLocalStorage();
    if (!id) return;

    this.subscriptions.push(
      this._service.getRequestDataPage(id).subscribe((data) => {
        this.requestData = data;
        this.form.patchValue({
          justificationsAndReasons: data.justificationsAndReasons || null,
          ReasonsForNotFinalizingAccountantClearance: data.reasonsForNotFinalizingAccountantClearance || null,
          isClearanceAccountantDone: data.isClearanceAccountantDone,
        });
        this.clearanceAccountantFile = data.clearanceAccountantFile;
        this.clearanceAccountantFileId =
          data.clearanceAccountantFile?.id ?? null;
        this.workDeliveryReportFile = data.workDeliveryReportFile;
        this.workDeliveryReportFileId =
          data.workDeliveryReportFile?.id ?? null;
      })
    );
  }

  clearWorkDeliveryReportFile(): void {
    this.workDeliveryReportFile = null;
    this.workDeliveryReportFileId = null;
  }

  clearClearanceAccountantFile(): void {
    this.clearanceAccountantFile = null;
    this.clearanceAccountantFileId = null;
  }

  onClearanceFileUploaded(filesData: any): void {
    if (!filesData?.eventRes?.data?.length) {
      this.clearanceAccountantFileId = null;
      return;
    }
    this.clearanceAccountantFileId = filesData.eventRes.data[0].id;
    this.clearanceAccountantFile = null;
  }

  onWorkDeliveryReportFileUploaded(filesData: any): void {
    if (!filesData?.eventRes?.data?.length) {
      this.workDeliveryReportFileId = null;
      return;
    }
    this.workDeliveryReportFileId = filesData.eventRes.data[0].id;
    this.workDeliveryReportFile = null;
  }

  save(isDraft: boolean): Observable<boolean> {

    // if (!isDraft) {
    this.showValidation = true;
    if (this.form.invalid || !this.checkValidation()) {
      this._toastrNotificationService.showError('يرجى تعبئة الحقول المطلوبة');
      return new Observable((obs) => obs.next(false));
    }
    if (
      (this.controls.isClearanceAccountantDone.value === true &&
        !this.clearanceAccountantFileId) || this.workDeliveryReportFileId === null
    ) {
      return new Observable((obs) => obs.next(false));
    }
    // }

    const id =
      this._projectRequestLocalStorageService.getSelectedProjectLicenseRequestIdFromLocalStorage();
    if (!id) return new Observable((obs) => obs.next(false));

    const dto: UpdateRequestDataPageDto = {
      justificationsAndReasons:
        this.controls.justificationsAndReasons.value,
      reasonsForNotFinalizingAccountantClearance: this.controls.ReasonsForNotFinalizingAccountantClearance.value,
      isClearanceAccountantDone:
        this.controls.isClearanceAccountantDone.value ?? false,
      clearanceAccountantFileId: this.clearanceAccountantFileId,
      workDeliveryReportFileId: this.workDeliveryReportFileId,
    };

    return this._service.updateRequestDataPage(dto, id).pipe(
      map((res: any) => {
        if (res?.isDone) {
          this._toastrNotificationService.showSuccess(
            isDraft ? 'تم الحفظ كمسودة بنجاح' : 'تم الحفظ بنجاح'
          );
          return true;
        }
        this._toastrNotificationService.showError(
          res?.message || 'حدث خطأ أثناء الحفظ'
        );
        return false;
      })
    );
  }

  toggleClearanceAccountantDone(value: boolean): void {
    if (!value) {
      this.controls.ReasonsForNotFinalizingAccountantClearance.setValidators(
        value ? null : [Validators.required]
      );
      this.controls.ReasonsForNotFinalizingAccountantClearance.updateValueAndValidity();
    }
  }

  checkValidation() {
    if (this.isClearanceAccountantDone === false && !this.controls.ReasonsForNotFinalizingAccountantClearance.value) {
      return false;
    }
    return true;
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((s) => s.unsubscribe());
  }
}
