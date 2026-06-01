import { Component, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Subscription, BehaviorSubject, ReplaySubject, takeUntil } from 'rxjs';
import { Guid } from 'src/app/core/configurations/guid';
import { QualificationTypeCode } from 'src/app/core/enums/qualification-type-code';
import { SysFileManagerCreateUpdateDto } from 'src/app/shared/models/sys-file-manager-create-update-dto';
import { environment } from 'src/environments/environment';
import {
  ChangeLicenseProjectEngineeringConsultantCreateUpdateDto,
  ChangeLicenseProjectEngineeringRequestDelegatorDto,
} from '../../models/change-license-project-engineering-consultant-create-update-dto';
import { ChangeLicenseProjectEngineeringConsultantDto } from '../../models/change-license-project-engineering-consultant-dto';
import {
  CustomerShortDto,
  FacilityShortDto,
} from '../../../license/models/facility-short-dto';
import { Router, ActivatedRoute } from '@angular/router';
import { ChangeLicenseProjectEngineeringConsultantService } from '../../services/change-license-project-engineering-consultant.service';
import { ChangeLicenseProjectEngineeringRequestService } from '../../services/change-license-project-engineering-request.service';
import { LicenseProjectDelegatorService } from '../../../license/services/license-project-delegator.service';
import { SharedLicenseProjectService } from '../../../license/services/sharedLicenseProject/shared-license-project.service';
import { Location } from '@angular/common';
import { Configuration } from 'src/app/core/configurations/shared.config';
import { ToastrService } from 'ngx-toastr';
import { TabsService } from 'src/app/shared/services/tabs/tabs.service';

@Component({
  selector: 'app-change-licenseproject-engineering-consultants-create',
  templateUrl:
    './change-licenseproject-engineering-consultants-create.component.html',
  styleUrls: [
    './change-licenseproject-engineering-consultants-create.component.scss',
  ],
})
export class ChangeLicenseprojectEngineeringConsultantsCreateComponent {
  @Input() readOnly = false;
  baseUrl = `${environment.baseURL}/`;

  subscriptions: Subscription[] = [];
  facility: CustomerShortDto | null = null;
  licenseProjectDelegators: CustomerShortDto[] = [];
  entity!: ChangeLicenseProjectEngineeringConsultantDto;
  entity$: BehaviorSubject<
    ChangeLicenseProjectEngineeringConsultantDto | undefined
  > = new BehaviorSubject<
    ChangeLicenseProjectEngineeringConsultantDto | undefined
  >(undefined);

  form!: FormGroup;
  facility$: BehaviorSubject<FacilityShortDto | undefined> =
    new BehaviorSubject<FacilityShortDto | undefined>(undefined);

  isEdit: boolean = false;
  consultantFiles: SysFileManagerCreateUpdateDto[] | undefined = [];
  saveConsultantFiles: SysFileManagerCreateUpdateDto[] | undefined = [];
  localizations = {
    NewEngineeringConsultantTitle: 'بيانات الاستشاري الهندسي الجديد',
    EngineeringConsultant: 'الرقم الموحد للمنشأة',
    EngineeringConsultantRequired: 'هذا الحقل مطلوب',
    ValidateConsultant: 'التحقق',
    Save: 'حفظ',
    Send: 'إرسال الطلب',
    PleaseAddProject: 'لا يوجد طلب , نأمل اضافة الطلب اولا .',
    PleaseAddAllRequiredFields:
      '"نأمل ادخال كل الحقول اللازمة واعادة المحاولة"',
    UpdatedSuccessfully: 'تم التعديل ',
    CreatedSuccessfully: 'تم الحفظ ',
    requestWasSentToEngineeringConsultant:
      'تم إرسال طلب تغيير الاستشاري الهندسي بنجاح',
    PaymentData: 'بيانات السداد بالاتفاقية',
    SameAsPreviousConsultantWarning:
      'الرقم الموحد للاستشاري الجديد لا يمكن أن يطابق الرقم الموحد للاستشاري القديم',
  };

  changeLicenseProjectEngineeringRequestId: string | null = null;
  licenseProjectRequestId: string | null = null;
  licenseProjectId: string | null = null;
  private destroyed$: ReplaySubject<boolean> = new ReplaySubject(1);

  // Table data for payment details
  paymentTableData: any[] = [
    {
      item: '',
      quantity: null,
      unitPrice: null,
      description: '',
    },
  ];

  // Payment table validation errors
  paymentTableErrors: any[] = [
    {
      item: false,
      quantity: false,
      unitPrice: false,
      description: false,
    },
  ];

  // Flag to show/hide missing dateOfBirth alert
  showMissingDateOfBirthAlert: boolean = false;

  constructor(
    public formGroup: FormBuilder,
    private _changeLicenseProjectEngineeringRequestService: ChangeLicenseProjectEngineeringRequestService,
    private _toastrNotificationService: ToastrService,
    private _changeEngineeringConsultantService: ChangeLicenseProjectEngineeringConsultantService,
    private _licenseProjectDelegatorService: LicenseProjectDelegatorService,
    private _sharedLicenseProjectService: SharedLicenseProjectService,
    private _tabsService: TabsService,
    private _router: Router,
    private _route: ActivatedRoute,
    private _location: Location,
  ) { }

  private notifyMissingRequiredFields(): void {
    this._toastrNotificationService.error('يرجى تعبئة جميع الحقول المطلوبة قبل المتابعة');
  }

  private isFormValid(): boolean {
    if (this.form?.invalid) {
      this.form?.markAllAsTouched();
      return false;
    }
    if (!this.validatePaymentTable()) return false;
    if (!this.newFacilityData?.id) return false;
    return true;
  }

  ngOnInit() {
    this.buildForm();
    this.getRequestId();
    this.trackFormChanges();
  }

  private trackFormChanges(): void {
    this.subscriptions.push(
      this.form.valueChanges.subscribe(() => {
        if (this.form.dirty) {
          this._tabsService.setUnsavedChanges(true);
        }
      }),
    );
  }

  private getRequestId(): void {
    this.subscriptions.push(
      this._changeLicenseProjectEngineeringRequestService
        .getLicenseProjectRequestChangeEngineer()
        .subscribe((res) => {
          if (res && res.id) {
            this.changeLicenseProjectEngineeringRequestId = res.id;
            this.licenseProjectRequestId =
              res.licenseProjectRequest?.id || null;
            this.licenseProjectId =
              res.licenseProjectRequest?.licenseProjectId || null;
            this.previousCommercialRegister =
              res.previousEngineeringFacility?.entity700Number ?? null;

            // Set licenseProjectId for additional terms component
            if (this.licenseProjectId) {
              this._sharedLicenseProjectService.setLicenseProjectIdInLocalStorage(
                this.licenseProjectId,
              );
            }
            this.onGet();
          }
        }),
    );
  }

  get controls() {
    return this.form.controls;
  }

  GetProjectDelegatorByFacilityId(): void {
    this.subscriptions.push(
      this._licenseProjectDelegatorService
        .GetFacilitySubCustomers(this.newFacilityData.id as string)
        .subscribe((res) => {
          if (res) {
            this.licenseProjectDelegators = res as CustomerShortDto[];
          }
        }),
    );
  }

  errorMessage: string | null = null;
  previousCommercialRegister: string | null = null;
  onCommercialRegisterChange() {
    if (this.errorMessage) {
      this.errorMessage = null;
    }
  }

  validate() {
    this.controls['commercialRegister'].markAsTouched();

    this.errorMessage = null;
    let commercialRegister = this.controls['commercialRegister'].value;
    if (commercialRegister) {
      if (
        this.previousCommercialRegister &&
        String(commercialRegister).trim() ===
        String(this.previousCommercialRegister).trim()
      ) {

        this.errorMessage = this.localizations.SameAsPreviousConsultantWarning;

        return;
      }
      this._changeEngineeringConsultantService
        .validateCommercialRegisterNumber(
          commercialRegister,
          QualificationTypeCode.EngineeringConsultant,
          this.licenseProjectId,
          true,
        )
        .pipe(takeUntil(this.destroyed$))
        .subscribe((result) => {
          if (result && result.data) {
            if (!this.entity || this.entity == undefined)
              this.entity = {} as ChangeLicenseProjectEngineeringConsultantDto;

            this.entity.engineeringConsultant = result.data
              .facility as FacilityShortDto;
            this.facility = result.data as CustomerShortDto;
            this.setFacility(this.facility.facility);
          } else {
            this.errorMessage = result.message;
            console.log(this.errorMessage, result.message);
            this.entity = {} as ChangeLicenseProjectEngineeringConsultantDto;
            this.newFacilityData.facilityName = '';
            const commercialRegisterValue =
              this.controls['commercialRegister'].value;
            this.form.reset();
            this.controls['commercialRegister'].setValue(
              commercialRegisterValue,
            );
            this.paymentTableData = [
              {
                item: '',
                quantity: null,
                unitPrice: null,
                description: '',
              },
            ];
          }
        });
    }
  }

  buildForm() {
    this.form = this.formGroup.group({
      commercialRegister: [
        '',
        Validators.compose([Validators.required, Validators.min(0)]),
      ],
      contarctValue: [
        '',
        Validators.compose([Validators.required, Validators.min(0)]),
      ],
      financialReportApprovalPeriodInDays: [
        '',
        Validators.compose([
          Validators.required,
          Validators.min(1),
          Validators.max(30),
        ]),
      ],
      paymentDeadline: ['', Validators.compose([Validators.required])],


      delegatorIds: [[], Validators.required]
    });
  }

  isSelected(id: string): boolean {
    const ids = this.form.get('delegatorIds')?.value || [];
    return ids.includes(id);
  }

  toggleDelegator(delegator: any) {
    const control = this.form.get('delegatorIds');
    let ids = control?.value || [];

    if (ids.includes(delegator.id)) {
      ids = ids.filter((x: string) => x !== delegator.id);
    } else {
      ids = [...ids, delegator.id];
    }

    control?.setValue(ids);
    control?.markAsTouched();
  }

  removeDelegator(delegator: any, event: Event) {
    event.stopPropagation();

    const control = this.form.get('delegatorIds');
    let ids = control?.value || [];

    ids = ids.filter((x: string) => x !== delegator.id);

    control?.setValue(ids);
    control?.markAsTouched();
  }

  getSelectedDelegators() {
    const ids = this.form.get('delegatorIds')?.value || [];
    return this.licenseProjectDelegators.filter(d => ids.includes(d.id));
  }

  getSelectedDelegatorsText(): string {
    const selected = this.getSelectedDelegators();

    if (!selected.length) return 'يرجى الاختيار';
    if (selected.length === 1) return selected[0].fullName;

    return `${selected.length} مختارين`;
  }

  trackById(index: number, item: any) {
    return item.id;
  }


  newFacilityData: FacilityShortDto = new FacilityShortDto();
  setFacility($event: any) {
    this.newFacilityData = $event;
    this.licenseProjectDelegators = [];
    this.form.patchValue({ delegatorIds: [] });
    this.GetProjectDelegatorByFacilityId();
  }

  ngOnDestroy() {
    this._tabsService.setUnsavedChanges(false);
    this._sharedLicenseProjectService.removeLicenseProjectIdfromLocalStorage();
    this.destroyed$.next(true);
    this.destroyed$.complete();
    this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe());
  }

  // Payment table methods
  addPaymentRow(): void {
    this.paymentTableData.push({
      item: '',
      quantity: null,
      unitPrice: null,
      description: '',
    });
    this.paymentTableErrors.push({
      item: false,
      quantity: false,
      unitPrice: false,
      description: false,
    });
  }

  deletePaymentRow(index: number): void {
    if (this.paymentTableData.length > 1) {
      this.paymentTableData.splice(index, 1);
      this.paymentTableErrors.splice(index, 1);
    } else {
      this._toastrNotificationService.info(
        'يجب أن يحتوي الجدول على صف واحد على الأقل',
      );
    }
  }

  validatePaymentTable(): boolean {
    let isValid = true;

    this.paymentTableData.forEach((row, index) => {
      if (!this.paymentTableErrors[index]) {
        this.paymentTableErrors[index] = {
          item: false,
          quantity: false,
          unitPrice: false,
          description: false,
        };
      }
      this.paymentTableErrors[index].item = !row.item || row.item.trim() === '';
      if (this.paymentTableErrors[index].item) isValid = false;
      this.paymentTableErrors[index].quantity =
        row.quantity === null ||
        row.quantity === undefined ||
        row.quantity === '';
      if (this.paymentTableErrors[index].quantity) isValid = false;
      this.paymentTableErrors[index].unitPrice =
        row.unitPrice === null ||
        row.unitPrice === undefined ||
        row.unitPrice === '';
      if (this.paymentTableErrors[index].unitPrice) isValid = false;
      this.paymentTableErrors[index].description =
        !row.description || row.description.trim() === '';
      if (this.paymentTableErrors[index].description) isValid = false;
    });

    return isValid;
  }

  clearPaymentError(
    index: number,
    field: 'item' | 'quantity' | 'unitPrice' | 'description',
  ): void {
    if (this.paymentTableErrors[index]) {
      this.paymentTableErrors[index][field] = false;
    }
  }


  onGet() {
    this._changeEngineeringConsultantService
      .getByRequestIdAsync(
        this.changeLicenseProjectEngineeringRequestId as string,
      )
      .subscribe((result) => {
        if (
          result.data &&
          result.data.changeLicenseProjectEngineeringRequestId
        ) {
          this.entity = result.data;
          if (this.entity.engineeringConsultant) {
            this.facility$.next(this.entity.engineeringConsultant);
            this.entity$.next(this.entity);
            this.setFacility(this.entity.engineeringConsultant);
          }
          this.form.patchValue({
            commercialRegister:
              this.entity.engineeringConsultant?.entity700Number,
            contarctValue: this.entity.contarctValue,
            financialReportApprovalPeriodInDays:
              this.entity.financialReportApprovalPeriodInDays,
            paymentDeadline: this.entity.paymentDeadline,
            delegatorIds:
              this.entity.delegators?.map(d => d.delegatorCustomerId) || [],
          });

          // Format contract value with commas after loading
          setTimeout(() => {
            const contractValueInput = document.getElementById(
              'contarctValue',
            ) as HTMLInputElement;
            if (contractValueInput && this.entity.contarctValue) {
              const parts = this.entity.contarctValue.toString().split('.');
              parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
              contractValueInput.value = parts.join('.');
            }
          }, 0);

          this.paymentTableData =
            this.entity?.payments && this.entity?.payments?.length > 0
              ? this.entity.payments?.map((payment) => ({
                item: payment.item,
                quantity: payment.quantity,
                unitPrice: payment.unitPrice,
                description: payment.description,
              }))
              : this.paymentTableData;

          // Initialize errors array to match data array size
          this.paymentTableErrors = this.paymentTableData.map(() => ({
            item: false,
            quantity: false,
            unitPrice: false,
            description: false,
          }));

        }
      });
  }

  save() {
    if (!this.changeLicenseProjectEngineeringRequestId) {
      this._toastrNotificationService.error(
        this.localizations.PleaseAddProject,
      );
      return;
    }

    if (!this.isFormValid()) {
      this.notifyMissingRequiredFields();
      return;
    }

    let object: ChangeLicenseProjectEngineeringConsultantCreateUpdateDto = {
      changeLicenseProjectEngineeringRequestId: this
        .changeLicenseProjectEngineeringRequestId as string,
      engineeringFacilityId: this.newFacilityData?.id as string,
      engineeringConsultantLicenseNumber: this.newFacilityData
        ?.saudiAuthorityOfEngineersLicenseNumber as string,
      cityId: this.newFacilityData.facilityCity as string,
      contarctValue: this.form?.value.contarctValue,
      financialReportApprovalPeriodInDays:
        this.form?.value.financialReportApprovalPeriodInDays,
      paymentDeadline: this.form?.value.paymentDeadline,
      payments: this.paymentTableData.map((payment) => ({
        id: '00000000-0000-0000-0000-000000000000',
        item: payment.item,
        quantity: payment.quantity,
        unitPrice: payment.unitPrice,
        description: payment.description,
        changeLicenseProjectEngineeringRequestId: this
          .changeLicenseProjectEngineeringRequestId as string,
      })),
      delegators: [],
    };


    const selectedDelegatorIds: string[] =
      this.form?.value.delegatorIds || [];

    object.delegators = selectedDelegatorIds.map((id: string) => {
      const delegatorDto =
        new ChangeLicenseProjectEngineeringRequestDelegatorDto();

      delegatorDto.id = '00000000-0000-0000-0000-000000000000'; // draft = new
      delegatorDto.delegatorCustomerId = id;
      delegatorDto.changeLicenseProjectEngineeringRequestId =
        this.changeLicenseProjectEngineeringRequestId as string;

      return delegatorDto;
    });

    // Determine create vs update based on whether agreement data already exists
    if (
      this.entity?.contarctValue ||
      this.entity?.financialReportApprovalPeriodInDays
    ) {
      this.update(object);
    } else {
      this.create(object);
    }
  }

  create(object: ChangeLicenseProjectEngineeringConsultantCreateUpdateDto) {
    this._changeEngineeringConsultantService
      .createAsync(object)
      .pipe(takeUntil(this.destroyed$))
      .subscribe((result) => {
        if (result && result.data) {
          this.form.markAsPristine();
          this._tabsService.setUnsavedChanges(false);
          this.updateRequestStatus();
        }
      });
  }

  update(object: ChangeLicenseProjectEngineeringConsultantCreateUpdateDto) {
    this._changeEngineeringConsultantService
      .updateAsync(object)
      .pipe(takeUntil(this.destroyed$))
      .subscribe((result) => {
        if (result) {
          this.form.markAsPristine();
          this._tabsService.setUnsavedChanges(false);
          this.updateRequestStatus();
        }
      });
  }

  private updateRequestStatus(): void {
    if (!this.changeLicenseProjectEngineeringRequestId) return;
    this._changeEngineeringConsultantService
      .updateConsultantRequestStatus(
        this.changeLicenseProjectEngineeringRequestId,
      )
      .pipe(takeUntil(this.destroyed$))
      .subscribe(() => {
        this._toastrNotificationService.success(
          this.localizations.requestWasSentToEngineeringConsultant,
        );
        this.navigateToRequestList();
      });
  }

  private navigateToRequestList(): void {
    this._router.navigate([
      `${Configuration.modules.wafi}/${Configuration.modules.licenseProjectRequests}/${Configuration.pages.licenseProjectRequests.licenseProjectRequestList}`,
    ]);
  }

  saveDraft(): void {
    if (!this.changeLicenseProjectEngineeringRequestId) return;

    if (!this.isFormValid()) {
      this.notifyMissingRequiredFields();
      return;
    }

    const formValue = this.form.value;

    const object: ChangeLicenseProjectEngineeringConsultantCreateUpdateDto = {
      changeLicenseProjectEngineeringRequestId:
        this.changeLicenseProjectEngineeringRequestId as string,

      engineeringFacilityId: this.newFacilityData?.id as string,

      engineeringConsultantLicenseNumber:
        this.newFacilityData?.saudiAuthorityOfEngineersLicenseNumber as string,

      cityId: (this.newFacilityData?.facilityCity as string) || null,

      contarctValue: formValue.contarctValue,

      financialReportApprovalPeriodInDays:
        formValue.financialReportApprovalPeriodInDays,

      paymentDeadline: formValue.paymentDeadline,

      payments: this.paymentTableData
        .filter(p => p.item || p.quantity || p.unitPrice || p.description)
        .map(p => ({
          id: '00000000-0000-0000-0000-000000000000',
          item: p.item || '',
          quantity: p.quantity || 0,
          unitPrice: p.unitPrice || 0,
          description: p.description || '',
          changeLicenseProjectEngineeringRequestId:
            this.changeLicenseProjectEngineeringRequestId as string,
        })),

      delegators: (formValue.delegatorIds || []).map((id: string) => {
        const dto = new ChangeLicenseProjectEngineeringRequestDelegatorDto();

        dto.id = '00000000-0000-0000-0000-000000000000'; // draft → always new
        dto.delegatorCustomerId = id;
        dto.changeLicenseProjectEngineeringRequestId =
          this.changeLicenseProjectEngineeringRequestId as string;

        return dto;
      }),
    };


    const isEdit = !!this.entity?.changeLicenseProjectEngineeringRequestId;
    const saveMethod = isEdit
      ? this._changeEngineeringConsultantService.updateAsync(object)
      : this._changeEngineeringConsultantService.createAsync(object);

    saveMethod.pipe(takeUntil(this.destroyed$)).subscribe((result) => {
      if (result) {
        this._toastrNotificationService.success('تم الحفظ كمسودة بنجاح');

        this.form.markAsPristine();
        this._tabsService.setUnsavedChanges(false);

        this.onGet();
      }
    });
  }
  onCancel(): void {
    this._tabsService.updateActiveTabIndex(0);
  }

  // Format contract value with thousand separators
  formatContractValue(event: Event): void {
    const input = event.target as HTMLInputElement;
    let value = input.value;

    const arabicNumbers = ['٠', '١', '٢', '٣', '٤', '٥', '٦', '٧', '٨', '٩'];
    arabicNumbers.forEach((arabic, index) => {
      value = value.replace(new RegExp(arabic, 'g'), index.toString());
    });

    value = value.replace(/[^0-9.]/g, '');

    const numericValue = value ? parseFloat(value) : null;
    this.form
      .get('contarctValue')
      ?.setValue(numericValue, { emitEvent: false });

    if (value) {
      const parts = value.split('.');
      parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
      input.value = parts.join('.');
    }
  }

  formatContractValueOnBlur(event: Event): void {
    const input = event.target as HTMLInputElement;
    const value = this.form.get('contarctValue')?.value;
    if (value) {
      const parts = value.toString().split('.');
      parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
      input.value = parts.join('.');
    }
  }

  removeContractValueFormatting(event: Event): void {
    const input = event.target as HTMLInputElement;
    input.value = input.value.replace(/,/g, '');
  }
}
