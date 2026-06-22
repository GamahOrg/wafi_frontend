import { Component } from '@angular/core';
import { environment } from '../../../../../../environments/environment';
import { Subscription } from 'rxjs';
import { CityWithChambersOfCommerceCityCodeDto } from '../../../../../shared/models/lookups/city-dto';
import { FacilityTypeCategory, customerResponse } from '../../../../../shared/models/customer.model';
import { FacilityBasicInfo, FacilityBasicUpdateInfo, qualificationFacilityServiceProvidersCertificateNumbersDTO, qualificationIssuesDocumentCreateUpdate } from '../../dataModels/facility-basic-info.model';
import { FileUploader } from '../../../../../shared/models/file-uploader.model';
import { FacilityProfileService } from '../../services/facilityProfile/facility-profile.service';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CityService } from '../../../../../shared/services/lookups/city-service';
import { UserDataService } from '../../../../../core/services/user-data/user-data.service';
import { PopupService } from '../../../../../shared/services/popup/popup.service';
import { FileManagementService } from '../../../../../shared/services/fileManagement/file-management.service';
import { ToastrNotificatioService } from '../../../../../core/services/toastr-notification/toastr-notificatio.service';
import { PopupData } from '../../../../../shared/models/popup.model';
import { UpdateFacilityBasicDataInfoAllTypesDto } from '../../dataModels/update-facility-basic-data-info-all-types-dto';
import { QualificationFacilityCertificationService } from '../../services/qualificationFacilityCertification/qualification-facility-certification.service';

@Component({
  selector: 'app-edit-facility-basic-data-info-all-types',
  templateUrl: './edit-facility-basic-data-info-all-types.component.html',
  styleUrls: ['./edit-facility-basic-data-info-all-types.component.scss']
})
export class EditFacilityBasicDataInfoAllTypesComponent {
  baseUrl = `${environment.baseURL}/`;
  subscriptions: Subscription[] = [];
  cities: CityWithChambersOfCommerceCityCodeDto[] = [];
  userData: customerResponse | null = null;
  facilityTypeCategory: FacilityTypeCategory | null = null;
  readonly FacilityTypeCategoryEnum = FacilityTypeCategory;
  facilityData: FacilityBasicInfo = {} as FacilityBasicInfo;
  FacilityBasicUpdateInfo: UpdateFacilityBasicDataInfoAllTypesDto = {
    qualificationIssuesDocumentCreateUpdateDtos: [] as qualificationIssuesDocumentCreateUpdate[],
    certificationFileId: null,
    saudiAuthorityOfEngineersLicenseFileId: null,
    saudiAuthorityForAuditorsAndAccountantsFileId: null,
  } as UpdateFacilityBasicDataInfoAllTypesDto;

  singleFileUploaderData: FileUploader = {
    multiple: false,
    allowedExtensions: ['.pdf'],
    allowedExtensionsText: '.pdf',
  } as FileUploader;

  logoFileUploaderData: FileUploader = {
    multiple: false,
    allowedExtensions: ['.jpg', '.png', '.jpeg'],
    allowedExtensionsText: '.jpg, .png, .jpeg',
  } as FileUploader;

  mueltiFilesUploaderData: FileUploader = {
    multiple: true,
  } as FileUploader;
  issuesIsExist: boolean = false;
  brokerRentDocumentType: boolean = false;
  hasEntity700Number: boolean = false;
  showValidation = false;
  certificationDegrees: any[] = [];
  selectedCertificationDegreeId: number | undefined;
  constructor(
    private _facilityProfileService: FacilityProfileService,
    private _popupService: PopupService,
    private _userDataService: UserDataService,
    private _formBuilder: FormBuilder,
    private _filemangementService: FileManagementService,
    private _toastrNotificationService: ToastrNotificatioService,
    private _cityService: CityService,
    private _certificationService: QualificationFacilityCertificationService,
    
  ) { }

  basicInfoForm = this._formBuilder.group({
    chamberOfCommerceMembershipNumber: ['', [Validators.required]],
    cityId: ['', [Validators.required]],
    saudiAuthorityOfEngineersLicenseNumber: [''],
    saudiAuthorityForAuditorsAndAccountants: [''],
    issuesIsExist: this._formBuilder.control<boolean | null>(null),
     
  });

  allowNumbersOnly(event: KeyboardEvent): void {
    const charCode = event.which ? event.which : event.keyCode;

    // Allow only numbers 0-9
    if (charCode < 48 || charCode > 57) {
      event.preventDefault();
    }
  }
  get chamberOfCommerceMembershipNumber(): FormControl {
    return this.basicInfoForm.controls.chamberOfCommerceMembershipNumber;
  }


  ngOnInit(): void {
    this.obseveCustomerData();
    this.observeFacilityDataBS();
    this.observeBasicInfoForm();
    this.observePopupEvents();
    this.getCityWithChambersOfCommerceCityCodeDto();
    
  }

  // popup
  observePopupEvents(): void {
    this.observecancelAction();
    this.observeconfirmAction();
  }

  get controls() {
    return this.basicInfoForm.controls;
  }
 
  updateValidators(): void {

    const devFields = [
      'issuesIsExist',

    ];
    const accountantFields = [
      'saudiAuthorityForAuditorsAndAccountants',
 
    ];
    const engineerFields = [
      'saudiAuthorityOfEngineersLicenseNumber',
 
    ];

    const allRequiredFields = [
      'issuesIsExist',
      'saudiAuthorityOfEngineersLicenseNumber',
      'saudiAuthorityForAuditorsAndAccountants',


    ];
    allRequiredFields.forEach(field => {
      const control = this.basicInfoForm.get(field);
      control?.clearValidators();

    });
    if (this.facilityTypeCategory == 1) {

      devFields.forEach(field => {
        const control = this.basicInfoForm.get(field);
        control?.setValidators([Validators.required]);
        control?.updateValueAndValidity({ emitEvent: false });
      });
    } else if (this.facilityTypeCategory == 2) {
      accountantFields.forEach(field => {
        const control = this.basicInfoForm.get(field);
        control?.setValidators([Validators.required]);
        control?.updateValueAndValidity({ emitEvent: false });
      });
    } else if (this.facilityTypeCategory == 3) {
      engineerFields.forEach(field => {
        const control = this.basicInfoForm.get(field);
        control?.setValidators([Validators.required]);
        control?.updateValueAndValidity({ emitEvent: false });
      });
    }
    
  }
  getCityWithChambersOfCommerceCityCodeDto() {
    this.subscriptions.push(
      this._cityService
        .getListWithChambersOfCommerceCityCodeAsync()
        .subscribe((res) => {
          this.cities = res as CityWithChambersOfCommerceCityCodeDto[];
        })
    );
  }

  deletFile(id: any) {
    this.facilityData.companyEstablishingContractFileId = '';

    //this._filemangementService.DeletFile(id).subscribe((res) => {
    //  if (res.isDone) {
    //    this.facilityData.companyEstablishingContractFileId = '';
    //  }
      
    //});
  }
  deleteLogoFile(id: any) {
    this.facilityData.logoFileId = '';

    //this._filemangementService.DeletFile(id).subscribe((res) => {
    //  if (res.isDone) {
    //    this.facilityData.logoFileId = '';
    //  }
     
    //});
  }
  
  deleteQualificationIssuesDocument(id: any) {
    if (!this.facilityData.qualificationIssuesDocuments) return;

    this.facilityData.qualificationIssuesDocuments =
      this.facilityData.qualificationIssuesDocuments.filter(
        x => x.fileManager?.id !== id
      );

   
    this.FacilityBasicUpdateInfo.qualificationIssuesDocumentCreateUpdateDtos =
      this.FacilityBasicUpdateInfo.qualificationIssuesDocumentCreateUpdateDtos.filter(
        x => x.fileManagerId !== id
      );
  }
  get hasIssueFiles(): boolean {
    return (
      (this.facilityData.qualificationIssuesDocuments?.length || 0) +
      (this.FacilityBasicUpdateInfo.qualificationIssuesDocumentCreateUpdateDtos?.length || 0)
    ) > 0;
  }
  deletSocialInsuranceFile(id: any) {
    this.facilityData.socialInsuranceEmployeesListFileId = '';

    //this._filemangementService.DeletFile(id).subscribe((res) => {
    //  if (res.isDone) {
    //    this.facilityData.socialInsuranceEmployeesListFileId = '';
    //  }
    //  console.log('Deleted res', res);
    //});
  }

  private observecancelAction() {
    this.subscriptions.push(
      this._popupService.cancelAction.subscribe((res: PopupData) => {
      })
    );
  }

  private observeconfirmAction() {
    this.subscriptions.push(
      this._popupService.confirmAction.subscribe((res: PopupData) => {
        this.submitBasicInfoForm();
      })
    );
  }

  private closeDialog(): void {
    this._popupService.dismissDialog();
  }

  observeBasicInfoForm() {
    this.subscriptions.push(
      this.basicInfoForm.valueChanges.subscribe((values) => { })
    );
  }

 
  obseveCustomerData(): void {
    this.subscriptions.push(
      this._userDataService
        .getCustomerData()
        .subscribe((res: customerResponse | null) => {
          this.userData = res;
          if (
            this.userData &&
            this.userData.facilities &&
            this.userData.facilities.length > 0
          ) {
            this.facilityTypeCategory =
              this.userData.facilities[0].facilityTypeCategory ?? null;
            if(this.facilityTypeCategory == FacilityTypeCategory.Engineering) {
            this.loadCertificationDegrees();
            }
          }
        })
    );
  }

  updateIssuesIsExist(value: boolean) {
    this.issuesIsExist = value as boolean;
  }

  observeFacilityDataBS(): void {
    this.subscriptions.push(
      this._facilityProfileService
        .getFacilityBasicDataBS()
        .subscribe((res: FacilityBasicInfo) => {
          this.facilityData = res as FacilityBasicInfo;
          if (this.facilityData.entity700Number) {
            this.hasEntity700Number = true;
          }
          this.updateFormValues();
        })
    );
  }
  loadCertificationDegrees(): void {
    this.subscriptions.push(
      this._certificationService.GetCertificationDegreesLookup()
      .subscribe(degrees => {
        this.certificationDegrees = degrees.data ?? [];
      })
    );
  }
  //updateFormValues() {
  //  this.basicInfoForm.patchValue(this.facilityData);
   
  //}
  updateFormValues() {

    this.basicInfoForm.patchValue({
      ...this.facilityData,
      issuesIsExist:
        this.facilityData.isIssuesExist === true
          ? true
          : this.facilityData.isIssuesExist === false
            ? false
            : null,
    });

    if (this.facilityData.qualificationFacilityCertifications?.length > 0) {
      this.selectedCertificationDegreeId = this.facilityData.qualificationFacilityCertifications[0]?.certificationDegree?.id;
      this.FacilityBasicUpdateInfo.certificationDegreeId = this.selectedCertificationDegreeId ?? null;
    }
  }
 
 
  public onUploadLogoFile($event: any): void {
    if ($event.eventRes.data.length == 0) {
      this.facilityData.logoFileId = '';
      return;
    }

    if (!$event.eventRes.data || !$event.eventRes.data.length) return;
    this.facilityData.logoFileId = $event.eventRes.data[0].id;
  }

  onUploadSocialInsuranceEmployeesFile($event: any): void {
    if ($event.eventRes.data.length == 0) {
      this.facilityData.socialInsuranceEmployeesListFileId = '';
      return;
    }

    if (!$event.eventRes.data || !$event.eventRes.data.length) return;
    this.facilityData.socialInsuranceEmployeesListFileId =
      $event.eventRes.data[0].id;
  }

  
  onUploadQualificationIssuesDocumentCreateUpdateDtoFile($event: any): void {
    if (!$event.eventRes.data || !$event.eventRes.data.length) return;

    const uploadedFiles = $event.eventRes.data;

    uploadedFiles.forEach((file: any) => {
      const issueFileData = {
        id: '00000000-0000-0000-0000-000000000000',
        facilityId: this.userData?.facilities[0].id as string,
        fileManagerId: file.id,
      };

      this.FacilityBasicUpdateInfo.qualificationIssuesDocumentCreateUpdateDtos.push(issueFileData);
    });
  }

  onUploadCertificationFile($event: any): void {
    if ($event.eventRes.data.length == 0) {
      this.FacilityBasicUpdateInfo.certificationFileId = null;
      return;
    }
    if (!$event.eventRes.data || !$event.eventRes.data.length) return;
    this.FacilityBasicUpdateInfo.certificationFileId = $event.eventRes.data[0].id;
  }
onSelectCertificationDegree(event: any): void {
    const degreeId = +event.target.value; 

  this.FacilityBasicUpdateInfo.certificationDegreeId = degreeId || null;
}
  deleteCertificationFile(): void {
    this.FacilityBasicUpdateInfo.certificationFileId = '00000000-0000-0000-0000-000000000000';
    this.selectedCertificationDegreeId = undefined;
    this.FacilityBasicUpdateInfo.certificationDegreeId = null;
    if (this.facilityData.qualificationFacilityCertifications?.length > 0) {
      this.facilityData.qualificationFacilityCertifications = [];
    }
  }

  onUploadSaudiAuthorityOfEngineersLicenseFile($event: any): void {
    if ($event.eventRes.data.length == 0) {
      this.FacilityBasicUpdateInfo.saudiAuthorityOfEngineersLicenseFileId = null;
      return;
    }
    if (!$event.eventRes.data || !$event.eventRes.data.length) return;
    this.FacilityBasicUpdateInfo.saudiAuthorityOfEngineersLicenseFileId = $event.eventRes.data[0].id;
  }

  deleteSaudiAuthorityOfEngineersLicenseFile(id: any): void {
    this.facilityData.saudiAuthorityOfEngineersLicenseFileId = '';
    this.FacilityBasicUpdateInfo.saudiAuthorityOfEngineersLicenseFileId = null;
  }

  onUploadSaudiAuthorityForAuditorsAndAccountantsFile($event: any): void {
    if ($event.eventRes.data.length == 0) {
      this.FacilityBasicUpdateInfo.saudiAuthorityForAuditorsAndAccountantsFileId = null;
      return;
    }
    if (!$event.eventRes.data || !$event.eventRes.data.length) return;
    this.FacilityBasicUpdateInfo.saudiAuthorityForAuditorsAndAccountantsFileId = $event.eventRes.data[0].id;
  }

  deleteSaudiAuthorityForAuditorsAndAccountantsFile(id: any): void {
    this.facilityData.saudiAuthorityForAuditorsAndAccountantsFileId = '';
    this.FacilityBasicUpdateInfo.saudiAuthorityForAuditorsAndAccountantsFileId = null;
  }

  onUploadCompanyEstablishingContractFile($event: any): void {

    if ($event.eventRes.data.length == 0) {
      this.facilityData.companyEstablishingContractFileId = '';
      return;
    }

    if (!$event.eventRes.data || !$event.eventRes.data.length) return;
    this.facilityData.companyEstablishingContractFileId =
      $event.eventRes.data[0].id;
  }

  updateBrokerRentDocumentType(type: any) {
    if (type === 2) {
      this.brokerRentDocumentType = true;
    } else {
      this.brokerRentDocumentType = false;
    }
  }

  submitBasicInfoForm(): void {
    this.showValidation = true;
    this.updateValidators();

    if (this.basicInfoForm?.invalid) {
      this._toastrNotificationService.showError(
        'نأمل ادخال كل الحقول اللازمة واعادة المحاولة'
      );
      this.basicInfoForm?.markAllAsTouched();
      return;
    }
    if (this.basicInfoForm.value.issuesIsExist && !this.hasIssueFiles) {
      return;
    }
    if (this.facilityTypeCategory === FacilityTypeCategory.Engineering
      && !this.facilityData.saudiAuthorityOfEngineersLicenseFileId
      && !this.FacilityBasicUpdateInfo.saudiAuthorityOfEngineersLicenseFileId) {
      this._toastrNotificationService.showError('شهادة ترخيص الهيئة السعودية للمهندسين مطلوبة');
      return;
    }
    if (this.facilityTypeCategory === FacilityTypeCategory.Engineering
      && (this.facilityData.qualificationFacilityCertifications.length === 0 && !this.FacilityBasicUpdateInfo.certificationFileId || this.FacilityBasicUpdateInfo.certificationFileId === '00000000-0000-0000-0000-000000000000')) {
      this._toastrNotificationService.showError('شهادة التصنيف مطلوبة');
      return;
    }
    if (this.facilityTypeCategory === FacilityTypeCategory.Engineering
      && (this.facilityData.qualificationFacilityCertifications.length > 0 || this.FacilityBasicUpdateInfo.certificationFileId != null || this.FacilityBasicUpdateInfo.certificationFileId != '00000000-0000-0000-0000-000000000000')
      && this.FacilityBasicUpdateInfo.certificationDegreeId === null) {
      this._toastrNotificationService.showError('درجة التصنيف مطلوبة');
      return;
    }
    if (this.facilityTypeCategory === FacilityTypeCategory.Accountant
      && !this.facilityData.saudiAuthorityForAuditorsAndAccountantsFileId
      && !this.FacilityBasicUpdateInfo.saudiAuthorityForAuditorsAndAccountantsFileId) {
      this._toastrNotificationService.showError('شهادة ترخيص الهيئة السعودية للمراجعين والمحاسبين مطلوبة');
      return;
    }
      if (
      !this.facilityData.socialInsuranceEmployeesListFileId
      && !this.FacilityBasicUpdateInfo.socialInsuranceEmployeesListFileId) {
      this._toastrNotificationService.showError('مرفق قائمة المشتركين على رأس العمل مطلوب');
      return;
    }
    if (this.basicInfoForm.valid) {
      this.FacilityBasicUpdateInfo.id = this.userData?.facilities[0]
        .id as string;

      this.FacilityBasicUpdateInfo.chamberOfCommerceMembershipNumber = this
        .basicInfoForm.value.chamberOfCommerceMembershipNumber as string;
      this.FacilityBasicUpdateInfo.cityId = this.basicInfoForm.value
        .cityId as string;
      this.FacilityBasicUpdateInfo.saudiAuthorityOfEngineersLicenseNumber = this
        .basicInfoForm.value.saudiAuthorityOfEngineersLicenseNumber as string;
      this.FacilityBasicUpdateInfo.saudiAuthorityForAuditorsAndAccountants =
        this.basicInfoForm.value
          .saudiAuthorityForAuditorsAndAccountants as string;
      //this.FacilityBasicUpdateInfo.isIssuesExist = this.issuesIsExist;
      this.FacilityBasicUpdateInfo.isIssuesExist = this.basicInfoForm.value
        .issuesIsExist as boolean;
      this.FacilityBasicUpdateInfo.facilityTypeCategory = this.facilityTypeCategory;
      this.FacilityBasicUpdateInfo.facilityType = this.facilityData.facilityType;
      
      if (this.facilityData.companyEstablishingContractFileId) {
        this.FacilityBasicUpdateInfo.companyEstablishingContractFileId =
          this.facilityData.companyEstablishingContractFileId;
      }
      if (this.facilityData.socialInsuranceEmployeesListFileId) {
        this.FacilityBasicUpdateInfo.socialInsuranceEmployeesListFileId =
          this.facilityData.socialInsuranceEmployeesListFileId;
      }
      if (this.facilityData.logoFileId) {
        this.FacilityBasicUpdateInfo.logoFileId =
          this.facilityData.logoFileId;
      }
      if (this.FacilityBasicUpdateInfo.saudiAuthorityOfEngineersLicenseFileId) {
        // new file uploaded
      } else if (this.facilityData.saudiAuthorityOfEngineersLicenseFileId) {
        this.FacilityBasicUpdateInfo.saudiAuthorityOfEngineersLicenseFileId =
          this.facilityData.saudiAuthorityOfEngineersLicenseFileId;
      }
      if (this.FacilityBasicUpdateInfo.saudiAuthorityForAuditorsAndAccountantsFileId) {
        // new file uploaded
      } else if (this.facilityData.saudiAuthorityForAuditorsAndAccountantsFileId) {
        this.FacilityBasicUpdateInfo.saudiAuthorityForAuditorsAndAccountantsFileId =
          this.facilityData.saudiAuthorityForAuditorsAndAccountantsFileId;
      }
      const existingFiles = (this.facilityData.qualificationIssuesDocuments || [])
        .filter(x => x.fileManager?.id) 
        .map(x => ({
          id: x.id,
          facilityId: this.userData?.facilities[0].id as string,
          fileManagerId: x.fileManager!.id 
        }));
      const newFiles = this.FacilityBasicUpdateInfo
        .qualificationIssuesDocumentCreateUpdateDtos || [];

   
      this.FacilityBasicUpdateInfo.qualificationIssuesDocumentCreateUpdateDtos = [
        ...existingFiles,
        ...newFiles
      ].filter(x => x.fileManagerId);
   
      if(!this.FacilityBasicUpdateInfo.certificationFileId){

        this.FacilityBasicUpdateInfo.certificationFileId =  this.facilityData.qualificationFacilityCertifications?.length
          ? this.facilityData.qualificationFacilityCertifications[0].certificationFile.id
          : null;
      }

      this._facilityProfileService
        .updateFacilityBasicDataInfoAllTypes(this.FacilityBasicUpdateInfo as UpdateFacilityBasicDataInfoAllTypesDto)
        .subscribe((res) => {
          if (res.isDone) {
            this._facilityProfileService.updateFacilityBasicDataBS(
              res.data as FacilityBasicInfo
            );
            this.closeDialog();
          }
        });
    }
  }
 


  ngOnDestroy(): void {
    this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe());
  }
}
