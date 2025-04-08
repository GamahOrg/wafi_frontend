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
import { ChangePartiesAgreementRequestService } from '../../services/change-parties-agreement-request.service';
import { ChangePartiesAgreementDetialsDto, CreateOrUpdateChangePartiesAgreement } from '../../models/change-parties-agreement-request-dto';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-edit-change-parties-agreement',
  templateUrl: './edit-change-parties-agreement.component.html',
  styleUrls: ['./edit-change-parties-agreement.component.scss']
})
export class EditChangePartiesAgreementComponent {
  subscriptions: Subscription[] = [];
  baseUrl = `${environment.baseURL}/`;
  id: string | null = ''
  licenseProjectRequestId: string = '00000000-0000-0000-0000-000000000000';
  facilityId: string = '00000000-0000-0000-0000-000000000000';
  facility: FacilityShortDto | undefined = undefined;
  changeRequestDetails: ChangePartiesAgreementDetialsDto | any;
  showValidation: boolean = false;
  singleFilesUploaderData: FileUploader = {
    multiple: false,
  } as FileUploader;
  localization = {
    requiredErrorMsg: 'حقل مطلوب',
  };
  changePartiesAgreementForm = this._formBuilder.group({
    applicationFormFileId: this._formBuilder.control<string | null>(null, [
      Validators.required,
    ]),
    newAgreementCopyId: this._formBuilder.control<
      string | null
    >(null, [Validators.required]),
  });
  get controls() {
    return this.changePartiesAgreementForm.controls;
  }
  constructor(
    private _popupService: PopupService,
    private _formBuilder: FormBuilder,
    private _router: Router,
    private _userDataService: UserDataService,
    private _licenseRequestService: LincenseRequestProjectService,
    private _toastrNotificationService: ToastrNotificatioService,
    private _projectRequestLocalStorageService: ProjectRequestLocalStorageService,
    private _changePartiesAgreementRequestService: ChangePartiesAgreementRequestService
  ) {}

  ngOnInit() {
    this.getCharteredAccountId();
    this.observePopupEvents();
    this.obseveCustomerData();
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
  getCharteredAccountId() {
    this.id = this._projectRequestLocalStorageService.getSelectedProjectLicenseRequestIdFromLocalStorage();
    this.ObserveSelectedRequest();
  }
  ObserveSelectedRequest() {
    this.subscriptions.push(
      this._changePartiesAgreementRequestService.selectedRequest$.subscribe(res => {
        this.changeRequestDetails = res;
        console.log(res)
        this.licenseProjectRequestId = this.changeRequestDetails.licenseProjectRequestId;
        if (this.changeRequestDetails) {
          this.populateForm();
        }
      }))
  }
  private populateForm(): void {
    this.changePartiesAgreementForm.patchValue({
      applicationFormFileId: this.changeRequestDetails?.applicationFormFile?.id || '',
      newAgreementCopyId: this.changeRequestDetails?.newAgreementCopy?.id || '',
    });
  }
  private observeconfirmAction() {
    this.subscriptions.push(
      this._popupService.confirmAction.subscribe((res: PopupData) => {
        this.save();
      })
    );
  }
  save() {
    
    if (!this.changePartiesAgreementForm.valid) {
      this.showValidation = true;
      return;
    }
    var requestPayload = this.changePartiesAgreementForm
      .value as {} as CreateOrUpdateChangePartiesAgreement;
    requestPayload.id = this.changeRequestDetails?.id;
    requestPayload.facilityId = this.facilityId;
    requestPayload.licenseProjectRequestId = this.changeRequestDetails?.licenseProjectRequestId
    this._changePartiesAgreementRequestService
      .saveChangePartiesAgreementRequest(requestPayload)
      .subscribe((res: any) => {
        if (res.isDone === true) {
          this._toastrNotificationService.showSuccess('تم الحفظ');
          this._changePartiesAgreementRequestService.dataIsUpdate.emit();
          this.closeDialog();
        }
      });
  }
  applicationFormFileUpload(filesData: any): void {
    if (!filesData.eventRes.data || !filesData.eventRes.data.length) return;
    this.changePartiesAgreementForm.controls['applicationFormFileId'].setValue(
      filesData.eventRes.data[0].id
    );
  }
  newAgreementCopyUpload(filesData: any): void {
    if (!filesData.eventRes.data || !filesData.eventRes.data.length) return;
    this.changePartiesAgreementForm.controls[
      'newAgreementCopyId'
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
