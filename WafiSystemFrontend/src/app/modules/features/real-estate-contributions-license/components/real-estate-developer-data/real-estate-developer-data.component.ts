import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription, forkJoin } from 'rxjs';
import { ProjectRealStateDeveloperDto } from '../../dataModels/project-real-state-developer.dto';
import { environment } from 'src/environments/environment';
import { FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Configuration } from 'src/app/core/configurations/shared.config';
import { ProjectRealStateDeveloperService } from '../../services/licenseProjects/project-real-state-developer.service';
import { facilityDTO } from '../../../qualifying/dataModels/request-details.model';
import { SharedLicenseProjectService } from '../../services/sharedLicenseProject/shared-license-project.service';
import { NextAndPreviusButtonsService } from '../../services/next-and-previous-buttons/next-and-previus-buttons.service';
import { FileUploader } from 'src/app/shared/models/file-uploader.model';
import { Customer } from '../../../qualifying/dataModels/customer.model';
import { TabCode } from '../../models/tab-code.model';
import { DataVisibilityOfLicenseProjectService } from '../../services/data-visibility-of-license-project/data-visibility-of-license-project.service';
import { CustomerShortDto } from '../../models/facility-short-dto';
import { ToastrNotificatioService } from 'src/app/core/services/toastr-notification/toastr-notificatio.service';
import { UserDataService } from 'src/app/core/services/user-data/user-data.service';
import { customerResponse } from 'src/app/shared/models/customer.model';
import { SysFileManagerCreateUpdateDto } from 'src/app/shared/models/sys-file-manager-create-update-dto';

@Component({
  selector: 'app-real-estate-developer-data',
  templateUrl: './real-estate-developer-data.component.html',
  styleUrls: ['./real-estate-developer-data.component.scss']
})

export class RealEstateDeveloperDataComponent implements OnInit, OnDestroy {
  subscriptions: Subscription[] = [];
  projectRealStateDeveloper: ProjectRealStateDeveloperDto = new ProjectRealStateDeveloperDto();
  facilityFullData!: facilityDTO;
  customerDate: Customer | null = null;
  baseUrl = `${environment.baseURL}/`;
  licenseProjectId: string | null = "00000000-0000-0000-0000-000000000000";
  showValidation: boolean = false;
  signModelFileId: string | null = "00000000-0000-0000-0000-000000000000";
  paymentReceiptFile: SysFileManagerCreateUpdateDto | null = null;
  get tabCode() {
    return TabCode
  }

  dataSection: any = {
    [TabCode.facilityInfo]: false,
    [TabCode.licenseProjectFacilityAddress]: false,
    [TabCode.customerInfo]: false,
    [TabCode.licenseProjectExecutiveDirector]: false,
    [TabCode.licenseProjectContactOfficer]: false,
    [TabCode.licenseProjecFinalBeneficiaryContactInformation]: false
  }
  constructor(
    private _projectRealStateDeveloperService: ProjectRealStateDeveloperService,
    private _formBuilder: FormBuilder,
    private _toastrService: ToastrNotificatioService ,
    private _userDataService: UserDataService,
    private _sharedLicenseProjectService: SharedLicenseProjectService,
    private _nextAndPreviusButtonsService: NextAndPreviusButtonsService,
    private _dataVisibilityOfLicenseProjectService: DataVisibilityOfLicenseProjectService,
  ) { }

  projectRealStateDeveloperForm = this._formBuilder.group({
    id: ['00000000-0000-0000-0000-000000000000', [Validators.required]],
    //المدير التنفيذي (اجباري)
    executiveDirectorName: [''],
    executiveDirectorEmail: ['', [Validators.email]],
    executiveDirectorMobile: ['', [Validators.pattern(Configuration.validators.PhoneNumber), Validators.maxLength(10), Validators.minLength(10) ,Validators.pattern(Configuration.validators.numberOnly)]],
    //ضابط الاتصال (اجباري)
    contactOfficerName: [''],
    contactOfficerEmail: ['', [Validators.email]],
    contactOfficerMobile: ['', [Validators.pattern(Configuration.validators.PhoneNumber), Validators.maxLength(10), Validators.minLength(10) ,Validators.pattern(Configuration.validators.numberOnly)]],
    // بيانات التواصل للمستفيد النهانى
    complaintEmail: ['', [Validators.email,Validators.required]],
    salesEmail: ['', [Validators.email,Validators.required]],
    //بيانات المفوض
    delegatorCustomerId:[''],
    paymentReceiptFileId:['']
  })
  get controls() {
    return this.projectRealStateDeveloperForm.controls;
  }
  singleFileUploaderData: FileUploader = {
    multiple: false,
  } as FileUploader;
  subCustomerList :CustomerShortDto[]=[];
  userData: customerResponse | null = null;
  isExistingValidation:boolean=false;
  ngOnInit() {
    this.getCustomerData()
    this.getLicenseProjectIdStorage()
    this.observeForm();
    this.loadComponentData();
    this.observeTabsButtons();
    this.updateSaveAsDraftBtnIsvisible();
    this.getDataVisibilityOfDataSection();
  }
  onFileUploaded(file: any) {
    debugger
    this.projectRealStateDeveloperForm.controls.paymentReceiptFileId.setValue(file.eventRes.data[0].id);
  }
  getCustomerData() {

    this._userDataService.getCustomerData().subscribe((res: customerResponse | null) => {
      this.userData = res;    
      this.isExistingValidation=this.userData?.isEmployee as boolean;
    })
  }
  private getLicenseProjectIdStorage(): void {
    this.licenseProjectId = this._sharedLicenseProjectService.getLicenseProjectIdStorage();
  }
  localization = {
    PleaseAddAllRequiredFields:
      'نأمل ادخال كل الحقول اللازمة واعادة المحاولة',
    title: 'بيانات مقدم الطلب',
    goTo: 'اذا كنت تريد تعديل البيانات نأمل الذهاب إلي صفحة ',
    city : 'المدينة',
    area : 'المنطقة',
    problemsEmail : 'بريد إلكتروني خاص بالشكاوى',
    salesEmail : 'بريد إلكتروني خاص بالمبيعات',
    name: 'الاسم',
    paymentReciept:'فاتورةالسداد',
    email: 'البريد الإلكتروني',
    mobile: 'رقم الجوال',
    facilityData: 'بيانات المنشأة',
    executiveDirectorData: 'بيانات المدير التنفيذي',
    contactOfficerData: 'بيانات ضابط الاتصال',
    requiredErrorMsg: 'حقل مطلوب',
    save: 'حفظ كمسودة',
    savedSuccessfully: 'تم الحفظ',
    phoneNumberPattern: 'من فضلك ادخل رقم جوال صحيح',
    emailPattern: 'من فضلك ادخل البريد الإلكتروني صحيح',
    send: "إرسال الطلب",
    next: 'التالي',
    orderDate : 'تاريخ تقديم الطلب',
    CommercialRegisterNo: '',
    identityNumberecommerceroom : 'رقم عضوية الغرفة التجارية',
    CreatDate  : 'تاريخ إصدار شهادة سلامة السجل الائتماني',
    finalBeneficiaryContactDetail: 'بيانات  التواصل للمستفيد النهائي',
    facilityAddress: "عنوان شركة المطور العقاري",
    applicantData: "بيانات مقدم الطلب (مالك الحساب /مفوض)",
    applicantName: "اسم مقدم الطلب (المفوض)",
    applicantJobTitle: "منصب المفوض",
    delegator:"بيانات المفوض",
    mobileCompany1 : '1 هاتف الشركة ',
    selectDelegator:"اختر مفوض",
    companyType : 'نوع الشركة',
    companyName : 'اسم الشركة',
    identityFile : "ملف شهادة السجل الائتماني",
    maxLengthErrorMsg : "length must not be more than 20"
  };
  private loadComponentData() {
    let facilityId=this.userData?.isEmployee?'00000000-0000-0000-0000-000000000000':this.userData?.facilities[0].id!;
    const requests = [
      this._projectRealStateDeveloperService.GetProjectRealStateDeveloperByLicenseProjectId(this.licenseProjectId as string),
      // this._projectRealStateDeveloperService.GetSubCustomers(),     
        this._projectRealStateDeveloperService.GetFacilitySubCustomers(facilityId),
      
    ];

    const subscriptions = forkJoin(requests).subscribe((results) => {
      this.projectRealStateDeveloper = results[0] as ProjectRealStateDeveloperDto;
      if (this.projectRealStateDeveloper.licenseRequestHeaders && this.projectRealStateDeveloper.licenseRequestHeaders.length > 0
        && this.projectRealStateDeveloper.licenseRequestHeaders[0].licenseRequestVersions && this.projectRealStateDeveloper.licenseRequestHeaders[0].licenseRequestVersions.length > 0) {
        console.log("this.projectRealStateDeveloper", this.projectRealStateDeveloper)
        console.log("this.projectRealStateDeveloper", "requestOn", this.projectRealStateDeveloper.licenseRequestHeaders[0].licenseRequestVersions[0].requestOn)
      }
      this.setResponseToForm(results[0] as ProjectRealStateDeveloperDto);
      
      this.subCustomerList= results[1]  as CustomerShortDto[];
    });

    this.subscriptions.push(subscriptions);
  }
  setResponseToForm(res: ProjectRealStateDeveloperDto): void {
    this.projectRealStateDeveloperForm.patchValue({ ...res });
    this.facilityFullData = { ...res?.licenseRequestHeaders[0].facility };
    this.customerDate = { ...res?.licenseRequestHeaders[0].customer }
    this.paymentReceiptFile = res.paymentReceiptFile;
  }
  observeForm(): void {
    this.subscriptions.push(
      this.projectRealStateDeveloperForm.valueChanges.subscribe(changes => {
        this.projectRealStateDeveloper = this.projectRealStateDeveloperForm.value as ProjectRealStateDeveloperDto;
      })
    )
  }

  save(moveToNextTab: boolean = false): void {
    if(!this.isExistingValidation){
    if (!this.projectRealStateDeveloperForm.valid) {
      this._toastrService.showError(this.localization.PleaseAddAllRequiredFields);
      this.showValidation = true;
      return;
    }
    }
    console.log("this.projectRealStateDeveloperForm",this.projectRealStateDeveloperForm);
    
    if (!this.projectRealStateDeveloper.id) this.projectRealStateDeveloper.id = '00000000-0000-0000-0000-000000000000';
   
    this.subscriptions.push(
      this._projectRealStateDeveloperService.SaveProjectRealStateDeveloper(this.projectRealStateDeveloper).subscribe(res => {
        if (res.isDone) {
          this._toastrService.showSuccess(this.localization.savedSuccessfully)
          this.setResponseToForm(res.data as ProjectRealStateDeveloperDto);
          if (moveToNextTab) this.moveToNextTab()

        }
        else
          this._toastrService.showError(res.message);
      })
    )
  }
  // TabsButtons
  private observeNextButtonIsCliced() {
    this.subscriptions.push(
      this._nextAndPreviusButtonsService.nextButtonIsClicked.subscribe((res: null) => {
        this.save(true)
      })
    )
  }
  private observeSaveAsDraftIsClicked() {
    this.subscriptions.push(
      this._nextAndPreviusButtonsService.saveAsDraftIsClicked.subscribe((res: null) => {
        this.save()
      })
    )
  }
  private observeTabsButtons(): void {
    this.observeNextButtonIsCliced();
    this.observeSaveAsDraftIsClicked()
  }
  private moveToNextTab(): void {
    this._nextAndPreviusButtonsService.moveToNextTab.emit()
  }
  private updateSaveAsDraftBtnIsvisible(): void {
    this._nextAndPreviusButtonsService.saveAsDraftBtnIsvisible.next(true)
  }
  getDataVisibilityOfDataSection(): void {
    this.subscriptions.push(
      this._dataVisibilityOfLicenseProjectService.getDataVisibilityOfLicenseProject().subscribe((res: string[]) => {
        Object.keys(this.dataSection).forEach(section => {
          if (res.includes(section as string)) {
            this.dataSection[section as string] = true;
            if (section == TabCode.licenseProjectExecutiveDirector) {
              this.controls.executiveDirectorName.addValidators(Validators.required);
              this.controls.executiveDirectorEmail.addValidators(Validators.required);
              this.controls.executiveDirectorMobile.addValidators(Validators.required);
            } else if (section == TabCode.licenseProjectContactOfficer) {
              this.controls.contactOfficerName.addValidators(Validators.required)
              this.controls.contactOfficerEmail.addValidators(Validators.required)
              this.controls.contactOfficerMobile.addValidators(Validators.required)
            }
          }
        });
      })
    )
  }

  ngOnDestroy() {
    this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe());
  }
}