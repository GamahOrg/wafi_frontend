import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Subscription, BehaviorSubject, ReplaySubject, takeUntil } from 'rxjs';
import { Guid } from 'src/app/core/configurations/guid';
import { QualificationTypeCode } from 'src/app/core/enums/qualification-type-code';
import { ToastrNotificatioService } from 'src/app/core/services/toastr-notification/toastr-notificatio.service';
import { SysFileManagerCreateUpdateDto } from 'src/app/shared/models/sys-file-manager-create-update-dto';
import { PopupService } from 'src/app/shared/services/popup/popup.service';
import { environment } from 'src/environments/environment';
import {
  LicenseProjectEngineeringConsultantCreateUpdateDto,
  LicenseProjectEngineeringConsultantDelegatorCreateUpdateDto,
} from '../../../dataModels/license-project-engineering-consultant/license-project-engineering-consultant-create-update-dto';
import { LicenseProjectEngineeringConsultantDto } from '../../../dataModels/license-project-engineering-consultant/license-project-engineering-consultant-dto';
import {
  CustomerShortDto,
  FacilityShortDto,
} from '../../../models/facility-short-dto';
import { TermsPartType } from '../../../models/license-project-parties-additional-terms-model';
import { LicenseProjectDelegatorService } from '../../../services/license-project-delegator.service';
import { LicenseProjectEngineeringConsultantService } from '../../../services/license-project-engineering-consultant.service';
import { LicenseProjectPartiesAdditionalTermsService } from '../../../services/LicenseProjectPartiesAdditionalTerms.service';
import { NextAndPreviusButtonsService } from '../../../services/next-and-previous-buttons/next-and-previus-buttons.service';
import { SharedLicenseProjectService } from '../../../services/sharedLicenseProject/shared-license-project.service';
import { ToastrService } from 'ngx-toastr';
import { TabsService } from 'src/app/shared/services/tabs/tabs.service';
import { LicenseRequestService } from '../../../services/license-request.service';

@Component({
  selector: 'app-fawria-licenseproject-engineering-consultants-create',
  templateUrl:
    './fawria-licenseproject-engineering-consultants-create.component.html',
  styleUrls: [
    './fawria-licenseproject-engineering-consultants-create.component.scss',
  ],
})
export class FawriaLicenseprojectEngineeringConsultantsCreateComponent {
  baseUrl = `${environment.baseURL}/`;

  subscriptions: Subscription[] = [];
  facility: CustomerShortDto | null = null;
  licenseProjectDelegators: CustomerShortDto[] = [];
  additionalTerms: any[] = [];
  expandedItems: Set<string> = new Set();
  TermsPartType: typeof TermsPartType = TermsPartType;
  entity!: LicenseProjectEngineeringConsultantDto;
  entity$: BehaviorSubject<LicenseProjectEngineeringConsultantDto | undefined> =
    new BehaviorSubject<LicenseProjectEngineeringConsultantDto | undefined>(
      undefined,
    );

  form!: FormGroup;
  facility$: BehaviorSubject<FacilityShortDto | undefined> =
    new BehaviorSubject<FacilityShortDto | undefined>(undefined);

  isEdit: boolean = false;
  consultantFiles: SysFileManagerCreateUpdateDto[] | undefined = [];
  saveConsultantFiles: SysFileManagerCreateUpdateDto[] | undefined = [];

  localizations = {
    NewEngineeringConsultantTitle: 'الاستشاري الهندسي',
    EngineeringConsultant: 'الرقم الموحد للمنشأة',
    EngineeringConsultantRequired: 'هذا الحقل مطلوب',
    ValidateConsultant: 'تحقق',
    Save: 'حفظ كمسودة',
    send: 'إرسال الطلب',
    PleaseAddProject: 'لا يوجد مشروع , نأمل اضافة المشروع اولا .',
    PleaseAddAllRequiredFields:
      '"نأمل ادخال كل الحقول اللازمة واعادة المحاولة"',
    UpdatedSuccessfully: 'تم التعديل ',
    CreatedSuccessfully: 'تم الحفظ ',
    next: 'التالي',
    previous: 'السابق',
    ApprovalCommittee: 'البنود الإضافية للاستشاري الهندسي',
    NoItemsAdded: 'لا يوجد بنود إضافية بعد!',
    AddNew: 'إضافة بند',
    PaymentData: 'بيانات السداد بالاتفاقية',
    // requestWasSentToEngineeringConsultant: 'تم إرسال طلب للاستشاري الهندسي للموافقة على الاتفاقية',
    requestWasSentToEngineeringConsultant: 'تم الحفظ بنجاح',
  };

  licenseProjectId: string | null = '00000000-0000-0000-0000-000000000000';
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

  // Delete confirmation modal
  showDeleteModal: boolean = false;
  deleteItemId: string | null = null;
  deleteItemIndex: number | null = null;

  // Flag to show/hide missing dateOfBirth alert
  showMissingDateOfBirthAlert: boolean = false;

  constructor(
    public formGroup: FormBuilder,
    private _sharedLicenseProjectService: SharedLicenseProjectService,
    private _nextAndPreviusButtonsService: NextAndPreviusButtonsService,
    private _toastrNotificationService: ToastrService,
    private _engineeringConsultantService: LicenseProjectEngineeringConsultantService,
    private _licenseProjectDelegatorService: LicenseProjectDelegatorService,
    private _licenseRequestService: LicenseRequestService,
    private _popupService: PopupService,
    private _licenseProjectPartiesAdditionalTermsService: LicenseProjectPartiesAdditionalTermsService,
    private _tabsService: TabsService,
  ) {}

  ngOnInit() {
    this.getLicenseProjectIdStorage();
    this.buildForm();
    this.observeTabsButtons();
    this.updateSaveAsDraftBtnIsvisible();
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

  private getLicenseProjectIdStorage(): void {
    this.licenseProjectId =
      this._sharedLicenseProjectService.getLicenseProjectIdStorage();
    if (this.licenseProjectId) {
      this.onGet();
    }
  }

  get controls() {
    return this.form.controls;
  }

  GetProjectDelegatorByFacilityId(): void {
    this.subscriptions.push(
      this._licenseProjectDelegatorService
        .GetFacilitySubCustomers(this.x.id as string)
        .subscribe((res) => {
          if (res) {
            this.licenseProjectDelegators = res as CustomerShortDto[];
          }
        }),
    );
  }

  errorMessage: string | null = null;
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
      this._engineeringConsultantService
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
              this.entity = {} as LicenseProjectEngineeringConsultantDto;

            this.entity.engineeringConsultant = result.data
              .facility as FacilityShortDto;
            this.facility = result.data as CustomerShortDto;
            this.setFacility(this.facility.facility);
          } else {
            this.errorMessage = result.message;
            this.entity = {} as LicenseProjectEngineeringConsultantDto;
            this.x.facilityName = '';
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

  edit() {
    this.isEdit = true;
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
      authorizedToSignDelegator: [
        null,
        Validators.compose([Validators.required]),
      ],
    });
  }

  x: FacilityShortDto = new FacilityShortDto();
  setFacility($event: any) {
    this.x = $event;
    this.GetProjectDelegatorByFacilityId();
    // this.facility$.next($event.facility);
    // this.facility = $event.facility;
  }

  ngOnDestroy() {
    this._tabsService.setUnsavedChanges(false);
    this.destroyed$.next(true);
    this.destroyed$.complete();
    this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe());
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
    this._nextAndPreviusButtonsService.saveAsDraftBtnIsvisible.next(false);
    this._nextAndPreviusButtonsService.nextBtnIsVisible.next(true);
  }

  private moveToNextTab(): void {
    this._nextAndPreviusButtonsService.moveToNextTab.emit();
  }

  // Payment table methods
  addPaymentRow(): void {
    this.paymentTableData.push({
      name: '',
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
      // Initialize error object if not exists
      if (!this.paymentTableErrors[index]) {
        this.paymentTableErrors[index] = {
          item: false,
          quantity: false,
          unitPrice: false,
          description: false,
        };
      }
      // Validate item
      this.paymentTableErrors[index].item = !row.item || row.item.trim() === '';
      if (this.paymentTableErrors[index].item) isValid = false;
      // Validate quantity
      this.paymentTableErrors[index].quantity =
        row.quantity === null ||
        row.quantity === undefined ||
        row.quantity === '';
      if (this.paymentTableErrors[index].quantity) isValid = false;
      // Validate unitPrice
      this.paymentTableErrors[index].unitPrice =
        row.unitPrice === null ||
        row.unitPrice === undefined ||
        row.unitPrice === '';
      if (this.paymentTableErrors[index].unitPrice) isValid = false;
      // Validate description
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

  // Check if selected delegator has dateOfBirth
  onDelegatorChange(): void {
    const selectedDelegatorCustomerId =
      this.form.value.authorizedToSignDelegator;

    if (!selectedDelegatorCustomerId) {
      this.showMissingDateOfBirthAlert = false;
      return;
    }

    // Find the selected delegator by delegatorCustomerId
    const selectedDelegator = this.licenseProjectDelegators.find(
      (d) => d.id === selectedDelegatorCustomerId,
    );

    // Check if dateOfBirth is null or undefined
    if (selectedDelegator && !selectedDelegator?.dateOfBirth) {
      this.showMissingDateOfBirthAlert = true;
    } else {
      this.showMissingDateOfBirthAlert = false;
    }
  }

  onGet() {
    this._engineeringConsultantService
      .fawryLicenseGetAsync(this.licenseProjectId as string)
      .subscribe((result) => {
        if (result.data) {
          this.entity = result.data;
          // this.x = this.entity.engineeringConsultant.id as string;
          this.facility$.next(this.entity.engineeringConsultant);
          this.entity$.next(this.entity);
          this.setFacility(this.entity.engineeringConsultant);
          this.form.patchValue({
            commercialRegister:
              this.entity.engineeringConsultant?.commercialRegisterNumber,
            contarctValue: this.entity.contarctValue,
            financialReportApprovalPeriodInDays:
              this.entity.financialReportApprovalPeriodInDays,
            paymentDeadline: this.entity.paymentDeadline,
            authorizedToSignDelegator:
              this.entity
                .licenseProjectEngineeringConsultantAuthorizedToSignDelegators &&
              this.entity
                .licenseProjectEngineeringConsultantAuthorizedToSignDelegators
                .length > 0
                ? this.entity
                    .licenseProjectEngineeringConsultantAuthorizedToSignDelegators[0]
                    .delegatorCustomerId
                : '',
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
            this.entity.licenseProjectEngineeringConsultantPayments?.map(
              (payment) => ({
                item: payment.item,
                quantity: payment.quantity,
                unitPrice: payment.unitPrice,
                description: payment.description,
              }),
            ) || this.paymentTableData;

          // Initialize errors array to match data array size
          this.paymentTableErrors = this.paymentTableData.map(() => ({
            item: false,
            quantity: false,
            unitPrice: false,
            description: false,
          }));

          this.onDelegatorChange();
          // this.buildForm();
        }
      });
  }

  save(moveToNextTab: boolean = false) {
    if (!this.licenseProjectId) {
      this._toastrNotificationService.error(
        this.localizations.PleaseAddProject,
      );
      return;
    }

    if (this.form?.invalid) {
      this._toastrNotificationService.error(
        this.localizations.PleaseAddAllRequiredFields,
      );
      this.form?.markAllAsTouched();
      return;
    }

    // Validate payment table
    if (!this.validatePaymentTable()) {
      this._toastrNotificationService.error(
        this.localizations.PleaseAddAllRequiredFields,
      );
      return;
    }

    let object = this.form
      ?.value as LicenseProjectEngineeringConsultantCreateUpdateDto;
    object.licenseProjectId = this.licenseProjectId;
    object.engineeringConsultantId = this.x?.id as string as string;
    object.id = this.entity.id;
    object.engineeringConsultantLicenseNumber = this.x
      ?.saudiAuthorityOfEngineersLicenseNumber as string;
    object.cityId = this.x.facilityCity as string;
    // Populate licenseProjectEngineeringConsultantDelegators
    const selectedDelegatorId = this.form?.value.authorizedToSignDelegator;
    if (selectedDelegatorId) {
      const delegatorDto =
        new LicenseProjectEngineeringConsultantDelegatorCreateUpdateDto();
      delegatorDto.id =
        this.entity
          .licenseProjectEngineeringConsultantAuthorizedToSignDelegators &&
        this.entity
          .licenseProjectEngineeringConsultantAuthorizedToSignDelegators
          .length > 0
          ? this.entity
              .licenseProjectEngineeringConsultantAuthorizedToSignDelegators[0]
              .id
          : '00000000-0000-0000-0000-000000000000';
      delegatorDto.delegatorCustomerId = selectedDelegatorId;
      delegatorDto.licenseProjectEngineeringConsultantId = this.x?.id as string;
      object.licenseProjectEngineeringConsultantAuthorizedToSignDelegators = [
        delegatorDto,
      ];
    }
    object.licenseProjectEngineeringConsultantPayments =
      this.paymentTableData.map((payment) => ({
        id: '00000000-0000-0000-0000-000000000000',
        item: payment.item,
        quantity: payment.quantity,
        unitPrice: payment.unitPrice,
        description: payment.description,
        licenseProjectEngineeringConsultantId: this.x?.id as string,
      }));

    if (this.entity.id !== Guid.empty && this.entity.id) {
      this.update(object, moveToNextTab);
    } else {
      this.create(object, moveToNextTab);
    }
  }

  create(
    object: LicenseProjectEngineeringConsultantCreateUpdateDto,
    moveToNextTab: boolean = false,
  ) {
    object.id = Guid.empty;
    this._engineeringConsultantService
      .fawryLicenseCreateAsync(object)
      .pipe(takeUntil(this.destroyed$))
      .subscribe((result) => {
        if (result && result.data) this.entity.id = result.data.id;
        // this._toastrNotificationService.showSuccess(this.localizations.CreatedSuccessfully);
        // this._toastrNotificationService.success(this.localizations.requestWasSentToEngineeringConsultant);
        this.form.markAsPristine();
        this._tabsService.setUnsavedChanges(false);
        this._licenseRequestService.updateCompletedTapCodesIsClicked.emit();
        if (moveToNextTab) {
          this.moveToNextTab();
        } else {
          this.onGet();
        }
      });
  }

  update(
    object: LicenseProjectEngineeringConsultantCreateUpdateDto,
    moveToNextTab: boolean = false,
  ) {
    this._engineeringConsultantService
      .fawryLicenseUpdateAsync(object)
      .pipe(takeUntil(this.destroyed$))
      .subscribe(() => {
        // this._toastrNotificationService.showSuccess(this.localizations.UpdatedSuccessfully);
        this._toastrNotificationService.success(
          this.localizations.requestWasSentToEngineeringConsultant,
        );
        this.form.markAsPristine();
        this._tabsService.setUnsavedChanges(false);
        if (moveToNextTab) {
          this.moveToNextTab();
        } else {
          this.onGet();
        }
      });
  }

  // Format contract value with thousand separators
  formatContractValue(event: Event): void {
    const input = event.target as HTMLInputElement;
    let value = input.value;

    // Convert Arabic numbers to English
    const arabicNumbers = ['٠', '١', '٢', '٣', '٤', '٥', '٦', '٧', '٨', '٩'];
    arabicNumbers.forEach((arabic, index) => {
      value = value.replace(new RegExp(arabic, 'g'), index.toString());
    });

    // Remove all non-numeric characters except decimal point
    value = value.replace(/[^0-9.]/g, '');

    // Store numeric value in form control
    const numericValue = value ? parseFloat(value) : null;
    this.form
      .get('contarctValue')
      ?.setValue(numericValue, { emitEvent: false });

    // Format with commas for display
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
