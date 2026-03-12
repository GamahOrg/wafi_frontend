import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { AccountantFilesCreateOrUpdateDto, CreateOrUpdateAccountantRequestDto } from '../../models/license-accountant-request-model/create-or-update-license-accountant-dto';
import { LicenseAccountantRequestService } from '../../services/license-account-request-service/license-account-request-service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserDataService } from 'src/app/core/services/user-data/user-data.service';
import { Subscription } from 'rxjs';
import { LincenseRequestProjectService } from '../../../license-project-requests/services/lincense-request-project.service';
import { FileUploader } from 'src/app/shared/models/file-uploader.model';
import { customerResponse } from '../../models/employee-registration-dto';
import { licenseProjectByFacilityIdDto } from '../../models/license-project-by-facilityid-dto';
import { ToastrNotificatioService } from 'src/app/core/services/toastr-notification/toastr-notificatio.service';
import { LicenseAccountantNameDto } from '../../models/license-accountant-request-model/license-account-name-dto';
import { Configuration } from 'src/app/core/configurations/shared.config';
import { LicenseProjectEngineeringConsultantService } from '../../services/license-project-engineering-consultant.service';
import { QualificationTypeCode } from 'src/app/core/enums/qualification-type-code';

@Component({
  selector: 'app-add-edit-accountant-request',
  templateUrl: './add-edit-accountant-request.component.html',
  styleUrls: ['./add-edit-accountant-request.component.scss'],
})
export class AddEditAccountantRequestComponent implements OnInit, OnDestroy {
  form: FormGroup;
  showValidation: boolean = true;
  subscriptions: Subscription[] = [];
  showCommercialRegister: boolean = false;
  licenseProjects: licenseProjectByFacilityIdDto[] = [];
  accountNameDto: LicenseAccountantNameDto | undefined ;
  mueltiFilesUploaderData: FileUploader = {
    multiple: true,
  } as FileUploader;
  singleFilesUploaderData: FileUploader = {
    multiple: false,
  } as FileUploader;

  @Input()licenseProjectId: string = '00000000-0000-0000-0000-000000000000';
  @Input() facilityId: string = '00000000-0000-0000-0000-000000000000';
  @Input() isClearanceAccountantDone: boolean = false;
  @Input() clearanceAccountantFileId: string = '00000000-0000-0000-0000-000000000000';
  @Input() reasonsForNotFinalizingAccountantClearance: string = '';
  @Input() justificationsAndReasons: string = '';
  @Input() optionalTerms: string = '';
  @Input() workingDays: number = 0;
  @Input() agreementDocumentFileId: string = '00000000-0000-0000-0000-000000000000';
  @Input() nonClearanceDocumentAccountantFiles: AccountantFilesCreateOrUpdateDto[] = [];
  @Input() commercialRegister: number = 0;
  code: QualificationTypeCode = QualificationTypeCode.CharteredAccountant;

  constructor(
    private accountantRequestService: LicenseAccountantRequestService,
    private _formBuilder: FormBuilder,
    private _userDataService: UserDataService,
    private _toastrNotificationService: ToastrNotificatioService,
    private _licenseRequestService: LincenseRequestProjectService,
    private _engineeringConsultantService: LicenseProjectEngineeringConsultantService
  ) {
    this.form = this._formBuilder.group({
      isClearanceAccountantDone: [this.isClearanceAccountantDone, Validators.required],
      reasonsForNotFinalizingAccountantClearance: [this.reasonsForNotFinalizingAccountantClearance, Validators.required],
      justificationsAndReasons: [this.justificationsAndReasons , Validators.required],
      licenseProjectId:[null, [Validators.required]],
      commercialRegister: this._formBuilder.control<string | null>(null, [Validators.required, Validators.pattern(Configuration.validators.numberOnly)]),
    });
  }
  get controls() {
    return this.form.controls;
  }
  ngOnInit(): void {
    this.obseveCustomerData();
    this.getLicenseProjectByFacilityId();
    this.obseverAccountName();
  }
  getLicenseProjectByFacilityId(): void {
    this._licenseRequestService
      .getLicenseProjectByFacilityId(this.facilityId)
      .subscribe((response: any) => {
        this.licenseProjects = response || [];
      });
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
  obseverAccountName(): void {
    this.subscriptions.push(
      this.accountantRequestService.getLicenseAccountantNameById(this.licenseProjectId)
        .subscribe((res: any) => {
          this.accountNameDto = res.data;
        })
    );
  }
  onClearanceChangeAccount(value: boolean): void {
    this.isClearanceAccountantDone = value;
    if (value) {
      this.form.get('clearanceAccountantFileId')?.setValidators(Validators.required);
    } else {
      this.form.get('clearanceAccountantFileId')?.clearValidators();
      this.form.get('clearanceAccountantFileId')?.reset();
    }
    this.form.get('clearanceAccountantFileId')?.updateValueAndValidity();
  }
  onNonClearanceDocumentAccountConsultantFilesUpload(filesData: any): void {
    if (filesData.eventRes.data.length == 0){
      this.nonClearanceDocumentAccountantFiles = [];
    }
    if (!filesData.eventRes.data || !filesData.eventRes.data.length) return;
    
    if (!this.nonClearanceDocumentAccountantFiles) {
      this.nonClearanceDocumentAccountantFiles = [];
    }
    filesData.eventRes.data.forEach((data: any) => {
      this.nonClearanceDocumentAccountantFiles.push({
        documentId: data.id,
      });
    });
  }
  clearanceAccountantFileUpload(filesData: any): void {
    if (filesData.eventRes.data.length == 0){
      this.clearanceAccountantFileId = '';
      return;
    }
    if (!filesData.eventRes.data || !filesData.eventRes.data.length) return;
    this.clearanceAccountantFileId = filesData.eventRes.data[0].id
  }
  agreementDocumentFileIdFileUpload(filesData: any): void {
    if (filesData.eventRes.data.length == 0){
      this.agreementDocumentFileId = '';
      return;
    }
    if (!filesData.eventRes.data || !filesData.eventRes.data.length) return;
    this.agreementDocumentFileId = filesData.eventRes.data[0].id
  }
  save() {
    const formData: CreateOrUpdateAccountantRequestDto = {
    isClearanceAccountantDone: this.form.get('isClearanceAccountantDone')?.value,
    clearanceAccountantFileId: this.clearanceAccountantFileId,
    reasonsForNotFinalizingAccountantClearance: this.form.get('reasonsForNotFinalizingAccountantClearance')?.value,
    agreementDocumentFileId: this.form.get('agreementDocumentFileId')?.value,
    workingDays: this.form.get('workingDays')?.value,
    optionalTerms: this.form.get('optionalTerms')?.value,
    nonClearanceDocumentAccountantFiles: this.nonClearanceDocumentAccountantFiles,
    justificationsAndReasons: this.justificationsAndReasons,
  };
    this.accountantRequestService.CreateLicenseAccountant(formData).subscribe((res:any) =>{
      if (res.isDone === true) {
        this._toastrNotificationService.showSuccess('تم الحفظ');
      }
    });
  }
  validate() {
    let commercialRegister = this.controls['commercialRegister'].value;
    if (commercialRegister) {
      this._engineeringConsultantService.validateCommercialRegister(commercialRegister, this.code, this.licenseProjectId)
        .subscribe((result:any) => {
          if (result && result.data) {
              this.showCommercialRegister = result.isDone;
          }
        });
    }
  }
  ngOnDestroy(): void {
    this.subscriptions.forEach((sub) => sub.unsubscribe());
  }
}
