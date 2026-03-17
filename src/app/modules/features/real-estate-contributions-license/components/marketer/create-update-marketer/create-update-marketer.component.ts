import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from "@angular/material/dialog";
import { FormArray, FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Configuration } from "../../../../../../core/configurations/shared.config";
import { CoreResponseDTO } from "../../../../../../core/models/core.model";
import { SysFileManagerCreateUpdateDto } from "../../../../../../shared/models/sys-file-manager-create-update-dto";
import { FileUploader } from "../../../../../../shared/models/file-uploader.model";
import { ToastrNotificatioService } from "../../../../../../core/services/toastr-notification/toastr-notificatio.service";
import { BehaviorSubject } from "rxjs";
import { QualificationTypeCode } from "../../../../../../core/enums/qualification-type-code";
import { FacilityShortDto } from '../../../models/facility-short-dto';

@Component({
  selector: 'app-create-update-marketer',
  templateUrl: './create-update-marketer.component.html',
  styleUrls: ['./create-update-marketer.component.scss']
})
export class CreateUpdateMarketerComponent implements OnInit {
  form!: FormGroup;
  code = QualificationTypeCode;
  facility: FacilityShortDto = new FacilityShortDto();
  localizations = {
    HasSubDevelopers: "هل يوجد مطور / مطورين عقاريين للمشروع ؟",
    Yes: "نعم",
    No: "لا",
    AddNewSubDeveloper: "إضافة جديد",
    AddNewMarketer: "إضافة مسوق عقاري جديد",
    AddNewSubDeveloperLabel: "إضافة مطور فرعي جديد",
    DeveloperName: "اسم المفوض",
    DeveloperNameRequired: "هذا الحقل مطلوب",
    ValidateConsultant: "التحقق من السجل التجاري",
    DeveloperEmail: "البريد الالكترونى للمفوض",
    DeveloperEmailRequired: "هذا الحقل مطلوب",
    LicenseNumber: "رقم الرخصة",
    LicenseNumberRequired: "رقم الرخصة مطلوب",
    DeveloperMobile: "رقم الجوال للمفوض",
    DeveloperMobileRequired: "هذا الحقل مطلوب",
    AgreementFile: "عقود المسوق عقاري ",
    AgreementFileRequired: "هذا الحقل مطلوب",
    NoData: "لا توجد بيانات",
    DeveloperLabel: "ادخل السجل التجاري للمسوق",
    DeveloperRequired: "هذا الحقل مطلوب",
    Save: "حفظ البيانات",
    DeveloperEmailNoCorrect: "هذا الحقل غير صحيح",
    DeveloperMobileNotCorrect: "هذا الحقل غير صحيح",
    PleaseAddAllRequiredFields: "نأمل ادخال كل الحقول اللازمة واعادة المحاولة",
    MinValueError: 'قيمة الحقل يجب الا تقل عن صفر',
  }
  facility$: BehaviorSubject<FacilityShortDto | undefined> = new BehaviorSubject<FacilityShortDto | undefined>(undefined);
  mueltiFilesUploaderData: FileUploader = {
    multiple: true
  } as FileUploader;

  constructor(public modalRef: MatDialogRef<any>,
    public formGroup: FormBuilder,
    public toastService: ToastrNotificatioService,
    private _formBuilder: FormBuilder) {
  }

  get controls() {
    return this.form.controls;
  }
  get realStateMarketerAgreementFiles(): FormArray {
    return this.form.get('realStateMarketerAgreementFiles') as FormArray;
  };
  setFacility($event: any) {
    this.facility$.next($event.facility);
    this.facility = $event.facility;
  }

  ngOnInit(): void {
    this.form = this.formGroup.group({
      realStateMarketerId: [undefined],
      commercialRegister: [undefined, Validators.compose([Validators.required]),],
      licenseNumber: [''],
      realStateMarketerAgreementFiles: this._formBuilder.array([])
    });
  }

  onUpload($event: any) {
    if ($event.eventRes.data.length === 0) {
      let controls = this.form?.controls;
      if (controls) {
        let control = controls['realStateMarketerAgreementFiles'];
        control.setValue(null);
      }
      return;
    }

    let result = $event ?
      $event.eventRes as CoreResponseDTO<SysFileManagerCreateUpdateDto[]> : <any>{};
    let controls = this.form?.controls;
    if (controls) {
      const realStateMarketerAgreementFiles = controls['realStateMarketerAgreementFiles'];
      let list = result.data ? result.data : undefined;
      if (list) {
        list.forEach((value: any) => {

          if (!realStateMarketerAgreementFiles.value.includes(value)) {

            this.realStateMarketerAgreementFiles.push(this._formBuilder.control(value.id));
          }
        });
      }
    }
  }
  save() {
    console.log("this.form", this.form)
    if (this.form.value.licenseNumber || this.form.value.realStateMarketerAgreementFiles) {
      let facility = this.facility$.value;
      if (this.form?.invalid) {
        this.toastService.showError(this.localizations.PleaseAddAllRequiredFields);
        this.form?.markAllAsTouched();
        return;
      }
      if (facility)
        this.form.value.realStateMarketerId = facility.id;
      this.modalRef.close(this.form?.value);
    } else {
      this.toastService.showError("يجب ادخال حقل على الاقل");

    }
  }
}
