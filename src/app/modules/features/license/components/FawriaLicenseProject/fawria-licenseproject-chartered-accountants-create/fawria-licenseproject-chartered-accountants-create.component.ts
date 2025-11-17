import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Subscription, BehaviorSubject, ReplaySubject, takeUntil } from 'rxjs';
import { Guid } from 'src/app/core/configurations/guid';
import { QualificationTypeCode } from 'src/app/core/enums/qualification-type-code';
import { ToastrNotificatioService } from 'src/app/core/services/toastr-notification/toastr-notificatio.service';
import { environment } from 'src/environments/environment';
import { LicenseProjectCharteredAccountantDelegatorCreateUpdateDto, LicenseProjectCharteredAccountantCreateUpdateDto } from '../../../dataModels/license-project-chartered-accountant/license-project-chartered-accountant-create-update-dto';
import { LicenseProjectCharteredAccountantDto } from '../../../dataModels/license-project-chartered-accountant/license-project-chartered-accountant-dto';
import { CustomerShortDto, FacilityShortDto } from '../../../models/facility-short-dto';
import { TermsPartType } from '../../../models/license-project-parties-additional-terms-model';
import { LicenseProjectCharteredAccountantService } from '../../../services/license-project-chartered-accountant.service';
import { LicenseProjectDelegatorService } from '../../../services/license-project-delegator.service';
import { LicenseProjectEngineeringConsultantService } from '../../../services/license-project-engineering-consultant.service';
import { NextAndPreviusButtonsService } from '../../../services/next-and-previous-buttons/next-and-previus-buttons.service';
import { SharedLicenseProjectService } from '../../../services/sharedLicenseProject/shared-license-project.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-fawria-licenseproject-chartered-accountants-create',
  templateUrl: './fawria-licenseproject-chartered-accountants-create.component.html',
  styleUrls: ['./fawria-licenseproject-chartered-accountants-create.component.scss']
})
export class FawriaLicenseprojectCharteredAccountantsCreateComponent {
 baseUrl = `${environment.baseURL}/`;
    subscriptions: Subscription[] = [];
  
    form!: FormGroup;
    delegatorDto: LicenseProjectCharteredAccountantDelegatorCreateUpdateDto = new LicenseProjectCharteredAccountantDelegatorCreateUpdateDto();
    entity: LicenseProjectCharteredAccountantDto = <any>{};
    entity$: BehaviorSubject<LicenseProjectCharteredAccountantDto | undefined> = new BehaviorSubject<LicenseProjectCharteredAccountantDto | undefined>(undefined);
        
      // Flag to show/hide missing dateOfBirth alert
    showMissingDateOfBirthAlert: boolean = false;
    facility: CustomerShortDto | null = null;
    licenseProjectDelegators: CustomerShortDto[] = [];
    additionalTerms: any[] = [];
    expandedItems: Set<string> = new Set();
    TermsPartType: typeof TermsPartType = TermsPartType;
    facility$: BehaviorSubject<FacilityShortDto | undefined> = new BehaviorSubject<FacilityShortDto | undefined>(undefined);
    licenseProjectId: string | null = '00000000-0000-0000-0000-000000000000';
    private destroyed$: ReplaySubject<boolean> = new ReplaySubject(1);
  
    // isEdit: boolean = false;
    localizations = {
      charteredAccountantDelegatorIdentityNumber: 'رقم هويه المفوض',
      charteredAccountantDelegatorMobile: 'رقم الجوال',
      charteredAccountantDelegatorEmail: 'البريد الإلكتروني',
      charteredAccountantDelegatorName: 'اسم المفوض',
      CharteredAccountantTitle: 'بيانات المحاسب القانوني',
      CharteredAccountant: 'الرقم الموحد للمنشأة',
      CharteredAccountantRequired: 'يجب أن يكون المحاسب القانوني مسجّل في المنصة ومؤهل ليتم إضافته للمشروع',
      CharteredAccountantLicenseNumber: 'رقم رخصة المحاسب القانوني',
      Required: 'هذا الحقل مطلوب',
      MinValueError: 'قيمة الحقل يجب الا تقل عن صفر',
      AgreementDate: 'تاريخ الاتفاقية',
      ValidateConsultant: 'تحقق',
      AgreementDateRequired: 'هذا الحقل مطلوب',
      PleaseAddProject: 'لا يوجد مشروع , نأمل اضافة المشروع اولا .',
      PleaseAddAllRequiredFields:
        '"نأمل ادخال كل الحقول اللازمة واعادة المحاولة"',
      UpdatedSuccessfully: 'تم التعديل',
      CreatedSuccessfully: 'تم الحفظ بنجاح',
      emailPattern: 'من فضلك ادخل البريد الإلكتروني صحيح',
      // requestSentToCharteredAccountant:
      //   'تم ارسال طلب للمحاسب القانوني للموافقة على الاتفاقية',
      CharteredAccountantLicenseNumberRequired:
        'رقم رخصة المحاسب القانوني مطلوب فى منشاة المحاسب القانوني',
      PaymentData: 'بيانات السداد بالاتفاقية',
       requestSentToCharteredAccountant:
        'تم الحفظ ',
    };
      

    // Table data for payment details
    paymentTableData: any[] = [
      {
        item: '',
        quantity: null,
        unitPrice: null,
        description: ''
      }
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

    constructor(
      public formGroup: FormBuilder,
      private _sharedLicenseProjectService: SharedLicenseProjectService,
      private _nextAndPreviusButtonsService: NextAndPreviusButtonsService,
      private _toastrNotificationService: ToastrService,
      private _charteredAccountantService: LicenseProjectCharteredAccountantService,
      private _licenseProjectDelegatorService: LicenseProjectDelegatorService,
      // private _popupService: PopupService,
      // private _licenseProjectPartiesAdditionalTermsService: LicenseProjectPartiesAdditionalTermsService,
      private engineeringConsultantService: LicenseProjectEngineeringConsultantService
    ) {}
  
    ngOnInit() {
      this.entity = undefined as any as LicenseProjectCharteredAccountantDto;
      this.getLicenseProjectIdStorage();
      this.buildForm();
      this.observeTabsButtons();
      this.updateSaveAsDraftBtnIsvisible();
    }
  
    private getLicenseProjectIdStorage(): void {
      this.licenseProjectId = this._sharedLicenseProjectService.getLicenseProjectIdStorage();
      if (this.licenseProjectId){
        this.onGet();
      }
    }
  
    get controls() {
      return this.form.controls;
    }
  
    GetProjectDelegatorByFacilityId(): void {
    this.subscriptions.push(
      this._licenseProjectDelegatorService.GetFacilitySubCustomers(this.x.id as string)
        .subscribe((res) => {
          if (res) {
            this.licenseProjectDelegators = res as CustomerShortDto[];
          }
        })
    );
  }
  
    errorMessage: string | null = null;
    validate() {
      this.errorMessage = null;
      let commercialRegister = this.controls['commercialRegister'].value;
      if (commercialRegister) {
        this.engineeringConsultantService.validateCommercialRegisterNumber(commercialRegister, QualificationTypeCode.CharteredAccountant, this.licenseProjectId)
          .pipe(takeUntil(this.destroyed$))
          .subscribe((result) => {
            
            if (result && result.data) {
              if(!this.entity || this.entity == undefined)
                this.entity = {} as  LicenseProjectCharteredAccountantDto;
  
              this.entity.charteredAccountant = result.data.facility as FacilityShortDto;
              this.facility = result.data as CustomerShortDto;
              this.setFacility(this.facility.facility);
            }
            else {
              this.errorMessage = result.message;
            }
          });
      }
    }
  
    // edit() {
    //   this.isEdit = true;
    // }
  
    buildForm() {
      this.form = this.formGroup.group({
        commercialRegister: ['', Validators.compose([Validators.required, Validators.min(0)]), ],
        contarctValue: ['', Validators.compose([Validators.required, Validators.min(0)])],
        financialReportApprovalPeriodInDays: ['', Validators.compose([Validators.required, Validators.min(1), Validators.max(30)])],
        paymentDeadline: ['', Validators.compose([Validators.required])],
        authorizedToSignDelegator: ['', Validators.compose([Validators.required])],
      });
    }
  
    x:FacilityShortDto = new FacilityShortDto();
    setFacility($event: any) {
      this.x = $event;
      this.GetProjectDelegatorByFacilityId();
      // this.facility$.next($event.facility);
      // this.facility = $event.facility;
    }
  
    ngOnDestroy() {
      this.destroyed$.next(true);
      this.destroyed$.complete();
      this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe())
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
        description: ''
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
        this._toastrNotificationService.info('يجب أن يحتوي الجدول على صف واحد على الأقل');
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
        this.paymentTableErrors[index].quantity = row.quantity === null || row.quantity === undefined || row.quantity === '';
        if (this.paymentTableErrors[index].quantity) isValid = false;

        // Validate unitPrice
        this.paymentTableErrors[index].unitPrice = row.unitPrice === null || row.unitPrice === undefined || row.unitPrice === '';
        if (this.paymentTableErrors[index].unitPrice) isValid = false;

        // Validate description
        this.paymentTableErrors[index].description = !row.description || row.description.trim() === '';
        if (this.paymentTableErrors[index].description) isValid = false;
      });

      return isValid;
    }

    clearPaymentError(index: number, field: 'item' | 'quantity' | 'unitPrice' | 'description'): void {
      if (this.paymentTableErrors[index]) {
        this.paymentTableErrors[index][field] = false;
      }
    }

    // Check if selected delegator has dateOfBirth
    onDelegatorChange(): void {
      const selectedDelegatorCustomerId = this.form.value.authorizedToSignDelegator;

      if (!selectedDelegatorCustomerId) {
        this.showMissingDateOfBirthAlert = false;
        return;
      }

      // Find the selected delegator by delegatorCustomerId
      const selectedDelegator = this.licenseProjectDelegators.find(
        (d) => d.id === selectedDelegatorCustomerId
      );

      // Check if dateOfBirth is null or undefined
      if (selectedDelegator && !selectedDelegator?.dateOfBirth) {
        this.showMissingDateOfBirthAlert = true;
      } else {
        this.showMissingDateOfBirthAlert = false;
      }
    }

    // Delete confirmation modal methods
    showDeleteConfirmation(id: string, index: number): void {
      this.deleteItemId = id;
      this.deleteItemIndex = index;
      this.showDeleteModal = true;
    }
  
    closeDeleteConfirmation(): void {
      this.showDeleteModal = false;
      this.deleteItemId = null;
      this.deleteItemIndex = null;
    }
  
    onGet() {
      this._charteredAccountantService.fawryLicenseGetAsync(this.licenseProjectId as string).subscribe((result) => {
        if (result.data) {
          this.entity = result.data;
          // this.x = this.entity.engineeringConsultant.id as string;
          this.facility$.next(this.entity.charteredAccountant);
          this.entity$.next(this.entity);
          this.setFacility(this.entity.charteredAccountant);
          this.form.patchValue({
            commercialRegister: this.entity.charteredAccountant?.commercialRegisterNumber,
            contarctValue: this.entity.contarctValue,
            financialReportApprovalPeriodInDays: this.entity.financialReportApprovalPeriodInDays,
            paymentDeadline: this.entity.paymentDeadline,
            authorizedToSignDelegator: this.entity.licenseProjectCharteredAccountantAuthorizedToSignDelegators && this.entity.licenseProjectCharteredAccountantAuthorizedToSignDelegators.length > 0
              ? this.entity.licenseProjectCharteredAccountantAuthorizedToSignDelegators[0].delegatorCustomerId
              : ''
          });
          this.paymentTableData = this.entity.licenseProjectCharteredAccountantPayments?.map(payment => ({
            item: payment.item,
            quantity: payment.quantity,
            unitPrice: payment.unitPrice,
            description: payment.description
          })) || this.paymentTableData;

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
        this._toastrNotificationService.error(this.localizations.PleaseAddProject);
        return;
      }

      if (this.form?.invalid) {
        this._toastrNotificationService.error(this.localizations.PleaseAddAllRequiredFields);
        this.form?.markAllAsTouched();
        return;
      }

      // Validate payment table
      if (!this.validatePaymentTable()) {
        this._toastrNotificationService.error(this.localizations.PleaseAddAllRequiredFields);
        return;
      }
  
      let object = this.form?.value as LicenseProjectCharteredAccountantCreateUpdateDto;
      object.licenseProjectId = this.licenseProjectId;
      object.charteredAccountantId = this.x?.id as string as string;
      object.id = this.entity.id;
      object.charteredAccountantLicenseNumber = this.x?.saudiAuthorityOfEngineersLicenseNumber as string;
      object.cityId = this.x.facilityCity as string;
      // Populate licenseProjectEngineeringConsultantDelegators
      const selectedDelegatorId = this.form?.value.authorizedToSignDelegator;
      if (selectedDelegatorId) {
        const delegatorDto = new LicenseProjectCharteredAccountantDelegatorCreateUpdateDto();
        delegatorDto.id = this.entity.licenseProjectCharteredAccountantAuthorizedToSignDelegators && this.entity.licenseProjectCharteredAccountantAuthorizedToSignDelegators.length > 0
          ? this.entity.licenseProjectCharteredAccountantAuthorizedToSignDelegators[0].id
          : '00000000-0000-0000-0000-000000000000';
        delegatorDto.delegatorCustomerId = selectedDelegatorId;
        delegatorDto.licenseProjectCharteredAccountantId = this.x?.id as string
        object.licenseProjectCharteredAccountantAuthorizedToSignDelegators = [delegatorDto];
      }
      object.licenseProjectCharteredAccountantPayments = this.paymentTableData.map(payment => ({
        id: '00000000-0000-0000-0000-000000000000',
        item: payment.item,
        quantity: payment.quantity,
        unitPrice: payment.unitPrice,
        description: payment.description,
        licenseProjectCharteredAccountantId: this.x?.id as string
      }));
  
      
      if (this.entity.id !== Guid.empty && this.entity.id) {
        this.update(object, moveToNextTab);
      } else {
        this.create(object, moveToNextTab);
      }
    }
  
    create(object: LicenseProjectCharteredAccountantCreateUpdateDto, moveToNextTab: boolean = false) {
      object.id = Guid.empty;
      this._charteredAccountantService.fawryLicenseCreateAsync(object)
        .pipe(takeUntil(this.destroyed$))
        .subscribe((result) => {
          if (result && result.data) this.entity.id = result.data.id;
          // this._toastrNotificationService.showSuccess(this.localizations.CreatedSuccessfully);
          this._toastrNotificationService.success(this.localizations.requestSentToCharteredAccountant);
          if (moveToNextTab) {
            this.moveToNextTab();
          } else {
            this.onGet()
          }
        });
    }
  
    update(object: LicenseProjectCharteredAccountantCreateUpdateDto, moveToNextTab: boolean = false) {
      this._charteredAccountantService.fawryLicenseUpdateAsync(object).pipe(takeUntil(this.destroyed$)).subscribe(() => {
        // this._toastrNotificationService.showSuccess(this.localizations.UpdatedSuccessfully);
        this._toastrNotificationService.success(this.localizations.requestSentToCharteredAccountant);
        if (moveToNextTab) {
          this.moveToNextTab();
        } else {
          this.onGet()
        }
      });
    }
  
}
  
