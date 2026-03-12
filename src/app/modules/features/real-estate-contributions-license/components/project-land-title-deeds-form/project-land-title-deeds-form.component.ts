import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { Subscription, forkJoin } from 'rxjs';
import {
  DeedData,
  DeedOwnersDto,
  ProjectLandDeedCreateUpdateDto,
  ProjectLandDeedDto,
  SaveLicenseProjectDeed,
} from '../../dataModels/project-land-deed.dto';
import { environment } from 'src/environments/environment';
import { ProjectLandDeedService } from '../../services/project-land-deed.service';
import {
  AbstractControl,
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { PopupService } from 'src/app/shared/services/popup/popup.service';
import { DatePipe } from '@angular/common';
import { FileUploader } from 'src/app/shared/models/file-uploader.model';
import { PopupData } from 'src/app/shared/models/popup.model';
import {
  DropDownNameDto,
  DropDownSubUnitTypeDto,
} from '../../dataModels/drop-down-name.dto';
import { ToastrNotificatioService } from 'src/app/core/services/toastr-notification/toastr-notificatio.service';

@Component({
  selector: 'app-project-land-title-deeds-form',
  templateUrl: './project-land-title-deeds-form.component.html',
  styleUrls: ['./project-land-title-deeds-form.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProjectLandTitleDeedsFormComponent implements OnInit, OnDestroy {
  subscriptions: Subscription[] = [];
  deedFromIntegration: DeedData = new DeedData();
  projectLandDeed: ProjectLandDeedDto = new ProjectLandDeedDto();
  projectLandDeedList: ProjectLandDeedDto[] = [];
  projectLandDeedCreateUpdate!: ProjectLandDeedCreateUpdateDto;
  baseUrl = `${environment.baseURL}/`;
  deedTypes: DropDownSubUnitTypeDto[] = [];
  showValidation: boolean = false;
  hasOwnerData: boolean = false;
  deedOwnerForm!: FormGroup;
  isDeedType: boolean = true;

  constructor(
    private _projectLandDeedService: ProjectLandDeedService,
    private _formBuilder: FormBuilder,
    private _toastrService: ToastrService,
    private _popupService: PopupService,
    private _toastrNotificationService: ToastrNotificatioService,
    private _changeDetectorRef: ChangeDetectorRef
  ) {}

  singleFileUploaderData: FileUploader = {
    multiple: true,
  } as FileUploader;
  projectLandDeedForm = this._formBuilder.group(
    {
      id: ['00000000-0000-0000-0000-000000000000', [Validators.required]],
      licenseProjectsId: ['', [Validators.required]],
      integrationType: [0, [Validators.required]],
      typeId: [0, [Validators.required, Validators.min(1)]],
      // typeId: new FormControl<number | null>(0, Validators.required),
      number: ['', [Validators.required]],
      year: ['', [Validators.required]],
      month: [0, [Validators.required, Validators.min(1)]],
      day: [0, [Validators.required, Validators.min(1)]],
      //space: ['', [Validators.required]],
      isApproved: [false, []],
      approvedOn: ['', []],
    }
    // { validators: dateValidatorIssueOn }
  );
  get controls() {
    return this.projectLandDeedForm.controls;
  }
  ngOnInit() {
    this.observeForm();
    this.loadComponentData();
    this.initForm();
    this._projectLandDeedService.getSubjectObj().subscribe((subjectObj) => {
      this.projectLandDeed = subjectObj;
      this.setResponseToForm(this.projectLandDeed);
      this.initRows(this.projectLandDeed.data.deedOwners);
    });
    this.observePopupEvents();
  }

  localization = {
    imageFile: 'ملف الاتفاقية',
    marginalizationSpeechFile: 'خطاب التهميش',
    PleaseAddAllRequiredFields: 'نأمل ادخال كل الحقول اللازمة واعادة المحاولة',
    title: 'صكوك أرض المشروع',
    typeId: 'نوع الصك',
    number: 'رقم الصك',
    ducumentNumber: 'رقم الوثيقة',
    space: '(متر مربع) مساحة الصك',
    imageFileId: 'صوره الصك',
    issueOn: 'تاريخ الصك',
    ownersCount: 'الملاك',
    requiredErrorMsg: 'حقل مطلوب',
    save: 'حفظ البيانات',
    savedSuccessfully: 'تم الحفظ',
    dateValidatorMeg: 'يجب أن يكون تاريخ الرخصة اقل من تاريخ الحالي',
    verify: 'تحقق من الصك',
    dataErorMsg: 'يجب أن يكون التاريخ اقل أو مساوي تاريخ اليوم',

    owningArea: 'المساحة المملوكة',
    ownerNationalId: 'السجل /رقم الهوية',
    ownerName: 'الاسم',
    ownerMobileNumber: 'رقم الجوال',
    year: 'السنة',
    month: 'الشهر',
    day: 'اليوم',
  };

  hideDeedType(event: any) {
    if (!event) {
      this.isDeedType = false;
      this.projectLandDeedForm.get('typeId')?.setValue(null)
      this.projectLandDeedForm.get('typeId')?.clearValidators();
      this.projectLandDeedForm.get('typeId')?.updateValueAndValidity();
    } else {
      this.isDeedType = true;
      this.controls.typeId.setValidators([
        Validators.required,
        Validators.min(1),
      ]);
      this.controls.typeId.updateValueAndValidity();
    }
  }

  initForm() {
    this.deedOwnerForm = this._formBuilder.group({
      Rows: this._formBuilder.array([]),
    });
  }

  private initRows(values: DeedOwnersDto[]) {
    values.forEach((owner) => {
      let arrauItems = this._formBuilder.group({
        deedMarginalizationFileId: [
          owner.deedMarginalizationFileId
            ? owner.deedMarginalizationFileId
            : null,
        ],
        agreementFileId: [owner.agreementFileId ? owner.agreementFileId : null],
        idNumber: [{ value: owner.idNumber, disabled: true }],
        ownerName: [{ value: owner.ownerName, disabled: true }],
        owningArea: [{ value: owner.owningArea, disabled: true }],
      });
      this.formArr.push(arrauItems);
    });
  }

  get formArr() {
    return this.deedOwnerForm.get('Rows') as FormArray;
  }

  observeFormValueChanges() {
    this.subscriptions.push(
      this.deedOwnerForm.valueChanges.subscribe((data) => {
        this.initRows(data);
      })
    );
  }

  changeOwnerFileValidation(typeId: any) {
    for (let control of this.formArr.controls) {
      if (typeId != null) this.controls.typeId.setValue(typeId);
      if (this.controls.typeId.value == 3 || this.controls.typeId.value == 4) {
        control
          .get('deedMarginalizationFileId')
          ?.setValidators([Validators.required]);
        control.get('agreementFileId')?.setValidators([Validators.required]);
        control.get('deedMarginalizationFileId')?.updateValueAndValidity();
        control.get('agreementFileId')?.updateValueAndValidity();
      } else {
        control.get('deedMarginalizationFileId')?.clearValidators();
        control.get('agreementFileId')?.clearValidators();
        control.get('deedMarginalizationFileId')?.updateValueAndValidity();
        control.get('agreementFileId')?.updateValueAndValidity();
      }
    }
  }

  onAgreementFileUploaded(
    fileData: any,
    idNumber: string | null,
    index: number
  ) {
    if (fileData.eventRes.data.length === 0) {
      this.formArr.controls[index].get('agreementFileId')?.setValue(null);
      return;
    }
    let ownerObj = this.deedFromIntegration.deedOwners.filter(
      (x) => x.idNumber == idNumber
    );
    if (ownerObj.length > 0) {
      let formGroup = this.formArr.controls[index] as FormGroup;
      formGroup.get('agreementFileId')?.setValue(fileData.eventRes.data[0].id);
      ownerObj[0].agreementFileId = fileData.eventRes.data[0].id;
      // ownerObj[0].agreementFile = fileData.eventRes.data[0];
    }
  }

  onDeedMarginalizationFileUploaded(
    fileData: any,
    idNumber: string | null,
    index: number
  ) {
    if (fileData.eventRes.data.length === 0) {
      this.formArr.controls[index].get('deedMarginalizationFileId')?.setValue(null);

      return;
    }
    let ownerObj = this.deedFromIntegration.deedOwners.filter(
      (x) => x.idNumber == idNumber
    );
    if (ownerObj.length > 0) {
      let formGroup = this.formArr.controls[index] as FormGroup;
      formGroup
        .get('deedMarginalizationFileId')
        ?.setValue(fileData.eventRes.data[0].id);
      ownerObj[0].deedMarginalizationFileId = fileData.eventRes.data[0].id;
      // ownerObj[0].deedMarginalizationFile = fileData.eventRes.data[0];
    }
  }

  private loadComponentData() {
    const requests = [
      this._projectLandDeedService.GetSysLicenseProjectLandOwnerDeedTypeDropDown(),
    ];

    const subscriptions = forkJoin(requests).subscribe((results) => {
      if (results) {
        this.deedTypes = results[0] as DropDownSubUnitTypeDto[];
      }
    });

    this.subscriptions.push(subscriptions);
  }
  setResponseToForm(res: ProjectLandDeedDto): void {
    // console.log("setResponseToForm", res)
    // if (res && res.issueOn) {
    //   res.issueOn = new Date(res.issueOn) as any;
    // }
    if (res && res.approvedOn) {
      res.approvedOn = new Date(res.approvedOn) as any;
    }
    this.projectLandDeedForm.patchValue({ ...res });
    this._changeDetectorRef.detectChanges();
    this.projectLandDeed = res;
  }
  observeForm(): void {
    this.subscriptions.push(
      this.projectLandDeedForm.valueChanges.subscribe((changes) => {
        this.projectLandDeed = this.projectLandDeedForm
          .value as ProjectLandDeedDto;
        this.projectLandDeedCreateUpdate = this.projectLandDeedForm
          .value as ProjectLandDeedCreateUpdateDto;
      })
    );
  }
  ngOnDestroy() {
    this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe());
  }
  observePopupEvents(): void {
    this.observecancelAction();
    this.observeconfirmAction();
  }

  private observecancelAction() {
    this.subscriptions.push(
      this._popupService.cancelAction.subscribe((res: PopupData) => {
        this._popupService.dismissDialog();
      })
    );
  }

  private observeconfirmAction() {
    this.subscriptions.push(
      this._popupService.confirmAction.subscribe((res: PopupData) => {
        console.log('popup data', res);
        this.save();
      })
    );
  }
  onFileUploaded(fileData: any) {}

  // validateDeedInfo(): void {
  //   if (!this.projectLandDeedCreateUpdate.id)
  //     this.projectLandDeedCreateUpdate.id =
  //       '00000000-0000-0000-0000-000000000000';
  //   if (!this.projectLandDeedCreateUpdate.approvedOn)
  //     this.projectLandDeedCreateUpdate.approvedOn = null;

  //   this.subscriptions.push(
  //     this._projectLandDeedService
  //       .ValidateDeedInfo(this.projectLandDeedCreateUpdate)
  //       .subscribe((res) => {
  //         if (res.isDone) {
  //           this.deedFromIntegration = res.data as DeedData;
  //           this._projectLandDeedService.SetDeedIntegrationResponseDto(
  //             res.data as DeedData
  //           );
  //           this.initRows(this.deedFromIntegration.deedOwners);
  //           // this._toastrService.success(this.localization.savedSuccessfully)
  //           // console.log(this.deedFromIntegration)
  //         }
  //         // else
  //         //   this.__toastrNotificatioService.showError(res.message);
  //       })
  //   );
  // }

  validateDeedInfo(): void {
    this.projectLandDeedForm.controls.id.setValue(
      '00000000-0000-0000-0000-000000000000'
    );
    this.projectLandDeedForm.controls.typeId.setValue(
      Number(this.projectLandDeedForm.controls.typeId.value)
    );
    if (!this.projectLandDeedForm.valid) {
      this.showValidation = true;
      this._toastrNotificationService.showError(
        this.localization.PleaseAddAllRequiredFields
      );
      return;
    }
    if (!this.projectLandDeedCreateUpdate.id)
      this.projectLandDeedCreateUpdate.id =
        '00000000-0000-0000-0000-000000000000';
    if (!this.projectLandDeedCreateUpdate.approvedOn)
      this.projectLandDeedCreateUpdate.approvedOn = null;

    console.log(
      'validateDeedInfo this.projectLandDeedCreateUpdate',
      this.projectLandDeedCreateUpdate
    );
    this.subscriptions.push(
      this._projectLandDeedService
        .ValidateDeedInfo(this.projectLandDeedCreateUpdate)
        .subscribe((res) => {
          if (res.isDone) {
            this.deedFromIntegration = res.data as DeedData;
            this._projectLandDeedService.SetDeedIntegrationResponseDto(
              res.data as DeedData
            );
            this.hasOwnerData = true;
            this.initRows(this.deedFromIntegration.deedOwners);
            // this._toastrService.success(this.localization.savedSuccessfully)
            // console.log(this.deedFromIntegration)
          }
          // else
          //   this._toastrService.error(res.message);
        })
    );
  }
  save(): void {
    this.changeOwnerFileValidation(null);
    if (!this.projectLandDeed.id)
      this.projectLandDeed.id = '00000000-0000-0000-0000-000000000000';
    this.controls.id.setValue(this.projectLandDeed.id);

    if (!this.projectLandDeedForm.valid) {
      this._toastrNotificationService.showError(
        this.localization.PleaseAddAllRequiredFields
      );
      this.showValidation = true;
      return;
    }
    if (!this.deedOwnerForm.valid) {
      this.showValidation = true;
      this._toastrNotificationService.showError(
        this.localization.PleaseAddAllRequiredFields
      );
      this.projectLandDeedForm?.markAllAsTouched();
      return;
    }
    // if (!this.projectLandDeed.approvedOn) this.projectLandDeed.approvedOn = this.projectLandDeed.issueOn;
    if (!this.projectLandDeed.approvedOn)
      this.projectLandDeed.approvedOn = null;
    // this.subscriptions.push(
    //   this._projectLandDeedService.getDeedIntegrationResponseDto().subscribe((deed) => {
    //     this.projectLandDeed.data = deed
    //   }))
    this.projectLandDeed.data = this.deedFromIntegration;

    if (this.projectLandDeed.typeId) {
      this.projectLandDeed.typeId = +this.projectLandDeed.typeId;
    }

    let model = {
      deedDate: this.projectLandDeed.data.deedDate,
      id: this.projectLandDeed.id,
      integrationType: this.projectLandDeed.integrationType,
      issueOn: this.projectLandDeed.issueOn,
      number: this.projectLandDeed.data.deedNo?.toString(),
      licenseProjectsId: this.projectLandDeed.licenseProjectsId,
      typeId: this.projectLandDeed.typeId,
      deedOwners: this.projectLandDeed.data.deedOwners,

    } as SaveLicenseProjectDeed;
    

    this.subscriptions.push(
      this._projectLandDeedService
      .SaveDeedData(model)
        .subscribe((res) => {
          if (res.isDone) {
            this._toastrService.success(this.localization.savedSuccessfully);
            this._projectLandDeedService.SetSubjectListObjs(
              res.data as ProjectLandDeedDto[]
            );
            this._projectLandDeedService
              .getSubjectListObjs()
              .subscribe((subjectObj) => {
                this.projectLandDeedList = subjectObj;
                this.projectLandDeedList.forEach((x) => {
                  x.typeName = this.deedTypes.find(
                    (t) => t.id == x.typeId
                  )?.name;
                });
              });
            this._popupService.dismissDialog();
          }
          // else
          //   this.__toastrNotificatioService.showError(res.message);
        })
    );
  }
}

export const dateValidatorIssueOn: ValidatorFn = (
  control: AbstractControl
): ValidationErrors | null => {
  let date = new Date(control.get('issueOn')?.value as string);
  let currentdate = new Date();
  return date !== null && date.getDate() < currentdate.getDate()
    ? null
    : { dateValid: true };
};
