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
import { CityWithChambersOfCommerceCityCodeDto } from 'src/app/shared/models/lookups/city-dto';
import { CityService } from 'src/app/shared/services/lookups/city-service';

@Component({
  selector: 'app-edit-facility-basic-info',
  templateUrl: './edit-facility-basic-info.component.html',
  styleUrls: ['./edit-facility-basic-info.component.scss']
})
export class EditFacilityBasicInfoComponent implements OnInit, OnDestroy {
  baseUrl = `${environment.baseURL}/`;
  subscriptions: Subscription[] = [];
  userData: customerResponse | null = null;
  cities: CityWithChambersOfCommerceCityCodeDto[] = [];
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
  hasEntity700Number: boolean = false;

  constructor(
    private _facilityProfileService: FacilityProfileService,
    private _popupService: PopupService,
    private _userDataService: UserDataService,
    private _formBuilder: FormBuilder,
    public toastService: ToastrNotificatioService,
    private _cityService: CityService,
    private _filemangementService : FileManagementService) { }

  basicInfoForm = this._formBuilder.group({
    // chamberOfCommerceMembershipNumber: [{value:'', disabled:true}, Validators.required],
    entity700Number: ['', Validators.required],
    previouslyQualifiedFacilityEntity700Number: [''],
    chamberOfCommerceMembershipNumber: [''],
    cityId: [''],
    socialInsuranceCertificateNumber: ['', Validators.required],
    previouslyQualifiedFacilityCommercialRegistrationNumber: [''],
    website: [''],
    companyCodeInFinancialMarket: [''],
    saudiAuthorityOfEngineersLicenseNumber: [''],
    saudiAuthorityForAuditorsAndAccountants: [''],
    documentNumber: [''],
    QualificationFacilityServiceProvidersCertificateNumber: [''],
    NoOfClassificationCertificatesOfCityServiceProvidersImplementingProjectsList: this._formBuilder.array([]),
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



  get controls() {
    return this.basicInfoForm.controls;
  }


  ngOnInit(): void {
    this.obseveCustomerData();
    this.observeFacilityDataBS()
    this.observeBasicInfoForm();
    this.observeFacilityDataBS();
    this.observePopupEvents()
    this.getCityWithChambersOfCommerceCityCodeDto()
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
  deletSocialInsuranceFile(id : any)
  {
    this._filemangementService.DeletFile(id).subscribe(res=>{
      if(res.isDone){
        this.facilityData.socialInsuranceEmployeesListFileId = ""
      }
      console.log("Deleted res", res)
    })
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
      })
    )
  }
  updateIssuesIsExist(value: boolean) {
    this.issuesIsExist = value as boolean
  }
  observeFacilityDataBS(): void {
    this.subscriptions.push(
      this._facilityProfileService.getFacilityBasicDataBS().subscribe((res: FacilityBasicInfo) => {
        this.facilityData = res as FacilityBasicInfo;
        if (this.facilityData.entity700Number) {
          this.hasEntity700Number = true;
        }
        this.updateFormValues()

      })
    )
  }
  updateFormValues() {
    this.basicInfoForm.patchValue(this.facilityData);
  }
  onUploadCooperativeSocietyLicensingFile($event: any): void {
    if ($event.eventRes.data.length == 0) {
      this.FacilityBasicUpdateInfo.cooperativeSocietyLicensingFileId = "";
      return;
    }
    if ($event.eventRes.data.length == 0) {
      this.FacilityBasicUpdateInfo.cooperativeSocietyLicensingFileId = "";
      return;
    }
    if (!$event.eventRes.data || !$event.eventRes.data.length) return;
    this.FacilityBasicUpdateInfo.cooperativeSocietyLicensingFileId = $event.eventRes.data[0].id;
  }


  onUploadQualificationIssuesDocumentCreateUpdateDtoFile($event: any): void {
    if ($event.eventRes.data.length == 0) {
      this.FacilityBasicUpdateInfo.qualificationIssuesDocumentCreateUpdateDtos = [];
      return;
    }
    let issueFileDate = {
      id: "00000000-0000-0000-0000-000000000000",
      facilityId: this.userData?.facilities[0].id as string,
      fileManagerId: $event.eventRes.data[0].id
    }
    this.FacilityBasicUpdateInfo.qualificationIssuesDocumentCreateUpdateDtos = [];
    this.FacilityBasicUpdateInfo.qualificationIssuesDocumentCreateUpdateDtos.push(issueFileDate)
  }
  onUploadCompanyEstablishingContractFile($event: any): void {
    if ($event.eventRes.data.length == 0) {
      this.facilityData.companyEstablishingContractFileId = "";
      return;
    }
    this.facilityData.companyEstablishingContractFileId = $event.eventRes.data[0].id
  }
  onUploadSocialInsuranceEmployeesFile($event: any): void {
    if ($event.eventRes.data.length == 0) {
      this.facilityData.socialInsuranceEmployeesListFileId = "";
      return;
    }
    this.facilityData.socialInsuranceEmployeesListFileId = $event.eventRes.data[0].id
  }
  updateBrokerRentDocumentType(type: any) {
    if (type === 2) {
      this.brokerRentDocumentType = true
    } else {
      this.brokerRentDocumentType = false
    }
  }
  submitBasicInfoForm(): void {
    if(!this.basicInfoForm.valid)
    {
      this.toastService.showError('نأمل ادخال كل الحقول اللازمة واعادة المحاولة');
      return;
    }

    if(this.basicInfoForm.valid){
    this.FacilityBasicUpdateInfo.id = this.userData?.facilities[0].id as string
    // this.FacilityBasicUpdateInfo.chamberOfCommerceMembershipNumber = this.basicInfoForm.getRawValue().chamberOfCommerceMembershipNumber as string
    this.FacilityBasicUpdateInfo.entity700Number = this.basicInfoForm.value.entity700Number as string
    this.FacilityBasicUpdateInfo.previouslyQualifiedFacilityEntity700Number = this.basicInfoForm.value.previouslyQualifiedFacilityEntity700Number as string
    this.FacilityBasicUpdateInfo.chamberOfCommerceMembershipNumber = this.basicInfoForm.value.chamberOfCommerceMembershipNumber as string
    this.FacilityBasicUpdateInfo.cityId = this.basicInfoForm.value.cityId as string
    this.FacilityBasicUpdateInfo.socialInsuranceCertificateNumber = this.basicInfoForm.value.socialInsuranceCertificateNumber as string
    this.FacilityBasicUpdateInfo.previouslyQualifiedFacilityCommercialRegistrationNumber = this.basicInfoForm.value.previouslyQualifiedFacilityCommercialRegistrationNumber as string
    this.FacilityBasicUpdateInfo.companyCodeInFinancialMarket = this.basicInfoForm.value.companyCodeInFinancialMarket as string
    this.FacilityBasicUpdateInfo.saudiAuthorityOfEngineersLicenseNumber = this.basicInfoForm.value.saudiAuthorityOfEngineersLicenseNumber as string
    this.FacilityBasicUpdateInfo.saudiAuthorityForAuditorsAndAccountants = this.basicInfoForm.value.saudiAuthorityForAuditorsAndAccountants as string

    this.FacilityBasicUpdateInfo.website = this.basicInfoForm.value.website as string

    this.FacilityBasicUpdateInfo.isIssuesExist = this.issuesIsExist;

    if (this.facilityData.companyEstablishingContractFileId) {
      this.FacilityBasicUpdateInfo.companyEstablishingContractFileId = this.facilityData.companyEstablishingContractFileId
    }
    if (this.facilityData.socialInsuranceEmployeesListFileId) {
      this.FacilityBasicUpdateInfo.socialInsuranceEmployeesListFileId = this.facilityData.socialInsuranceEmployeesListFileId
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
