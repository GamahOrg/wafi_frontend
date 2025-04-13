import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { ChangeLicenseProjectEngineeringRequestDto } from '../../models/change-license-project-engineering-request-dto';
import { environment } from 'src/environments/environment';
import { ChangeLicenseProjectEngineeringRequestCreateUpdateDto } from '../../models/change-license-project-engineering-request-create-update-dto';
import { FileUploader } from 'src/app/shared/models/file-uploader.model';
import { ChangeLicenseProjectEngineeringRequestService } from '../../services/change-license-project-engineering-request.service';
import { PopupService } from 'src/app/shared/services/popup/popup.service';
import { ToastrNotificatioService } from 'src/app/core/services/toastr-notification/toastr-notificatio.service';
import { ProjectRequestLocalStorageService } from '../../services/project-request-local-storage.service';
import { PopupData } from 'src/app/shared/models/popup.model';
import { UserDataService } from 'src/app/core/services/user-data/user-data.service';
import { customerResponse } from 'src/app/shared/models/customer.model';
import { FormBuilder, Validators } from '@angular/forms';
import { QualificationType } from '../../../qualifying/dataModels/enum/qualification-request-type';
import { FacilityShortDto } from '../../models/request-header-details';

@Component({
  selector: 'app-add-edit-change-engineer-summary',
  templateUrl: './add-edit-change-engineer-summary.component.html',
  styleUrls: ['./add-edit-change-engineer-summary.component.scss']
})
export class AddEditChangeEngineerSummaryComponent {
  subscriptions: Subscription[] = [];
  licenseProjectRequestId?: string;
  changeLicenseProjectEngineeringRequest?: ChangeLicenseProjectEngineeringRequestDto;
  baseUrl = `${environment.baseURL}/`;
  isEditMode: boolean = false;
  facilityId: string = '00000000-0000-0000-0000-000000000000';
  changeLicenseProjectEngineeringRequestCreateUpdate?: ChangeLicenseProjectEngineeringRequestCreateUpdateDto;
  showDetails: boolean = false;
  showValidation: boolean = false;
  newEngineeringFacility?: FacilityShortDto | null = null;
  qualificationTypeEnum = QualificationType;
  singleFilesUploaderData: FileUploader = {
    multiple: false
  } as FileUploader;
  alternativeConsultingOfficeAgreementId?: string;
  clearanceEngineeringConsultantFileId?: string;
  previousConsultingOfficeReportId?: string;
  changeEngineeringForm = this._formBuilder.group({
    reasons: ['', [Validators.required]],
    commercialRegister: ['', [Validators.required]],
    engineeringFacilityId: ['']
  });

  constructor(
    private _changeLicenseProjectEngineeringRequestService: ChangeLicenseProjectEngineeringRequestService,
    private _popupService: PopupService,
    private _formBuilder: FormBuilder,
    private _toastrNotificationService: ToastrNotificatioService,
    private _projectRequestLocalStorageService: ProjectRequestLocalStorageService,
    private _userDataService: UserDataService,
    private projectRequestLocalStorageService: ProjectRequestLocalStorageService,


  ) { this.getSelectedRequestIdFromLocalStorage() }
  get controls() {
    return this.changeEngineeringForm.controls;
  }
  ngOnInit(): void {
    this.obseveCustomerData();
    this.observePopupEvents();
  }
  getSelectedRequestIdFromLocalStorage(): void {
    
    this.licenseProjectRequestId = this._projectRequestLocalStorageService.getSelectedProjectLicenseRequestIdFromLocalStorage() as string;

  }
  validateCommercialRegister(): void {
    debugger;

    let commercialRegister = this.controls.commercialRegister.value;

    if (!commercialRegister) {
      this._toastrNotificationService.showError('برجاء ادخل السجل التجاري للاستشاري الهندسي الجديد والضغط على تحقق ')
    }
    if (commercialRegister) {
      if (this.changeLicenseProjectEngineeringRequest) {
        this.subscriptions.push(
          this._changeLicenseProjectEngineeringRequestService.validateCommercialRegister(commercialRegister as string,
            this.qualificationTypeEnum.engineeringConsultantQualificationRequest as string, this.changeLicenseProjectEngineeringRequest.licenseProjectRequest.licenseProjectId).subscribe((res) => {

              if (res) {
                debugger;
                this.newEngineeringFacility = res.facility as FacilityShortDto;
                this.changeEngineeringForm.controls.engineeringFacilityId.setValue(this.newEngineeringFacility.id as string);
              }

            })
        )
      }
    }
  }
  private getLicenseProjectRequestChangeEngineering(): void {

    this.subscriptions.push(
      this._changeLicenseProjectEngineeringRequestService.getLicenseProjectRequestChangeEngineer().subscribe((res: ChangeLicenseProjectEngineeringRequestDto | null) => {
        if (res) {
          this.changeLicenseProjectEngineeringRequest = res;
          this.isEditMode = true;
          //this.applicationFormFileId= this.changeLicenseProjectEngineeringRequest.applicationFormFileId;        
          this.changeEngineeringForm.controls.engineeringFacilityId.setValue(this.changeLicenseProjectEngineeringRequest.engineeringFacilityId);
          this.changeEngineeringForm.controls.reasons.setValue(this.changeLicenseProjectEngineeringRequest.reasons);
          this.alternativeConsultingOfficeAgreementId = this.changeLicenseProjectEngineeringRequest.alternativeConsultingOfficeAgreementId;
          this.previousConsultingOfficeReportId = this.changeLicenseProjectEngineeringRequest.previousConsultingOfficeReportId;
          this.clearanceEngineeringConsultantFileId = this.changeLicenseProjectEngineeringRequest.clearanceEngineeringConsultantFileId;
        }
        else {
          this.isEditMode = false;
        }
      }),
    )
  }

  obseveCustomerData(): void {
    this.subscriptions.push(
      this._userDataService
        .getCustomerData()
        .subscribe((res: customerResponse | null) => {
          this.facilityId = res?.facilities[0]?.id || '';
          this.getLicenseProjectRequestChangeEngineering();
        })
    );
  }
  onExistAlternativeConsultingOfficeAgreementFilesUploaded(filesData: any) {
    if (!filesData.eventRes.data || !filesData.eventRes.data.length) return;
    filesData.eventRes.data.forEach((data: any) => {
      this.alternativeConsultingOfficeAgreementId = data.id;
    });
  }

  onExistclearanceEngineeringConsultantFilesUploaded(filesData: any) {
    if (!filesData.eventRes.data || !filesData.eventRes.data.length) return;
    filesData.eventRes.data.forEach((data: any) => {
      this.clearanceEngineeringConsultantFileId = data.id;
    });
  }
  onExistPreviousConsultingOfficeReportFilesUploaded(filesData: any) {
    if (!filesData.eventRes.data || !filesData.eventRes.data.length) return;
    filesData.eventRes.data.forEach((data: any) => {
      this.previousConsultingOfficeReportId = data.id;
    });
  }
  save(): void {
    debugger;
    if (
      !this.changeEngineeringForm.controls.reasons.value ||
      !this.alternativeConsultingOfficeAgreementId ||
      !this.clearanceEngineeringConsultantFileId ||
      !this.previousConsultingOfficeReportId
    ) {
      this.showValidation = true;
      return;
    }

    this.changeLicenseProjectEngineeringRequestCreateUpdate = {} as ChangeLicenseProjectEngineeringRequestCreateUpdateDto;
    this.changeLicenseProjectEngineeringRequestCreateUpdate.id = this.changeLicenseProjectEngineeringRequest?.licenseProjectRequestId as string;
    this.changeLicenseProjectEngineeringRequestCreateUpdate.facilityId = this.facilityId;
    this.changeLicenseProjectEngineeringRequestCreateUpdate.engineeringFacilityId = this.changeEngineeringForm.controls?.engineeringFacilityId.value as string;
    this.changeLicenseProjectEngineeringRequestCreateUpdate.licenseProjectId = '00000000-0000-0000-0000-000000000000';
    //this.changeLicenseProjectEngineeringRequestCreateUpdate.applicationFormFileId = this.applicationFormFileId as string;
    this.changeLicenseProjectEngineeringRequestCreateUpdate.alternativeConsultingOfficeAgreementId = this.alternativeConsultingOfficeAgreementId as string;
    this.changeLicenseProjectEngineeringRequestCreateUpdate.clearanceEngineeringConsultantFileId = this.clearanceEngineeringConsultantFileId as string;
    this.changeLicenseProjectEngineeringRequestCreateUpdate.reasons = this.changeEngineeringForm.controls.reasons.value as string;
    this.changeLicenseProjectEngineeringRequestCreateUpdate.previousConsultingOfficeReportId = this.previousConsultingOfficeReportId as string;
    this.subscriptions.push(
      this._changeLicenseProjectEngineeringRequestService.save(this.changeLicenseProjectEngineeringRequestCreateUpdate).subscribe((res) => {

        if (res) {
          
          this._changeLicenseProjectEngineeringRequestService.setLicenseProjectRequestChangeEngineer(res as ChangeLicenseProjectEngineeringRequestDto);
          this._toastrNotificationService.showSuccess('تم تعديل الطلب بنجاح');
          this.projectRequestLocalStorageService.setSelectedSelectedProjectLicenseRequestIdInLocalStorage(res?.licenseProjectRequestId!)
          this.closeDialog();
        }

      })
    )
  }
  // popup
  observePopupEvents(): void {
    this.observecancelAction()
    this.observeconfirmAction()
  }

  private observecancelAction() {
    this.subscriptions.push(
      this._popupService.cancelAction.subscribe((res: PopupData) => {
        console.log(res)
      })
    )
  }

  private observeconfirmAction() {
    this.subscriptions.push(
      this._popupService.confirmAction.subscribe((res: PopupData) => {
        console.log(res)
        this.save()
      })
    )
  }

  private closeDialog(): void {
    this._popupService.dismissDialog()
  }
  ngOnDestroy(): void {
    this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe())
  }
}
