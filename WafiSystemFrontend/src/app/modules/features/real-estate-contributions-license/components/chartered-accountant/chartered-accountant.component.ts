import { LicenseProjectCharteredAccountantDelegatorCreateUpdateDto } from './../../dataModels/license-project-chartered-accountant/license-project-chartered-accountant-create-update-dto';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BehaviorSubject, ReplaySubject, takeUntil } from 'rxjs';
import { DatePipe } from '@angular/common';
import { ToastrNotificatioService } from '../../../../../core/services/toastr-notification/toastr-notificatio.service';
import { Guid } from '../../../../../core/configurations/guid';

import { LicenseProjectCharteredAccountantDto } from '../../dataModels/license-project-chartered-accountant/license-project-chartered-accountant-dto';
import { LicenseProjectCharteredAccountantService } from '../../services/license-project-chartered-accountant.service';
import { LicenseProjectCharteredAccountantCreateUpdateDto } from '../../dataModels/license-project-chartered-accountant/license-project-chartered-accountant-create-update-dto';
import { QualificationTypeCode } from '../../../../../core/enums/qualification-type-code';
import { SharedLicenseProjectService } from '../../services/sharedLicenseProject/shared-license-project.service';
import { FacilityShortDto } from '../../models/facility-short-dto';
import { NextAndPreviusButtonsService } from '../../services/next-and-previous-buttons/next-and-previus-buttons.service';
import { FileUploader } from 'src/app/shared/models/file-uploader.model';
import { UploadFileModel } from 'src/app/shared/models/upload-file.model';
import { environment } from 'src/environments/environment';
import { SysFileManagerCreateUpdateDto } from 'src/app/shared/models/sys-file-manager-create-update-dto';
import  { FileManagementService } from 'src/app/shared/services/fileManagement/file-management.service';

@Component({
  selector: 'app-chartered-accountant',
  templateUrl: './chartered-accountant.component.html',
  styleUrls: ['./chartered-accountant.component.scss'],
})
export class CharteredAccountantComponent {
  charteredAccountantFiles: SysFileManagerCreateUpdateDto[] | undefined = [];
  savedCharteredAccountantFiles: SysFileManagerCreateUpdateDto[] | undefined = [];
  multiFilesUploaderData: FileUploader = {
    multiple: true,
  } as FileUploader;
  baseUrl = `${environment.baseURL}/`;

  form!: FormGroup;
  delegatorDto: LicenseProjectCharteredAccountantDelegatorCreateUpdateDto =
    new LicenseProjectCharteredAccountantDelegatorCreateUpdateDto();
  facility: FacilityShortDto = new FacilityShortDto();
  entity: LicenseProjectCharteredAccountantDto = <any>{};
  entity$: BehaviorSubject<LicenseProjectCharteredAccountantDto | undefined> =
    new BehaviorSubject<LicenseProjectCharteredAccountantDto | undefined>(
      undefined
    );
  typeCode = QualificationTypeCode;
  licenseProjectId: string | null = '00000000-0000-0000-0000-000000000000';
  private destroyed$: ReplaySubject<boolean> = new ReplaySubject(1);
  todayDate: string | null = '';
  localizations = {
    charteredAccountantDelegatorIdentityNumber: 'رقم هويه المفوض',
    charteredAccountantDelegatorMobile: 'رقم الجوال',
    charteredAccountantDelegatorEmail: 'البريد الإلكتروني',
    charteredAccountantDelegatorName: 'اسم المفوض',
    CharteredAccountantTitle: 'للمحاسب القانوني',
    CharteredAccountant: 'رقم السجل التجاري للمحاسب القانوني',
    CharteredAccountantRequired: 'هذا الحقل مطلوب',
    CharteredAccountantLicenseNumber: 'رقم رخصه المحاسب القانوني',
    Required: 'هذا الحقل مطلوب',
    MinValueError: 'قيمة الحقل يجب الا تقل عن صفر',
    AgreementDate: 'تاريخ الاتفاقية',
    ValidateConsultant: 'التحقق من السجل التجاري',
    AgreementDateRequired: 'هذا الحقل مطلوب',
    PleaseAddProject: 'لا يوجد مشروع , نأمل اضافة المشروع اولا .',
    PleaseAddAllRequiredFields:
      '"نأمل ادخال كل الحقول اللازمة واعادة المحاولة"',
    UpdatedSuccessfully: 'تم التعديل بنجاح',
    CreatedSuccessfully: 'تم الحفظ بنجاح',
    emailPattern: 'من فضلك ادخل البريد الإلكتروني صحيح',
    CharteredAccountantLicenseNumberRequired:
      'رقم رخصة المحاسب القانوني مطلوب فى منشاة المحاسب القانوني',
  };
  facility$: BehaviorSubject<FacilityShortDto | undefined> =
    new BehaviorSubject<FacilityShortDto | undefined>(undefined);
  constructor(
    public appService: LicenseProjectCharteredAccountantService,
    public formGroup: FormBuilder,
    public datePipe: DatePipe,
    private _filemangementService: FileManagementService,
    public toastService: ToastrNotificatioService,
    private _sharedLicenseProjectService: SharedLicenseProjectService,
    private _nextAndPreviusButtonsService: NextAndPreviusButtonsService
  ) {}

  // begin of life cycle
  ngOnInit() {
    this.getLicenseProjectIdStorage();
    this.setMode();
    this.todayDate = this.datePipe.transform(new Date(), 'yyyy-MM-dd');
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

  setFacility($event: any) {
    this.facility$.next($event.facility);
    this.facility = $event.facility;
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
        '',
      ],
      charteredAccountantId: [this.entity.charteredAccountantId],
      cityId: [this.entity.cityId, Validators.compose([Validators.required])],
      workDaysCount: [
        this.entity.workDaysCount,
        Validators.compose([Validators.required, Validators.min(0)]),
      ],
      /*   delegatorName: [
        this.entity.delegatorName,
        Validators.compose([Validators.required]),
      ], */
      /*   delegatorEmail: [
        this.entity.delegatorEmail,
        Validators.compose([Validators.required, Validators.email]),
      ], */
      /*   delegatorMobile: [
        this.entity.delegatorMobile,
        Validators.compose([Validators.required]),
      ], */
      /*  delegatorIdentityNumber: [
        this.entity.delegatorIdentityNumber,
        Validators.compose([Validators.required, Validators.min(0)]),
      ], */
      /*    charteredAccountantDelegatorSignModelFileId: [
        this.entity.charteredAccountantDelegatorSignModelFile,
        Validators.compose([Validators.required]),
      ], */
      charteredAccountantLicenseNumber: [
        this.entity.charteredAccountantLicenseNumber,
        Validators.compose([Validators.required, Validators.min(0)]),
      ],
      optionalTerms: [
        this.entity.optionalTerms,
        Validators.compose([Validators.required]),
      ],
      // agreementDate: [
      //   this.entity.agreementDate ? new Date(this.entity.agreementDate) : null,
      //   Validators.compose([Validators.required]),
      // ],
    });
  }

  setMode() {
    if (this.licenseProjectId) {
      // get entity from database
      this.onGet();
    } else {
      // create init model
      this.entity$.next(this.entity);
      this.buildForm();
    }
  }

  onGet() {
    this.appService
      .getAsync(this.licenseProjectId)
      .pipe(takeUntil(this.destroyed$))
      .subscribe((result) => {
        if (result.data) {
          this.charteredAccountantFiles =
            result.data.licenseProjectCharteredAccountantFiles;
            this.savedCharteredAccountantFiles =
            result.data.licenseProjectCharteredAccountantFiles;
          this.entity = result.data;
          // this.entity.charteredAccountantDelegatorSignModelFile = result.data.licenseProjectCharteredAccountantDelegators[0].charteredAccountantDelegatorSignModelFile;
          // this.entity.charteredAccountantDelegatorSignModelFileId = result.data.licenseProjectCharteredAccountantDelegators[0].signModelFileId;
          this.facility$.next(this.entity.charteredAccountant);
          this.entity$.next(this.entity);
          this.buildForm();
        } else {
          this.entity$.next(this.entity);
          this.buildForm();
        }
      });
  }
  transform(value: any) {
    if (!value) return undefined;
    return this.datePipe.transform(new Date(value), 'yyyy-MM-dd');
  }
  save(moveToNextTab: boolean = false) {
    console.log('this.form', this.form);
    console.log('this.form', this.form.controls);
    // console.log("this.form", Object.entries(this.form.controls))
    // this.form.controls['engineeringConsultantLicenseNumber'].setValue('7939')
    Object.entries(this.form.controls).filter((control: any) => {
      control[1].errors ? console.log(control) : '';
    });

    this.form
      .get('charteredAccountantLicenseNumber')
      ?.setValue(this.facility$.value?.saudiAuthorityForAuditorsAndAccountants);

    if (this.form?.invalid) {
      this.toastService.showError(
        this.localizations.PleaseAddAllRequiredFields
      );
      this.form?.markAllAsTouched();
      return;
    }
    let object = this.form
      ?.value as LicenseProjectCharteredAccountantCreateUpdateDto;
    object.licenseProjectId = this.licenseProjectId as string;
    object.id = this.entity.id;
    object.charteredAccountantId = this.facility$.value?.id as string;
    object.charteredAccountantLicenseNumber =
      object.charteredAccountantLicenseNumber;
    object.CharteredAccountantFilesId = this.charteredAccountantFiles?.flatMap(
      (file) => file.id
    );
    /*  object.delegatorMobile = object.delegatorMobile.toString();
    object.delegatorIdentityNumber = object.delegatorIdentityNumber.toString(); */

    /*     if (object.id != undefined) {
      let charteredAccountantDelegatorSignModelFile = object.charteredAccountantDelegatorSignModelFileId as unknown as SysFileManagerCreateUpdateDto;
      this.delegatorDto.charteredAccountantDelegatorSignModelFile = charteredAccountantDelegatorSignModelFile;
      object.charteredAccountantDelegatorSignModelFileId = charteredAccountantDelegatorSignModelFile.id;
      this.delegatorDto.signModelFileId = charteredAccountantDelegatorSignModelFile.id;
      if (this.entity.licenseProjectCharteredAccountantDelegators != null) {
        this.delegatorDto.id = this.entity.licenseProjectCharteredAccountantDelegators[0].id;
      }
    }
    else {
      object.charteredAccountantDelegatorSignModelFileId = object.charteredAccountantDelegatorSignModelFileId;
      this.delegatorDto.signModelFileId = object.charteredAccountantDelegatorSignModelFileId;
    } */

    /*     this.delegatorDto.delegatorName = object.delegatorName;
    this.delegatorDto.identityNumber = object.delegatorIdentityNumber.toString();
    this.delegatorDto.licenseProjectCharteredAccountantId = object.charteredAccountantId;

    object.licenseProjectCharteredAccountantDelegators = [];
    object.licenseProjectCharteredAccountantDelegators.push(this.delegatorDto); */

    console.log(
      'CharteredAccountantComponent this.form?.value',
      this.form?.value
    );
    console.log('CharteredAccountantComponent object', object);

    if (this.entity.id !== Guid.empty && this.entity.id) {
      this.update(object, moveToNextTab);
    } else {
      this.create(object, moveToNextTab);
    }
  }

  update(
    object: LicenseProjectCharteredAccountantCreateUpdateDto,
    moveToNextTab: boolean = false
  ) {
    this.appService
      .updateAsync(object)
      .pipe(takeUntil(this.destroyed$))
      .subscribe(() => {
        this.toastService.showSuccess(this.localizations.UpdatedSuccessfully);
        if (moveToNextTab) {
          this.moveToNextTab();
        } else {
          this.onGet()
        }
      });
  }

  create(
    object: LicenseProjectCharteredAccountantCreateUpdateDto,
    moveToNextTab: boolean = false
  ) {
    this.appService
      .createAsync(object)
      //.pipe(takeUntil(this.destroyed$))
      .subscribe((result) => {
        console.log('re: ' + result.data);
        if (result && result.data) this.entity.id = result.data.id;
        this.toastService.showSuccess(this.localizations.CreatedSuccessfully);
        if (moveToNextTab) {
          this.moveToNextTab();
        } else {
          this.onGet()
        }
      });
  }
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
  onCharteredAccountantFilesUploaded(filesData: {
    id: string;
    eventRes: {
      data: UploadFileModel[];
      isDone: boolean;
      message: string;
    };
  }): void {
    this.charteredAccountantFiles = filesData.eventRes.data?.map((file) => {
      return {
        id: file.id,
        fileDescription: file.fileName,
        filePath: file.path,
        fileType: file.fileType,
      };
    });
  }
}
