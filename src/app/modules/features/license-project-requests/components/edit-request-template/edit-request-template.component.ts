import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { FileUploader } from 'src/app/shared/models/file-uploader.model';
import { ToastrNotificatioService } from 'src/app/core/services/toastr-notification/toastr-notificatio.service';
import { PopupService } from 'src/app/shared/services/popup/popup.service';
import { UserDataService } from 'src/app/core/services/user-data/user-data.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { customerResponse } from 'src/app/shared/models/customer.model';
import { Configuration } from 'src/app/core/configurations/shared.config';
import { PopupData } from 'src/app/shared/models/popup.model';
import { LicenseProjectDDL } from 'src/app/modules/features/license/models/license-project-by-facilityid-dto';
import { FacilityShortDto } from 'src/app/modules/features/license/models/facility-short-dto';
import { ProjectRequestLocalStorageService } from '../../services/project-request-local-storage.service';
import { LicenseProjectRequestTemplateFileDto, RequestTemplateDetailsDto } from '../../models/request-template-details-dto';
import { RequestTemplateService } from '../../services/request-template.service';
import { LincenseRequestProjectService } from '../../services/lincense-request-project.service';
import { CreateOrUpdateRequestTemplateDto } from '../../models/create-update-request-template-dto';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-edit-request-template',
  templateUrl: './edit-request-template.component.html',
  styleUrls: ['./edit-request-template.component.scss']
})
export class EditRequestTemplateComponent {
requestTemplateForm = this._formBuilder.group({
    licenseProjectId: ['', Validators.required],
  });
  requestId: string = '00000000-0000-0000-0000-000000000000';
  uploadedFiles: { [key: string]: { fileId: string; hasError: boolean } } = {};
  subscriptions: Subscription[] = [];
  licenseProjectRequestId: string = '00000000-0000-0000-0000-000000000000';
  facilityId: string = '00000000-0000-0000-0000-000000000000';
  licenseProjectId: string = '00000000-0000-0000-0000-000000000000';
  licenseProjects: LicenseProjectDDL[] = [];
  requestDetails?: RequestTemplateDetailsDto[] | null;
  licenseTemplateFile: LicenseProjectRequestTemplateFileDto[] = [];
  facility: FacilityShortDto | undefined = undefined;
  typeId: string = '';
  showValidation: boolean = false;
  baseUrl = `${environment.baseURL}/`;
  singleFilesUploaderData: FileUploader = {
    multiple: false,
  } as FileUploader;
  localization = {
    requiredErrorMsg: 'حقل مطلوب',
  };
  constructor(
    private _popupService: PopupService,
    private _formBuilder: FormBuilder,
    private _router: Router,
    private _userDataService: UserDataService,
    private _licenseRequestService: LincenseRequestProjectService,
    private _toastrNotificationService: ToastrNotificatioService,
    private _projectRequestLocalStorageService: ProjectRequestLocalStorageService,
    private _requestTemplateService: RequestTemplateService,
    private toastr: ToastrNotificatioService
  ) {}
  get controls() {
    return this.requestTemplateForm.controls;
  }
  ngOnInit() {
    this.observePopupEvents();
    this.obseveCustomerData();
    this.getRequestDetails();
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
  getRequestDetails() {
    this.requestId =
      this._projectRequestLocalStorageService.getSelectedProjectLicenseRequestIdFromLocalStorage() as string;
    if (this.requestId) {
      this._requestTemplateService
        .getDetails(this.requestId)
        .subscribe((res) => {
          if (res) {
            this.requestDetails = res as RequestTemplateDetailsDto[];
            this.populateForm();
          }
        });
    }
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
    this.typeId = this._projectRequestLocalStorageService.getSelectedLicenseRequestTypeFromLocalStorage() as string;
    if (this.typeId) {
    this._licenseRequestService
      .getLicenseProjectByType(
        this.facilityId,
        +this.typeId
      )
      .subscribe((response: any) => {
        this.licenseProjects = response || [];
      });
    }
  }
  
  onFileUpload(event: any, fileId: string): void {
    
    this.uploadedFiles[fileId] = { fileId: event.eventRes.data[0].id, hasError: false };
  }
  save() {
    if (this.requestTemplateForm.invalid || this.hasUploadErrors()) {
      this.showValidation = true;
      return;
    }
    const formData: CreateOrUpdateRequestTemplateDto = {
      createFileFormData: Object.keys(this.uploadedFiles).map((key) => ({
      fileId: this.uploadedFiles[key].fileId,
      licenseProjectRequestTemplateFileId: key,
      })),
      licenseProjectId: this.controls.licenseProjectId.value as string,
      facilityId: this.facilityId,
      licenseProjectRequestTypeEnum: +this.typeId,
      id: this.requestId,
      licenseProjectRequestId: this.requestId,
    };
    this._requestTemplateService
      .saveRequestTemplate(formData)
      .subscribe((res: any) => {
        if (res.isDone === true) {
          this._projectRequestLocalStorageService.setSelectedSelectedProjectLicenseRequestIdInLocalStorage(
            res?.data
          );
          this._toastrNotificationService.showSuccess('تم الحفظ');
          this._requestTemplateService.dataIsUpdate.emit();
          this.closeDialog();
        }
      });
  }
  private populateForm(): void {
    this.requestTemplateForm.patchValue({
      licenseProjectId: this.requestDetails?.[0]?.header?.licenseProjectId,
    });
  
    if (this.requestDetails) {
      
      this.requestDetails.forEach((detail) => {
        if (detail.file) {
            this.uploadedFiles[detail.licenseProjectRequestTemplateFile.id] = {
              fileId: detail.file.id,
              hasError: false,
            };
        }
      });
    }
  }
  cancelRequest() {
    this._router.navigate([
      `${Configuration.modules.wafi}/${Configuration.modules.licenseProjectRequests}/${Configuration.pages.licenseProjectRequests.licenseProjectRequestList}`,
    ]);
  }
  hasUploadErrors(): boolean {
    return Object.values(this.uploadedFiles).some((file) => file.hasError);
  }
  private closeDialog(): void {
    this._popupService.dismissDialog();
  }
  ngOnDestroy(): void {
    this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe());
  }
}
