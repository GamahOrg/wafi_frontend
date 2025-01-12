import { LicenseProjectSubDeveloperService } from './../../../services/license-project-sub-developer.service';
import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from "@angular/material/dialog";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Configuration } from "../../../../../../core/configurations/shared.config";
import { BehaviorSubject, Subscription } from "rxjs";
import { CoreResponseDTO } from "../../../../../../core/models/core.model";
import { SysFileManagerCreateUpdateDto } from "../../../../../../shared/models/sys-file-manager-create-update-dto";
import { FileUploader } from "../../../../../../shared/models/file-uploader.model";
import { ToastrNotificatioService } from "../../../../../../core/services/toastr-notification/toastr-notificatio.service";
import { QualificationTypeCode } from "../../../../../../core/enums/qualification-type-code";
import { FacilityShortDto } from '../../../models/facility-short-dto';
import { LicenseProjectSubDeveloperCreateUpdateDto } from '../../../dataModels/license-project-sub-developer/license-project-sub-developer-create-update-dto';
import { ProjectBasicDataDto } from '../../../dataModels/project-basic-data.dto';
import { SharedLicenseProjectService } from '../../../services/sharedLicenseProject/shared-license-project.service';

@Component({
  selector: 'app-create-update-sub-developer',
  templateUrl: './create-update-sub-developer.component.html',
  styleUrls: ['./create-update-sub-developer.component.scss']
})
export class CreateUpdateSubDeveloperComponent implements OnInit {
  form!: FormGroup;
  code = QualificationTypeCode;
  facility: FacilityShortDto = new FacilityShortDto();
  facility$: BehaviorSubject<FacilityShortDto | undefined> = new BehaviorSubject<FacilityShortDto | undefined>(undefined);
  licenseProjectId: string | null = "00000000-0000-0000-0000-000000000000";

  localizations = {
    HasSubDevelopers: "هل يوجد مطور / مطورين عقاريين للمشروع ؟",
    Yes: "نعم",
    No: "لا",
    ValidateConsultant: "التحقق من السجل التجاري",
    AddNewSubDeveloper: "إضافة جديد",
    AddNewSubDeveloperLabel: "إضافة مطور فرعي جديد",
    DeveloperName: "اسم المفوض",
    DeveloperNameRequired: "هذا الحقل مطلوب",
    DeveloperEmail: "البريد الالكترونى للمفوض",
    DeveloperEmailRequired: "هذا الحقل مطلوب",
    DeveloperMobile: "رقم الجوال للمفوض",
    DeveloperMobileRequired: "هذا الحقل مطلوب",
    AgreementFile: "ملف الاتفاقية",
    AgreementFileRequired: "هذا الحقل مطلوب",
    NoData: "لا توجد بيانات",
    DeveloperLabel: "ادخل السجل التجاري للمطور العقاري",
    DeveloperRequired: "هذا الحقل مطلوب",
    Save: "حفظ البيانات",
    DeveloperEmailNoCorrect: "هذا الحقل غير صحيح",
    DeveloperMobileNotCorrect: "هذا الحقل غير صحيح",
    PleaseAddAllRequiredFields: "نأمل ادخال كل الحقول اللازمة واعادة المحاولة",
    delegatorIdentityNumberNoCorrect: "يجب ادخال ارقام فقط",
    delegatorIdentityNumber: "رقم هوية مفوض المطور الفرعي ",
    projectName: "اسم المشروع الفرعي",
    licenseNumber: "رقم رخص المشروع الفرعي ",

  }
  uploadConfig: FileUploader = {
    multiple: false,
  } as FileUploader;


  constructor(public modalRef: MatDialogRef<any>,
    public formGroup: FormBuilder,
    public toastService: ToastrNotificatioService,
    private _sharedLicenseProjectService: SharedLicenseProjectService) { }

  get controls() {
    return this.form.controls;
  }

  setFacility($event: any) {
    this.facility$.next($event.facility);
    this.facility = $event.facility;
  }

  private getLicenseProjectIdStorage(): void {
    this.licenseProjectId = this._sharedLicenseProjectService.getLicenseProjectIdStorage();
  }

  ngOnInit(): void {
    this.getLicenseProjectIdStorage();
    this.form = this.formGroup.group({
      // subDeveloperLicenseProjectId: [''],
      commercialRegister: [
        undefined,
        Validators.compose([Validators.required]),
      ],
      licenseNumber: undefined,
      projectName: undefined,
      // delegatorIdentityNumber: [undefined, Validators.compose([Validators.required])],
      // delegatorName: [undefined, Validators.compose([Validators.required])],
      subDeveloperId: undefined,
      // delegatorEmail: [undefined, Validators.compose([Validators.required
      //   , Validators.email])],
      // delegatorMobile: [undefined, Validators.compose([Validators.required
      //   , Validators.pattern(Configuration.validators.PhoneNumber)])],
      subDeveloperAgreementFileId: [undefined, Validators.compose([Validators.required])]
    });
  }

  onUpload($event: any) {
    let result = $event ?
      $event.eventRes as CoreResponseDTO<SysFileManagerCreateUpdateDto[]> : <any>{};
    let controls = this.form?.controls;
    if (controls) {
      let control = controls['subDeveloperAgreementFileId'];
      let value = result.data ? result.data[0].id : undefined;
      control.setValue(value);
    }
  }

  save() {
    let facility = this.facility$.value;
    if (this.form?.invalid) {
      this.toastService.showError(this.localizations.PleaseAddAllRequiredFields);
      this.form?.markAllAsTouched();
      return;
    }
    if (facility)
      this.form.get('subDeveloperId')?.setValue(facility?.id as string);
    this.modalRef.close(this.form?.value);
  }

}
