import { Component } from '@angular/core';
import { FormArray, FormBuilder, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { customerResponse } from 'src/app/shared/models/customer.model';
import { FileUploader } from 'src/app/shared/models/file-uploader.model';
import { FileManagementService } from 'src/app/shared/services/fileManagement/file-management.service';
import { UserDataService } from 'src/app/core/services/user-data/user-data.service';
import {
  AdditionTechnicalCapabilitiesRequirementsCreatUpdateDto,
  QualificationCompletedSmallOrMediumProjectsLicenseCreateUpdateDto,
  QualificationContsAndDevsServiceProvidersCertificateNumberCreateUpdateDto,
} from '../../dataModels/additionTechnicalCapabilitiesRequirements.model';
import { AdditionTechnicalCapabilitiesRequirementsService } from '../../services/additionTechnicalCapabilitiesRequirements/addition-technical-capabilities-requirements.service';
import { PopupData } from 'src/app/shared/models/popup.model';
import { PopupService } from 'src/app/shared/services/popup/popup.service';
import { ToastrNotificatioService } from 'src/app/core/services/toastr-notification/toastr-notificatio.service';

@Component({
  selector: 'app-distinctive-additional-technical-capabilities-form',
  templateUrl:
    './distinctive-additional-technical-capabilities-form.component.html',
  styleUrls: [
    './distinctive-additional-technical-capabilities-form.component.scss',
  ],
})
export class DistinctiveAdditionalTechnicalCapabilitiesFormComponent {
  subscriptions: Subscription[] = [];
  additionTechnicalCapability: AdditionTechnicalCapabilitiesRequirementsCreatUpdateDto =
    new AdditionTechnicalCapabilitiesRequirementsCreatUpdateDto();
  addedQualificationCompletedSmallOrMediumProjectsLicenses: QualificationCompletedSmallOrMediumProjectsLicenseCreateUpdateDto[] =
    [];
  singleFileUploaderData: FileUploader = {
    multiple: false,
  } as FileUploader;
  mueltiFilesUploaderData: FileUploader = {
    multiple: true,
  } as FileUploader;
  userData: customerResponse | null = null;
  showValidation: boolean = false;

  constructor(
    private _formBuilder: FormBuilder,
    private _fileManagementService: FileManagementService,
    private additionTechnicalCapabilityService: AdditionTechnicalCapabilitiesRequirementsService,
    // public dialogRef: MatDialogRef<PopupComponent>,
    private _userDataService: UserDataService,
    private _popupService: PopupService,
    private _toastrNotificationService: ToastrNotificatioService
  ) {}

  //#region forms
  additionTechnicalCapabilitiesRequirementsForm = this._formBuilder.group({
    id: ['00000000-0000-0000-0000-000000000000'],
    addedQualificationContsAndDevsServiceProvidersCertificateNumbers:
      this._formBuilder.array([]),
  });

  get controls() {
    return this.additionTechnicalCapabilitiesRequirementsForm.controls;
  }

  //#region addedQualificationContsAndDevsServiceProvidersCertificateNumbers
  addedQualificationContsAndDevsServiceProvidersCertificateNumbersForm(
    certificate:
      | QualificationContsAndDevsServiceProvidersCertificateNumberCreateUpdateDto
      | undefined
  ) {
    let arrayForm = this._formBuilder.group({
      id: ['00000000-0000-0000-0000-000000000000'],
      certificateNumber: ['', Validators.required],
      description: [''],
    });
    if (certificate) arrayForm.patchValue(certificate);
    this.addedQualificationContsAndDevsServiceProvidersCertificateNumbers.push(
      arrayForm
    );
  }

  deleteCertificateNumbersControl(index: number) {
    this.addedQualificationContsAndDevsServiceProvidersCertificateNumbers.removeAt(
      index
    );
  }

  get addedQualificationContsAndDevsServiceProvidersCertificateNumbers() {
    return this.additionTechnicalCapabilitiesRequirementsForm.controls
      .addedQualificationContsAndDevsServiceProvidersCertificateNumbers as FormArray;
  }
  //#endregion

  ngOnInit(): void {
    this.obseveCustomerData();
    this.observeFinancialCapabilityObj();
    this.observePopupEvents();
    this.observeForm();
  }

  // popup
  observePopupEvents(): void {
    this.observecancelAction();
    this.observeconfirmAction();
  }

  private observecancelAction() {
    this.subscriptions.push(
      this._popupService.cancelAction.subscribe((res: PopupData) => {
        console.log(res);
      })
    );
  }

  private observeconfirmAction() {
    this.subscriptions.push(
      this._popupService.confirmAction.subscribe((res: PopupData) => {
        console.log(res);
        this.save();
      })
    );
  }

  private closeDialog(): void {
    this._popupService.dismissDialog();
  }

  obseveCustomerData(): void {
    this.subscriptions.push(
      this._userDataService
        .getCustomerData()
        .subscribe((res: customerResponse | null) => {
          this.userData = res;
        })
    );
  }

  observeForm(): void {
    this.subscriptions.push(
      this.additionTechnicalCapabilitiesRequirementsForm.valueChanges.subscribe(
        (changes) => {
          this.additionTechnicalCapability.qualificationContsAndDevsServiceProvidersCertificateNumbers =
            this
              .addedQualificationContsAndDevsServiceProvidersCertificateNumbers
              .value as QualificationContsAndDevsServiceProvidersCertificateNumberCreateUpdateDto[];
        }
      )
    );
  }

  observeFinancialCapabilityObj(): void {
    this.subscriptions.push(
      this.additionTechnicalCapabilityService
        .getAdditionTechnicalCapabilityObj()
        .subscribe((additionTechnicalCapability) => {
          if (additionTechnicalCapability.id)
            this.getAdditionTechnicalCapabilityById(
              additionTechnicalCapability.id
            );
        })
    );
  }

  getAdditionTechnicalCapabilityById(id: string) {
    this.subscriptions.push(
      this.additionTechnicalCapabilityService.GetById(id).subscribe((res) => {
        if (res) {
          this.additionTechnicalCapabilitiesRequirementsForm.patchValue({
            ...res,
          } as any);
          this.additionTechnicalCapability = { ...res };
          this.additionTechnicalCapability.qualificationContsAndDevsServiceProvidersCertificateNumbers.forEach(
            (x) => {
              this.addedQualificationContsAndDevsServiceProvidersCertificateNumbersForm(
                x
              );
            }
          );
        }
      })
    );
  }

  save(): void {
    if (!this.additionTechnicalCapabilitiesRequirementsForm.valid) {
      this.showValidation = true;
      this._toastrNotificationService.showError(
        'نأمل ادخال كل الحقول اللازمة واعادة المحاولة'
      );
      this.additionTechnicalCapabilitiesRequirementsForm?.markAllAsTouched();
      return;
    }
    this.additionTechnicalCapability.addedQualificationCompletedSmallOrMediumProjectsLicenses =
      this.addedQualificationCompletedSmallOrMediumProjectsLicenses;
    this.additionTechnicalCapability.facilityId = this.userData?.facilities[0]
      .id as string;
    this.subscriptions.push(
      this.additionTechnicalCapabilityService
        .Save(this.additionTechnicalCapability)
        .subscribe((res) => {
          if (res.isDone && res.data) {
            this.additionTechnicalCapabilityService.SetAdditionTechnicalCapabilityObj(
              res.data
            );
            this.closeDialog();
          }
          // else
          // this._toastrNotificationService.showError(res.message);
        })
    );
  }

  onFileRemoved(fileRemovedData: any) {
    let file = fileRemovedData.eventRes.file;
  }

  onFileUploaded(fileRemovedData: any) {
    if (fileRemovedData.eventRes.data.length == 0) {
      this.additionTechnicalCapability.wafiProjectLicenseFileId = '';
      return;
    }
    if (!fileRemovedData.eventRes.data || !fileRemovedData.eventRes.data.length)
      return;
    this.additionTechnicalCapability.wafiProjectLicenseFileId =
      fileRemovedData.eventRes.data[0].id;
  }

  onMarketingSellingLicenseFileUploaded(fileRemovedData: any) {
    if (fileRemovedData.eventRes.data.length == 0) {
      this.additionTechnicalCapability.marketingSellingLicenseFileId = '';
      return;
    }
    if (!fileRemovedData.eventRes.data || !fileRemovedData.eventRes.data.length)
      return;
    this.additionTechnicalCapability.marketingSellingLicenseFileId =
      fileRemovedData.eventRes.data[0].id;
  }

  onCompletedSmallOrMediumProjectsLicenseFilesUploaded(filesData: any) {
    if (filesData.eventRes.data.length == 0) {
      this.addedQualificationCompletedSmallOrMediumProjectsLicenses = [];
      return;
    }

    if (!filesData.eventRes.data || !filesData.eventRes.data.length) return;
    if (!this.addedQualificationCompletedSmallOrMediumProjectsLicenses)
      this.addedQualificationCompletedSmallOrMediumProjectsLicenses = [];

    filesData.eventRes.data.forEach((data: any) => {
      this.addedQualificationCompletedSmallOrMediumProjectsLicenses.push({
        projectsLicenseFileId: data.id,
        id: '00000000-0000-0000-0000-000000000000',
        qualificationAdditionTechnicalCapabilitiesRequirementId:
          this.additionTechnicalCapability.id,
      });
    });
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe());
  }
}
