import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-fawria-licenseproject-feasibility-study-create',
  templateUrl: './fawria-licenseproject-feasibility-study-create.component.html',
  styleUrls: ['./fawria-licenseproject-feasibility-study-create.component.scss']
})
export class FawriaLicenseprojectFeasibilityStudyCreateComponent implements OnInit {
  feasibilityStudyForm: FormGroup;
  showValidation: boolean = false;

  localization = {
    title: 'بيانات دراسة الجدوى',
    basicInfo: 'البيانات الأساسية للمشروع',
    economicActivity: 'إجمال مساحة الأراضي المشتراة',
    economicActivityPlaceholder: 'أدخل إجمال مساحة الأراضي المشتراة',

    financialInfo: 'بيانات دراسة الجدوى للمشروع',
    fixedAssetsCost: 'تكاليف تطوير البنية التحتية',
    fixedAssetsCostPlaceholder: 'أدخل تكاليف تطوير البنية التحتية',

    operatingCapital: 'إجمال التكاليف الإنشائية',
    operatingCapitalPlaceholder: 'أدخل إجمال التكاليف الإنشائية',

    totalFinancing: 'إجمال التكاليف غير الإنشائية',
    totalFinancingPlaceholder: 'أدخل إجمال التكاليف غير الإنشائية',

    annualRevenue: 'إجمال تكلفة الأرض',
    annualRevenuePlaceholder: 'أدخل إجمال تكلفة الأرض',

    annualIncome: 'إجمال تكاليف المشروع',
    annualIncomePlaceholder: 'أدخل إجمال تكاليف المشروع',

    annualCosts: 'صافح الربح المتوقع',
    annualCostsPlaceholder: 'أدخل صافح الربح المتوقع',

    paybackPeriod: 'متوسط سعر البيع',
    paybackPeriodPlaceholder: 'أدخل متوسط سعر البيع',

    internalRateOfReturn: 'متوسط تكلفة الإنتاج',
    internalRateOfReturnPlaceholder: 'أدخل متوسط تكلفة الإنتاج',

    requiredErrorMsg: 'حقل مطلوب',
  };

  constructor(
    private _formBuilder: FormBuilder
  ) {
    this.feasibilityStudyForm = this._formBuilder.group({
      economicActivity: ['', [Validators.required]],
      fixedAssetsCost: ['', [Validators.required]],
      operatingCapital: ['', [Validators.required]],
      totalFinancing: ['', [Validators.required]],
      annualRevenue: ['', [Validators.required]],
      annualIncome: ['', [Validators.required]],
      annualCosts: ['', [Validators.required]],
      paybackPeriod: ['', [Validators.required]],
      internalRateOfReturn: ['', [Validators.required]]
    });
  }

  ngOnInit(): void {
    // Initialize component
  }

  get controls() {
    return this.feasibilityStudyForm.controls;
  }

  onSubmit(): void {
    if (!this.feasibilityStudyForm.valid) {
      this.showValidation = true;
      this.feasibilityStudyForm.markAllAsTouched();
      return;
    }

    console.log('Form submitted:', this.feasibilityStudyForm.value);
    // TODO: Implement submission logic
  }

  saveAsDraft(): void {
    console.log('Saved as draft:', this.feasibilityStudyForm.value);
    // TODO: Implement save as draft logic
  }

  // Convert Arabic-Indic numerals to English numerals
  convertArabicToEnglishNumbers(event: any): void {
    const input = event.target as HTMLInputElement;
    const arabicNumbers = ['٠', '١', '٢', '٣', '٤', '٥', '٦', '٧', '٨', '٩'];
    const englishNumbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

    let value = input.value;
    arabicNumbers.forEach((arabic, index) => {
      value = value.replace(new RegExp(arabic, 'g'), englishNumbers[index]);
    });

    if (value !== input.value) {
      input.value = value;
      // Trigger value change in the form control
      const controlName = input.getAttribute('formControlName');
      if (controlName) {
        this.feasibilityStudyForm.get(controlName)?.setValue(value);
      }
    }
  }

  // Format number with thousand separators
  formatNumberWithCommas(event: any): void {
    const input = event.target as HTMLInputElement;
    const controlName = input.getAttribute('formControlName');

    if (!controlName) return;

    // Remove all commas and non-numeric characters except decimal point
    let numericValue = input.value.replace(/,/g, '').replace(/[^\d.]/g, '');

    // Convert Arabic numbers to English
    const arabicNumbers = ['٠', '١', '٢', '٣', '٤', '٥', '٦', '٧', '٨', '٩'];
    const englishNumbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    arabicNumbers.forEach((arabic, index) => {
      numericValue = numericValue.replace(new RegExp(arabic, 'g'), englishNumbers[index]);
    });

    // Update form control with numeric value (without commas)
    if (numericValue) {
      this.feasibilityStudyForm.get(controlName)?.setValue(parseFloat(numericValue), { emitEvent: false });
    } else {
      this.feasibilityStudyForm.get(controlName)?.setValue(null, { emitEvent: false });
    }

    // Format with commas for display
    const parts = numericValue.split('.');
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    input.value = parts.join('.');
  }

  // Handle focus - remove commas for editing
  onNumberInputFocus(event: any): void {
    const input = event.target as HTMLInputElement;
    input.value = input.value.replace(/,/g, '');
  }

  // Handle blur - add commas for display
  onNumberInputBlur(event: any): void {
    this.formatNumberWithCommas(event);
  }

  // Format all number inputs with commas
  formatAllNumberInputs(): void {
    const numberFields = [
      'fixedAssetsCost',
      'operatingCapital',
      'totalFinancing',
      'annualRevenue',
      'annualIncome',
      'annualCosts',
      'paybackPeriod',
      'internalRateOfReturn'
    ];

    numberFields.forEach(fieldName => {
      const value = this.feasibilityStudyForm.get(fieldName)?.value;
      if (value) {
        const input = document.getElementById(`control-${fieldName}`) as HTMLInputElement;
        if (input) {
          const parts = value.toString().split('.');
          parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
          input.value = parts.join('.');
        }
      }
    });
  }
}
