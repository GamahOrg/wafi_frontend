import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FileUploader } from 'src/app/shared/models/file-uploader.model';
import { PopupService } from 'src/app/shared/services/popup/popup.service';
import { UserDataService } from 'src/app/core/services/user-data/user-data.service';
import { LincenseRequestProjectService } from '../../services/lincense-request-project.service';
import { ToastrNotificatioService } from 'src/app/core/services/toastr-notification/toastr-notificatio.service';
import { ProjectRequestLocalStorageService } from '../../services/project-request-local-storage.service';
import { Subscription } from 'rxjs';
import { PopupData } from 'src/app/shared/models/popup.model';
import { customerResponse } from 'src/app/shared/models/customer.model';
import { FacilityShortDto } from '../../../license/models/facility-short-dto';
import { Configuration } from 'src/app/core/configurations/shared.config';
import { ObjectionToSupervisionAndFollowupCostsRequestService } from '../../services/objection-to-supervision-and-followup-costs-request.service';
import { CreateOrUpdateObjectionToSupervisionAndFollowupCostsRequestDto, ObjectionToSupervisionAndFollowupCostsRequestDetailsDto } from '../../models/objection-to-supervision-and-followup-costs-request-dto';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-edit-objection-to-supervision-and-followup-costs',
  templateUrl: './edit-objection-to-supervision-and-followup-costs.component.html',
  styleUrls: ['./edit-objection-to-supervision-and-followup-costs.component.scss']
})
export class EditObjectionToSupervisionAndFollowupCostsComponent {
  subscriptions: Subscription[] = [];
  baseUrl = `${environment.baseURL}/`;
  licenseProjectRequestId: string | null = '00000000-0000-0000-0000-000000000000';
  facilityId: string = '00000000-0000-0000-0000-000000000000';
  changeRequestDetails: ObjectionToSupervisionAndFollowupCostsRequestDetailsDto | any;
  facility: FacilityShortDto | undefined = undefined;
  showValidation: boolean = false;
  singleFilesUploaderData: FileUploader = {
    multiple: false,
  } as FileUploader;
  localization = {
    requiredErrorMsg: 'حقل مطلوب',
  };
  objectionToSupervisionAndFollowupCostsForm = this._formBuilder.group({
    applicationFormFileId: this._formBuilder.control<string | null>(null, [
      Validators.required,
    ]),
    developerLetterForObjectionId: this._formBuilder.control<
      string | null
    >(null, [Validators.required]),
    supportingDocumentsFromDeveloperId: this._formBuilder.control<
    string | null
  >(null, [Validators.required]),
  });
  get controls() {
    return this.objectionToSupervisionAndFollowupCostsForm.controls;
  }
  constructor(
    private _popupService: PopupService,
    private _formBuilder: FormBuilder,
    private _router: Router,
    private _userDataService: UserDataService,
    private _licenseRequestService: LincenseRequestProjectService,
    private _toastrNotificationService: ToastrNotificatioService,
    private _projectRequestLocalStorageService: ProjectRequestLocalStorageService,
    private _objectionToSupervisionAndFollowupCostsRequestService: ObjectionToSupervisionAndFollowupCostsRequestService
  ) {}

  ngOnInit() {
    this.getCharteredAccountId();
    this.observePopupEvents();
    this.obseveCustomerData();
  }
  getCharteredAccountId() {
    this.licenseProjectRequestId = this._projectRequestLocalStorageService.getSelectedProjectLicenseRequestIdFromLocalStorage();
    this.ObserveSelectedRequest();
  }
  ObserveSelectedRequest() {
    this.subscriptions.push(
      this._objectionToSupervisionAndFollowupCostsRequestService.selectedRequest$.subscribe(res => {
        this.changeRequestDetails = res;
        if (this.changeRequestDetails) {
          this.populateForm();
        }
      }))
  }
  private populateForm(): void {
    this.objectionToSupervisionAndFollowupCostsForm.patchValue({
      applicationFormFileId: this.changeRequestDetails?.applicationFormFile?.id || '',
      developerLetterForObjectionId: this.changeRequestDetails?.developerLetterForObjection?.id || '',
      supportingDocumentsFromDeveloperId: this.changeRequestDetails?.supportingDocumentsFromDeveloper?.id || '',
    });
  }
  observePopupEvents(): void {
    this.observecancelAction();
    this.observeconfirmAction();
  }
  private observecancelAction() {
    this.subscriptions.push(
      this._popupService.cancelAction.subscribe((res: PopupData) => {})
    );
  }

  private observeconfirmAction() {
    this.subscriptions.push(
      this._popupService.confirmAction.subscribe((res: PopupData) => {
        this.save();
      })
    );
  }

  save() {
    if (!this.objectionToSupervisionAndFollowupCostsForm.valid) {
      this.showValidation = true;
      return;
    }
    var requestPayload = this.objectionToSupervisionAndFollowupCostsForm
      .value as {} as CreateOrUpdateObjectionToSupervisionAndFollowupCostsRequestDto;
      requestPayload.id = this.changeRequestDetails?.id;
      requestPayload.facilityId = this.facilityId;
      requestPayload.licenseProjectRequestId = this.changeRequestDetails?.licenseProjectRequestId
      this._objectionToSupervisionAndFollowupCostsRequestService
      .saveObjectionToSupervisionAndFollowUpCostsRequest(requestPayload)
      .subscribe((res: any) => {
        if (res.isDone === true) {
          this._toastrNotificationService.showSuccess('تم الحفظ');
          this._objectionToSupervisionAndFollowupCostsRequestService.dataIsUpdate.emit();
          this.closeDialog();
        }
      });
  }
  applicationFormFileUpload(filesData: any): void {
    if (filesData.eventRes.data.length === 0) {
      this.objectionToSupervisionAndFollowupCostsForm.controls[
        'applicationFormFileId'
      ].setValue(null);
      return;
    }
    if (!filesData.eventRes.data || !filesData.eventRes.data.length) return;
    this.objectionToSupervisionAndFollowupCostsForm.controls['applicationFormFileId'].setValue(
      filesData.eventRes.data[0].id
    );
  }
  developerLetterForObjectionUpload(filesData: any): void {
    if (filesData.eventRes.data.length === 0) {
      this.objectionToSupervisionAndFollowupCostsForm.controls[
        'developerLetterForObjectionId'
      ].setValue(null);
      return;
    }
    if (!filesData.eventRes.data || !filesData.eventRes.data.length) return;
    this.objectionToSupervisionAndFollowupCostsForm.controls[
      'developerLetterForObjectionId'
    ].setValue(filesData.eventRes.data[0].id);
  }
  supportingDocumentsFromDeveloperUpload(filesData: any): void {
    if (filesData.eventRes.data.length === 0) {
      this.objectionToSupervisionAndFollowupCostsForm.controls[
        'supportingDocumentsFromDeveloperId'
      ].setValue(null);
      return;
    }
    if (!filesData.eventRes.data || !filesData.eventRes.data.length) return;
    this.objectionToSupervisionAndFollowupCostsForm.controls[
      'supportingDocumentsFromDeveloperId'
    ].setValue(filesData.eventRes.data[0].id);
  }
  obseveCustomerData(): void {
    this.subscriptions.push(
      this._userDataService
        .getCustomerData()
        .subscribe((res: customerResponse | null) => {
          this.facilityId = res?.facilities[0]?.id || '';
        })
    );
  }
  cancelRequest() {
    this._router.navigate([
      `${Configuration.modules.wafi}/${Configuration.modules.licenseProjectRequests}/${Configuration.pages.licenseProjectRequests.licenseProjectRequestList}`,
    ]);
  }
  private closeDialog(): void {
    this._popupService.dismissDialog();
  }
  ngOnDestroy(): void {
    this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe());
  }
}
