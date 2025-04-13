import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { customerResponse } from 'src/app/shared/models/customer.model';
import { FileUploader } from 'src/app/shared/models/file-uploader.model';
import { FileManagementService } from 'src/app/shared/services/fileManagement/file-management.service';
import { PopupService } from 'src/app/shared/services/popup/popup.service';
import { UserDataService } from 'src/app/core/services/user-data/user-data.service';
import { FacilityBasicInfo, FacilityBasicUpdateInfo, qualificationFacilityServiceProvidersCertificateNumbersDTO, qualificationIssuesDocumentCreateUpdate } from '../../dataModels/facility-basic-info.model';
import { FacilityProfileService } from '../../services/facilityProfile/facility-profile.service';
import { PopupData } from 'src/app/shared/models/popup.model';
import { environment } from 'src/environments/environment';
import { ToastrNotificatioService } from 'src/app/core/services/toastr-notification/toastr-notificatio.service';
import { CityService } from 'src/app/shared/services/lookups/city-service';
import { CityWithChambersOfCommerceCityCodeDto } from 'src/app/shared/models/lookups/city-dto';

@Component({
  selector: 'app-edit-facility-basic-info',
  templateUrl: './edit-facility-basic-info.component.html',
  styleUrls: ['./edit-facility-basic-info.component.scss']
})
export class EditFacilityBasicInfoComponent implements OnInit, OnDestroy {
  baseUrl = `${environment.baseURL}/`;
  subscriptions: Subscription[] = [];
  cities: CityWithChambersOfCommerceCityCodeDto[] = [];
  userData: customerResponse | null = null;
  facilityData: FacilityBasicInfo = {} as FacilityBasicInfo;
  FacilityBasicUpdateInfo: FacilityBasicUpdateInfo = {
    qualificationIssuesDocumentCreateUpdateDtos: [{}] as qualificationIssuesDocumentCreateUpdate[],
    qualificationFacilityServiceProvidersCertificateNumbers: [] as qualificationFacilityServiceProvidersCertificateNumbersDTO[], // added
  } as FacilityBasicUpdateInfo;

  singleFileUploaderData: FileUploader = {
    multiple: false,
    allowedExtensions: ['.pdf'],
    allowedExtensionsText: '.pdf'
  } as FileUploader;
  mueltiFilesUploaderData: FileUploader = {
    multiple: true
  } as FileUploader;
  issuesIsExist: boolean = false;
  brokerRentDocumentType: boolean = false;

  constructor(
    private _facilityProfileService: FacilityProfileService,
    private _popupService: PopupService,
    private _userDataService: UserDataService,
    private _formBuilder: FormBuilder,
    private _filemangementService: FileManagementService,
    private _toastrNotificationService: ToastrNotificatioService,
    private _cityService: CityService) { }

  basicInfoForm = this._formBuilder.group({
    // chamberOfCommerceMembershipNumber: [{ value: '', disabled: true }, Validators.required],
    chamberOfCommerceMembershipNumber: [''],
    cityId: [''],
    socialInsuranceCertificateNumber: ['', Validators.required],
    previouslyQualifiedFacilityCommercialRegistrationNumber: ['', [Validators.maxLength(10), Validators.minLength(10)]],
    website: [''],
    telephone: [''],
    fax: [''],
    email: [''],
    postalCode: [''],
    poBox: [''],
    companyCodeInFinancialMarket: [''],
    saudiAuthorityOfEngineersLicenseNumber: [''],
    saudiAuthorityForAuditorsAndAccountants: [''],
    documentNumber: [''],
    QualificationFacilityServiceProvidersCertificateNumber: [''],
    NoOfClassificationCertificatesOfCityServiceProvidersImplementingProjectsList: this._formBuilder.array([])
  })

  get chamberOfCommerceMembershipNumber(): FormControl {
    return this.basicInfoForm.controls.chamberOfCommerceMembershipNumber
  }

  get socialInsuranceCertificateNumber(): FormControl {
    return this.basicInfoForm.controls.socialInsuranceCertificateNumber
  }

  get NoOfClassificationCertificatesOfCityServiceProvidersImplementingProjectsList(): FormArray {
    return this.basicInfoForm.controls.NoOfClassificationCertificatesOfCityServiceProvidersImplementingProjectsList
  }

  ngOnInit(): void {
    this.obseveCustomerData();
    this.observeFacilityDataBS()
    this.observeBasicInfoForm();
    this.observePopupEvents()
    this.getCityWithChambersOfCommerceCityCodeDto()
  }

  // popup
  observePopupEvents(): void {
    this.observecancelAction()
    this.observeconfirmAction()
  }

  get controls() {
    return this.basicInfoForm.controls;
  }


  getCityWithChambersOfCommerceCityCodeDto() {
    this.subscriptions.push(
      this._cityService.getListWithChambersOfCommerceCityCodeAsync().subscribe(res => {
        this.cities = res as CityWithChambersOfCommerceCityCodeDto[];
      })
    );
  }

  deletFile(id: any) {
    this._filemangementService.DeletFile(id).subscribe(res => {
      if (res.isDone) {
        this.facilityData.companyEstablishingContractFileId = ""
      }
      console.log("Deleted res", res)
    })
  }

  deletSocialInsuranceFile(id: any) {
    this._filemangementService.DeletFile(id).subscribe(res => {
      if (res.isDone) {
        this.facilityData.socialInsuranceEmployeesListFileId = ""
      }
      console.log("Deleted res", res)
    })
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
        this.submitBasicInfoForm()
      })
    )
  }

  private closeDialog(): void {
    this._popupService.dismissDialog()
  }

  observeBasicInfoForm() {
    this.subscriptions.push(
      this.basicInfoForm.valueChanges.subscribe(values => {
      })
    )
  }

  addNewFormGroup(): void {
    let NoOfClassificationCertificatesOfCityServiceProvidersImplementingProjectsFormGroup = this._formBuilder.group({
      certificationNumber: '',
      discription: ''
    })
    this.NoOfClassificationCertificatesOfCityServiceProvidersImplementingProjectsList.push(
      NoOfClassificationCertificatesOfCityServiceProvidersImplementingProjectsFormGroup as FormGroup
    );
  }

  deleteCertificate(index: number): void {
    this.NoOfClassificationCertificatesOfCityServiceProvidersImplementingProjectsList.removeAt(index)
  }

  obseveCustomerData(): void {
    this.subscriptions.push(
      this._userDataService.getCustomerData().subscribe((res: customerResponse | null) => {
        this.userData = res
        console.log("this.userData", this.userData)
      })
    )
  }

  updateIssuesIsExist(value: boolean) {
    this.issuesIsExist = value as boolean
  }

  observeFacilityDataBS(): void {
    this.subscriptions.push(
      this._facilityProfileService.getFacilityBasicDataBS().subscribe((res: FacilityBasicInfo) => {
        this.facilityData = res as FacilityBasicInfo
        console.log("this.facilityData", this.facilityData)
        this.updateFormValues()
      })
    )
  }

  updateFormValues() {
    this.basicInfoForm.patchValue(this.facilityData);
  }

  onUploadCooperativeSocietyLicensingFile($event: any): void {
    this.FacilityBasicUpdateInfo.cooperativeSocietyLicensingFileId = $event.eventRes.data[0].id;
  }
  public onUploadQualificationValFile($event: any): void {
    this.FacilityBasicUpdateInfo.qualificationValFileManagerId = $event.eventRes.data[0].id;
  }

  onUploadSocialInsuranceEmployeesFile($event: any): void {
    this.facilityData.socialInsuranceEmployeesListFileId = $event.eventRes.data[0].id
  }

  onUploadQualificationIssuesDocumentCreateUpdateDtoFile($event: any): void {
    let issueFileDate = {
      id: "00000000-0000-0000-0000-000000000000",
      facilityId: this.userData?.facilities[0].id as string,
      fileManagerId: $event.eventRes.data[0].id
    }
    this.FacilityBasicUpdateInfo.qualificationIssuesDocumentCreateUpdateDtos = [];
    this.FacilityBasicUpdateInfo.qualificationIssuesDocumentCreateUpdateDtos.push(issueFileDate)
  }

  onUploadCompanyEstablishingContractFile($event: any): void {
    this.facilityData.companyEstablishingContractFileId = $event.eventRes.data[0].id
    console.log("$event.eventRes.data[0].id", $event.eventRes.data[0].id)
  }

  updateBrokerRentDocumentType(type: any) {
    if (type === 2) {
      this.brokerRentDocumentType = true
    } else {
      this.brokerRentDocumentType = false
    }
  }

  submitBasicInfoForm(): void {
    if (this.basicInfoForm?.invalid) {
      this._toastrNotificationService.showError('نأمل ادخال كل الحقول اللازمة واعادة المحاولة');
      this.basicInfoForm?.markAllAsTouched();
      return;
    }
    if (this.basicInfoForm.valid) {
      this.FacilityBasicUpdateInfo.id = this.userData?.facilities[0].id as string
      // this.FacilityBasicUpdateInfo.chamberOfCommerceMembershipNumber = this.basicInfoForm.getRawValue().chamberOfCommerceMembershipNumber as string
      this.FacilityBasicUpdateInfo.chamberOfCommerceMembershipNumber = this.basicInfoForm.value.chamberOfCommerceMembershipNumber as string
      this.FacilityBasicUpdateInfo.cityId = this.basicInfoForm.value.cityId as string
      this.FacilityBasicUpdateInfo.socialInsuranceCertificateNumber = this.basicInfoForm.value.socialInsuranceCertificateNumber as string
      this.FacilityBasicUpdateInfo.previouslyQualifiedFacilityCommercialRegistrationNumber = this.basicInfoForm.value.previouslyQualifiedFacilityCommercialRegistrationNumber as string
      this.FacilityBasicUpdateInfo.companyCodeInFinancialMarket = this.basicInfoForm.value.companyCodeInFinancialMarket as string
      this.FacilityBasicUpdateInfo.saudiAuthorityOfEngineersLicenseNumber = this.basicInfoForm.value.saudiAuthorityOfEngineersLicenseNumber as string
      this.FacilityBasicUpdateInfo.saudiAuthorityForAuditorsAndAccountants = this.basicInfoForm.value.saudiAuthorityForAuditorsAndAccountants as string
      this.FacilityBasicUpdateInfo.website = this.basicInfoForm.value.website as string
      this.FacilityBasicUpdateInfo.telephone = this.basicInfoForm.value.telephone as string
      this.FacilityBasicUpdateInfo.email = this.basicInfoForm.value.email as string
      this.FacilityBasicUpdateInfo.postalCode = this.basicInfoForm.value.postalCode as string
      this.FacilityBasicUpdateInfo.fax = this.basicInfoForm.value.fax as string
      this.FacilityBasicUpdateInfo.poBox = this.basicInfoForm.value.poBox as string
      this.FacilityBasicUpdateInfo.isIssuesExist = this.issuesIsExist;

      if (this.facilityData.companyEstablishingContractFileId) {
        this.FacilityBasicUpdateInfo.companyEstablishingContractFileId = this.facilityData.companyEstablishingContractFileId
      }
      if (this.facilityData.socialInsuranceEmployeesListFileId) {
        this.FacilityBasicUpdateInfo.socialInsuranceEmployeesListFileId = this.facilityData.socialInsuranceEmployeesListFileId
      }
      this.FacilityBasicUpdateInfo.commercialRegisterNumber = this.userData?.facilities[0].commercialRegisterNumber as string

      this.FacilityBasicUpdateInfo.website = this.basicInfoForm.value.website as string
      this.FacilityBasicUpdateInfo.telephone = this.basicInfoForm.value.telephone as string
      this.FacilityBasicUpdateInfo.email = this.basicInfoForm.value.email as string
      this.FacilityBasicUpdateInfo.postalCode = this.basicInfoForm.value.postalCode as string
      this.FacilityBasicUpdateInfo.fax = this.basicInfoForm.value.fax as string
      this.FacilityBasicUpdateInfo.poBox = this.basicInfoForm.value.poBox as string
      // this.FacilityBasicUpdateInfo.qualificationValFileManagerId = this.basicInfoForm.value.qualificationValFileManagerId as string


      this.FacilityBasicUpdateInfo.isIssuesExist = this.issuesIsExist;

      if (this.facilityData.companyEstablishingContractFileId) {
        this.FacilityBasicUpdateInfo.companyEstablishingContractFileId = this.facilityData.companyEstablishingContractFileId
      }
      this.basicInfoForm.value.NoOfClassificationCertificatesOfCityServiceProvidersImplementingProjectsList?.forEach((element: any) => {
        let certificate = {
          id: "00000000-0000-0000-0000-000000000000",
          certificationNumber: element.certificationNumber,
          description: element.discription,
          facilityId: this.userData?.facilities[0].id
        }
        this.FacilityBasicUpdateInfo.qualificationFacilityServiceProvidersCertificateNumbers.push(certificate as qualificationFacilityServiceProvidersCertificateNumbersDTO)
      });
      this._facilityProfileService.updatFacility(this.FacilityBasicUpdateInfo as FacilityBasicUpdateInfo).subscribe((res) => {
        if (res.isDone) {
          this._facilityProfileService.updateFacilityBasicDataBS(res.data as FacilityBasicInfo)
          this.closeDialog()
        }
      })
    }
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe())
  }

}
