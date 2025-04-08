import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BehaviorSubject, ReplaySubject, takeUntil } from 'rxjs';
import { DatePipe } from '@angular/common';
import { ToastrNotificatioService } from '../../../../../core/services/toastr-notification/toastr-notificatio.service';
import { Guid } from '../../../../../core/configurations/guid';
import { StaffTypes } from './engineering-consultant-agreement-staff/staff-types';
import { LicenseProjectEngineeringConsultantDto } from '../../dataModels/license-project-engineering-consultant/license-project-engineering-consultant-dto';
import { LicenseProjectEngineeringConsultantService } from '../../services/license-project-engineering-consultant.service';
import {
  LicenseProjectEngineeringConsultantCreateUpdateDto,
  LicenseProjectEngineeringConsultantDelegatorCreateUpdateDto,
} from '../../dataModels/license-project-engineering-consultant/license-project-engineering-consultant-create-update-dto';
import { SharedLicenseProjectService } from '../../services/sharedLicenseProject/shared-license-project.service';
import { FacilityShortDto } from '../../models/facility-short-dto';
import { ToastrService } from 'ngx-toastr';
import { NextAndPreviusButtonsService } from '../../services/next-and-previous-buttons/next-and-previus-buttons.service';
import { FileUploader } from 'src/app/shared/models/file-uploader.model';
import { UploadFileModel } from 'src/app/shared/models/upload-file.model';
import { environment } from 'src/environments/environment';
import { SysFileManagerCreateUpdateDto } from 'src/app/shared/models/sys-file-manager-create-update-dto';
import  { FileManagementService } from 'src/app/shared/services/fileManagement/file-management.service';

@Component({
  selector: 'app-engineering-consultant',
  templateUrl: './engineering-consultant.component.html',
  styleUrls: ['./engineering-consultant.component.scss'],
})
export class EngineeringConsultantComponent implements OnInit {
  multiFilesUploaderData: FileUploader = {
    multiple: true,
  } as FileUploader;
  baseUrl = `${environment.baseURL}/`;

  delegatorDto: LicenseProjectEngineeringConsultantDelegatorCreateUpdateDto =
    new LicenseProjectEngineeringConsultantDelegatorCreateUpdateDto();
  facility: FacilityShortDto = new FacilityShortDto();
  form!: FormGroup;
  entity: LicenseProjectEngineeringConsultantDto = <
    LicenseProjectEngineeringConsultantDto
  >{};
  entity$: BehaviorSubject<LicenseProjectEngineeringConsultantDto | undefined> =
    new BehaviorSubject<LicenseProjectEngineeringConsultantDto | undefined>(
      undefined
    );
  facility$: BehaviorSubject<FacilityShortDto | undefined> =
    new BehaviorSubject<FacilityShortDto | undefined>(undefined);
  types = StaffTypes;
  isEdit: boolean = false;
  engineeringConsultantFiles: SysFileManagerCreateUpdateDto[] | undefined = [];
  saveEngineeringConsultantFiles: SysFileManagerCreateUpdateDto[] | undefined = [];
  localizations = {
    EngineeringConsultantTitle: 'الاستشاري الهندسي',
    EngineeringConsultant: 'رقم السجل التجاري للاستشاري الهندسي',
    EngineeringConsultantRequired: 'هذا الحقل مطلوب',
    ValidateConsultant: 'التحقق من السجل التجاري',
    EngineeringConsultantLicenseNumber: 'رقم رخصة الاستشاري الهندسي',
    EngineeringConsultantLicenseNumberRequired: 'هذا الحقل مطلوب',
    AgreementSection: 'اتفاقية عقد الاستشاري الهندسي',
    FirstStaffAgreement: 'بيان تواجد طاقم الإشراف الهندسى بالشهر',
    SecondStaffAgreement:
      'بيان تواجد طاقم الكادر المساعد للاشراف الهندسي بالشهر',
    ThirdStaffAgreement:
      'بيان تواجد طاقم الكادر للتخصصات الاخري للاشراف الهندسى بالشهر',
    Save: 'حفظ كمسودة',
    send: 'إرسال الطلب',
    PleaseAddProject: 'لا يوجد مشروع , نأمل اضافة المشروع اولا .',
    PleaseAddAllRequiredFields:
      '"نأمل ادخال كل الحقول اللازمة واعادة المحاولة"',
    UpdatedSuccessfully: 'تم التعديل بنجاح',
    CreatedSuccessfully: 'تم الحفظ بنجاح',
    ConsultantEngineeringAttachmentLabel: 'توقيع نموذج مندوب مستشار هندسي',
    ConsultantEngineeringAttachmentRequired: 'هذا الملف مطلوب',
    next: 'التالي',
    previous: 'السابق',
    requestWasSentToEngineeringConsultant:
      'تم ارسال طلب للاستشاري الهندسي للموافقة على الاتفاقية',
  };
  licenseProjectId: string | null = '00000000-0000-0000-0000-000000000000';
  private destroyed$: ReplaySubject<boolean> = new ReplaySubject(1);
  constructor(
    public appService: LicenseProjectEngineeringConsultantService,
    public formGroup: FormBuilder,
    public datePipe: DatePipe,
    private _filemangementService: FileManagementService,
    // public toastService: ToastrNotificatioService,
    private _sharedLicenseProjectService: SharedLicenseProjectService,
    private toastr: ToastrService,
    private _nextAndPreviusButtonsService: NextAndPreviusButtonsService,
    private _toastrNotificationService: ToastrNotificatioService
  ) {}

  // begin of life cycle
  ngOnInit() {
    this.getLicenseProjectIdStorage();
    this.setMode();
    this.observeTabsButtons();
    this.updateSaveAsDraftBtnIsvisible();
  }

  private getLicenseProjectIdStorage(): void {
    this.licenseProjectId =
      this._sharedLicenseProjectService.getLicenseProjectIdStorage();
  }

  get controls() {
    return this.form.controls;
  }

  // end of life cycle

  edit() {
    this.isEdit = true;
  }

  deletFile(id: string) {
    this._filemangementService.DeletFile(id).subscribe(res => {
      if (res.isDone) {
        this.onGet();
      }
    })
  }


  buildForm() {
    this.form = this.formGroup.group({
      commercialRegister: [
        this.facility$.value?.commercialRegisterNumber
          ? this.facility$.value?.commercialRegisterNumber
          : this.facility.commercialRegisterNumber,
        Validators.compose([Validators.required, Validators.min(0)]),
      ],
      engineeringConsultantId: [this.entity.engineeringConsultantId],
      cityId: [this.entity.cityId, Validators.compose([Validators.required])],
      workDaysCount: [
        this.entity.workDaysCount,
        Validators.compose([Validators.required]),
      ],

      /*   engineeringConsultantDelegatorSignModelFileId: [
          this.entity.engineeringConsultantDelegatorSignModelFileId,
          Validators.compose([Validators.required]),
        ], */
      // engineeringConsultantLicenseNumber: [
      //   this.entity.engineeringConsultantLicenseNumber,
      //   Validators.compose([Validators.required]),
      // ],
      optionalTerms: [
        this.entity.optionalTerms,
        Validators.compose([Validators.required]),
      ],
      superviseStaffPMNumber: [
        this.entity.superviseStaffPMNumber,
        Validators.compose([Validators.required, Validators.min(0)]),
      ],
      superviseStaffPMExperience: [
        this.entity.superviseStaffPMExperience,
        Validators.compose([
          Validators.required,
          Validators.min(10),
          Validators.min(0),
        ]),
      ],
      superviseStaffPMStartDate: [
        this.transform(this.entity.superviseStaffPMStartDate),
        Validators.compose([Validators.required]),
      ],
      superviseStaffPMMonthes: [
        this.entity.superviseStaffPMMonthes,
        Validators.compose([Validators.required]),
      ],
      superviseStaffStructuralEngineerNumber: [
        this.entity.superviseStaffStructuralEngineerNumber,
        Validators.compose([Validators.required, Validators.min(0)]),
      ],
      superviseStaffStructuralEngineerExperience: [
        this.entity.superviseStaffStructuralEngineerExperience,
        Validators.compose([Validators.required, Validators.min(0)]),
      ],
      superviseStaffStructuralEngineerStartDate: [
        this.transform(this.entity.superviseStaffStructuralEngineerStartDate),
        Validators.compose([Validators.required]),
      ],
      superviseStaffStructuralEngineerMonthes: [
        this.entity.superviseStaffPMMonthes,
        Validators.compose([Validators.required]),
      ],
      superviseStaffArchitectEngineerNumber: [
        this.entity.superviseStaffArchitectEngineerNumber,
        Validators.compose([Validators.required, Validators.min(0)]),
      ],
      superviseStaffArchitectEngineerExperience: [
        this.entity.superviseStaffArchitectEngineerExperience,
        Validators.compose([Validators.required, Validators.min(0)]),
      ],
      superviseStaffArchitectEngineerStartDate: [
        this.transform(this.entity.superviseStaffArchitectEngineerStartDate),

        Validators.compose([Validators.required]),
      ],
      superviseStaffArchitectEngineerMonthes: [
        this.entity.superviseStaffArchitectEngineerMonthes,
        Validators.compose([Validators.required]),
      ],
      superviseStaffMechanicalEngineerNumber: [
        this.entity.superviseStaffMechanicalEngineerNumber,
        Validators.compose([Validators.required, Validators.min(0)]),
      ],
      superviseStaffMechanicalEngineerExperience: [
        this.entity.superviseStaffMechanicalEngineerExperience,
        Validators.compose([Validators.required, Validators.min(0)]),
      ],
      superviseStaffMechanicalEngineerStartDate: [
        this.transform(this.entity.superviseStaffMechanicalEngineerStartDate),

        Validators.compose([Validators.required]),
      ],
      superviseStaffMechanicalEngineerMonthes: [
        this.entity.superviseStaffMechanicalEngineerMonthes,
        Validators.compose([Validators.required, Validators.min(0)]),
      ],
      superviseStaffElectricalEngineerNumber: [
        this.entity.superviseStaffElectricalEngineerNumber,
        Validators.compose([Validators.required]),
      ],
      superviseStaffElectricalEngineerExperience: [
        this.entity.superviseStaffElectricalEngineerExperience,
        Validators.compose([Validators.required, Validators.min(0)]),
      ],
      superviseStaffElectricalEngineerStartDate: [
        this.transform(this.entity.superviseStaffElectricalEngineerStartDate),
        Validators.compose([Validators.required]),
      ],
      superviseStaffElectricalEngineerMonthes: [
        this.entity.superviseStaffElectricalEngineerMonthes,
        Validators.compose([Validators.required]),
      ],
      superviseStaffSurveyEngineerNumber: [
        this.entity.superviseStaffSurveyEngineerNumber,
        Validators.compose([Validators.required, Validators.min(0)]),
      ],
      superviseStaffSurveyEngineerExperience: [
        this.entity.superviseStaffSurveyEngineerExperience,
        Validators.compose([Validators.required, Validators.min(0)]),
      ],
      superviseStaffSurveyEngineerStartDate: [
        this.transform(this.entity.superviseStaffSurveyEngineerStartDate),
        Validators.compose([Validators.required]),
      ],
      superviseStaffSurveyEngineerMonthes: [
        this.entity.superviseStaffSurveyEngineerMonthes,
        Validators.compose([Validators.required]),
      ],
      assistantStaffStructuralEngineerNumber: [
        this.entity.assistantStaffStructuralEngineerNumber,
        Validators.compose([Validators.required, Validators.min(0)]),
      ],
      assistantStaffStructuralEngineerExperience: [
        this.entity.assistantStaffStructuralEngineerExperience,
        Validators.compose([Validators.required, Validators.min(0)]),
      ],
      assistantStaffStructuralEngineerStartDate: [
        this.transform(this.entity.assistantStaffStructuralEngineerStartDate),
        Validators.compose([Validators.required, Validators.min(0)]),
      ],
      assistantStaffStructuralEngineerMonthes: [
        this.entity.assistantStaffStructuralEngineerMonthes,
        Validators.compose([Validators.required, Validators.min(0)]),
      ],
      assistantStaffArchitectEngineerNumber: [
        this.entity.assistantStaffArchitectEngineerNumber,
        Validators.compose([Validators.required, Validators.min(0)]),
      ],
      assistantStaffArchitectEngineerExperience: [
        this.entity.assistantStaffArchitectEngineerExperience,
        Validators.compose([Validators.required, Validators.min(0)]),
      ],
      assistantStaffArchitectEngineerStartDate: [
        this.transform(this.entity.assistantStaffArchitectEngineerStartDate),
        Validators.compose([Validators.required]),
      ],
      assistantStaffArchitectEngineerMonthes: [
        this.entity.assistantStaffArchitectEngineerMonthes,
        Validators.compose([Validators.required]),
      ],
      assistantStaffMechanicalEngineerNumber: [
        this.entity.assistantStaffMechanicalEngineerNumber,
        Validators.compose([Validators.required, Validators.min(0)]),
      ],
      assistantStaffMechanicalEngineerExperience: [
        this.entity.assistantStaffMechanicalEngineerExperience,
        Validators.compose([Validators.required, Validators.min(0)]),
      ],
      assistantStaffMechanicalEngineerStartDate: [
        this.transform(this.entity.assistantStaffMechanicalEngineerStartDate),
        Validators.compose([Validators.required]),
      ],
      assistantStaffMechanicalEngineerMonthes: [
        this.entity.assistantStaffMechanicalEngineerMonthes,
        Validators.compose([Validators.required]),
      ],
      assistantStaffElectricalEngineerNumber: [
        this.entity.assistantStaffElectricalEngineerNumber,
        Validators.compose([Validators.required, Validators.min(0)]),
      ],
      assistantStaffElectricalEngineerExperience: [
        this.entity.assistantStaffElectricalEngineerExperience,
        Validators.compose([Validators.required, Validators.min(0)]),
      ],
      assistantStaffElectricalEngineerStartDate: [
        this.transform(this.entity.assistantStaffElectricalEngineerStartDate),
        Validators.compose([Validators.required]),
      ],

      assistantStaffElectricalEngineerMonthes: [
        this.entity.assistantStaffElectricalEngineerMonthes,
        Validators.compose([Validators.required]),
      ],
      assistantStaffSurveyEngineerNumber: [
        this.entity.assistantStaffSurveyEngineerNumber,
        Validators.compose([Validators.required, Validators.min(0)]),
      ],
      assistantStaffSurveyEngineerExperience: [
        this.entity.assistantStaffSurveyEngineerExperience,
        Validators.compose([Validators.required, Validators.min(0)]),
      ],
      assistantStaffSurveyEngineerStartDate: [
        this.transform(this.entity.assistantStaffSurveyEngineerStartDate),
        Validators.compose([Validators.required]),
      ],
      assistantStaffSurveyEngineerMonthes: [
        this.entity.assistantStaffSurveyEngineerMonthes,
        Validators.compose([Validators.required]),
      ],
      otherSpecialtiesDocumentControlSpecialistNumber: [
        this.entity.otherSpecialtiesDocumentControlSpecialistNumber,
        Validators.compose([Validators.required, Validators.min(0)]),
      ],
      otherSpecialtiesDocumentControlSpecialistExperience: [
        this.entity.otherSpecialtiesDocumentControlSpecialistExperience,
        Validators.compose([Validators.required, Validators.min(0)]),
      ],
      otherSpecialtiesDocumentControlSpecialistStartDate: [
        this.transform(
          this.entity.otherSpecialtiesDocumentControlSpecialistStartDate
        ),
        Validators.compose([Validators.required]),
      ],
      otherSpecialtiesDocumentControlSpecialistMonthes: [
        this.entity.otherSpecialtiesDocumentControlSpecialistMonthes,
        Validators.compose([Validators.required]),
      ],
      otherSpecialtiesHealthAndSafetySpecialistNumber: [
        this.entity.otherSpecialtiesHealthAndSafetySpecialistNumber,
        Validators.compose([Validators.required, Validators.min(0)]),
      ],
      otherSpecialtiesHealthAndSafetySpecialistExperience: [
        this.entity.otherSpecialtiesHealthAndSafetySpecialistExperience,
        Validators.compose([Validators.required, Validators.min(0)]),
      ],
      otherSpecialtiesHealthAndSafetySpecialistStartDate: [
        this.transform(
          this.entity.otherSpecialtiesHealthAndSafetySpecialistStartDate
        ),
        Validators.compose([Validators.required]),
      ],
      otherSpecialtiesHealthAndSafetySpecialistMonthes: [
        this.entity.otherSpecialtiesHealthAndSafetySpecialistMonthes,
        Validators.compose([Validators.required]),
      ],

      otherSpecialtiesQualityEngineerNumber: [
        this.entity.otherSpecialtiesQualityEngineerNumber,
        Validators.compose([Validators.required, Validators.min(0)]),
      ],
      otherSpecialtiesQualityEngineerExperience: [
        this.entity.otherSpecialtiesQualityEngineerExperience,
        Validators.compose([Validators.required, Validators.min(0)]),
      ],
      otherSpecialtiesQualityEngineerStartDate: [
        this.transform(this.entity.otherSpecialtiesQualityEngineerStartDate),
        Validators.compose([Validators.required]),
      ],
      otherSpecialtiesQualityEngineerMonthes: [
        this.entity.otherSpecialtiesQualityEngineerMonthes,
        Validators.compose([Validators.required]),
      ],
      otherSpecialtiesPlanningEngineerNumber: [
        this.entity.otherSpecialtiesPlanningEngineerNumber,
        Validators.compose([Validators.required, Validators.min(0)]),
      ],
      otherSpecialtiesPlanningEngineerExperience: [
        this.entity.otherSpecialtiesPlanningEngineerExperience,
        Validators.compose([Validators.required, Validators.min(0)]),
      ],
      otherSpecialtiesPlanningEngineerStartDate: [
        this.transform(this.entity.otherSpecialtiesPlanningEngineerStartDate),
        Validators.compose([Validators.required]),
      ],
      otherSpecialtiesPlanningEngineerMonthes: [
        this.entity.otherSpecialtiesPlanningEngineerMonthes,
        Validators.compose([Validators.required]),
      ],
      otherSpecialtiesBlockQuantitiesNumber: [
        this.entity.otherSpecialtiesBlockQuantitiesNumber,
        Validators.compose([Validators.required, Validators.min(0)]),
      ],
      otherSpecialtiesBlockQuantitiesExperience: [
        this.entity.otherSpecialtiesBlockQuantitiesExperience,
        Validators.compose([Validators.required, Validators.min(0)]),
      ],
      otherSpecialtiesBlockQuantitiesStartDate: [
        this.transform(this.entity.otherSpecialtiesBlockQuantitiesStartDate),
        Validators.compose([Validators.required]),
      ],
      otherSpecialtiesBlockQuantitiesMonthes: [
        this.entity.otherSpecialtiesBlockQuantitiesMonthes,
        Validators.compose([Validators.required]),
      ],
    });
    // console.log("buildForm this.form",this.form);
  }

  setFacility($event: any) {
    this.facility$.next($event.facility);
    this.facility = $event.facility;
  }

  setMode() {
    if (this.licenseProjectId) {
      // get entity from database
      this.onGet();
    } else {
      // this.entity$.next(this.entity);
      this.initModel();
    }
  }

  initModel() {
    this.entity.numberOfMonths = [];
    this.appService
      .GetnumberOfMonths(this.licenseProjectId as string)
      .subscribe((res) => {
        if (res) {
          this.entity.numberOfMonths = res;
        } else {
          this._toastrNotificationService.showError(
            'يجب ان يتم ادخال تاريخ بداية المشروع ونهاية المشروع في بيانات المشروع '
          );
        }
      });

    //TODO need license project data Here

    this.entity$.next(this.entity);
    this.buildForm();
  }

  onGet() {
    this.appService
      .getAsync(this.licenseProjectId as string)
      //.pipe(takeUntil(this.destroyed$))
      .subscribe((result) => {
        if (result.data) {
          this.engineeringConsultantFiles =
            result.data.licenseProjectEngineeringConsultantFiles;
 this.saveEngineeringConsultantFiles = result.data.licenseProjectEngineeringConsultantFiles;
          this.entity = result.data;
          //this.entity.engineeringConsultantDelegatorSignModelFile = result.data.licenseProjectEngineeringConsultantDelegators[0].EngineeringConsultantDelegatorSignModelFile;
          //this.entity.engineeringConsultantDelegatorSignModelFileId = result.data.licenseProjectEngineeringConsultantDelegators[0].signModelFileId;
          // this.facility$.next(this.entity.engineeringConsultant);
          this.facility$.next(this.entity.engineeringConsultant);
          this.entity$.next(this.entity);
          this.buildForm();
        } else {
          this.initModel();
        }
      });
  }

  // Begin Of Methods
  transform(value: any) {
    if (!value) return undefined;
    return this.datePipe.transform(new Date(value), 'yyyy-MM-dd');
  }

  save(moveToNextTab: boolean = false) {
    if (!this.licenseProjectId) {
      this._toastrNotificationService.showError(
        this.localizations.PleaseAddProject
      );
      return;
    }
    Object.entries(this.form.controls).filter((control: any) => {
      control[1].errors ? console.log(control) : '';
      // if (control[0].includes('Monthes')) {
      //   if (control[1].value) {
      //     // let Monthes =  typeof control[1].value != 'string' ? control[1].value : control[1].value.toString();
      //     let Monthes = control[1].value.toString();
      //     this.form.controls[control[0]].setValue(Monthes)
      //     console.log("this.form.controls[control[0]].value", this.form.controls[control[0]].value)
      //   }
      // }
    });

    if (this.form?.invalid) {
      this._toastrNotificationService.showError(
        this.localizations.PleaseAddAllRequiredFields
      );
      this.form?.markAllAsTouched();
      return;
    }
    let object = this.form
      ?.value as LicenseProjectEngineeringConsultantCreateUpdateDto;
    object.EngineeringConsultantFileId =
      this.engineeringConsultantFiles?.flatMap((f) => f.id);
    object.licenseProjectId = this.licenseProjectId;
    object.engineeringConsultantId = this.facility$.value?.id as string;
    object.id = this.entity.id;
    object.engineeringConsultantLicenseNumber = this.facility$.value
      ?.saudiAuthorityOfEngineersLicenseNumber as string;

    /*    if (object.id != undefined) {
         this.delegatorDto.signModelFileId = object.engineeringConsultantDelegatorSignModelFileId;
         if (this.entity.licenseProjectEngineeringConsultantDelegators != null) {
           this.delegatorDto.id = this.entity.licenseProjectEngineeringConsultantDelegators[0].id;
         }
       }
       else {
         object.engineeringConsultantDelegatorSignModelFileId = object.engineeringConsultantDelegatorSignModelFileId;
         this.delegatorDto.signModelFileId = object.engineeringConsultantDelegatorSignModelFileId;
       } */

    /*  this.delegatorDto.licenseProjectEngineeringConsultantId = object.engineeringConsultantId;

     object.licenseProjectEngineeringConsultantDelegators = [];
     object.licenseProjectEngineeringConsultantDelegators.push(this.delegatorDto); */

    // object.engineeringConsultantLicenseNumber =
    //   object.engineeringConsultantLicenseNumber.toString();
    if (this.entity.id !== Guid.empty && this.entity.id) {
      this.update(object, moveToNextTab);
    } else {
      this.create(object, moveToNextTab);
    }
  }

  create(
    object: LicenseProjectEngineeringConsultantCreateUpdateDto,
    moveToNextTab: boolean = false
  ) {
    this.appService
      .createAsync(object)
      .pipe(takeUntil(this.destroyed$))
      .subscribe((result) => {
        if (result && result.data) this.entity.id = result.data.id;
        // this._toastrNotificationService.showSuccess(this.localizations.CreatedSuccessfully);
        this._toastrNotificationService.showSuccess(
          this.localizations.requestWasSentToEngineeringConsultant
        );
        if (moveToNextTab) {
          this.moveToNextTab();
        } else {
          this.onGet()
        }

      });
  }

  update(
    object: LicenseProjectEngineeringConsultantCreateUpdateDto,
    moveToNextTab: boolean = false
  ) {
    this.appService
      .updateAsync(object)
      .pipe(takeUntil(this.destroyed$))
      .subscribe(() => {
        // this._toastrNotificationService.showSuccess(this.localizations.UpdatedSuccessfully);
        this._toastrNotificationService.showSuccess(
          this.localizations.requestWasSentToEngineeringConsultant
        );
        if (moveToNextTab) {
          this.moveToNextTab();
        } else {
          this.onGet()
        }

      });
  }

  // End Of Methods

  ngOnDestroy() {
    this.destroyed$.next(true);
    this.destroyed$.complete();
  }

  // TabsButtons
  private observeNextButtonIsCliced() {
    this._nextAndPreviusButtonsService.nextButtonIsClicked
      .pipe(takeUntil(this.destroyed$))
      .subscribe((res: null) => {
        this.save(true);
      });
  }
  private observeSaveAsDraftIsClicked() {
    this._nextAndPreviusButtonsService.saveAsDraftIsClicked
      .pipe(takeUntil(this.destroyed$))
      .subscribe((res: null) => {
        this.save();
      });
  }
  private observeTabsButtons(): void {
    this.observeNextButtonIsCliced();
    this.observeSaveAsDraftIsClicked();
  }
  private updateSaveAsDraftBtnIsvisible(): void {
    this._nextAndPreviusButtonsService.saveAsDraftBtnIsvisible.next(true);
  }
  private moveToNextTab(): void {
    this._nextAndPreviusButtonsService.moveToNextTab.emit();
  }
  public onEngineeringConsultantFileUploaded(filesData: {
    id: string;
    eventRes: {
      data: UploadFileModel[];
      isDone: boolean;
      message: string;
    };
  }): void {
    this.engineeringConsultantFiles = filesData.eventRes.data?.map((file) => {
      return {
        id: file.id,
        fileDescription: file.fileName,
        filePath: file.path,
        fileType: file.fileType,
      };
    });
  }
}
