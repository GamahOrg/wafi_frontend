import {
  Component,
  OnInit,
  OnChanges,
  SimpleChanges,
  ViewEncapsulation,
  Output,
  EventEmitter,
  Input,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import {
  CreateLicenseProjectBusinessPaymentModel,
  PaymentRow,
  UpdateLicenseProjectBusinessPaymentModel,
  LicenseProjectBusinessPaymentModel,
} from '../../models/business-payment.model';
import { ToastrService } from 'ngx-toastr';
import { LicenseProjectBusinessPaymentService } from '../../services/business-payment.service';
import { SharedLicenseProjectService } from '../../services/sharedLicenseProject/shared-license-project.service';
import { SysSettingsDto } from '../../models/license-deposit-document-model/add-update-deposit-document-dto';
import {
  SaveUpdateConfirmationComponent,
  SaveUpdateConfirmationData,
} from 'src/app/shared/components/save-update-confirmation/save-update-confirmation.component';
import { LicenseProjectBuyerService } from '../../services/license-project-buyer.service';
import { LicenseProjectBuyerPaymentTypeDto } from '../../models/real-state-developer-dto';
import { LicenseRequestService } from '../../services/license-request.service';

@Component({
  selector: 'app-edit-business-payment-templates',
  templateUrl: './edit-business-payment-templates.component.html',
  styleUrls: ['./edit-business-payment-templates.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class EditBusinessPaymentTemplatesComponent implements OnInit, OnChanges {
  @Output() backClicked = new EventEmitter<void>();
  @Input() paymentId: string | null = null;
  @Input() isActive: boolean | null = null;
  @Input() isUpdateVersion: boolean = false;
  @Input() selectedPaymentType: number | null = null;

  paymentForm: FormGroup;
  paymentRows: PaymentRow[] = [];
  showTable = false;
  isSubmitting = false;
  licenseProjectId: string | null = '00000000-0000-0000-0000-000000000000';
  isEditMode = false;
  editingPaymentData: LicenseProjectBusinessPaymentModel | null = null;
  configration: SysSettingsDto[] = [];
  maxWithholdingRate: number = 0;
  maxCompletionRate: number = 0;
  maxNumberOfPayments: number = 0;
  minNumberOfPayments: number = 0;
  licenseBuyerPaymentType: LicenseProjectBuyerPaymentTypeDto[] = [];
  // Pagination
  currentPage = 1;
  pageSize = 10;
  totalItems = 0;

  paymentTypes = [
    // { value: 1, label: 'اقساط متساوية', enumValue: 1 },
    { value: 2, label: 'دفعة مقدمة + أقساط متساوية', enumValue: 2 },
    { value: 3, label: 'توزيع خاص', enumValue: 3 },
  ];

  constructor(
    private fb: FormBuilder,
    private licenseProjectBusinessPaymentService: LicenseProjectBusinessPaymentService,
    private toastrService: ToastrService,
    private _licenseRequestService: LicenseRequestService,
    private licenseBuyerService: LicenseProjectBuyerService,
    private sharedLicenseProjectService: SharedLicenseProjectService,
    private dialog: MatDialog
  ) {
    this.paymentForm = this.fb.group({
      modelTitle: ['', [Validators.required, Validators.maxLength(50)]],
      paymentType: ['', Validators.required],
      licenseProjectBuyerPaymentTypeId:[0,Validators.required],
      refunds: [0, Validators.required],
      numberOfPayments: [
        '',
        [Validators.required, Validators.min(2), Validators.max(60)],
      ],
      advancePaymentValue: [
        { value: '', disabled: true },
        [Validators.required, Validators.min(0.01), Validators.max(5)],
      ],
    });
  }

  ngOnInit(): void {
    this.getLicenseProjectIdStorage();
    this.getLicenseBuyerPaymentType();

    // Set payment type from filter if provided and not in edit mode
    if (this.selectedPaymentType && !this.paymentId) {
      this.paymentForm.patchValue({
        licenseProjectBuyerPaymentTypeId: this.selectedPaymentType
      });
    }

    // If paymentId is provided, load the payment data for editing
    if (this.paymentId) {
      this.isEditMode = true;
      this.loadPaymentData(this.paymentId);
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    // Update payment type when selectedPaymentType input changes
    if (changes['selectedPaymentType'] && !changes['selectedPaymentType'].firstChange) {
      if (this.selectedPaymentType && !this.paymentId) {
        // Only update the payment type, keep all other fields as they are
        this.paymentForm.patchValue({
          licenseProjectBuyerPaymentTypeId: this.selectedPaymentType
        });
      }
    }
  }

  private getLicenseBuyerPaymentType (): void {
    this.licenseBuyerService.getLicenseProjectBuyerPaymentTypes().subscribe((res) => {
      this.licenseBuyerPaymentType = res as LicenseProjectBuyerPaymentTypeDto[]
    })
  }
  private getLicenseProjectIdStorage(): void {
    this.licenseProjectId =
      this.sharedLicenseProjectService.getLicenseProjectIdStorage();
    if (this.licenseProjectId) {
      this.getAllConfigration();
    }
  }

  private getAllConfigration(): void {
    this.licenseProjectBusinessPaymentService.getAllConfigration().subscribe({
      next: (data) => {
        if (data) {
          this.configration = data;
          this.maxWithholdingRate = Number(
            data.find((c) => c.settingKey.includes('MaxWithholdingRate'))
              ?.settingValue || 0
          );
          this.maxCompletionRate = Number(
            data.find((c) => c.settingKey.includes('MaxCompletionRate'))
              ?.settingValue || 0
          );
          this.maxNumberOfPayments = Number(
            data.find((c) => c.settingKey.includes('MaxNumberOfPayments'))
              ?.settingValue || 0
          );
          this.minNumberOfPayments = Number(
            data.find((c) => c.settingKey.includes('MinNumberOfPayments'))
              ?.settingValue || 0
          );
          this.initForm();

          this.paymentForm
            .get('paymentType')
            ?.valueChanges.subscribe((value) => {
              const paymentsControl = this.paymentForm.get('numberOfPayments');
              const advancePaymentControl = this.paymentForm.get(
                'advancePaymentValue'
              );

              if (value === 1 || value === 2 || value === 3) {
                paymentsControl?.enable();
                paymentsControl?.setValidators([
                  Validators.required,
                  Validators.min(this.minNumberOfPayments),
                  Validators.max(this.maxNumberOfPayments),
                ]);
              } else {
                paymentsControl?.disable();
                paymentsControl?.clearValidators();
              }

              if (value === 2) {
                advancePaymentControl?.enable();
                advancePaymentControl?.setValidators([
                  Validators.required,
                  Validators.min(0.01),
                  Validators.max(this.maxWithholdingRate),
                ]);
              } else {
                advancePaymentControl?.disable();
                advancePaymentControl?.clearValidators();
                advancePaymentControl?.setValue('');
              }

              paymentsControl?.updateValueAndValidity();
              advancePaymentControl?.updateValueAndValidity();
              this.showTable = false;
              this.paymentRows = [];
            });
        }
      },
    });
  }

  private initForm(): void {
    this.paymentForm
      .get('numberOfPayments')
      ?.addValidators([
        Validators.max(this.maxNumberOfPayments),
        Validators.min(this.minNumberOfPayments),
      ]);
    this.paymentForm
      .get('advancePaymentValue')
      ?.addValidators(Validators.max(this.maxWithholdingRate));
    this.paymentForm.updateValueAndValidity();
  }

  get numberOfPayments() {
    return this.paymentForm.get('numberOfPayments');
  }

  get refunds() {
    return this.paymentForm.get('refunds');
  }

  get advancePaymentValue() {
    return this.paymentForm.get('advancePaymentValue');
  }

  get isEqualInstallment(): boolean {
    return this.paymentForm.get('paymentType')?.value === 1;
  }

  get isCashPlusInstallment(): boolean {
    return this.paymentForm.get('paymentType')?.value === 2;
  }

  get isCustomDistribution(): boolean {
    return this.paymentForm.get('paymentType')?.value === 3;
  }

  get showNumberOfPayments(): boolean {
    const paymentType = this.paymentForm.get('paymentType')?.value;
    return paymentType === 1 || paymentType === 2 || paymentType === 3;
  }

  incrementPayments(): void {
    const current = this.numberOfPayments?.value || 0;
    this.numberOfPayments?.setValue(current + 1);
    this.updatePaymentRowsOnChange(current + 1);
  }

  decrementPayments(): void {
    const current = this.numberOfPayments?.value || 0;
    if (current >= 2) {
      this.numberOfPayments?.setValue(current - 1);
      this.updatePaymentRowsOnChange(current - 1);
    }
  }

  private updatePaymentRowsOnChange(newNumberOfPayments: number): void {
    // Only update if table is already shown and has data
    if (!this.showTable || this.paymentRows.length === 0) {
      return;
    }

    const currentRowCount = this.paymentRows.length;

    if (newNumberOfPayments > currentRowCount) {
      // Adding rows: insert before the last row
      const rowsToAdd = newNumberOfPayments - currentRowCount;
      const lastRow = this.paymentRows[currentRowCount - 1]; // Save last row

      for (let i = 0; i < rowsToAdd; i++) {
        const newId = currentRowCount + i;
        this.paymentRows.splice(currentRowCount - 1 + i, 0, {
          id: newId,
          installmentId: '00000000-0000-0000-0000-000000000000',
          description: '',
          deductionRate: null,
          completionRate: null,
        });
      }

      // Update all IDs to be sequential
      this.paymentRows.forEach((row, index) => {
        row.id = index + 1;
      });
    } else if (newNumberOfPayments < currentRowCount) {
      // Removing rows: remove from before the last row
      const rowsToRemove = currentRowCount - newNumberOfPayments;

      // Remove rows starting from the second-to-last position backwards
      for (let i = 0; i < rowsToRemove; i++) {
        // Always remove at index (currentRowCount - 2 - i) to remove before last row
        this.paymentRows.splice(currentRowCount - 2 - i, 1);
      }

      // Update all IDs to be sequential
      this.paymentRows.forEach((row, index) => {
        row.id = index + 1;
      });
    }

    // Update total items and recalculate if needed
    this.totalItems = this.paymentRows.length;

    // Recalculate percentages for cash plus installment mode
    if (this.isCashPlusInstallment) {
      this.onAdvancePaymentChange();
    }
  }

  incrementRefunds(): void {
    const current = this.refunds?.value;
    this.refunds?.setValue(current + 1);
  }

  decrementRefunds(): void {
    const current = this.refunds?.value;
    if (current >= 1) {
      this.refunds?.setValue(current - 1);
    }
  }

  createPaymentSchedule(): void {
    
    console.log(this.paymentForm);
    
    if (this.paymentForm.invalid) {
      Object.keys(this.paymentForm.controls).forEach((key) => {
        this.paymentForm.get(key)?.markAsTouched();
      });
      return;
    }

    const numberOfPayments = this.numberOfPayments?.value;
    const paymentType = this.paymentForm.get('paymentType')?.value;
    const refunds = this.paymentForm.get('refunds')?.value;

    if (numberOfPayments < this.minNumberOfPayments) {
      this.toastrService.error(
        'عدد الدفعات يجب أن يكون أكبر من أو يساوي ' + this.minNumberOfPayments
      );
      return;
    }

    if (numberOfPayments > this.maxNumberOfPayments) {
      this.toastrService.error(
        'عدد الدفعات يجب أن يكون أقل من أو يساوي ' + this.maxNumberOfPayments
      );
      return;
    }

    if (numberOfPayments < refunds) {
      this.toastrService.error(
        'عدد الدفعات المستردة يجب أن يكون أقل من أو يساوي عدد الدفعات '
      );
      return;
    }

    if (paymentType === 1) {
      this.paymentRows = [];
      this.createEqualInstallments(numberOfPayments);
    } else if (paymentType === 2) {
      this.paymentRows = [];
      this.createCashPlusInstallments(numberOfPayments);
    } else if (paymentType === 3) {
      if (!this.paymentRows || this.paymentRows.length === 0) {
        this.paymentRows = [];
      }
      this.createCustomDistribution(numberOfPayments);
    }

    this.totalItems = this.paymentRows.length;
    this.currentPage = 1;
    this.showTable = true;
  }

  async savePaymentTemplate(): Promise<void> {
    // Validate form
    
    if (
      this.paymentForm.invalid ||
      !this.showTable ||
      this.paymentRows.length === 0
    ) {
      this.toastrService.error('يرجى إنشاء جدول الدفعات أولاً');
      return;
    }

    if (
      this.paymentForm.get('refunds')?.value >
      this.paymentForm.get('numberOfPayments')?.value
    ) {
      this.toastrService.error(
        'عدد الدفعات المستردة يجب أن يكون أقل من أو يساوي عدد الدفعات'
      );
      return;
    }

    // Validate individual percentages
    const individualValidation = this.validateIndividualPercentages();
    if (!individualValidation.isValid) {
      this.toastrService.error(individualValidation.message);
      return;
    }

    // Validate total percentages
    const validation = this.validateTotalPercentages();
    if (!validation.deduction || !validation.completion) {
      this.toastrService.error('يجب أن يكون مجموع النسب يساوي 100%');
      return;
    }

    // Validate minimum 2 installments
    if (this.paymentRows.length < this.minNumberOfPayments) {
      this.toastrService.error(
        'الحد الأدنى للدفعات هو ' + this.minNumberOfPayments
      );
      return;
    }

    this.isSubmitting = true;

    try {
      if (this.isEditMode && this.editingPaymentData) {
        // Update existing payment
        await this.updatePaymentTemplate();
      } else {
        // Create new payment
        await this.createPaymentTemplate();
      }
    } catch (error) {
      this.toastrService.error(
        this.isEditMode
          ? 'حدث خطأ أثناء تحديث النموذج'
          : 'حدث خطأ أثناء إنشاء النموذج'
      );
    } finally {
      this.isSubmitting = false;
    }
  }

  validateIndividualPercentages(): { isValid: boolean; message: string } {
    const paymentType = this.paymentForm.get('paymentType')?.value;

    // Validate deduction rate <= 5% for specific payment types and conditions
    const firstRow = this.paymentRows[0];
    if (
      (paymentType === 2 || paymentType === 3) &&
      !this.isFirstRowInCashMode(1) &&
      firstRow.deductionRate != null &&
      firstRow.deductionRate > this.maxWithholdingRate
    ) {
      return {
        isValid: false,
        message: `الدفعة رقم 1: نسبة الاستقطاع يجب أن تكون أقل من أو تساوي ${this.maxWithholdingRate}%`,
      };
    }

    if (
      (paymentType === 2 || paymentType === 3) &&
      !this.isFirstRowInCashMode(1) &&
      firstRow.completionRate != null &&
      firstRow.completionRate > this.maxCompletionRate
    ) {
      return {
        isValid: false,
        message: `الدفعة رقم 1: نسبة الإنجاز يجب أن تكون أقل من أو تساوي ${this.maxCompletionRate}%`,
      };
    }

    for (let i = 0; i < this.paymentRows.length; i++) {
      const row = this.paymentRows[i];
      const rowNumber = i + 1;

      // Check deduction rate
      if (row.deductionRate === null || row.deductionRate === undefined) {
        return {
          isValid: false,
          message: `الدفعة رقم ${rowNumber}: نسبة الاستقطاع مطلوبة`,
        };
      }

      if (row.deductionRate <= 0) {
        return {
          isValid: false,
          message: `الدفعة رقم ${rowNumber}: نسبة الاستقطاع يجب أن تكون أكبر من 0`,
        };
      }

      if (row.deductionRate > 100) {
        return {
          isValid: false,
          message: `الدفعة رقم ${rowNumber}: نسبة الاستقطاع يجب أن تكون أقل من أو تساوي 100`,
        };
      }

      // Check completion rate
      if (row.completionRate === null || row.completionRate === undefined) {
        return {
          isValid: false,
          message: `الدفعة رقم ${rowNumber}: نسبة الإنجاز مطلوبة`,
        };
      }

      if (row.completionRate <= 0) {
        return {
          isValid: false,
          message: `الدفعة رقم ${rowNumber}: نسبة الإنجاز يجب أن تكون أكبر من 0`,
        };
      }

      if (row.completionRate > 100) {
        return {
          isValid: false,
          message: `الدفعة رقم ${rowNumber}: نسبة الإنجاز يجب أن تكون أقل من أو تساوي 100`,
        };
      }
    }

    return { isValid: true, message: '' };
  }

  private async createPaymentTemplate(): Promise<void> {
    const paymentType = this.paymentForm.get('paymentType')?.value;
    const selectedPaymentType = this.paymentTypes.find(
      (t) => t.value === paymentType
    );
    const isactiveFlag = this.stringToBoolean(
      this.sharedLicenseProjectService.getIsActivePaymentFlag()!
    );

    const payload: CreateLicenseProjectBusinessPaymentModel = {
      modelTitle: this.paymentForm.get('modelTitle')?.value,
      refunds: this.paymentForm.get('refunds')?.value,
      licenseProjectId: this.licenseProjectId as string,
      isActive: isactiveFlag,
      paymentDistributionTypeId: selectedPaymentType?.enumValue || 1,
      licenseProjectBuyerPaymentTypeId: this.paymentForm.get('licenseProjectBuyerPaymentTypeId')?.value,
      paymentInstallments: this.paymentRows.map((row) => ({
        installmentNumber: row.id,
        rentPercentage: row.completionRate || 0,
        deductionPercentage: row.deductionRate || 0,
        description: row.description || '',
      })),
    };

    const subscription = this.licenseProjectBusinessPaymentService
      .createLicenseProjectBusinessPayment(payload)
      .subscribe({
        next: (res) => {
          if(res)
          this.backClicked.emit();
this._licenseRequestService.updatedCompletePercentage.emit();
          // Show success popup
          // const dialogData: SaveUpdateConfirmationData = {
          //   title: 'تم حفظ النموذج',
          //   message: 'تم حفظ نموذج الدفع بنجاح'
          // };
          // const dialogRef = this.dialog.open(SaveUpdateConfirmationComponent, {
          //   data: dialogData,
          //   width: '400px',
          //   panelClass: 'custom-dialog-container'
          // });

          // Navigate back after dialog closes
          // dialogRef.afterClosed().subscribe(() => {
          //   this.backClicked.emit();
          // });
        },
        error: (error) => {
          console.error('Error creating payment template:', error);
          this.toastrService.error('فشل في إنشاء نموذج الدفع');
        },
      });
  }
  stringToBoolean(str: string) {
    return str.toLowerCase() === 'true';
  }
  private async updatePaymentTemplate(): Promise<void> {
    const isactiveFlag = this.stringToBoolean(
      this.sharedLicenseProjectService.getIsActivePaymentFlag()!
    );

    if (!this.editingPaymentData) return;
    const updateDto: UpdateLicenseProjectBusinessPaymentModel = {
      id: this.editingPaymentData.id,
      modelTitle: this.paymentForm.get('modelTitle')?.value,
      refunds: this.paymentForm.get('refunds')?.value,
      licenseProjectBuyerPaymentTypeId: this.paymentForm.get('licenseProjectBuyerPaymentTypeId')?.value,
      licenseProjectId: this.licenseProjectId as string,
      isActive: isactiveFlag,
      isUpdateVersion: this.isUpdateVersion,
      paymentDistributionTypeId: this.paymentForm.get('paymentType')?.value,
      paymentInstallments: this.paymentRows.map((row, index) => {
        return {
          id: row.installmentId || '00000000-0000-0000-0000-000000000000',
          rentPercentage: row.completionRate || 0,
          deductionPercentage: row.deductionRate || 0,
          description: row.description || '',
          isFirstInstallment: index === 0,
          isLastInstallment: index === this.paymentRows.length - 1,
          installmentNumber: row.id,
        };
      }),
    };

    const subscription = this.licenseProjectBusinessPaymentService
      .updateLicenseProjectBusinessPayment(updateDto)
      .subscribe({
        next: (res) => {
          if(res){
          if (this.isUpdateVersion) {
            // Show success popup
            const dialogData: SaveUpdateConfirmationData = {
              title: 'تم تعديل النموذج',
              message: 'سيتم إنشاء نسخة نماذج جديدة',
            };
            const dialogRef = this.dialog.open(
              SaveUpdateConfirmationComponent,
              {
                data: dialogData,
                width: '400px',
                panelClass: 'custom-dialog-container',
              }
            );

            // Navigate back after dialog closes
            dialogRef.afterClosed().subscribe(() => {
              this.backClicked.emit();
            });
          } else {
            this.backClicked.emit();
          }
        }
        },
        error: (error) => {
          console.error('Error updating payment template:', error);
          this.toastrService.error('فشل في تحديث نموذج الدفع');
        },
      });
  }

  private loadPaymentData(paymentId: string): void {
    this.licenseProjectBusinessPaymentService
      .getLicenseProjectBusinessPaymentById(paymentId)
      .subscribe({
        next: (data) => {
          
          if (data) {
            this.editingPaymentData = data;
            this.populateFormWithData(data);
          }
        },
        error: (error) => {
          console.error('Error loading payment data:', error);
          this.toastrService.error('فشل في تحميل بيانات النموذج');
        },
      });
  }

  private populateFormWithData(data: LicenseProjectBusinessPaymentModel): void {
    // Guard clause: ensure paymentInstallments exists
    const paymentInstallments = data.paymentInstallments || [];

    if (paymentInstallments.length === 0) {
      console.warn('Payment installments data is missing or empty');
      this.paymentForm.patchValue({
        modelTitle: data.modelTitle || '',
        numberOfPayments: 0,
        refunds: data.refunds || 0,
        paymentType: data.paymentDistributionTypeId,
        licenseProjectBuyerPaymentTypeId: data.licenseProjectBuyerPaymentTypeId,
      });
      this.paymentRows = [];
      this.showTable = false;
      this.totalItems = 0;
      return;
    }

    // Set form values
    this.paymentForm.patchValue({
      modelTitle: data.modelTitle || '',
      numberOfPayments: paymentInstallments.length,
      refunds: data.refunds || 0,
      paymentType: data.paymentDistributionTypeId,
      licenseProjectBuyerPaymentTypeId: data.licenseProjectBuyerPaymentTypeId,
    });

    // Determine payment type based on installments
    const firstInstallment = paymentInstallments[0];
    let paymentType = data.paymentDistributionTypeId; // Default to custom distribution

    // Check if it's equal installments
    const allEqual = paymentInstallments.every(
      (inst) =>
        inst.deductionPercentage === firstInstallment.deductionPercentage &&
        inst.rentPercentage === firstInstallment.rentPercentage
    );

    if (allEqual) {
      paymentType = 1; // Equal installments
    } else if (paymentInstallments.length >= 2) {
      // Check if first installment is different (cash + installments)
      // const remainingEqual = paymentInstallments.slice(1).every((inst, index) =>
      //   index === 0 || inst.deductionPercentage === paymentInstallments[1].deductionPercentage
      // );

      // if (remainingEqual) {
      paymentType = this.paymentForm.get('paymentType')?.value;
      if (paymentType == 2)
        // Cash + installments
        this.paymentForm.patchValue({
          advancePaymentValue: firstInstallment.deductionPercentage,
        });
      // }
    }

    // this.paymentForm.patchValue({
    //   paymentType: paymentType
    // });

    // Map installments to payment rows
    this.paymentRows = paymentInstallments.map((inst, index) => ({
      id: index + 1,
      installmentId: inst.id,
      description: inst.description || '',
      deductionRate: inst.deductionPercentage,
      completionRate: inst.rentPercentage,
    }));

    this.showTable = true;
    this.totalItems = this.paymentRows.length;
  }

  resetForm(): void {
    this.paymentForm.reset();
    this.paymentRows = [];
    this.showTable = false;
    this.currentPage = 1;
    this.totalItems = 0;
  }

  private createEqualInstallments(numberOfPayments: number): void {
    const percentages = this.distributePercentageEqually(100, numberOfPayments);

    for (let i = 1; i <= numberOfPayments; i++) {
      this.paymentRows.push({
        id: i,
        installmentId: '00000000-0000-0000-0000-000000000000',
        description: '',
        deductionRate: percentages[i - 1],
        completionRate: percentages[i - 1],
      });
    }
  }

  private createCashPlusInstallments(numberOfPayments: number): void {
    const advancePayment = parseFloat(
      (this.advancePaymentValue?.value || 0).toFixed(2)
    );
    const remainingPercentage = parseFloat((100 - advancePayment).toFixed(2));
    const installmentPercentages = this.distributePercentageEqually(
      remainingPercentage,
      numberOfPayments - 1
    );
    const completionRatePercentages = this.distributePercentageEqually(
      100,
      numberOfPayments
    );

    // First payment - advance payment (editable in table)
    this.paymentRows.push({
      id: 1,
      installmentId: '00000000-0000-0000-0000-000000000000',
      description: 'الدفعة الأولى',
      deductionRate: advancePayment,
      completionRate: completionRatePercentages[0],
    });

    // Remaining installments
    for (let i = 2; i <= numberOfPayments; i++) {
      this.paymentRows.push({
        id: i,
        installmentId: '00000000-0000-0000-0000-000000000000',
        description: i === numberOfPayments ? 'الدفعة الاخيرة' : '',
        deductionRate: installmentPercentages[i - 2],
        completionRate: completionRatePercentages[i - 1],
      });
    }
  }

  private distributePercentageEqually(total: number, parts: number): number[] {
    // Use Largest Remainder Method for fair distribution
    const baseValue = Math.floor((total * 100) / parts) / 100;
    const remainder = parseFloat((total - baseValue * parts).toFixed(2));
    const remainderCents = Math.round(remainder * 100);

    const result: number[] = new Array(parts).fill(baseValue);

    // Distribute remainder cents one by one
    for (let i = 0; i < remainderCents; i++) {
      result[i] += 0.01;
      result[i] = parseFloat(result[i].toFixed(2));
    }

    return result;
  }

  private createCustomDistribution(numberOfPayments: number): void {
    const currentRowCount = this.paymentRows.length;

    if (currentRowCount === 0) {
      // Initial creation - create all rows from scratch
      for (let i = 1; i <= numberOfPayments; i++) {
        this.paymentRows.push({
          id: i,
          installmentId: '00000000-0000-0000-0000-000000000000',
          description: '',
          deductionRate: null,
          completionRate: null,
        });
      }
    } else if (numberOfPayments > currentRowCount) {
      // Adding rows: insert before the last row
      const rowsToAdd = numberOfPayments - currentRowCount;

      for (let i = 0; i < rowsToAdd; i++) {
        // Insert at position (currentRowCount - 1 + i) to add before last row
        this.paymentRows.splice(currentRowCount - 1 + i, 0, {
          id: currentRowCount + i,
          installmentId: '00000000-0000-0000-0000-000000000000',
          description: '',
          deductionRate: null,
          completionRate: null,
        });
      }

      // Update all IDs to be sequential
      this.paymentRows.forEach((row, index) => {
        row.id = index + 1;
      });
    } else if (numberOfPayments < currentRowCount) {
      // Removing rows: remove from before the last row
      const rowsToRemove = currentRowCount - numberOfPayments;

      // Remove rows starting from the second-to-last position backwards
      for (let i = 0; i < rowsToRemove; i++) {
        // Always remove at index (currentRowCount - 2 - i) to remove before last row
        this.paymentRows.splice(currentRowCount - 2 - i, 1);
      }

      // Update all IDs to be sequential
      this.paymentRows.forEach((row, index) => {
        row.id = index + 1;
      });
    }
  }

  onAdvancePaymentChange(): void {
    if (
      this.isCashPlusInstallment &&
      this.showTable &&
      this.paymentRows.length > 0
    ) {
      const advancePayment = parseFloat(
        (this.advancePaymentValue?.value || 0).toFixed(2)
      );
      const numberOfPayments = this.numberOfPayments?.value;

      if (
        numberOfPayments >= this.minNumberOfPayments &&
        numberOfPayments <= this.maxNumberOfPayments
      ) {
        const installmentPercentages = this.distributePercentageEqually(
          parseFloat((100 - advancePayment).toFixed(2)),
          numberOfPayments - 1
        );

        // Update first row deduction rate only
        if (this.paymentRows[0]) {
          this.paymentRows[0].deductionRate = advancePayment;
        }

        // Update remaining rows deduction rates only
        for (let i = 1; i < this.paymentRows.length; i++) {
          if (this.paymentRows[i]) {
            this.paymentRows[i].deductionRate = installmentPercentages[i - 1];
          }
        }
      }
    }
  }

  isFirstRowInCashMode(rowId: number): boolean {
    return this.isCashPlusInstallment && rowId === 1;
  }

  validateTotalPercentages(): {
    deduction: boolean;
    completion: boolean;
    deductionTotal: number;
    completionTotal: number;
  } {
    let deductionTotal = 0;
    let completionTotal = 0;

    this.paymentRows.forEach((row) => {
      deductionTotal += row.deductionRate || 0;
      completionTotal += row.completionRate || 0;
    });

    // Round to 2 decimal places to avoid floating point issues
    deductionTotal = parseFloat(deductionTotal.toFixed(2));
    completionTotal = parseFloat(completionTotal.toFixed(2));

    return {
      deduction: Math.abs(deductionTotal - 100) < 0.01,
      completion: Math.abs(completionTotal - 100) < 0.01,
      deductionTotal,
      completionTotal,
    };
  }

  get showValidationError(): boolean {
    if (!this.showTable || this.paymentRows.length === 0) {
      return false;
    }

    const validation = this.validateTotalPercentages();
    return !validation.deduction || !validation.completion;
  }

  get validationMessage(): string {
    const validation = this.validateTotalPercentages();
    let message = '';

    if (!validation.deduction) {
      message += `مجموع نسبة الاستقطاع = ${validation.deductionTotal}% (يجب أن يساوي 100%)`;
    }

    if (!validation.completion) {
      if (message) message += ' | ';
      message += `مجموع نسبة الانجاز = ${validation.completionTotal}% (يجب أن يساوي 100%)`;
    }

    return message;
  }

  get paginatedRows(): PaymentRow[] {
    const start = (this.currentPage - 1) * this.pageSize;
    const end = start + this.pageSize;
    return this.paymentRows.slice(start, end);
  }

  get totalPages(): number {
    return Math.ceil(this.totalItems / this.pageSize);
  }

  get pages(): number[] {
    const total = this.totalPages;
    const current = this.currentPage;
    const delta = 2;
    const range: number[] = [];

    for (
      let i = Math.max(2, current - delta);
      i <= Math.min(total - 1, current + delta);
      i++
    ) {
      range.push(i);
    }

    if (current - delta > 2) {
      range.unshift(-1);
    }
    if (current + delta < total - 1) {
      range.push(-1);
    }

    range.unshift(1);
    if (total > 1) range.push(total);

    return range.filter((v, i, a) => a.indexOf(v) === i);
  }

  goToPage(page: number): void {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
    }
  }

  nextPage(): void {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
    }
  }

  previousPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }

  onBackClick(): void {
    this.backClicked.emit();
  }
}
