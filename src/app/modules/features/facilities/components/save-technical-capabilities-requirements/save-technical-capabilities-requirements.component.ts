import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { customerResponse } from 'src/app/shared/models/customer.model';
import { FileUploader } from 'src/app/shared/models/file-uploader.model';
import { PopupService } from 'src/app/shared/services/popup/popup.service';
import { UserDataService } from 'src/app/core/services/user-data/user-data.service';
import { QualificationFacilityCertificationCreateUpdateDto } from '../../dataModels/qualification-facility-certification-dto';
import {
  QualificationFacilityServiceProvidersCertificateNumberDto,
  QualificationTechnicalCapabilitiesRequirementCreateUpdateDto,
  QualificationTechnicalCapabilitiesRequirementFullDto,
} from '../../dataModels/qualificationTechnicalCapabilitiesRequirement.model';
import {
  TechnicalCapabilitiesRequirementsService,
} from '../../services/technicalCapabilitiesRequirements/technical-capabilities-requirements.service';
import { PopupData } from 'src/app/shared/models/popup.model';

@Component({
  selector: 'app-save-technical-capabilities-requirements',
  templateUrl: './save-technical-capabilities-requirements.component.html',
  styleUrls: ['./save-technical-capabilities-requirements.component.scss']
})
export class SaveTechnicalCapabilitiesRequirementsComponent implements OnInit, OnDestroy {

  subscriptions: Subscription[] = [];
  technicalCapabilities: QualificationTechnicalCapabilitiesRequirementFullDto | undefined = undefined;
  addedQualificationFacilityCertifications: QualificationFacilityCertificationCreateUpdateDto[] = [];
  mueltiFilesUploaderData: FileUploader = {
    multiple: true
  } as FileUploader;
  editForm: FormGroup = this.fb.group({
    id: ['00000000-0000-0000-0000-000000000000'],
    isPreviousExperienceExist: [false, Validators.required],
    facilityId: [''],
    addedQualificationFacilityServiceProvidersCertificateNumbers: this.fb.array([]),
  });
  userData: customerResponse | null = null;

  constructor(
    // private popupService: PopupService,
    private technicalCapabilitiesRequirementsService: TechnicalCapabilitiesRequirementsService,
    private fb: FormBuilder,
    private _userDataService: UserDataService, private _popupService: PopupService,) {
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }

  ngOnInit(): void {
    this.obseveCustomerData();
    this.initializeComponent();
    this.observePopupEvents()
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

  obseveCustomerData(): void {
    this.subscriptions.push(
      this._userDataService.getCustomerData().subscribe((res: customerResponse | null) => {
        this.userData = res
      })
    )
  }

  initializeComponent(): void {
    this.subscriptions.push(
      this.technicalCapabilitiesRequirementsService.technicalCapabilitiesRequirementsBehaviorSubject.subscribe(technicalCapabilitiesRequirements => {
        this.technicalCapabilities = technicalCapabilitiesRequirements;
        this.editForm.patchValue(this.technicalCapabilities);
        this.technicalCapabilities?.qualificationFacilityServiceProvidersCertificateNumbers?.forEach(x => {
          this.addServiceProvidersCertificateNumbersForm(x);
        });
      }));
  }

  save(): void {
    console.log("this.editForm.value", this.editForm.value);
    const technicalCapabilitiesRequirementToEdit = this.editForm.value as QualificationTechnicalCapabilitiesRequirementCreateUpdateDto;
    technicalCapabilitiesRequirementToEdit.facilityId = this.userData?.facilities[0].id as string
    technicalCapabilitiesRequirementToEdit.id = technicalCapabilitiesRequirementToEdit.id ? technicalCapabilitiesRequirementToEdit.id : "00000000-0000-0000-0000-000000000000"
    technicalCapabilitiesRequirementToEdit.addedQualificationFacilityCertifications = this.addedQualificationFacilityCertifications;
    this.subscriptions.push(this.technicalCapabilitiesRequirementsService.Save(technicalCapabilitiesRequirementToEdit).subscribe(response => {
      if (response.isDone) {
        this.technicalCapabilitiesRequirementsService.UpdateTechnicalCapabilitiesRequirementsBehaviorSubject(response.data as QualificationTechnicalCapabilitiesRequirementFullDto);
        this.closeDialog();
      }
    }));
  }

  updateIsPreviousExperienceExist(value: boolean): void {
    if (value) {
      this.editForm.controls['isPreviousExperienceExist'].setValue(true)
    } else {
      this.editForm.controls['isPreviousExperienceExist'].setValue(false)
    }
  }

  onFacilityCertificationsFilesUploaded(filesData: any) {
    if (filesData.eventRes.data.length == 0) {
      this.addedQualificationFacilityCertifications = [];
      return;
    }
    if (!filesData.eventRes.data || !filesData.eventRes.data.length) return;

    if (!this.addedQualificationFacilityCertifications)
      this.addedQualificationFacilityCertifications = [];

    filesData.eventRes.data.forEach((data: any) => {
      this.addedQualificationFacilityCertifications.push({
        certificationFileId: data.id,
        id: '00000000-0000-0000-0000-000000000000',
        facilityId: this.userData?.facilities[0].id as string,
      });
    });
  }

  //#region addedQualificationFacilityServiceProvidersCertificateNumbers
  addServiceProvidersCertificateNumbersForm(certificate: QualificationFacilityServiceProvidersCertificateNumberDto | undefined) {
    let arrayForm = this.fb.group({
      id: ['00000000-0000-0000-0000-000000000000'],
      certificationNumber: ['', Validators.required],
      description: [''],
      qualificationTechnicalCapabilitiesRequirementId: [this.technicalCapabilities?.id ?? '00000000-0000-0000-0000-000000000000'],
    });
    if (certificate)
      arrayForm.patchValue(certificate);
    this.addedQualificationFacilityServiceProvidersCertificateNumbers.push(arrayForm);
  }

  deleteCertificateNumbersControl(index: number) {
    this.addedQualificationFacilityServiceProvidersCertificateNumbers.removeAt(index);
  }

  get addedQualificationFacilityServiceProvidersCertificateNumbers() {
    return this.editForm.controls['addedQualificationFacilityServiceProvidersCertificateNumbers'] as FormArray;
  }
  //#endregion

}
