import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ReplaySubject, Subscription, takeUntil } from 'rxjs';
import { QualificationTypeCode } from 'src/app/core/enums/qualification-type-code';
import { ToastrService } from 'ngx-toastr';
import {
  CustomerShortDto,
  FacilityShortDto,
} from '../../../license/models/facility-short-dto';
import { LicenseProjectDelegatorService } from '../../../license/services/license-project-delegator.service';
import { LicenseProjectEngineeringConsultantService } from '../../../license/services/license-project-engineering-consultant.service';
import { ProjectRequestLocalStorageService } from '../../services/project-request-local-storage.service';
import { ChangeLicenseProjectAccountantRequestService } from '../../services/change-license-project-accountant-request.service';
import {
  AgreementPaymentItemDto,
  SaveAgreementDataPageDto,
  GetAgreementDataPageResponseDto,
} from '../../models/change-license-project-accountant-request-data-dto';
import { Configuration } from 'src/app/core/configurations/shared.config';
import { Router } from '@angular/router';

@Component({
  selector: 'app-change-license-project-accountant-agreement-data',
  templateUrl:
    './change-license-project-accountant-agreement-data.component.html',
  styleUrls: [
    './change-license-project-accountant-agreement-data.component.scss',
  ],
})
export class ChangeLicenseProjectAccountantAgreementDataComponent
  implements OnInit, OnDestroy {
  subscriptions: Subscription[] = [];
  private destroyed$: ReplaySubject<boolean> = new ReplaySubject(1);
  @Input() hideDraftButton = false;
  @Input() handleNotes = false;
  @Input() showNextButton = true;
  @Input() showNotesPage = false;

  selectedDelegators: CustomerShortDto[] = [];
  availableDelegators: CustomerShortDto[] = [];
  isSaving = false;

  form = this._formBuilder.group({
    commercialRegister: [
      '',
      Validators.compose([Validators.required]),
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
    // authorizedToSignDelegator: [
    //   [] as any[] ,
    //   Validators.compose([Validators.required]),
    // ],
  });

  facility: CustomerShortDto | null = null;
  facilityData: FacilityShortDto = new FacilityShortDto();
  licenseProjectDelegators: CustomerShortDto[] = [];
  errorMessage: string | null = null;
  showMissingDateOfBirthAlert = false;

  paymentTableData: { item: string; quantity: number | null; unitPrice: number | null; description: string }[] = [
    { item: '', quantity: null, unitPrice: null, description: '' },
  ];

  paymentTableErrors: { item: boolean; quantity: boolean; unitPrice: boolean; description: boolean }[] = [
    { item: false, quantity: false, unitPrice: false, description: false },
  ];

  constructor(
    private _formBuilder: FormBuilder,
    private _toastr: ToastrService,
    private _engineeringConsultantService: LicenseProjectEngineeringConsultantService,
    private _delegatorService: LicenseProjectDelegatorService,
    private _projectRequestLocalStorageService: ProjectRequestLocalStorageService,
    private _service: ChangeLicenseProjectAccountantRequestService,
    private _router: Router,
  ) { }

  ngOnInit(): void {
    this.loadDraftAgreementData();
  }

  private loadDraftAgreementData(): void {
    const id =
      this._projectRequestLocalStorageService.getSelectedProjectLicenseRequestIdFromLocalStorage();
    if (!id) return;

    this.subscriptions.push(
      this._service.getRequestAgreementDataPage(id).subscribe((res) => {
        if (!res?.data) return;
        const data: GetAgreementDataPageResponseDto = res.data;

        this.controls['commercialRegister'].setValue(data.commercialRegisterationNumber ?? '');

        if (data.commercialRegisterationNumber) {

          this.selectedDelegators = res.data.changeLicenseProjectCharteredAccountantAuthorizedToSignDelegators || [];

          this.subscriptions.push(
            this._engineeringConsultantService
              .ValidateCommercialRegisterNumberForAddingChangeAccountantRequest(
                data.commercialRegisterationNumber ?? '',
                QualificationTypeCode.CharteredAccountant,
                id,
                true,
              )
              .pipe(takeUntil(this.destroyed$))
              .subscribe((result) => {
                if (!result?.data) return;

                this.facility = result.data as CustomerShortDto;
                this.facilityData = this.facility.facility;

                this.form.patchValue({
                  contarctValue: data.contractValue?.toString() ?? '',
                  financialReportApprovalPeriodInDays: data.financialReportApprovalPeriodInDays?.toString() ?? '',
                  paymentDeadline: data.paymentDeadline?.toString() ?? '',
                });

                if (data.changeLicenseProjectCharteredAccountantPayments?.length) {
                  this.paymentTableData = data.changeLicenseProjectCharteredAccountantPayments.map((p) => ({
                    item: p.item,
                    quantity: p.quantity,
                    unitPrice: p.unitPrice,
                    description: p.description,
                  }));
                  this.paymentTableErrors = this.paymentTableData.map(() => ({
                    item: false,
                    quantity: false,
                    unitPrice: false,
                    description: false,
                  }));
                }

                this.subscriptions.push(
                  this._delegatorService
                    .GetFacilitySubCustomers(this.facilityData.id as string)
                    .subscribe((delegators) => {

                      if (delegators) {
                        this.licenseProjectDelegators = delegators as CustomerShortDto[];
                        this.availableDelegators = delegators as CustomerShortDto[];

                        if (this.selectedDelegators.length > 0) {
                          this.availableDelegators = this.availableDelegators.filter(ad => !this.selectedDelegators.some(sd => sd.id === ad.id));
                        }
                        //   if (data.changeLicenseProjectCharteredAccountantAuthorizedToSignDelegatorIds?.length) {
                        //     this.availableDelegators = this.licenseProjectDelegators.filter(d => !data.changeLicenseProjectCharteredAccountantAuthorizedToSignDelegatorIds.includes(d.id as string));
                        //     // this.form.patchValue({
                        //     //   authorizedToSignDelegator:
                        //     //     data.changeLicenseProjectCharteredAccountantAuthorizedToSignDelegatorIds[0] as string,
                        //     // });
                        //   }
                      }
                    })
                );
              })
          );
        }
      })
    );
  }

  get controls() {
    return this.form.controls;
  }

  onCommercialRegisterChange(): void {
    if (this.errorMessage) {
      this.errorMessage = null;
    }
  }

  validate(): void {
    this.controls['commercialRegister'].markAsTouched();
    this.errorMessage = null;

    const commercialRegister = this.controls['commercialRegister'].value;
    if (!commercialRegister) return;

    const licenseProjectId =
      this._projectRequestLocalStorageService.getSelectedProjectLicenseRequestIdFromLocalStorage();

    this._engineeringConsultantService
      .ValidateCommercialRegisterNumberForAddingChangeAccountantRequest(
        commercialRegister,
        QualificationTypeCode.CharteredAccountant,
        licenseProjectId,
        true,
      )
      .pipe(takeUntil(this.destroyed$))
      .subscribe((result) => {
        if (result && result.data) {
          this.facility = result.data as CustomerShortDto;
          this.setFacility(this.facility.facility);
        } else {
          this.errorMessage = result.message;
          this.facility = null;
          this.facilityData = new FacilityShortDto();
          this.licenseProjectDelegators = [];
          const currentValue = this.controls['commercialRegister'].value;
          this.form.reset();
          this.controls['commercialRegister'].setValue(currentValue);
          this.paymentTableData = [
            { item: '', quantity: null, unitPrice: null, description: '' },
          ];
        }
      });
  }

  setFacility(facility: any): void {
    this.facilityData = facility;
    this.GetProjectDelegatorByFacilityId();
  }

  GetProjectDelegatorByFacilityId(): void {
    this.subscriptions.push(
      this._delegatorService
        .GetFacilitySubCustomers(this.facilityData.id as string)
        .subscribe((res) => {

          if (res) {
            this.availableDelegators = res as CustomerShortDto[];
            this.licenseProjectDelegators = res as CustomerShortDto[];
          }
        }),
    );
  }

  onDelegatorChange(id: string): void {

    this.selectedDelegators.push(this.availableDelegators.find((d) => d.id === id) as CustomerShortDto);
    this.availableDelegators = this.availableDelegators.filter((d) => d.id !== id);
  }
  isDelegatorSelected(id: string): boolean {
    return this.selectedDelegators.some((d) => d.id === id);
  }
  addPaymentRow(): void {
    this.paymentTableData.push({ item: '', quantity: null, unitPrice: null, description: '' });
    this.paymentTableErrors.push({ item: false, quantity: false, unitPrice: false, description: false });
  }

  deletePaymentRow(index: number): void {
    if (this.paymentTableData.length > 1) {
      this.paymentTableData.splice(index, 1);
      this.paymentTableErrors.splice(index, 1);
    } else {
      this._toastr.info('يجب أن يحتوي الجدول على صف واحد على الأقل');
    }
  }

  clearPaymentError(index: number, field: 'item' | 'quantity' | 'unitPrice' | 'description'): void {
    if (this.paymentTableErrors[index]) {
      this.paymentTableErrors[index][field] = false;
    }
  }

  validatePaymentTable(): boolean {
    let isValid = true;
    this.paymentTableData.forEach((row, index) => {
      if (!this.paymentTableErrors[index]) {
        this.paymentTableErrors[index] = { item: false, quantity: false, unitPrice: false, description: false };
      }
      this.paymentTableErrors[index].item = !row.item || row.item.trim() === '';
      if (this.paymentTableErrors[index].item) isValid = false;

      this.paymentTableErrors[index].quantity =
        row.quantity === null || row.quantity === undefined || (row.quantity as any) === '';
      if (this.paymentTableErrors[index].quantity) isValid = false;

      this.paymentTableErrors[index].unitPrice =
        row.unitPrice === null || row.unitPrice === undefined || (row.unitPrice as any) === '';
      if (this.paymentTableErrors[index].unitPrice) isValid = false;

      this.paymentTableErrors[index].description = !row.description || row.description.trim() === '';
      if (this.paymentTableErrors[index].description) isValid = false;
    });
    return isValid;
  }

  formatContractValue(event: Event): void {
    const input = event.target as HTMLInputElement;
    let value = input.value;
    const arabicNumbers = ['٠', '١', '٢', '٣', '٤', '٥', '٦', '٧', '٨', '٩'];
    arabicNumbers.forEach((arabic, index) => {
      value = value.replace(new RegExp(arabic, 'g'), index.toString());
    });
    value = value.replace(/[^0-9.]/g, '');
    const numericValue = value ? parseFloat(value) : null;
    this.form.get('contarctValue')?.setValue(numericValue as any, { emitEvent: false });
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

  save(isDraft: boolean): void {
    this.isSaving = true;
    // if (!isDraft) {
    this.form.markAllAsTouched();
    if (this.form.invalid) {
      this._toastr.error('يرجى تعبئة الحقول المطلوبة');
      return;
    }
    if (!this.validatePaymentTable()) {
      this._toastr.error('يرجى تعبئة الحقول المطلوبة');
      return;
    }
    if (this.selectedDelegators.length === 0) {
      this._toastr.error('يرجى اختيار مفوض واحد على الأقل');
      return;
    }
    // }

    const licenseProjectRequestId =
      this._projectRequestLocalStorageService.getSelectedProjectLicenseRequestIdFromLocalStorage() ?? '';

    const dto: SaveAgreementDataPageDto = {
      licenseProjectRequestId,
      commercialRegisterationNumber: this.controls['commercialRegister'].value as string,
      financialReportApprovalPeriodInDays: +(this.form.value.financialReportApprovalPeriodInDays ?? 0),
      contractValue: +(this.form.value.contarctValue ?? 0),
      paymentDeadline: Number(this.form.value.paymentDeadline ?? 0),
      changeLicenseProjectCharteredAccountantAuthorizedToSignDelegators: this.selectedDelegators.map((d) => d.id as string),
      changeLicenseProjectCharteredAccountantPayments: this.paymentTableData.map<AgreementPaymentItemDto>((row) => ({
        item: row.item,
        quantity: row.quantity ?? 0,
        unitPrice: row.unitPrice ?? 0,
        description: row.description,
      })),
      saveAsDraft: isDraft,
      handleNotes: this.handleNotes,
    };

    this.subscriptions.push(
      this._service.updateAgreementDataPage(dto).subscribe((res: any) => {
        if (res?.isDone) {
          this._toastr.success(isDraft ? 'تم الحفظ كمسودة بنجاح' : 'تم إرسال الطلب بنجاح');
          this._router.navigate([`wafi/${Configuration.modules.licenseProjectRequests}/${Configuration.pages.licenseProjectRequests.licenseProjectRequestList}`]);

        } else {
          this._toastr.error(res?.message || 'حدث خطأ أثناء الحفظ');
        }
      })
    );
  }

  removeDeveloperDelegator(id: string): void {

    this.availableDelegators.push(this.selectedDelegators.find((d) => d.id === id) as CustomerShortDto);
    this.selectedDelegators = this.selectedDelegators.filter((d) => d.id !== id);

  }

  ngOnDestroy(): void {
    this.destroyed$.next(true);
    this.destroyed$.complete();
    this.subscriptions.forEach((s) => s.unsubscribe());
  }
}
