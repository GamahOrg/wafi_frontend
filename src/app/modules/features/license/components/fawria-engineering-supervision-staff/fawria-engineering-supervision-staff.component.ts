import { DatePipe } from '@angular/common';
import { AfterViewInit, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SharedLicenseProjectService } from '../../services/sharedLicenseProject/shared-license-project.service';
import { LicenseProjectEngineeringConsultantDto } from '../../dataModels/license-project-engineering-consultant/license-project-engineering-consultant-dto';
import { LicenseProjectEngineeringConsultantService } from '../../services/license-project-engineering-consultant.service';
import { ToastrNotificatioService } from 'src/app/core/services/toastr-notification/toastr-notificatio.service';
import { StaffTypes } from '../engineering-consultant/engineering-consultant-agreement-staff/staff-types';
import { config, forkJoin, ReplaySubject, Subscription, takeUntil } from 'rxjs';
import { Guid } from 'src/app/core/configurations/guid';
import { LicenseProjectEngineeringConsultantCreateUpdateDto } from '../../dataModels/license-project-engineering-consultant/license-project-engineering-consultant-create-update-dto';
import { NextAndPreviusButtonsService } from '../../services/next-and-previous-buttons/next-and-previus-buttons.service';
import { LicenseRequestService } from '../../services/license-request.service';
import { ButtonType } from 'src/app/shared/models/enums/button-type.model';
import { confirmationPopupData, notePopupData, PopupData } from 'src/app/shared/models/popup.model';
import { RequestValidation, RequestSuccessResponse } from '../../dataModels/request-validation.model';
import { TabCode } from '../../models/tab-code.model';
import { LicenseRequestValidationPopupComponent } from '../license-request-validation-popup/license-request-validation-popup.component';
import { PopupService } from 'src/app/shared/services/popup/popup.service';
import { DataVisibilityOfLicenseProjectService } from '../../services/data-visibility-of-license-project/data-visibility-of-license-project.service';
import { TabsService } from 'src/app/shared/services/tabs/tabs.service';
import { Configuration } from 'src/app/core/configurations/shared.config';
import { LicenseProjectCompletionData } from '../../dataModels/license-project-model.dto';

@Component({
  selector: 'app-fawria-engineering-supervision-staff',
  templateUrl: './fawria-engineering-supervision-staff.component.html',
  styleUrls: ['./fawria-engineering-supervision-staff.component.scss']
})
export class FawriaEngineeringSupervisionStaffComponent implements OnInit, AfterViewInit {
  todayDate: Date = new Date();
  subscriptions: Subscription[] = [];
  showPMValidation: boolean = false;
  showValidation: boolean = false;
  dataConfirmationChecked: boolean = false;
  licenseProjectId: string | null = '00000000-0000-0000-0000-000000000000';
  entity: LicenseProjectEngineeringConsultantDto = <LicenseProjectEngineeringConsultantDto>{};
  form!: FormGroup;
  types = StaffTypes;
  private destroyed$: ReplaySubject<boolean> = new ReplaySubject(1);

  datePickerConfig = {
    dateInputFormat: 'DD/MM/YYYY',
    showWeekNumbers: false,
    selectFromOtherMonth: true,
    // minDate: new Date()
  };


  localizations = {
    Number: "العدد",
    SelectMonthes: "اختر عدد الاشهر",
    StartDate: "تاريخ بداية الدوام",
    StartDateRequired: "هذا الحقل مطلوب",
    NumberRequired: "هذا الحقل مطلوب",
    NumberOfExperience: "عدد سنوات الخبرة",
    NumberOfExperienceRequired: "هذا الحقل مطلوب",
    NumberOfExperienceProjectManagerMax: "يجب الا تقل عدد سنوات خبره مدير المشروع لا تقل عن 10 سنوات",
    NumberOfMonths: " اشهر التواجد",
    NumberOfMonthsRequired: "هذا الحقل مطلوب",
    Total: "الاجمالي",
    TotalRequired: "هذا الحقل مطلوب",
    MinValueError: 'قيمة الحقل يجب الا تقل عن صفر',
    ExecutiveDirectorTitle: 'بيانات المدير التنفيذي',
    ExecutiveDirectorName: 'الاسم',
    ExecutiveDirectorMobile: 'رقم الجوال',
    ExecutiveDirectorEmail: 'البريد الالكتروني',
    EngineeringConsultantTitle: 'الاستشاري الهندسي',
    EngineeringConsultant: 'رقم السجل التجاري للاستشاري الهندسي',
    EngineeringConsultantRequired: 'حقل مطلوب',
    ValidateConsultant: 'التحقق من السجل التجاري',
    EngineeringConsultantLicenseNumber: 'رقم رخصة الاستشاري الهندسي',
    EngineeringConsultantLicenseNumberRequired: 'حقل مطلوب',
    AgreementSection: 'اتفاقية عقد الاستشاري الهندسي',
    FirstStaffAgreement: 'بيان تواجد طاقم الإشراف الهندسى بالشهر',
    SecondStaffAgreement:
      'بيان تواجد طاقم الكادر المساعد للاشراف الهندسي بالشهر',
    ThirdStaffAgreement:
      'بيان تواجد طاقم الكادر للتخصصات الاخري للاشراف الهندسى بالشهر',
    Save: 'حفظ كمسودة',
    send: 'إرسال الطلب',
    PleaseAddProject: 'لا يوجد مشروع , نأمل اضافة المشروع اولا .',
    PleaseAddAllRequiredFields: 'الرجاء إدخال البيانات المطلوبة',
    dataConfirmationRequired: 'يجب الموافقة على إقرار صحة البيانات المدخلة',
    UpdatedSuccessfully: 'تم التعديل بنجاح',
    CreatedSuccessfully: 'تم الحفظ بنجاح',
    ConsultantEngineeringAttachmentLabel: 'توقيع نموذج مندوب مستشار هندسي',
    ConsultantEngineeringAttachmentRequired: 'هذا الملف مطلوب',
    next: 'التالي',
    previous: 'السابق',
    requestWasSentToEngineeringConsultant:
      'تم ارسال طلب للاستشاري الهندسي للموافقة على الاتفاقية',
  };

  constructor(
    public datePipe: DatePipe,
    private readonly _changeDetectorRef: ChangeDetectorRef,
    public appService: LicenseProjectEngineeringConsultantService,
    public formGroup: FormBuilder,
    private _sharedLicenseProjectService: SharedLicenseProjectService,
    private _toastrNotificationService: ToastrNotificatioService,
    private _nextAndPreviusButtonsService: NextAndPreviusButtonsService,
    private _licenseRequestService: LicenseRequestService,
    private _popupService: PopupService,
    private _tabsService: TabsService,
    private _dataVisibilityOfLicenseProjectService: DataVisibilityOfLicenseProjectService,
  ) {
  }

  ngOnInit() {
    this.getLicenseProjectIdStorage();
    this.observeTabsButtons();
    this.observeCompletedTapCodesUpdate();
  }

  private formTrackingSubscription: Subscription | null = null;

  private trackFormChanges(): void {
    // Unsubscribe from previous subscription if exists to avoid duplicates
    if (this.formTrackingSubscription) {
      this.formTrackingSubscription.unsubscribe();
    }

    if (this.form) {
      this.formTrackingSubscription = this.form.valueChanges.subscribe(() => {
        if (this.form.dirty) {
          this._tabsService.setUnsavedChanges(true);
        }
      });
      this.subscriptions.push(this.formTrackingSubscription);
    }
  }

  private getLicenseProjectIdStorage(): void {
    this.licenseProjectId = this._sharedLicenseProjectService.getLicenseProjectIdStorage();
    this.buildForm();
    this.setMode();
  }

  setMode() {
    if (this.licenseProjectId) {
      // get entity from database
      this.onGet();
    } else {
      this.initModel();
    }
  }

  totalMonths: number[] = [];
  onGet() {
    this.appService.getAsync(this.licenseProjectId as string).subscribe((result) => {
      if (result.data) {
        this.entity = result.data;
        this.totalMonths = result.data.numberOfMonths
        this.buildForm();
        // Check read-only state after form is initialized
        this.getCompletedTabs();
      } else {
        this.initModel();
      }
    });
  }

  initModel() {
    this.entity.numberOfMonths = [];
    this.appService
      .GetnumberOfMonths(this.licenseProjectId as string)
      .subscribe((res) => {
        if (res) {
          this.entity.numberOfMonths = res;
          this.buildForm();
        } else {
          this._toastrNotificationService.showError(
            'يجب ان يتم ادخال تاريخ بداية المشروع ونهاية المشروع في بيانات المشروع '
          );
        }
      });
  }


  // Helper method to get null or value for number fields
  private getNumberValue(value: number | null | undefined): number | null {
    return value === 0 || value === null || value === undefined ? null : value;
  }

  // Helper method to get null or value for array fields (Monthes)
  private getArrayValue(value: any[] | null | undefined): any[] | null {
    return value && value.length > 0 ? value : null;
  }

  // Helper method to get null or value for string fields
  private getStringValue(value: string | null | undefined): string | null {
    return value && value.trim() !== '' ? value : null;
  }

  buildForm() {
    this.form = this.formGroup.group({
      superviseStaffPMNumber: [
        this.getNumberValue(this.entity.superviseStaffPMNumber),
        Validators.compose([Validators.required, Validators.min(0)]),
      ],
      superviseStaffPMExperience: [
        this.getNumberValue(this.entity.superviseStaffPMExperience),
        Validators.compose([Validators.required, Validators.min(10)]),
      ],
      superviseStaffPMStartDate: [
        this.transform(this.entity.superviseStaffPMStartDate),
        Validators.compose([Validators.required]),
      ],
      superviseStaffPMMonthes: [
        this.getArrayValue(this.entity.superviseStaffPMMonthes),
        Validators.compose([Validators.required]),
      ],
      superviseStaffStructuralEngineerNumber: [
        this.getNumberValue(this.entity.superviseStaffStructuralEngineerNumber),
        Validators.compose([Validators.required, Validators.min(0)]),
      ],
      superviseStaffStructuralEngineerExperience: [
        this.getNumberValue(this.entity.superviseStaffStructuralEngineerExperience),
        Validators.compose([Validators.required, Validators.min(0)]),
      ],
      superviseStaffStructuralEngineerStartDate: [
        this.transform(this.entity.superviseStaffStructuralEngineerStartDate),
        Validators.compose([Validators.required]),
      ],
      superviseStaffStructuralEngineerMonthes: [
        this.getArrayValue(this.entity.superviseStaffStructuralEngineerMonthes),
        Validators.compose([Validators.required]),
      ],
      superviseStaffArchitectEngineerNumber: [
        this.getNumberValue(this.entity.superviseStaffArchitectEngineerNumber),
        Validators.compose([Validators.required, Validators.min(0)]),
      ],
      superviseStaffArchitectEngineerExperience: [
        this.getNumberValue(this.entity.superviseStaffArchitectEngineerExperience),
        Validators.compose([Validators.required, Validators.min(0)]),
      ],
      superviseStaffArchitectEngineerStartDate: [
        this.transform(this.entity.superviseStaffArchitectEngineerStartDate),
        Validators.compose([Validators.required]),
      ],
      superviseStaffArchitectEngineerMonthes: [
        this.getArrayValue(this.entity.superviseStaffArchitectEngineerMonthes),
        Validators.compose([Validators.required]),
      ],
      superviseStaffMechanicalEngineerNumber: [
        this.getNumberValue(this.entity.superviseStaffMechanicalEngineerNumber),
        Validators.compose([Validators.required, Validators.min(0)]),
      ],
      superviseStaffMechanicalEngineerExperience: [
        this.getNumberValue(this.entity.superviseStaffMechanicalEngineerExperience),
        Validators.compose([Validators.required, Validators.min(0)]),
      ],
      superviseStaffMechanicalEngineerStartDate: [
        this.transform(this.entity.superviseStaffMechanicalEngineerStartDate),
        Validators.compose([Validators.required]),
      ],
      superviseStaffMechanicalEngineerMonthes: [
        this.getArrayValue(this.entity.superviseStaffMechanicalEngineerMonthes),
        Validators.compose([Validators.required, Validators.min(0)]),
      ],
      superviseStaffElectricalEngineerNumber: [
        this.getNumberValue(this.entity.superviseStaffElectricalEngineerNumber),
        Validators.compose([Validators.required]),
      ],
      superviseStaffElectricalEngineerExperience: [
        this.getNumberValue(this.entity.superviseStaffElectricalEngineerExperience),
        Validators.compose([Validators.required, Validators.min(0)]),
      ],
      superviseStaffElectricalEngineerStartDate: [
        this.transform(this.entity.superviseStaffElectricalEngineerStartDate),
        Validators.compose([Validators.required]),
      ],
      superviseStaffElectricalEngineerMonthes: [
        this.getArrayValue(this.entity.superviseStaffElectricalEngineerMonthes),
        Validators.compose([Validators.required]),
      ],
      superviseStaffSurveyEngineerNumber: [
        this.getNumberValue(this.entity.superviseStaffSurveyEngineerNumber),
        Validators.compose([Validators.required, Validators.min(0)]),
      ],
      superviseStaffSurveyEngineerExperience: [
        this.getNumberValue(this.entity.superviseStaffSurveyEngineerExperience),
        Validators.compose([Validators.required, Validators.min(0)]),
      ],
      superviseStaffSurveyEngineerStartDate: [
        this.transform(this.entity.superviseStaffSurveyEngineerStartDate),
        Validators.compose([Validators.required]),
      ],
      superviseStaffSurveyEngineerMonthes: [
        this.getArrayValue(this.entity.superviseStaffSurveyEngineerMonthes),
        Validators.compose([Validators.required]),
      ],
      assistantStaffStructuralEngineerNumber: [
        this.getNumberValue(this.entity.assistantStaffStructuralEngineerNumber),
        Validators.compose([Validators.required, Validators.min(0)]),
      ],
      assistantStaffStructuralEngineerExperience: [
        this.getNumberValue(this.entity.assistantStaffStructuralEngineerExperience),
        Validators.compose([Validators.required, Validators.min(0)]),
      ],
      assistantStaffStructuralEngineerStartDate: [
        this.transform(this.entity.assistantStaffStructuralEngineerStartDate),
        Validators.compose([Validators.required]),
      ],
      assistantStaffStructuralEngineerMonthes: [
        this.getArrayValue(this.entity.assistantStaffStructuralEngineerMonthes),
        Validators.compose([Validators.required, Validators.min(0)]),
      ],
      assistantStaffArchitectEngineerNumber: [
        this.getNumberValue(this.entity.assistantStaffArchitectEngineerNumber),
        Validators.compose([Validators.required, Validators.min(0)]),
      ],
      assistantStaffArchitectEngineerExperience: [
        this.getNumberValue(this.entity.assistantStaffArchitectEngineerExperience),
        Validators.compose([Validators.required, Validators.min(0)]),
      ],
      assistantStaffArchitectEngineerStartDate: [
        this.transform(this.entity.assistantStaffArchitectEngineerStartDate),
        Validators.compose([Validators.required]),
      ],
      assistantStaffArchitectEngineerMonthes: [
        this.getArrayValue(this.entity.assistantStaffArchitectEngineerMonthes),
        Validators.compose([Validators.required]),
      ],
      assistantStaffMechanicalEngineerNumber: [
        this.getNumberValue(this.entity.assistantStaffMechanicalEngineerNumber),
        Validators.compose([Validators.required, Validators.min(0)]),
      ],
      assistantStaffMechanicalEngineerExperience: [
        this.getNumberValue(this.entity.assistantStaffMechanicalEngineerExperience),
        Validators.compose([Validators.required, Validators.min(0)]),
      ],
      assistantStaffMechanicalEngineerStartDate: [
        this.transform(this.entity.assistantStaffMechanicalEngineerStartDate),
        Validators.compose([Validators.required]),
      ],
      assistantStaffMechanicalEngineerMonthes: [
        this.getArrayValue(this.entity.assistantStaffMechanicalEngineerMonthes),
        Validators.compose([Validators.required]),
      ],
      assistantStaffElectricalEngineerNumber: [
        this.getNumberValue(this.entity.assistantStaffElectricalEngineerNumber),
        Validators.compose([Validators.required, Validators.min(0)]),
      ],
      assistantStaffElectricalEngineerExperience: [
        this.getNumberValue(this.entity.assistantStaffElectricalEngineerExperience),
        Validators.compose([Validators.required, Validators.min(0)]),
      ],
      assistantStaffElectricalEngineerStartDate: [
        this.transform(this.entity.assistantStaffElectricalEngineerStartDate),
        Validators.compose([Validators.required]),
      ],
      assistantStaffElectricalEngineerMonthes: [
        this.getArrayValue(this.entity.assistantStaffElectricalEngineerMonthes),
        Validators.compose([Validators.required]),
      ],
      assistantStaffSurveyEngineerNumber: [
        this.getNumberValue(this.entity.assistantStaffSurveyEngineerNumber),
        Validators.compose([Validators.required, Validators.min(0)]),
      ],
      assistantStaffSurveyEngineerExperience: [
        this.getNumberValue(this.entity.assistantStaffSurveyEngineerExperience),
        Validators.compose([Validators.required, Validators.min(0)]),
      ],
      assistantStaffSurveyEngineerStartDate: [
        this.transform(this.entity.assistantStaffSurveyEngineerStartDate),
        Validators.compose([Validators.required]),
      ],
      assistantStaffSurveyEngineerMonthes: [
        this.getArrayValue(this.entity.assistantStaffSurveyEngineerMonthes),
        Validators.compose([Validators.required]),
      ],
      otherSpecialtiesDocumentControlSpecialistNumber: [
        this.getNumberValue(this.entity.otherSpecialtiesDocumentControlSpecialistNumber),
        Validators.compose([Validators.required, Validators.min(0)]),
      ],
      otherSpecialtiesDocumentControlSpecialistExperience: [
        this.getNumberValue(this.entity.otherSpecialtiesDocumentControlSpecialistExperience),
        Validators.compose([Validators.required, Validators.min(0)]),
      ],
      otherSpecialtiesDocumentControlSpecialistStartDate: [
        this.transform(this.entity.otherSpecialtiesDocumentControlSpecialistStartDate),
        Validators.compose([Validators.required]),
      ],
      otherSpecialtiesDocumentControlSpecialistMonthes: [
        this.getArrayValue(this.entity.otherSpecialtiesDocumentControlSpecialistMonthes),
        Validators.compose([Validators.required]),
      ],
      otherSpecialtiesHealthAndSafetySpecialistNumber: [
        this.getNumberValue(this.entity.otherSpecialtiesHealthAndSafetySpecialistNumber),
        Validators.compose([Validators.required, Validators.min(0)]),
      ],
      otherSpecialtiesHealthAndSafetySpecialistExperience: [
        this.getNumberValue(this.entity.otherSpecialtiesHealthAndSafetySpecialistExperience),
        Validators.compose([Validators.required, Validators.min(0)]),
      ],
      otherSpecialtiesHealthAndSafetySpecialistStartDate: [
        this.transform(this.entity.otherSpecialtiesHealthAndSafetySpecialistStartDate),
        Validators.compose([Validators.required]),
      ],
      otherSpecialtiesHealthAndSafetySpecialistMonthes: [
        this.getArrayValue(this.entity.otherSpecialtiesHealthAndSafetySpecialistMonthes),
        Validators.compose([Validators.required]),
      ],
      otherSpecialtiesQualityEngineerNumber: [
        this.getNumberValue(this.entity.otherSpecialtiesQualityEngineerNumber),
        Validators.compose([Validators.required, Validators.min(0)]),
      ],
      otherSpecialtiesQualityEngineerExperience: [
        this.getNumberValue(this.entity.otherSpecialtiesQualityEngineerExperience),
        Validators.compose([Validators.required, Validators.min(0)]),
      ],
      otherSpecialtiesQualityEngineerStartDate: [
        this.transform(this.entity.otherSpecialtiesQualityEngineerStartDate),
        Validators.compose([Validators.required]),
      ],
      otherSpecialtiesQualityEngineerMonthes: [
        this.getArrayValue(this.entity.otherSpecialtiesQualityEngineerMonthes),
        Validators.compose([Validators.required]),
      ],
      otherSpecialtiesPlanningEngineerNumber: [
        this.getNumberValue(this.entity.otherSpecialtiesPlanningEngineerNumber),
        Validators.compose([Validators.required, Validators.min(0)]),
      ],
      otherSpecialtiesPlanningEngineerExperience: [
        this.getNumberValue(this.entity.otherSpecialtiesPlanningEngineerExperience),
        Validators.compose([Validators.required, Validators.min(0)]),
      ],
      otherSpecialtiesPlanningEngineerStartDate: [
        this.transform(this.entity.otherSpecialtiesPlanningEngineerStartDate),
        Validators.compose([Validators.required]),
      ],
      otherSpecialtiesPlanningEngineerMonthes: [
        this.getArrayValue(this.entity.otherSpecialtiesPlanningEngineerMonthes),
        Validators.compose([Validators.required]),
      ],
      otherSpecialtiesBlockQuantitiesNumber: [
        this.getNumberValue(this.entity.otherSpecialtiesBlockQuantitiesNumber),
        Validators.compose([Validators.required, Validators.min(0)]),
      ],
      otherSpecialtiesBlockQuantitiesExperience: [
        this.getNumberValue(this.entity.otherSpecialtiesBlockQuantitiesExperience),
        Validators.compose([Validators.required, Validators.min(0)]),
      ],
      otherSpecialtiesBlockQuantitiesStartDate: [
        this.transform(this.entity.otherSpecialtiesBlockQuantitiesStartDate),
        Validators.compose([Validators.required]),
      ],
      otherSpecialtiesBlockQuantitiesMonthes: [
        this.getArrayValue(this.entity.otherSpecialtiesBlockQuantitiesMonthes),
        Validators.compose([Validators.required]),
      ],
      executiveDirectorName: [
        this.getStringValue(this.entity.executiveDirectorName),
        Validators.compose([Validators.required]),
      ],
      executiveDirectorMobile: [
        this.getStringValue(this.entity.executiveDirectorMobile),
        Validators.compose([Validators.required, Validators.pattern(Configuration.validators.PhoneNumber)]),
      ],
      executiveDirectorEmail: [
        this.getStringValue(this.entity.executiveDirectorEmail),
        Validators.compose([Validators.required, Validators.pattern(Configuration.validators.emailPattern)]),
      ],
    });
    this.trackFormChanges();
  }

  get controls() {
    return this.form.controls;
  }

  // ✅ Updated method - now checks for specific control name
  ProjectManagerMaxChange(value: number, controlName: string) {
    if (controlName === "superviseStaffPMExperience") {
      this.showPMValidation = value < 10;
    }
  }

  ngAfterViewInit(): void {
    // ✅ Updated to handle date values properly
    Object.entries(this.form.controls).forEach((control: any) => {
      if (control[0].includes('StartDate')) {
        if (control[1].value && control[1].value !== '01/01/0001') {
          let newDateValue = new Date(control[1].value);
          // Verify date is valid
          if (!isNaN(newDateValue.getTime())) {
            this.form.controls[control[0]].setValue(newDateValue, { emitEvent: false });
          } else {
            this.form.controls[control[0]].setValue(null, { emitEvent: false });
          }
        } else {
          this.form.controls[control[0]].setValue(null, { emitEvent: false });
        }
      }
      this._changeDetectorRef.detectChanges();
    });
  }

  transform(value: any): Date | null {
    if (!value || value == '0001-01-01T00:00:00') return null;
    const date = new Date(value);
    return !isNaN(date.getTime()) ? date : null;
  }

  save(moveToNextTab: boolean = false, verify: boolean = false) {
    if (this.form?.invalid) {
      this.form?.markAllAsTouched();
      this._changeDetectorRef.detectChanges();
      this._toastrNotificationService.showError(this.localizations.PleaseAddAllRequiredFields);
      return;
    }
    if (!this.licenseProjectId) {
      this._toastrNotificationService.showError(
        this.localizations.PleaseAddProject
      );
      return;
    }

    if (!this.dataConfirmationChecked && this.isFawriaValidation()) {
      this.showValidation = true;
      this._toastrNotificationService.showError(this.localizations.dataConfirmationRequired);
      return;
    }
    let object = this.form?.value as LicenseProjectEngineeringConsultantCreateUpdateDto;
    object.licenseProjectId = this.licenseProjectId;
    object.engineeringConsultantId = this.entity.engineeringConsultantId as string;
    object.id = this.entity.id;
    object.engineeringConsultantLicenseNumber = this.entity.engineeringConsultantLicenseNumber

    if (this.entity.id !== Guid.empty && this.entity.id) {
      this.update(object, moveToNextTab, verify);
    }
  }

  update(object: LicenseProjectEngineeringConsultantCreateUpdateDto, moveToNextTab: boolean = false, verify: boolean = false) {
    this.appService.fawryLicenseUpdateComplatedInfo(object).pipe(takeUntil(this.destroyed$)).subscribe((res) => {
      if (res.isDone) {
        this.form.markAsPristine();
        this._tabsService.setUnsavedChanges(false);
        if (!verify)
          this._toastrNotificationService.showSuccess(this.localizations.CreatedSuccessfully);
        this._licenseRequestService.updatedCompletePercentage.emit();
        if (moveToNextTab) this.moveToNextTab()
        else this.onGet()
        if (verify)
          this.verify();
      }
    });
  }

  typeCode: string | null = null;
  completedTapCodes: string[] = [];
  isReadOnly: boolean = false;
  private buttonSubscriptions: Subscription[] = [];

  getCompletedTabs() {
    if (!this.licenseProjectId) return;
    const typeCode = this._sharedLicenseProjectService.getLicenseTypeCodeStorage();
    if (typeCode === 'FSRSU' && this.licenseProjectId) {

      const requests = [
        this._dataVisibilityOfLicenseProjectService.GetCompletedLicenseProjectProfileTaps(this.licenseProjectId),
        this._licenseRequestService.GetLicenseProjectCompletionData(this.licenseProjectId)
      ];
      const subscriptions = forkJoin(requests).subscribe((results) => {
        if (results) {
          let completedTabs = results[0] as string[];
          let complete = results[1] as LicenseProjectCompletionData | null;
          if (completedTabs && complete) {
            let isCompleted = completedTabs.includes(TabCode.fawriaEngineeringSupervisionStaff) && complete.isProfileCompleted;
            if (isCompleted) {
              this.isReadOnly = true;
              this.disableFormControls();
            } else {
              this.isReadOnly = false;
            }

            this.setupButtonSubscriptions();
          }

        }
      });
      this.subscriptions.push(subscriptions);

    }
  }

    observeCompletedTapCodesUpdate() {
      this.subscriptions.push(
        this._licenseRequestService.updateCompletedTapCodesIsClicked.subscribe(() => {
          this.getCompletedTabs();
        })
      );
    }



    setupButtonSubscriptions() {
      // Clear any existing button subscriptions
      this.buttonSubscriptions.forEach(sub => sub.unsubscribe());
      this.buttonSubscriptions = [];

      if (this.isFawriaValidation()) {
        if (this.isReadOnly) {
          // Tab is completed - show next button only
          this.buttonSubscriptions.push(
            this._nextAndPreviusButtonsService.nextButtonIsClicked.subscribe(
              () => {
                this.moveToNextTab();
              }
            )
          );
          this._nextAndPreviusButtonsService.nextBtnIsVisible.next(true);
          this._nextAndPreviusButtonsService.verifyBtnIsvisible.next(false);
          this._nextAndPreviusButtonsService.saveAsDraftBtnIsvisible.next(false);
        } else {
          // Tab is not completed - show save and next buttons
          this.buttonSubscriptions.push(
            this._nextAndPreviusButtonsService.nextButtonIsClicked.subscribe(
              () => {
                this.save(true, false);
              }
            ),
            this._nextAndPreviusButtonsService.saveAsDraftIsClicked.subscribe(
              () => {
                this.save();
              }
            )
          );
          this._nextAndPreviusButtonsService.saveAsDraftBtnIsvisible.next(false);
          this._nextAndPreviusButtonsService.nextBtnIsVisible.next(true);
          this._nextAndPreviusButtonsService.verifyBtnIsvisible.next(false);
        }
      } else {
        // Not FSRSU type - show next button
        this.buttonSubscriptions.push(
          this._nextAndPreviusButtonsService.nextButtonIsClicked.subscribe(
            () => {
              this.save(true, false);
            }
          )
        );
        this._nextAndPreviusButtonsService.saveAsDraftBtnIsvisible.next(false);
        this._nextAndPreviusButtonsService.nextBtnIsVisible.next(true);
        this._nextAndPreviusButtonsService.verifyBtnIsvisible.next(false);
      }
    }

    disableFormControls() {
      if (this.form) {
        this.form.disable();
      }
    }

    verify() {
      let licenseProjectId = this._sharedLicenseProjectService.getLicenseProjectIdStorage();
      if (!licenseProjectId) return;
      this.subscriptions.push(
        this._licenseRequestService.SendFawriaLicenseByProjectId(licenseProjectId, [TabCode.fawriaEngineeringSupervisionStaff]).subscribe((res: RequestValidation | RequestSuccessResponse | null) => {
          if (res) {
            if ('id' in res && 'requestCode' in res && 'typeCode' in res) {
              this.typeCode = res.typeCode
              this._sharedLicenseProjectService.setLicenseProjectIdInLocalStorage(res.licenseProjectId);
              this._sharedLicenseProjectService.setLicenseRequestIdInLocalStorage(res.id);
              this._toastrNotificationService.showSuccess('تم الحفظ والتحقق بنجاح')
              this._licenseRequestService.updateCompletedTapCodesIsClicked.emit();
              this._licenseRequestService.updatedCompletePercentage.emit();
            } else {
              this.updateRequestValidation(res as RequestValidation);
              this.openValidationDialog();
            }
          }
        })
      )
    }

  private updateRequestValidation(data: RequestValidation) {
    this._licenseRequestService.updateRequestValidation(
      data as RequestValidation
    );
  }

  openConfirmaDialog(res: string): void {
    if (this.typeCode === 'FSRSU') {
      let Data = {
        imagePath: 'assets/images/auth/ForgotPass.svg',
        title: 'تم إرسال الطلب بنجاح !',
        staticMessage: 'تم إنشاء الاتفاقيات بين الأطراف وفي انتظار موافقتهم',
        dynamicMessage: res,
        buttonText: 'متابعة طلبك',
        buttonLink: '',
      } as notePopupData;
      this._popupService.updateNotePopupData(Data);
    }
  }

  openValidationDialog(): void {
    let Data = {
      title: `التحقق من بيانات المشروع`,
      component: LicenseRequestValidationPopupComponent,
      id: "LicenseRequestValidationPopupComponent",
      buttons: [
        {
          icon: "",
          title: "إلغاء",
          actionType: ButtonType.cancel,
          isVisable: true,
          isDisables: false,
        },
        {
          icon: "",
          title: "إستكمال البيانات",
          actionType: ButtonType.confirm,
          isVisable: true,
          isDisables: false,
        },
      ]
    } as PopupData;
    this._popupService.updatePopupData(Data);
  }

  openSendDataDialog(): void {
    let Data = {
      popupType: 'primary',
      title: '',
      staticMessage: 'بعد التحقق قد يتم تقييد التعديل على البيانات',
      dynamicMessage: '',
      acceptButtonText: 'تأكيد إرسال البيانات',
    } as confirmationPopupData;
    const dialogRef = this._popupService.updateConfirmationPopupData(Data);

    const confirmSub = this._popupService.confirmAction.subscribe(() => {
      this.save(false, true);
      dialogRef.close();
      confirmSub.unsubscribe();
    });

    dialogRef.afterClosed().subscribe(() => {
      confirmSub.unsubscribe();
    });
  }

  isFawriaValidation(): boolean {
    const typecode = this._sharedLicenseProjectService.getLicenseTypeCodeStorage();
    if (typecode == 'FSRSU')
      return true;
    else
      return false;
  }

  updateSveAsDraftBtnIsvisible(): void {
    this._nextAndPreviusButtonsService.saveAsDraftBtnIsvisible.next(false);
  }

  private observeNextButtonIsCliced() {
    if (this.isFawriaValidation()) {
      this.subscriptions.push(
        this._nextAndPreviusButtonsService.verifyIsClicked.subscribe(
          (res: null) => {
            this.openSendDataDialog();
          }
        )
      );
      this._nextAndPreviusButtonsService.saveAsDraftBtnIsvisible.next(false);
      this._nextAndPreviusButtonsService.nextBtnIsVisible.next(false);
      this._nextAndPreviusButtonsService.verifyBtnIsvisible.next(true);
      this._nextAndPreviusButtonsService.verifyBtnText.next('تحقق وحفظ  كادر الاشراف الهندسي');
    } else {
      this.subscriptions.push(
        this._nextAndPreviusButtonsService.verifyIsClicked.subscribe(
          (res: null) => {
            this.save(true, false);
          }
        )
      );
      this._nextAndPreviusButtonsService.saveAsDraftBtnIsvisible.next(false);
      this._nextAndPreviusButtonsService.nextBtnIsVisible.next(true);
      this._nextAndPreviusButtonsService.verifyBtnIsvisible.next(false);
    }
  }

  private observeTabsButtons(): void {
    //this.observeNextButtonIsCliced();
  }

  private moveToNextTab(): void {
    this._nextAndPreviusButtonsService.moveToNextTab.emit();
  }

  ngOnDestroy() {
    this._tabsService.setUnsavedChanges(false);
    this.destroyed$.next(true);
    this.destroyed$.complete();
    this.subscriptions.forEach(sub => sub.unsubscribe());
    this.buttonSubscriptions.forEach((sub: Subscription) => sub.unsubscribe());
    this._nextAndPreviusButtonsService.nextBtnIsVisible.next(true);
    this._nextAndPreviusButtonsService.verifyBtnIsvisible.next(false);
  }
}
