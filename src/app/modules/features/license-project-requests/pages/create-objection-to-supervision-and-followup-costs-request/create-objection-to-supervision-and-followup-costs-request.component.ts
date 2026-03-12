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
import { LicenseProjectRequestTypeEnum } from '../../enums/license-project-request-type.enum';
import { LicenseProjectDDL } from '../../../license/models/license-project-by-facilityid-dto';
import { FacilityShortDto } from '../../../license/models/facility-short-dto';
import { Configuration } from 'src/app/core/configurations/shared.config';
import { ObjectionToSupervisionAndFollowupCostsRequestService } from '../../services/objection-to-supervision-and-followup-costs-request.service';
import { CreateOrUpdateObjectionToSupervisionAndFollowupCostsRequestDto } from '../../models/objection-to-supervision-and-followup-costs-request-dto';

@Component({
  selector: 'app-create-objection-to-supervision-and-followup-costs-request',
  templateUrl: './create-objection-to-supervision-and-followup-costs-request.component.html',
  styleUrls: ['./create-objection-to-supervision-and-followup-costs-request.component.scss']
})
export class CreateObjectionToSupervisionAndFollowupCostsRequestComponent {
  subscriptions: Subscription[] = [];
  licenseProjectRequestId: string = '00000000-0000-0000-0000-000000000000';
  facilityId: string = '00000000-0000-0000-0000-000000000000';
  licenseProjectId: string = '00000000-0000-0000-0000-000000000000';
  licenseProjects: LicenseProjectDDL[] = [];
  price?: number;
  facility: FacilityShortDto | undefined = undefined;
  showValidation: boolean = false;
  singleFilesUploaderData: FileUploader = {
    multiple: false,
  } as FileUploader;
  localization = {
    requiredErrorMsg: 'حقل مطلوب',
  };
  objectionToSupervisionAndFollowupCostsForm = this._formBuilder.group({
    licenseProjectId: this._formBuilder.control<string | null>(null, [
      Validators.required,
    ]),
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
    this.observePopupEvents();
    this.obseveCustomerData();
    this.observePrice();
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
  private observePrice(): void {
    this.subscriptions.push(
      this._licenseRequestService.getLicenseProjectRequestPrice(this.objectionToSupervisionAndFollowupCostsForm.controls.licenseProjectId.value as string , LicenseProjectRequestTypeEnum.ObjectionToSupervisionAndFollowUpCosts).subscribe((res: any) => {
        this.price = res;
      })
    )
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
    requestPayload.facilityId = this.facilityId;
    this._objectionToSupervisionAndFollowupCostsRequestService
      .saveObjectionToSupervisionAndFollowUpCostsRequest(requestPayload)
      .subscribe((res: any) => {
        if (res.isDone === true) {
          this._projectRequestLocalStorageService.setSelectedSelectedProjectLicenseRequestIdInLocalStorage(
            res?.data?.licenseProjectRequestId
          );
          this._toastrNotificationService.showSuccess('تم الحفظ');
          this.redirctToLicenseRequestDetails();
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
          this.getLicenseProjectByType();
        })
    );
  }
  getLicenseProjectByType(): void {
    this._licenseRequestService
      .getLicenseProjectByType(
        this.facilityId,
        LicenseProjectRequestTypeEnum.ObjectionToSupervisionAndFollowUpCosts
      )
      .subscribe((response: any) => {
        this.licenseProjects = response || [];
      });
  }
  cancelRequest() {
    this._router.navigate([
      `${Configuration.modules.wafi}/${Configuration.modules.licenseProjectRequests}/${Configuration.pages.licenseProjectRequests.licenseProjectRequestList}`,
    ]);
  }
  redirctToLicenseRequestDetails(): void {
    this._router.navigate([
      `${Configuration.modules.wafi}/${Configuration.modules.licenseProjectRequests}/${Configuration.pages.licenseProjectRequests.objectionToSupervisionAndFollowupCostsSummary}`,
    ]);
  }
  private closeDialog(): void {
    this._popupService.dismissDialog();
  }
  ngOnDestroy(): void {
    this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe());
  }
}
