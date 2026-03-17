import { Component } from '@angular/core';
import { VisitorEngineeringConsultantDto } from '../../dataModels/visitor-engineering-consultant-dto';
import { Subscription } from 'rxjs';
import { environment } from 'src/environments/environment';
import { FileUploader } from 'src/app/shared/models/file-uploader.model';
import { FormBuilder, Validators } from '@angular/forms';
import { SharedLicenseProjectService } from '../../services/sharedLicenseProject/shared-license-project.service';
import { NextAndPreviusButtonsService } from '../../services/next-and-previous-buttons/next-and-previus-buttons.service';
import { VisitorEngineeringConsultantService } from '../../services/visitor-engineering-consultant.service';
import { Configuration } from 'src/app/core/configurations/shared.config';
import { ToastrNotificatioService } from 'src/app/core/services/toastr-notification/toastr-notificatio.service';
import { customerResponse } from 'src/app/shared/models/customer.model';
import { UserDataService } from 'src/app/core/services/user-data/user-data.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-visitor-engineering-consultant',
  templateUrl: './visitor-engineering-consultant.component.html',
  styleUrls: ['./visitor-engineering-consultant.component.scss']
})
export class VisitorEngineeringConsultantComponent {
  licenseProjectId: string = "";
  visitorEngineeringConsultantDto: VisitorEngineeringConsultantDto = new VisitorEngineeringConsultantDto();
  subscriptions: Subscription[] = [];
  showValidation: boolean = false;
  baseUrl = `${environment.baseURL}/`;
  singleFilesUploaderData: FileUploader = {
    multiple: false
  } as FileUploader;
  isExistingValidation:boolean=false;
  userData: customerResponse | null = null;
  licenseProjectVisitorEngineeringConsultantForm = this._formBuilder.group({
    id: [''],
    engineeringConsultantLicenseNumber: this._formBuilder.control<string | null>(null, [Validators.required, Validators.pattern(Configuration.validators.decimal), Validators.min(0)]),
    commercialRegisterNumber: this._formBuilder.control<string | null>(null, [Validators.required, Validators.pattern(Configuration.validators.decimal), Validators.min(0)]),
    facilityName: this._formBuilder.control<string | null>(null, [Validators.required]),
    facilityType: this._formBuilder.control<string | null>(null, [Validators.required]),
    agreementFileId: this._formBuilder.control<string | null>(null, [Validators.required])
  });
  localization = {
    title: 'الاستشاري الهندسي الزائر ',
    engineeringConsultantLicenseNumber: "رقم رخصة للاستشاري الهندسي",
    commercialRegisterNumber: "رقم السجل التجاري",
    facilityName: "اسم المنشأة",
    facilityType: "نوع المنشأة",
    agreementFile: "عقد الاستشاري الزائر ",
    requiredErrorMsg: 'حقل مطلوب',
    yes: 'نعم',
    no: 'لا',
    savedSuccessfully: 'تم الحفظ',
    PleaseAddAllRequiredFields: 'نأمل ادخال كل الحقول اللازمة واعادة المحاولة',
  };
  constructor(
    private _visitorEngineeringConsultantService: VisitorEngineeringConsultantService,
    private _sharedLicenseProjectService: SharedLicenseProjectService,
    private _nextAndPreviusButtonsService: NextAndPreviusButtonsService,
    private _formBuilder: FormBuilder,
    private _toastrNotificationService: ToastrNotificatioService,
    private _userDataService: UserDataService,
    private _toastrService: ToastrService,
  ) { }

  ngOnInit(): void {
    this.getCustomerData();
    this.getLicenseProjectIdStorage();
    this.observeTabsButtons();
    this.updateSaveAsDraftBtnIsvisible()
  }
  getCustomerData() {

    this._userDataService.getCustomerData().subscribe((res: customerResponse | null) => {
      this.userData = res;    
      this.isExistingValidation=this.userData?.isEmployee as boolean;
    })
  }
  private getLicenseProjectIdStorage(): void {
    this.licenseProjectId = this._sharedLicenseProjectService.getLicenseProjectIdStorage() as string;
    this.GetByLicenseProjectId();
  }

  GetByLicenseProjectId() {
    this.subscriptions.push(
      this._visitorEngineeringConsultantService.GetVisitorEngineeringConsultantByLicenseProjectId(this.licenseProjectId as string).subscribe((res) => {
        this.visitorEngineeringConsultantDto = res.data as VisitorEngineeringConsultantDto;
        this.setResponseToForm(this.visitorEngineeringConsultantDto);
      }));
  }

  setResponseToForm(res: VisitorEngineeringConsultantDto): void {
    this.licenseProjectVisitorEngineeringConsultantForm.patchValue(res as any);
  }

  get controls() {
    return this.licenseProjectVisitorEngineeringConsultantForm.controls;
  }

  save(moveToNextTab: boolean = false): void {
    if(!this.isExistingValidation){
    if (!this.licenseProjectVisitorEngineeringConsultantForm.valid) {
      this.showValidation = true;
      this._toastrNotificationService.showError(this.localization.PleaseAddAllRequiredFields);
      this.licenseProjectVisitorEngineeringConsultantForm?.markAllAsTouched();
      return;
    }
  }
    this.visitorEngineeringConsultantDto = this.licenseProjectVisitorEngineeringConsultantForm.value as VisitorEngineeringConsultantDto;
    if (!this.visitorEngineeringConsultantDto.id) this.visitorEngineeringConsultantDto.id = '00000000-0000-0000-0000-000000000000';
    this.visitorEngineeringConsultantDto.licenseProjectId = this.licenseProjectId;
    this.subscriptions.push(
      this._visitorEngineeringConsultantService.SaveVisitorEngineeringConsultant(this.visitorEngineeringConsultantDto).subscribe(res => {
        if (res) {
          
          this._toastrService.success("تم الحفظ")
          this.visitorEngineeringConsultantDto = res.data as VisitorEngineeringConsultantDto;
          if (moveToNextTab) this.moveToNextTab()
        }
      })
    )
  }

  onExistAgreementtFileUploaded(filesData: any) {
    if (filesData.eventRes.data.length === 0) {
      this.licenseProjectVisitorEngineeringConsultantForm.controls.agreementFileId.setValue(null);
      return;
    }
    if (!filesData.eventRes.data || !filesData.eventRes.data.length) return;
    this.licenseProjectVisitorEngineeringConsultantForm.controls.agreementFileId.setValue(filesData.eventRes.data[0].id);
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
  ngOnDestroy(): void {
    this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe())
  }
}
