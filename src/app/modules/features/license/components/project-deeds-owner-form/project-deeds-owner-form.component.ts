import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription, forkJoin } from 'rxjs';
import { ProjectLandOwnerDto, SysLicenseProjectLandOwnerTypeCreateUpdateDto } from '../../dataModels/project-land-owner.dto';
import { ProjectLandOwnerService } from '../../services/project-land-owner.service';
import { environment } from 'src/environments/environment';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { PopupService } from 'src/app/shared/services/popup/popup.service';
import { DatePipe } from '@angular/common';
import { FileUploader } from 'src/app/shared/models/file-uploader.model';
import { PopupData } from 'src/app/shared/models/popup.model';
import { ProjectLandDeedService } from '../../services/project-land-deed.service';
import { ProjectLandDeedDto } from '../../dataModels/project-land-deed.dto';
import { DropDownNameDto } from '../../dataModels/drop-down-name.dto';
import { Configuration } from 'src/app/core/configurations/shared.config';
import { LandOwnerType } from 'src/app/core/enums/land-owner-type.enum';
import { ToastrNotificatioService } from 'src/app/core/services/toastr-notification/toastr-notificatio.service';

@Component({
  selector: 'app-project-deeds-owner-form',
  templateUrl: './project-deeds-owner-form.component.html',
  styleUrls: ['./project-deeds-owner-form.component.scss']
})
export class ProjectDeedsOwnerFormComponent implements OnInit, OnDestroy {
  subscriptions: Subscription[] = [];
  projectLandOwner: ProjectLandOwnerDto = new ProjectLandOwnerDto();
  projectLandDeed: ProjectLandDeedDto = new ProjectLandDeedDto();
  types: SysLicenseProjectLandOwnerTypeCreateUpdateDto[] = [];
  baseUrl = `${environment.baseURL}/`;
  ownerType: LandOwnerType = LandOwnerType.Company;
  showValidation: boolean = false;
  constructor(private _projectLandOwnerService: ProjectLandOwnerService,
    private _formBuilder: FormBuilder,
    private _toastrService: ToastrService,
    private _popupService: PopupService,
    private _projectLandDeedService: ProjectLandDeedService,
    private _toastrNotificationService: ToastrNotificatioService,
    private datePipe: DatePipe) {
  }

  singleFileUploaderData: FileUploader = {
    multiple: true,
  } as FileUploader;
  projectLandOwnerForm = this._formBuilder.group({
    id: ['00000000-0000-0000-0000-000000000000', [Validators.required]],
    typeId: ['', [Validators.required]],
    licenseProjectsId: ['', [Validators.required]],
    landDeedId: ['', [Validators.required]],
    nationalIdOrCRA: ['', [Validators.pattern(Configuration.validators.numberOnly)]],
    name: ['', []],
    mobileNumber: ['', [Validators.pattern(Configuration.validators.PhoneNumber)]],
    agreementFileId: ['', []],
  })
  get controls() {
    return this.projectLandOwnerForm.controls;
  }
  ngOnInit() {
    this.observeForm();
    this.loadComponentData();
    this.observePopupEvents();
  }
  private loadComponentData() {
    const requests = [
      this._projectLandOwnerService.GetSysLicenseProjectLandOwnerTypeDropDown(),
    ];

    const subscriptions = forkJoin(requests).subscribe((results) => {
      if (results) {
        this.types = results[0] as SysLicenseProjectLandOwnerTypeCreateUpdateDto[];

        this._projectLandDeedService.getSubjectObj().subscribe((subjectObj) => {
          this.projectLandDeed = subjectObj;
          this.setResponseToForm(this.projectLandOwner);
        })
      }
    });

    this.subscriptions.push(subscriptions);
  }
  localization = {
    title: 'إضافة مالك جديد',
    deedData: 'بيانات الصك',
    number: 'رقم الصك',
    issueOn: 'تاريخ الصك',
    typeId: 'نوع مالك الأرض',
    nationalId: 'رقم هوية مالك الصك / مالك منفعتها',
    CRA: 'رقم السجل التجاري',
    name: 'اسم مالك الصك /مالك منفعتها',
    mobileNumber: 'رقم جوال مالك الصك /مالك منفعتها',
    agreementFileId: 'ملف الاتفاقية بين المطور عقاري ومالك الأرض',
    PleaseAddAllRequiredFields: 'نأمل ادخال كل الحقول اللازمة واعادة المحاولة',
    numberPattern: 'من فضلك ادخل رقم صحيح',
    requiredErrorMsg: 'حقل مطلوب',
    save: 'حفظ البيانات',
    savedSuccessfully: 'تم الحفظ',
    dateValidator: 'يجب ان يكون تاريخ الرخصة اقل من تاريخ الحالي',
  };

  setResponseToForm(res: ProjectLandOwnerDto): void {
    if (res) res.landDeedId = this.projectLandDeed.id;
    this.projectLandOwnerForm.patchValue({ ...res });
    this.projectLandOwner = res;
  }
  observeForm(): void {
    this.subscriptions.push(
      this.projectLandOwnerForm.valueChanges.subscribe(changes => {
        this.projectLandOwner = this.projectLandOwnerForm.value as ProjectLandOwnerDto;
      })
    )
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
    this.projectLandOwner.agreementFileId = fileData.eventRes.data[0].id;
    this.controls.agreementFileId.setValue(fileData.eventRes.data[0].id);
    this.projectLandOwner.agreementFile = null;
  }
  save(): void {
    if (!this.projectLandOwner.id) this.projectLandOwner.id = '00000000-0000-0000-0000-000000000000';
    this.controls.id.setValue(this.projectLandOwner.id);

    this.projectLandOwner.licenseProjectsId = this.projectLandDeed.licenseProjectsId;
    this.controls.licenseProjectsId.setValue(this.projectLandOwner.licenseProjectsId);

    if (!this.projectLandOwner.agreementFileId) this.projectLandOwner.agreementFileId = null;


    if (!this.projectLandOwnerForm.valid) {
      this.showValidation = true;
      this._toastrNotificationService.showError(this.localization.PleaseAddAllRequiredFields);
      this.projectLandOwnerForm?.markAllAsTouched();
      return;
    }

    this.subscriptions.push(
      this._projectLandOwnerService.Save(this.projectLandOwner).subscribe(res => {
        if (res.isDone) {
          this._toastrService.success(this.localization.savedSuccessfully);
          this._projectLandDeedService.SetSubjectListObjs(res.data as ProjectLandDeedDto[]);
          this._popupService.dismissDialog();
        }
        else
          this._toastrService.error(res.message);
      })
    )
  }
  changeFormValidations() {

    let type = this.types.filter(x => x.id == this.projectLandOwner.typeId)[0];
    if (type) this.ownerType = type.type;

    switch (this.ownerType) {
      case LandOwnerType.Individual:
      case LandOwnerType.Company:
      case LandOwnerType.Association:
      case LandOwnerType.RealEstateFund:
        this.setRequiredToFormControl(this.controls.agreementFileId, true);
        this.setRequiredToFormControl(this.controls.mobileNumber, true, true, true);
        this.setRequiredToFormControl(this.controls.name, true);
        this.setRequiredToFormControl(this.controls.nationalIdOrCRA, true, true);
        break;
      case LandOwnerType.Ministry:
        this.setRequiredToFormControl(this.controls.agreementFileId, true);
        this.setRequiredToFormControl(this.controls.name, true);
        break;
      case LandOwnerType.RealEstateDeveloper:
        this.setRequiredToFormControl(this.controls.agreementFileId, false);
        this.setRequiredToFormControl(this.controls.mobileNumber, false);
        this.setRequiredToFormControl(this.controls.name, false);
        this.setRequiredToFormControl(this.controls.nationalIdOrCRA, false);
        break;
    }
  }
  setRequiredToFormControl(control: FormControl, isRequired: boolean, isNumber: boolean = false, isPhone: boolean = false) {
    control.setValidators(isRequired ? [Validators.required] : null);
    if (isPhone) {
      control.addValidators([Validators.pattern(Configuration.validators.PhoneNumber)]);
    }
    if (isNumber)
      control.addValidators([Validators.pattern(Configuration.validators.numberOnly)]);
    control.updateValueAndValidity();
  }


}
