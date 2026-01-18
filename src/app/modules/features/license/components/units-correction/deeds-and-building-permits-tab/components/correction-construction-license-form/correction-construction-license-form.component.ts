import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { BaladyDto, ConstructionLicenseCreateUpdateDto, ConstructionLicenseDto, ConstructionLicenseIntegrationDto } from'../../../../../dataModels/construction-license.dto';
import { environment } from 'src/environments/environment';
import { AbstractControl, FormBuilder, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { PopupService } from 'src/app/shared/services/popup/popup.service';
import { DatePipe } from '@angular/common';
import { FileUploader } from 'src/app/shared/models/file-uploader.model';
import { PopupData } from 'src/app/shared/models/popup.model';
import { ToastrNotificatioService } from 'src/app/core/services/toastr-notification/toastr-notificatio.service';
import { ConstructionLicenseService } from 'src/app/modules/features/license/services/licenseProjects/construction-license.service';

@Component({
  selector: 'app-correction-construction-license-form',
  templateUrl: './correction-construction-license-form.component.html',
  styleUrls: ['./correction-construction-license-form.component.scss']
})

export class CorrectionConstructionLicenseFormComponent implements OnInit, OnDestroy {
  subscriptions: Subscription[] = [];
  constructionLicense: ConstructionLicenseDto = new ConstructionLicenseDto();
  Balady: BaladyDto = new BaladyDto();
  constructionLicenseIntegrationDto: ConstructionLicenseIntegrationDto = new ConstructionLicenseIntegrationDto();
  baseUrl = `${environment.baseURL}/`;
  showValidation: boolean = false;
  showAfter: boolean = false;
  showBefor: boolean = false;
  showLandArea: boolean = false;
  constructor(private _constructionLicenseService: ConstructionLicenseService,
    private _formBuilder: FormBuilder,
    private _popupService: PopupService,
    private datePipe: DatePipe,
    private _changeDetectorRef: ChangeDetectorRef,
    private _toastrNotificationService: ToastrNotificatioService,) {
  }

  singleFileUploaderData: FileUploader = {
    multiple: true,
  } as FileUploader;
  constructionLicenseForm = this._formBuilder.group({
    id: ['00000000-0000-0000-0000-000000000000', [Validators.required]],
    licenseProjectsId: ['', [Validators.required]],
    constructionLicenseType: [1],
    issueOn: ['', [Validators.required]],
    licenseFileId: ['', [Validators.required]],
    licenseNumber: [''],
    landTotalSpace: [0],
  })
  get controls() {
    return this.constructionLicenseForm.controls;
  }
  ngOnInit() {
    this.observeForm();
    this._constructionLicenseService.getSubjectObj().subscribe((subjectObj) => {
      this.constructionLicense = subjectObj;
      this.setResponseToForm(this.constructionLicense);
    })
    this.observePopupEvents();
    this.observeIssueOnControl()
  }

  localization = {
    title: 'بيانات الرخص الانشائية',
    constructionLicensetype: 'نوع الرخص الانشائية',
    issueOn: 'تاريخ الرخصة',
    licenseType: 'نوع الرخصة',
    letterType: 'خطاب من مركز خدمات المطور "إتمام" او اى جهة مختصة بتراخيص البناء',
    letterTypeFile: 'ملف خطاب من مركز خدمات المطور "إتمام" او اى جهة مختصة بتراخيص البناء',
    licenseNumberType: 'الرخص الانشائية الصادرة من بلدى',
    licenseFile: 'ملفات الرخصة الانشائية',
    validateLicenseFile: 'يجب اختيار ملفات الرخصة الانشائية',
    licenseNumber: 'رقم الرخصة',
    landTotalSpace: 'مساحة مسطح البناء للمشروع',
    before7: 'قبل 1-7',
    after7: 'بعد 1-7',
    requiredErrorMsg: 'حقل مطلوب',
    save: 'حفظ البيانات',
    savedSuccessfully: 'تم الحفظ',
    validateSuccessfully: 'تم التحقق من الرخصة بنجاح',
    dateValidator: 'يجب ان يكون تاريخ الرخصة اقل من تاريخ الحالي',
    PleaseAddAllRequiredFields: 'نأمل ادخال كل الحقول اللازمة واعادة المحاولة',
    verify: 'تحقق من الرخصة',

  };

  setResponseToForm(res: ConstructionLicenseDto): void {
    if (res && res.issueOn) {
      res.issueOn = this.datePipe.transform(new Date(res.issueOn), 'yyyy-MM-dd') as any;
    }

    this.constructionLicenseForm.patchValue({ ...res });
    this._changeDetectorRef.detectChanges()
    this.constructionLicense = res;
  }

  observeForm(): void {
    this.subscriptions.push(
      this.constructionLicenseForm.valueChanges.subscribe(changes => {
        this.constructionLicense = this.constructionLicenseForm.value as ConstructionLicenseDto;
      }));
  }

  private observeIssueOnControl() {
    this.subscriptions.push(
      this.constructionLicenseForm.controls.issueOn.valueChanges.subscribe(value => {
        if (value) {
          this.setBefor7(value);

        }
      }));
  }

  ngOnDestroy() {
    this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe());
  }

  observePopupEvents(): void {
    this.observecancelAction()
    this.observeconfirmAction()
  }

  private observecancelAction() {
    this.subscriptions.push(
      this._popupService.cancelAction.subscribe((res: PopupData) => {
        this._popupService.dismissDialog();
      })
    )
  }

  private observeconfirmAction() {
    this.subscriptions.push(
      this._popupService.confirmAction.subscribe((res: PopupData) => {
        this.save();
      })
    )
  }

  onFileUploaded(fileData: any) {
    this.constructionLicense.licenseFileId = fileData.eventRes.data[0].id;
    this.controls.licenseFileId.setValue(fileData.eventRes.data[0].id);
    this.constructionLicense.licenseFile = null;
  }

  validateConstructionLicenseInfo(): void {
    this.constructionLicenseForm.get('licenseFileId')?.clearValidators();
    this.constructionLicenseForm.get('licenseFileId')?.updateValueAndValidity();
    // this.constructionLicenseForm.updateValueAndValidity();
    if (!this.controls.issueOn.valid || !this.controls.licenseNumber.valid) {
      this.showValidation = true;
      this._toastrNotificationService.showError(this.localization.PleaseAddAllRequiredFields);
      return;
    }

    if (this.constructionLicense.issueOn)
      this.Balady.issueOn = this.constructionLicense.issueOn;

    this.Balady.licenseNumber = this.constructionLicense.licenseNumber;
    this.subscriptions.push(
      this._constructionLicenseService.ValidateConstructionLicenseInfo(this.Balady).subscribe(res => {
        if (res.isDone) {
          this.constructionLicenseIntegrationDto = res.data as ConstructionLicenseIntegrationDto;
          let landArea = 0;
          if (this.constructionLicenseIntegrationDto.landInfoList != null) {
            this.constructionLicenseIntegrationDto.landInfoList.forEach((element: { landArea: number; }) => {
              landArea += element.landArea
            });
          }
          this.constructionLicenseForm.get('landTotalSpace')?.setValue(landArea as number);
          this.showLandArea = true
          this._toastrNotificationService.showSuccess(this.localization.validateSuccessfully)
        }
        else
          this._toastrNotificationService.showError(res.message);
      })
    )
  }

  save(): void {
    this.constructionLicenseForm.get('licenseFileId')?.setValidators([Validators.required]);
    this.constructionLicenseForm.get('licenseFileId')?.updateValueAndValidity();

    if (!this.constructionLicense.id) this.constructionLicense.id = '00000000-0000-0000-0000-000000000000';
    this.controls.id.setValue(this.constructionLicense.id);
    if (this.controls.constructionLicenseType.value == 2) {
      if (!this.constructionLicenseForm.valid) {
        this.showValidation = true;
        this._toastrNotificationService.showError(this.localization.PleaseAddAllRequiredFields);
        return;
      }
    } else {

      if (this.controls.licenseFileId.value == null || this.controls.licenseFileId.value == '') {
        this.showValidation = true;
        this._toastrNotificationService.showError(this.localization.PleaseAddAllRequiredFields);
        return;
      }
    }

    if (this.controls.constructionLicenseType.value == 1){
      this.constructionLicense.issueOn=null;
    }


    this.subscriptions.push(
      this._constructionLicenseService.Save(this.constructionLicense as ConstructionLicenseCreateUpdateDto).subscribe(res => {
        if (res.isDone) {
          this._toastrNotificationService.showSuccess(this.localization.savedSuccessfully)
          this._constructionLicenseService.SetSubjectListObjs(res.data as ConstructionLicenseDto[]);
          this._popupService.dismissDialog();
        }
        else
          this._toastrNotificationService.showError(res.message);
      })
    )
  }

  setBefor7(issueOn: string) {
    /*    if(!this.constructionLicense || !this.constructionLicense.issueOn) return;
       let before7 =new Date(this.constructionLicense.issueOn) < new Date(2017,6,1);
       this.controls.licenseFileId.setValidators(before7 ? [Validators.required] : null);
       this.controls.licenseNumber.setValidators(!before7 ? [Validators.required] : null);
       this.controls.licenseFileId.updateValueAndValidity();
       this.controls.licenseNumber.updateValueAndValidity();
       return before7; */
    //
    let date1 = new Date(issueOn);
    let date2 = new Date("July 1, 2020");
    if (date1 > date2) {
      this.showAfter = true;
      this.showBefor = false;
      this.controls.licenseNumber.setValidators([Validators.required]);
      this.controls.licenseNumber.updateValueAndValidity();

    }
    else {
      this.showAfter = false;
      this.showBefor = true;
      this.controls.licenseFileId.setValidators([Validators.required]);
      this.controls.licenseFileId.updateValueAndValidity();
    }
  }

}
export const dateValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
  const end = control.get('issueOn');
  return end?.value !== null && new Date() < new Date(end?.value)
    ? null : { dateValid: true };
}
