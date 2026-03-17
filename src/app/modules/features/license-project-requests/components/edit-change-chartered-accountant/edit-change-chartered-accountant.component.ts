import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { PopupData } from 'src/app/shared/models/popup.model';
import { environment } from 'src/environments/environment';
import { FormBuilder, Validators } from '@angular/forms';
import { FileUploader } from 'src/app/shared/models/file-uploader.model';
import { PopupService } from 'src/app/shared/services/popup/popup.service';
import { ToastrNotificatioService } from 'src/app/core/services/toastr-notification/toastr-notificatio.service';
import { ProjectRequestLocalStorageService } from '../../services/project-request-local-storage.service';
import { ChangeCharteredAccountantRequestService } from '../../services/change-chartered-account-request';
import { CreateOrUpdateChangeCharteredAccountantRequestDto } from '../../models/create-update-change-chartered-accountant-request-dto';
import { ChangeCharteredAccountantRequestListDto } from '../../models/change-chartered-accountant-request-dto';
import { QualificationTypeCode } from 'src/app/core/enums/qualification-type-code';
import { LincenseRequestProjectService } from '../../services/lincense-request-project.service';
import { LicenseProjectDDL } from '../../../license/models/license-project-by-facilityid-dto';
import { UserDataService } from 'src/app/core/services/user-data/user-data.service';
import { LicenseProjectRequestTypeEnum } from '../../enums/license-project-request-type.enum';
import { customerResponse } from 'src/app/shared/models/customer.model';
import { Configuration } from 'src/app/core/configurations/shared.config';
import { FacilityShortDto } from '../../../license/models/facility-short-dto';
import { Router } from '@angular/router';
import { ChangeCharteredAccountantRequestDetailsDto } from '../../models/change-chartered-accountant-request-details-dto';

@Component({
  selector: 'app-edit-change-chartered-accountant',
  templateUrl: './edit-change-chartered-accountant.component.html',
  styleUrls: ['./edit-change-chartered-accountant.component.scss']
})
export class EditChangeCharteredAccountantComponent {
subscriptions: Subscription[] = [];
id: string | null = ''
licenseProjectRequestId:string = '00000000-0000-0000-0000-000000000000';
facilityId: string = '00000000-0000-0000-0000-000000000000';
licenseProjectId:string = '00000000-0000-0000-0000-000000000000';
commercialRegister: string = '';
facility: FacilityShortDto | undefined = undefined;
showDetails: boolean = false;
createOrUpdateChangeCharteredAccountantRequest?: CreateOrUpdateChangeCharteredAccountantRequestDto;
changeCharteredAccountantRequest?: ChangeCharteredAccountantRequestListDto
changeRequestDetails: ChangeCharteredAccountantRequestDetailsDto | any;
baseUrl = `${environment.baseURL}/`;
localization = {
  requiredErrorMsg: 'حقل مطلوب',
};
  changeCharteredAccountantForm = this._formBuilder.group({
    commercialRegister: this._formBuilder.control<string | null>(null, [Validators.required, Validators.pattern(Configuration.validators.numberOnly)]),
    reasons: this._formBuilder.control<string| null>('',[Validators.required]),
    alternativeCharteredAccountantAgreementId: this._formBuilder.control<string| null>('',[Validators.required]),
    previousCharteredAccountantReportId: this._formBuilder.control<string| null>('',[Validators.required]),
    clearanceCharteredAccountantFileId: this._formBuilder.control<string| null>('',[Validators.required]),
    charteredAccountantFacilityId: this._formBuilder.control<string| null>('',[Validators.required]),
  });
  showValidation: boolean = false;
  singleFilesUploaderData: FileUploader = {
    multiple: false
  } as FileUploader;
  get controls() {
    return this.changeCharteredAccountantForm.controls;
  }
  constructor(
    private _changeCharteredAccountantRequestService: ChangeCharteredAccountantRequestService,
    private _popupService: PopupService,
    private _formBuilder: FormBuilder,
    private _router: Router,
    private _userDataService: UserDataService,
    private _licenseRequestService: LincenseRequestProjectService,
    private _toastrNotificationService: ToastrNotificatioService,
    private _projectRequestLocalStorageService: ProjectRequestLocalStorageService,

  ) {}
  ngOnInit(): void {
    this.getCharteredAccountId();
    this.observePopupEvents();
    this.obseveCustomerData();
  }
  ObserveSelectedRequest() {
    this.subscriptions.push(
      this._changeCharteredAccountantRequestService.selectedRequest$.subscribe(res => {
        this.changeRequestDetails = res;
        this.licenseProjectRequestId = this.changeRequestDetails.licenseProjectRequestId;
        if (this.changeRequestDetails) {
          this.populateForm();
        }
      }))
  }
  getCharteredAccountId() {
    this.id = this._projectRequestLocalStorageService.getSelectedProjectLicenseRequestIdFromLocalStorage();
    this.ObserveSelectedRequest();
  }
  private populateForm(): void {
    this.changeCharteredAccountantForm.patchValue({
      commercialRegister: this.changeRequestDetails?.charteredAccountantFacility?.commercialRegisterNumber || '',
      reasons: this.changeRequestDetails?.reasons || '',
      alternativeCharteredAccountantAgreementId: this.changeRequestDetails?.alternativeCharteredAccountantAgreement?.id || '',
      previousCharteredAccountantReportId: this.changeRequestDetails?.previousCharteredAccountantReport?.id || '',
      clearanceCharteredAccountantFileId: this.changeRequestDetails?.clearanceCharteredAccountantFile?.id || '',
      charteredAccountantFacilityId: this.changeRequestDetails?.charteredAccountantFacility?.id || ''
    });
  }
  observePopupEvents(): void {
    this.observecancelAction()
    this.observeconfirmAction()
  }
  private observecancelAction() {
    this.subscriptions.push(
      this._popupService.cancelAction.subscribe((res: PopupData) => {
      })
    )
  }

  private observeconfirmAction() {
    this.subscriptions.push(
      this._popupService.confirmAction.subscribe((res: PopupData) => {
        this.save()
      })
    )
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
  redirctToLicenseRequestDetails(): void {
    this._router.navigate([`${Configuration.modules.wafi}/${Configuration.modules.licenseProjectRequests}/${Configuration.pages.licenseProjectRequests.charteredAccountantRequestSummary}`]);
  }
  validate() {
    let commercialRegister = this.controls['commercialRegister'].value;
    if (commercialRegister) {
      this._changeCharteredAccountantRequestService.validateCommercialRegister(commercialRegister, QualificationTypeCode.CharteredAccountant, this.licenseProjectId)
        .subscribe((result:any) => {
          if (result && result.data) {
            let customer = result.data as any;
            this.facility = customer.facility;
            if (this.facility)
            {
              this.changeCharteredAccountantForm.controls.charteredAccountantFacilityId.setValue(customer.facility.id);

              this.showDetails = true;
            }
            else
              this.showDetails = false;
          }
        });
    }
  }
  alternativeCharteredAccountantAgreementUpload(filesData: any): void {
    if (filesData.eventRes.data.length === 0) {
      this.changeCharteredAccountantForm.controls['alternativeCharteredAccountantAgreementId'].setValue(null);
      return;
    }
    if (!filesData.eventRes.data || !filesData.eventRes.data.length) return;
    this.changeCharteredAccountantForm.controls['alternativeCharteredAccountantAgreementId'].setValue(filesData.eventRes.data[0].id);
  }
  previousCharteredAccountantReportUpload(filesData: any): void {
    if (filesData.eventRes.data.length === 0) {
      this.changeCharteredAccountantForm.controls['previousCharteredAccountantReportId'].setValue(null);
      return;
    }
    if (!filesData.eventRes.data || !filesData.eventRes.data.length) return;
    this.changeCharteredAccountantForm.controls['previousCharteredAccountantReportId'].setValue(filesData.eventRes.data[0].id);
  }
  clearanceCharteredAccountantFileUpload(filesData: any): void {
    if (filesData.eventRes.data.length === 0) {
      this.changeCharteredAccountantForm.controls['clearanceCharteredAccountantFileId'].setValue(null);
      return;
    }
    if (!filesData.eventRes.data || !filesData.eventRes.data.length) return;
    this.changeCharteredAccountantForm.controls['clearanceCharteredAccountantFileId'].setValue(filesData.eventRes.data[0].id);
  }
  save(): void {
    
    if (!this.changeCharteredAccountantForm.valid) {
      this.showValidation = true;
      return;
    }
    var requestPayload = this.changeCharteredAccountantForm.value as {} as CreateOrUpdateChangeCharteredAccountantRequestDto;
    requestPayload.facilityId = this.facilityId;
    requestPayload.id = this.changeRequestDetails.id as string;
    requestPayload.licenseProjectRequestId = this.licenseProjectRequestId;
    requestPayload.licenseProjectRequestTypeId = LicenseProjectRequestTypeEnum.ChangeAccountant;
    this._changeCharteredAccountantRequestService.saveChangeCharteredAccountantRequest(requestPayload).subscribe((res: any) => {
      if (res.isDone === true) {
        this._changeCharteredAccountantRequestService.setSelectedSelectedcharteredAccountantIdRequestInLocalStorage(res.data?.id)
        this._toastrNotificationService.showSuccess('تم الحفظ');
        this._changeCharteredAccountantRequestService.dataIsUpdate.emit();
        this.closeDialog();
      }
    })
  }
  cancelRequest() {
    this._router.navigate([`${Configuration.modules.wafi}/${Configuration.modules.licenseProjectRequests}/${Configuration.pages.licenseProjectRequests.licenseProjectRequestList}`]);

  }
  private closeDialog(): void {
    this._popupService.dismissDialog()
  }
  ngOnDestroy(): void {
    this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe())
  }
}
