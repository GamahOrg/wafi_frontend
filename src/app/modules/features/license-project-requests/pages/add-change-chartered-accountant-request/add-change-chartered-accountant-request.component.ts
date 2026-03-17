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
import { LicenseProjectService } from '../../services/license-project.service';
import { LicenseProjectDetailsDto } from '../../models/license-project.model';

@Component({
  selector: 'app-add-change-chartered-accountant-request',
  templateUrl: './add-change-chartered-accountant-request.component.html',
  styleUrls: ['./add-change-chartered-accountant-request.component.scss']
})
export class AddChangeCharteredAccountantRequestComponent {
  subscriptions: Subscription[] = [];
  licenseProjectRequestId: string = '00000000-0000-0000-0000-000000000000';
  facilityId: string = '00000000-0000-0000-0000-000000000000';
  licenseProjectId: string = '00000000-0000-0000-0000-000000000000';
  commercialRegister: string = '';
  licenseProjects: LicenseProjectDDL[] = [];
  facility: FacilityShortDto | undefined = undefined;
  showDetails: boolean = false;
  createOrUpdateChangeCharteredAccountantRequest?: CreateOrUpdateChangeCharteredAccountantRequestDto;
  changeCharteredAccountantRequest?: ChangeCharteredAccountantRequestListDto
  baseUrl = `${environment.baseURL}/`;
  price?: number;
  projectDetails?: LicenseProjectDetailsDto;
  showProjects: boolean = false;

  localization = {
    requiredErrorMsg: 'حقل مطلوب',
  };
  changeCharteredAccountantForm = this._formBuilder.group({
    commercialRegisterNumber: this._formBuilder.control<string | null>(null, [Validators.required, Validators.pattern(Configuration.validators.numberOnly)]),
    licenseProjectId: this._formBuilder.control<string | null>('', [Validators.required]),
    alternativeCharteredAccountantAgreementId: this._formBuilder.control<string | null>('', [Validators.required]),
    previousCharteredAccountantReportId: this._formBuilder.control<string | null>('', [Validators.required]),
    clearanceCharteredAccountantFileId: this._formBuilder.control<string | null>('', [Validators.required]),
    charteredAccountantFacilityId: this._formBuilder.control<string | null>('', [Validators.required]),
    reasons: this._formBuilder.control<string | null>('', [Validators.required]),
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
    private _licenseProjectService: LicenseProjectService,
  ) { }

  ngOnInit(): void {
    this.observePopupEvents();
    this.obseveCustomerData();
    this.observePrice();
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
  getLicenseDetails(): void {
    if (!this.changeCharteredAccountantForm.controls.licenseProjectId.value) {
      return;
    }
    this.subscriptions.push(
      this._licenseProjectService.getLicenseProjectDetails(this.changeCharteredAccountantForm.controls.licenseProjectId.value).subscribe((res: LicenseProjectDetailsDto) => {
        this.projectDetails = res
        this.showProjects = true;
      })
    );
  }
  private observePrice(): void {
    this.subscriptions.push(
      this._licenseRequestService.getLicenseProjectRequestPrice(this.licenseProjectId, LicenseProjectRequestTypeEnum.ChangeAccountant).subscribe((res: any) => {
        this.price = res;
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
          this.getLicenseProjectByType()
        })
    );
  }

  clearCommercialRegister() {
    this.controls.charteredAccountantFacilityId.setValue(null);
    this.showDetails = false;
  }

  getLicenseProjectByType(): void {
    this._licenseRequestService
      .getLicenseProjectByType(this.facilityId, LicenseProjectRequestTypeEnum.ChangeAccountant)
      .subscribe(
        (response: any) => {
          this.licenseProjects = response || [];
        },
      );
  }
  redirctToLicenseRequestDetails(): void {
    this._router.navigate([`${Configuration.modules.wafi}/${Configuration.modules.licenseProjectRequests}/${Configuration.pages.licenseProjectRequests.charteredAccountantRequestSummary}`]);
  }
  validate() {
    let commercialRegister = this.controls.commercialRegisterNumber.value;

    if (!commercialRegister) {
      this._toastrNotificationService.showError('برجاء ادخل السجل التجاري للمحاسب القانونى الجديد والضغط على تحقق ')
    }

    if (commercialRegister) {
      this._changeCharteredAccountantRequestService.validateCommercialRegister(commercialRegister, QualificationTypeCode.CharteredAccountant, this.licenseProjectId)
        .subscribe((result: any) => {
          if (result && result.data) {
            let customer = result.data as any;
            this.facility = customer.facility;
            if (this.facility) {
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
    

    let charteredAccountantFacilityId = this.controls.charteredAccountantFacilityId.value;

    if (!charteredAccountantFacilityId) {
      this._toastrNotificationService.showError('برجاء ادخل السجل التجاري للمحاسب القانونى الجديد والضغط على تحقق ')
    }

    console.log(this.changeCharteredAccountantForm);
    
    if (!this.changeCharteredAccountantForm.valid) {
      this.showValidation = true;
      return;
    }
    var requestPayload = this.changeCharteredAccountantForm.value as {} as CreateOrUpdateChangeCharteredAccountantRequestDto;
    requestPayload.facilityId = this.facilityId;
    requestPayload.licenseProjectRequestTypeId = LicenseProjectRequestTypeEnum.ChangeAccountant;
    this._changeCharteredAccountantRequestService.saveChangeCharteredAccountantRequest(requestPayload).subscribe((res: any) => {
      if (res.isDone === true) {
        this._projectRequestLocalStorageService.setSelectedSelectedProjectLicenseRequestIdInLocalStorage(res?.data?.licenseProjectRequestId)
        this._toastrNotificationService.showSuccess('تم الحفظ');
        this.redirctToLicenseRequestDetails();
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
