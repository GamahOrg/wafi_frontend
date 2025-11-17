import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { PopupService } from 'src/app/shared/services/popup/popup.service';
import { LicenseProjectBusinessPaymentService } from '../../services/business-payment.service';
import { SharedLicenseProjectService } from '../../services/sharedLicenseProject/shared-license-project.service';
import {
  CreateLicenseProjectBusinessPaymentModel,
  UpdateLicenseProjectBusinessPaymentModel,
  LicenseProjectBusinessPaymentTemplateModel,
  LicenseProjectBusinessPaymentInstallmentModel
} from '../../models/business-payment.model';

@Component({
  selector: 'app-business-payment-template-form',
  templateUrl: './business-payment-template-form.component.html',
  styleUrls: ['./business-payment-template-form.component.scss']
})
export class BusinessPaymentTemplateFormComponent implements OnInit, OnDestroy {
  @Input() licenseProjectId?: string;
  businessPaymentForm!: FormGroup;
  subscriptions: Subscription[] = [];
  showValidation = false;
  isEditMode = false;
  currentEditingTemplate: LicenseProjectBusinessPaymentTemplateModel | null = null;
  loading = false;

  localization = {
    title: 'نماذج الدفعات المالية',
    modelTitle: 'عنوان النموذج',
    rentPercentage: 'نسبة الإنجاز',
    deductionPercentage: 'نسبة الاستقطاع',
    description: 'وصف الدفعة',
    requiredErrorMsg: 'حقل مطلوب',
    savedSuccessfully: 'تم الحفظ بنجاح',
    addAnotherPayment: 'إضافة دفعة أخرى',
    firstInstallment: 'الدفعة الأولى',
    lastInstallment: 'الدفعة الأخيرة',
    otherInstallment: 'الدفعة الأخرى',
    pleaseAddAllRequiredFields: 'نأمل ادخال كل الحقول اللازمة واعادة المحاولة',
    totalDeductionPercentageError: 'مجموع نسب الاستقطاع يجب أن يساوي 100%',
    totalRentPercentageError: 'مجموع نسب الإنجاز يجب أن يساوي 100%'
  };

  constructor(
    private fb: FormBuilder,
    private licenseProjectBusinessPaymentService: LicenseProjectBusinessPaymentService,
    private toastrService: ToastrService,
    private popupService: PopupService,
    private sharedLicenseProjectService: SharedLicenseProjectService
  ) {}

  ngOnInit(): void {
    this.initializeForm();
    this.observePopupEvents();
    this.getLicenseProjectIdFromStorage();
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }

  initializeForm(): void {
    this.businessPaymentForm = this.fb.group({
      id: [null],
      modelTitle: ['', [Validators.required]],
      paymentInstallments: this.fb.array([
        this.fb.group({
          id: [null],
          rentPercentage: [null, [Validators.required, Validators.min(0), Validators.max(100)]],
          deductionPercentage: [null, [Validators.required, Validators.min(0), Validators.max(100)]],
          description: [''],
          isFirstInstallment: [true],
          isLastInstallment: [false]
        }),
        this.fb.group({
          id: [null],
          rentPercentage: [null, [Validators.required, Validators.min(0), Validators.max(100)]],
          deductionPercentage: [null, [Validators.required, Validators.min(0), Validators.max(100)]],
          description: [''],
          isFirstInstallment: [false],
          isLastInstallment: [true]
        })
      ])
    });
  }

  createInstallmentFormGroup(installment?: LicenseProjectBusinessPaymentInstallmentModel, index?: number): FormGroup {
    return this.fb.group({
      id: [installment?.id || null],
      rentPercentage: [installment?.rentPercentage !== undefined ? installment.rentPercentage : null, [Validators.required, Validators.min(0), Validators.max(100)]],
      deductionPercentage: [installment?.deductionPercentage !== undefined ? installment.deductionPercentage : null, [Validators.required, Validators.min(0), Validators.max(100)]],
      description: [installment?.description || ''],
      isFirstInstallment: [installment?.isFirstInstallment || (index === 0)],
      isLastInstallment: [installment?.isLastInstallment || false]
    });
  }

  get paymentInstallmentsFormArray(): FormArray {
    return this.businessPaymentForm.get('paymentInstallments') as FormArray;
  }

  addInstallmentToForm(): void {
    const currentLength = this.paymentInstallmentsFormArray.length;
    if (currentLength < 7) {
      // Update the previous last installment to not be last anymore
      if (currentLength > 0) {
        this.paymentInstallmentsFormArray.at(currentLength - 1).patchValue({
          isLastInstallment: false
        });
      }

      // Add new installment as the last one
      const newInstallment = this.fb.group({
        id: [null],
        rentPercentage: [null, [Validators.required, Validators.min(0), Validators.max(100)]],
        deductionPercentage: [null, [Validators.required, Validators.min(0), Validators.max(100)]],
        description: [''],
        isFirstInstallment: [false],
        isLastInstallment: [true]
      });

      this.paymentInstallmentsFormArray.push(newInstallment);
    }
  }

  removeInstallmentFromForm(index: number): void {
    if (this.paymentInstallmentsFormArray.length > 2) {
      this.paymentInstallmentsFormArray.removeAt(index);

      // Update isFirstInstallment and isLastInstallment flags
      const installments = this.paymentInstallmentsFormArray;
      for (let i = 0; i < installments.length; i++) {
        const control = installments.at(i);
        const isFirst = i === 0;
        const isLast = i === installments.length - 1;

        control.patchValue({
          isFirstInstallment: isFirst,
          isLastInstallment: isLast
        });
      }
    }
  }

  getFormInstallmentTitle(index: number): string {
    if (index === 0) return this.localization.firstInstallment;
    if (index === this.paymentInstallmentsFormArray.length - 1) return this.localization.lastInstallment;
    return this.localization.otherInstallment;
  }

  private getLicenseProjectIdFromStorage(): void {
    const projectId = this.sharedLicenseProjectService.getLicenseProjectIdStorage();
    if (projectId) {
      this.licenseProjectId = projectId;
    }
  }

  setProjectId(projectId: string): void {
    this.licenseProjectId = projectId;
  }

  setEditData(template: LicenseProjectBusinessPaymentTemplateModel): void {
    this.isEditMode = true;
    this.currentEditingTemplate = template;

    // Populate form with selected template data
    const payment = template.licenseProjectBusinessPayment;
    this.businessPaymentForm.patchValue({
      id: payment.id,
      modelTitle: payment.modelTitle || template.templateName
    });

    // Clear existing form array
    while (this.paymentInstallmentsFormArray.length !== 0) {
      this.paymentInstallmentsFormArray.removeAt(0);
    }

    // Add installments to form array
    if (payment.paymentInstallments && payment.paymentInstallments.length > 0) {
      payment.paymentInstallments.forEach(installment => {
        this.paymentInstallmentsFormArray.push(this.createInstallmentFormGroup(installment));
      });
    } else {
      // Add default installments if none exist
      this.paymentInstallmentsFormArray.push(this.createInstallmentFormGroup(undefined, 0));
      this.paymentInstallmentsFormArray.push(this.createInstallmentFormGroup(undefined, 1));
    }
  }

  observePopupEvents(): void {
    this.observeCancelAction();
    this.observeConfirmAction();
  }

  private observeCancelAction(): void {
    this.subscriptions.push(
      this.popupService.cancelAction.subscribe(() => {
        this.popupService.dismissDialog();
      })
    );
  }

  private observeConfirmAction(): void {
    this.subscriptions.push(
      this.popupService.confirmAction.subscribe(() => {
        this.save();
      })
    );
  }

  save(): void {
    this.showValidation = true;

    // Mark all form controls as touched to show validation
    this.businessPaymentForm.markAllAsTouched();

    // Also mark all installment form controls as touched
    this.paymentInstallmentsFormArray.controls.forEach(control => {
      if (control instanceof FormGroup) {
        this.markFormGroupTouched(control);
      }
    });

    if (!this.businessPaymentForm.valid) {
      this.toastrService.error(this.localization.pleaseAddAllRequiredFields);
      return;
    }

    // Validate sum of deduction percentages equals 100
    const totalDeductionPercentage = this.paymentInstallmentsFormArray.controls
      .reduce((sum, control) => sum + (control.get('deductionPercentage')?.value || 0), 0);

    if (totalDeductionPercentage !== 100) {
      this.toastrService.error(this.localization.totalDeductionPercentageError);
      return;
    }

    // Validate sum of rent percentages equals 100
    const totalRentPercentage = this.paymentInstallmentsFormArray.controls
      .reduce((sum, control) => sum + (control.get('rentPercentage')?.value || 0), 0);

    if (totalRentPercentage !== 100) {
      this.toastrService.error(this.localization.totalRentPercentageError);
      return;
    }

    this.loading = true;
    const formValue = this.businessPaymentForm.value;

    // Prepare installments with proper indexing
    const installments = formValue.paymentInstallments.map((installment: any, index: number) => {
      const isFirst = index === 0;
      const isLast = index === formValue.paymentInstallments.length - 1;
      return {
        ...installment,
        installmentNumber: index + 1, // Add installment number (1-based)
        isFirstInstallment: isFirst,
        isLastInstallment: isLast
      };
    });

    if (this.isEditMode && this.currentEditingTemplate) {
      // Update existing template
      const updateDto: UpdateLicenseProjectBusinessPaymentModel = {
        id: this.currentEditingTemplate.licenseProjectBusinessPayment.id,
        modelTitle: formValue.modelTitle,
        refunds: formValue.refunds,
        licenseProjectBuyerPaymentTypeId: formValue.licenseProjectBuyerPaymentTypeId,
        licenseProjectId: this.licenseProjectId || this.currentEditingTemplate.licenseProjectBusinessPayment.licenseProjectId,
        paymentInstallments: installments,
        paymentDistributionTypeId: this.currentEditingTemplate.licenseProjectBusinessPayment.paymentDistributionTypeId
      };

      const subscription = this.licenseProjectBusinessPaymentService
        .updateLicenseProjectBusinessPayment(updateDto)
        .subscribe({
          next: () => {
            this.toastrService.success(this.localization.savedSuccessfully);
            this.popupService.dismissDialog();
          },
          error: (error) => {
            console.error('Error updating payment template:', error);
            this.toastrService.error('فشل في تحديث نموذج الدفع');
            this.loading = false;
          }
        });
      this.subscriptions.push(subscription);
    } else {
      // Create new template
      const createDto: CreateLicenseProjectBusinessPaymentModel = {
        modelTitle: formValue.modelTitle,
        refunds: formValue.refunds,
        licenseProjectBuyerPaymentTypeId: formValue.licenseProjectBuyerPaymentTypeId,
        licenseProjectId: this.licenseProjectId || undefined, // Send undefined if no project ID
        paymentInstallments: installments,
        paymentDistributionTypeId: 1 // Assuming a default value, adjust as needed
      };

      const subscription = this.licenseProjectBusinessPaymentService
        .createLicenseProjectBusinessPayment(createDto)
        .subscribe({
          next: () => {
            this.toastrService.success(this.localization.savedSuccessfully);
            this.popupService.dismissDialog();
          },
          error: (error) => {
            console.error('Error creating payment template:', error);
            this.toastrService.error('فشل في إضافة نموذج الدفع');
            this.loading = false;
          }
        });
      this.subscriptions.push(subscription);
    }
  }

  getTotalDeductionPercentage(): number {
    return this.paymentInstallmentsFormArray.controls
      .reduce((sum, control) => sum + (control.get('deductionPercentage')?.value || 0), 0);
  }

  getTotalRentPercentage(): number {
    return this.paymentInstallmentsFormArray.controls
      .reduce((sum, control) => sum + (control.get('rentPercentage')?.value || 0), 0);
  }


  private markFormGroupTouched(formGroup: FormGroup): void {
    Object.keys(formGroup.controls).forEach(key => {
      const control = formGroup.get(key);
      control?.markAsTouched();

      if (control instanceof FormGroup) {
        this.markFormGroupTouched(control);
      }

      if (control instanceof FormArray) {
        control.controls.forEach(arrayControl => {
          if (arrayControl instanceof FormGroup) {
            this.markFormGroupTouched(arrayControl);
          }
        });
      }
    });
  }
}