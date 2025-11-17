import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription, forkJoin } from 'rxjs';
import { ProjectBasicDataDto, ProjectSizeEnum, type SysLicenseRequestTypeDto } from '../../../dataModels/project-basic-data.dto';
import { environment } from 'src/environments/environment';
import { ProjectBasicDataService } from '../../../services/licenseProjects/project-basic-data.service';
import { AbstractControl, FormBuilder, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { TechnicalCapabilitiesRequirementsService } from '../../../../facilities/services/technicalCapabilitiesRequirements/technical-capabilities-requirements.service';
import { CoreResponseDTO } from 'src/app/core/models/core.model';
import { ProjectCategoryDto, ProjectSubCategoryDto } from '../../../../facilities/dataModels/qualificationTechnicalCapabilitiesRequirement.model';
import { DropDownNameDto, DropDownSubUnitTypeDto } from '../../../dataModels/drop-down-name.dto';
import { FileUploader } from 'src/app/shared/models/file-uploader.model';
import { SharedLicenseProjectService } from '../../../services/sharedLicenseProject/shared-license-project.service';
import { NextAndPreviusButtonsService } from '../../../services/next-and-previous-buttons/next-and-previus-buttons.service';
import { ToastrNotificatioService } from 'src/app/core/services/toastr-notification/toastr-notificatio.service';
import { customerResponse } from 'src/app/shared/models/customer.model';
import { UserDataService } from 'src/app/core/services/user-data/user-data.service';
import { LicenseRequestTypeTypeCodeEnum } from '../../../enums/license-requestType-typeCode.model';
import { LicenseNatureTypeListDto } from '../../../models/license-nature-type-list-dto';
import { LicenseNatureTypeEnum } from '../../../enums/license-nature-type';

@Component({
  selector: 'app-fawria-licenseproject-maindata-container',
  templateUrl: './fawria-licenseproject-maindata-container.component.html',
  styleUrls: ['./fawria-licenseproject-maindata-container.component.scss']
})
export class FawriaLicenseprojectMaindataContainerComponent  implements OnInit, OnDestroy {
  subscriptions: Subscription[] = [];
  projectBasicData: ProjectBasicDataDto = new ProjectBasicDataDto();
  baseUrl = `${environment.baseURL}/`;
  licenseProjectId: string | null = "00000000-0000-0000-0000-000000000000";
  categories: ProjectCategoryDto[] = [];
  subCategories: ProjectSubCategoryDto[] = [];
  tempSubCategories: ProjectSubCategoryDto[] = [];
  projectSizeType = ProjectSizeEnum;
  licenseNatureTypeEnum = LicenseNatureTypeEnum;
  licenseProjectScopes: DropDownNameDto[] = [];
  types: DropDownSubUnitTypeDto[] = [];
  showValidation: boolean = false;
  isExistingValidation: boolean = false;
  licenseNatureType: LicenseNatureTypeListDto[] = [];
  multipleFileUploaderData: FileUploader = {
    multiple: true,
  } as FileUploader;

  singleFileUploaderData: FileUploader = {
    multiple: false,
    size: 3072
  } as FileUploader;
  userData: customerResponse | null = null;
  constructor(
    private _projectBasicDataService: ProjectBasicDataService,
    private _formBuilder: FormBuilder,
    private _toastrService: ToastrService,
    private _technicalCapService: TechnicalCapabilitiesRequirementsService,
    private _sharedLicenseProjectService: SharedLicenseProjectService,
    private _nextAndPreviusButtonsService: NextAndPreviusButtonsService,
    private _toastrNotificationService: ToastrNotificatioService,
    private _userDataService: UserDataService,
  ) { }

  projectBasicDataForm = this._formBuilder.group({
    id: ['00000000-0000-0000-0000-000000000000', [Validators.required]],
    name: ['', [Validators.required]],
    projectDescription: [''],
    projectServices: [''],
    typeId: this._formBuilder.control<number | null>(null, [Validators.required]),
    categoryId: ['', [Validators.required]],
    subCategoryId: ['', [Validators.required]],
    licenseProjectScopeId: ['', [Validators.required]],
    startOn: ['', [Validators.required]],
    isProjectStarted: [false, [Validators.required]],
    endOn: ['', [Validators.required]],
    achievementRate: [0, [Validators.min(1), Validators.max(100)]],
    engineeringConsultantReportFileId: [''],
    licenseProjectNatureTypeId: [LicenseNatureTypeEnum.Units, [Validators.required]],
  }, { validators: dateValidator });

  get controls() {
    return this.projectBasicDataForm.controls;
  }

  ngOnInit() {
    this.getCustomerData();
    this.getLicenseProjectIdStorage()
    this.observeForm();
    this.loadComponentData();
    this.observeCategoryControl();
    this.observeTabsButtons();
    this.updateSaveAsDraftBtnIsvisible();
  }

  getCustomerData() {
    this._userDataService.getCustomerData().subscribe((res: customerResponse | null) => {
      this.userData = res;
      this.isExistingValidation = this.userData?.isEmployee as boolean;
    })
  }
  getLicenseNatureType(){
    this._projectBasicDataService.GetLicenseNatureType().subscribe((res: LicenseNatureTypeListDto[]) => {
      this.licenseNatureType = res;
    })
  }
  private getLicenseProjectIdStorage(): void {
    this.licenseProjectId = this._sharedLicenseProjectService.getLicenseProjectIdStorage();
    this.getLicenseNatureType();
  }

  localization = {
    HasStarted: "هل تم بدأ المشروع ؟",
    Yes: "نعم",
    No: "لا",
    title: 'بيانات المشروع الأساسية',
    projectLandData: 'بيانات أرض المشروع',
    name: 'اسم المشروع',
    quantitiesTableFileId: 'ملف جدول الكميات',
    projectDescription: 'وصف المشروع',
    projectServices: 'خدمات المشروع',
    typeId: 'نوع المشروع',
    categoryId: 'تصنيف المشروع',
    subCategoryId: 'التصنيف الفرعي للمشروع',
    ProjectSize: 'حجم المشروع',
    ProjectSizeSmall: 'مشروع صغير',
    ProjectSizeMedium: 'مشروع متوسط',
    ProjectSizeLarge: 'مشروع كبير',
    licenseProjectScopeId: 'نطاق الأعمال',
    startOn: 'تاريخ بداية المشروع',
    endOn: 'تاريخ نهاية المشروع',
    achievementRate: 'نسبة انجاز المشروع',
    MinValueError: 'قيمة الحقل يجب الا تقل عن 1',
    MaxValueError: 'قيمة الحقل يجب الا تزيد عن 100',
    landTotalSpace: 'مساحة المشروع (حسب الصك)',
    landValue: 'قيمة الأرض تقديريا',
    projectStarted: 'تم البدء في تنفيذ المشروع؟',
    engineeringConsultantReportFileId: 'تقرير الاستشاري الهندسي',
    requiredErrorMsg: 'هذا الحقل مطلوب',
    dateValidator: 'يجب ان يكون تاريخ البداية اقل من تاريخ النهاية',
    save: 'حفظ كمسودة',
    yes: 'نعم',
    no: 'لا',
    savedSuccessfully: 'تم الحفظ بنجاح',
    phoneNumberPattern: 'من فضلك ادخل رقم جوال صحيح',
    emailPattern: 'من فضلك ادخل البريد الإلكتروني صحيح',
    send: "إرسال الطلب",
    next: 'التالي',
    previous: 'السابق',
    PleaseAddAllRequiredFields: 'لم يتم إدخال جميع الحقول الإلزامية، يرجى استكمال البيانات المطلوبة',
    licenseNatureType: 'طبيعة المشروع',
  };

  private loadComponentData() {
    const requests = [
      this._projectBasicDataService.GetMainDataByLicenseProjectId(this.licenseProjectId as string),
      this._projectBasicDataService.GetProjectCategoryDropDown(this.licenseProjectId as string),
      this._technicalCapService.GetProjectSubCategoryDropDown(),
      this._projectBasicDataService.GetLicenseProjectScopeDropDown(),
      this._projectBasicDataService.GetSysLicenseProjectTypeDropDown(),
      this._projectBasicDataService.GetRequetTypeLicenseProjectId(this.licenseProjectId as string)
    ];

    const subscriptions = forkJoin(requests).subscribe((results) => {
      this.setResponseToForm((results[0] as CoreResponseDTO<ProjectBasicDataDto>).data as ProjectBasicDataDto);
      this.projectBasicData = (results[0] as CoreResponseDTO<ProjectBasicDataDto>).data as ProjectBasicDataDto;
      if (this.projectBasicData.achievementRate)
        this.controls.isProjectStarted.setValue(true)
      this.categories = results[1] as ProjectCategoryDto[],
        this.subCategories = results[2] as ProjectSubCategoryDto[],
        this.licenseProjectScopes = results[3] as DropDownNameDto[],
        this.types = results[4] as DropDownSubUnitTypeDto[];
      this.updateProjectServicesValidation(results[5] as SysLicenseRequestTypeDto)
      if (this.projectBasicData && this.projectBasicData.categoryId) {
        this.filterSubCategory(this.projectBasicData.categoryId as string);
      }
    });
    this.subscriptions.push(subscriptions);
  }

  updateProjectServicesValidation(licenseRequestType?: SysLicenseRequestTypeDto) {
    if (licenseRequestType && (licenseRequestType.typeCode == LicenseRequestTypeTypeCodeEnum.RentalReceiptAmountsNotMoreFirstYear || licenseRequestType.typeCode == LicenseRequestTypeTypeCodeEnum.RentalReceiptAmountsMoreThanFirstYear)) {
      this.projectBasicDataForm.controls.projectServices.clearAsyncValidators();
    } else {
      this.projectBasicDataForm.controls.projectServices.addValidators([]);
    }
    this.projectBasicDataForm.controls.projectServices.updateValueAndValidity();
  }

  setResponseToForm(res: ProjectBasicDataDto): void {
    if (res) {
      res.startOn = res.startOn ? new Date(res.startOn) : null as any;
      res.endOn = res.endOn ? new Date(res.endOn) : null as any;
      // Ensure isProjectStarted has a default value of false if not set
      if (res.isProjectStarted === null || res.isProjectStarted === undefined) {
        res.isProjectStarted = false;
      }
      // Ensure licenseProjectNatureTypeId is properly set
      if (res.licenseProjectNatureTypeId !== null && res.licenseProjectNatureTypeId !== undefined) {
        res.licenseProjectNatureTypeId = parseInt(res.licenseProjectNatureTypeId.toString());
      }
    }
    this.projectBasicDataForm.patchValue({ ...res });
    this.projectBasicData = res;
  }

  observeForm(): void {
    this.subscriptions.push(
      this.projectBasicDataForm.valueChanges.subscribe(changes => {
        let engineeringConsultantReportFile = this.projectBasicData.engineeringConsultantReportFile;
        this.projectBasicData = this.projectBasicDataForm.value as ProjectBasicDataDto;
        this.projectBasicData.engineeringConsultantReportFile = engineeringConsultantReportFile
      })
    )
  }

  ngOnDestroy() {
    this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe());
  }

  save(moveToNextTab: boolean = false): void {

    if (!this.isExistingValidation) {
      console.log(this.projectBasicDataForm);

      if (!this.projectBasicDataForm.valid) {
        this.showValidation = true;
        this._toastrNotificationService.showError(this.localization.PleaseAddAllRequiredFields);
        this.projectBasicDataForm?.markAllAsTouched();
        return;
      }
    }

    // Validate achievement rate range
    if (this.controls.isProjectStarted.value === true) {
      const achievementRate = this.controls.achievementRate.value || 0;
      if (achievementRate < 1 || achievementRate > 100) {
        this.showValidation = true;
        this._toastrNotificationService.showError('نسبة الإنجاز يجب أن تكون بين 1 و 100');
        this.controls.achievementRate.markAsTouched();
        return;
      }
    }

    if (this.controls.isProjectStarted.value === false) {
      this.projectBasicData.achievementRate = 0;
      this.projectBasicData.engineeringConsultantReportFileId = null;
    }

    if (!this.projectBasicData.id) {
      this.projectBasicData.id = '00000000-0000-0000-0000-000000000000';
      // this.projectBasicData.typeId = parseInt(this.projectBasicData.typeId.toString())
    }

    // Convert licenseProjectNatureTypeId to integer
    if (this.projectBasicData.licenseProjectNatureTypeId) {
      this.projectBasicData.licenseProjectNatureTypeId = parseInt(this.projectBasicData.licenseProjectNatureTypeId.toString());
    }

    this.subscriptions.push(
      this._projectBasicDataService.SaveMainData(this.projectBasicData).subscribe(res => {
        if (res.isDone) {
          this._toastrService.success(this.localization.savedSuccessfully);
          this.setResponseToForm(res.data as ProjectBasicDataDto);
          if (moveToNextTab) this.moveToNextTab()
        } else {
          this._toastrNotificationService.showError(res.message);
        }
      })
    )
  }

  onFileUploaded(fileData: any) {
    this.projectBasicData.engineeringConsultantReportFileId = fileData.eventRes.data[0].id;
    this.controls.engineeringConsultantReportFileId.setValue(fileData.eventRes.data[0].id);
    this.projectBasicData.engineeringConsultantReportFile = fileData.eventRes.data[0];
  }
  // isProjectStarted() {
  //   let started = new Date(this.controls.startOn.value as string) <= new Date();
  //   this.controls.engineeringConsultantReportFileId.setValidators(started ? [Validators.required] : null);
  //   this.controls.engineeringConsultantReportFileId.updateValueAndValidity();
  //   return started;
  // }
  isProjectStarted() {
    let started = this.projectBasicData.isProjectStarted === true;
    this.controls.achievementRate.setValidators(started ? [Validators.required, Validators.min(1), Validators.max(100)] : null);
    this.controls.achievementRate.updateValueAndValidity();
    this.controls.engineeringConsultantReportFileId.setValidators(started ? [Validators.required] : null);
    this.controls.engineeringConsultantReportFileId.updateValueAndValidity();
    return started;
  }



  observeCategoryControl() {
    this.controls.categoryId.valueChanges.subscribe(res => {
      if (res) {
        this.filterSubCategory(res as string);
      }
    })
  }

  filterSubCategory(categoryId: string): void {
    this.projectBasicData.subCategoryId = ''
    if (categoryId) {
      this.tempSubCategories = this.subCategories.filter(sub => sub.projectCategoryId == categoryId)
    }
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
  private updateSaveAsDraftBtnIsvisible(): void {
    this._nextAndPreviusButtonsService.saveAsDraftBtnIsvisible.next(false)
  }
  private moveToNextTab(): void {
    this._nextAndPreviusButtonsService.moveToNextTab.emit()
  }
}

export const dateValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
  const start = control.get('startOn');
  const end = control.get('endOn');
  return start?.value !== null && end?.value !== null && new Date(start?.value) < new Date(end?.value)
    ? null : { dateValid: true };
}
