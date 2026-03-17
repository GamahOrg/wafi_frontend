import { Component, Input, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RealStateDeveloperService } from '../../services/real-state-developer.service';
import { SaveContractRequestDto, SysBuyerTypeDto, GetProjectUnitDetailsResponseDto, BuyerTypeEnum } from '../../models/real-state-developer-dto';
import { FileUploader } from 'src/app/shared/models/file-uploader.model';
import { PopupService } from 'src/app/shared/services/popup/popup.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-create-contract-popup',
  templateUrl: './create-contract-popup.component.html',
  styleUrls: ['./create-contract-popup.component.scss']
})
export class CreateContractPopupComponent implements OnInit, OnDestroy {
  @Input() unitId: string = '';
  @Output() contractCreated = new EventEmitter<void>();
  @Output() closePopup = new EventEmitter<void>();

  multiFilesUploaderData: FileUploader = {
    multiple: true,
    allowedExtensions: ['.jpg', '.jpeg', '.png', '.pdf'],
    allowedExtensionsText: 'jpg, jpeg, png أو pdf',
    size: 5120, // 5MB in KB
    buttonText: 'تصفح الملفات',
    uploadAllLabel: 'رفع الكل',
    removeAllLabel: 'مسح الكل'
  } as FileUploader;

  contractForm: FormGroup;
  unitDetails: GetProjectUnitDetailsResponseDto | null = null;
  buyerTypes: SysBuyerTypeDto[] = [];

  loading = false;
  submitting = false;
  error: string | null = null;
  private subscriptions: Subscription[] = [];

  constructor(
    private fb: FormBuilder,
    private realStateDeveloperService: RealStateDeveloperService,
    private popupService: PopupService
  ) {
    this.contractForm = this.createForm();
  }

  ngOnInit(): void {
    if (this.unitId) {
      this.loadUnitDetails();
      this.loadBuyerTypes();
    }
  }

  onFileUploaded(fileData: any) {
    if (fileData.eventRes.data.length == 0) {
      this.contractForm.get('delegatorFileId')?.setValue(null);
      return;
    }
    if (fileData.eventRes && fileData.eventRes.data && fileData.eventRes.data.length > 0) {
      const fileId = fileData.eventRes.data[0].id;
      this.contractForm.get('delegatorFileId')?.setValue(fileId);
      this.error = null;
    }
  }

  onFileRemoved(fileData: any) {
    this.contractForm.get('delegatorFileId')?.setValue(null);
  }

  private createForm(): FormGroup {
    return this.fb.group({
      // Buyer Information
      name: ['', [Validators.required, Validators.minLength(2)]],
      nidNumber: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
      nationalNumber: [''],
      birthDate: [''],
      mobileNumber: ['', [Validators.pattern(/^05\d{8}$/)]],
      email: ['', [Validators.email]],
      buyerTypeId: [1, [Validators.required]],
      delegatorFileId: [],
      // Unit Information - Read only
      unitCode: [{value: '', disabled: true}],
      unitType: [{value: '', disabled: true}],
      unitModel: [{value: '', disabled: true}],
      totalArea: [{value: '', disabled: true}],
      // Contract Information
      price: [{value: '', disabled: true}],
      contractNumber: [{value: '', disabled: true}],
      contractDate: [{value: '', disabled: true}],
      realEstateTax: [{value: '', disabled: true}],
      totalAfterTax: [{value: '', disabled: true}],
      deliveryDate: [{value: '', disabled: true}]
    });
  }

  loadUnitDetails(): void {
    this.loading = true;
    this.error = null;

    this.realStateDeveloperService.getUnitDetails(this.unitId).subscribe({
      next: (response) => {
        if (response.isDone && response.data) {
          this.unitDetails = response.data;
          this.populateUnitData();
          this.calculateTaxes();
        } else {
          this.error = 'فشل في تحميل بيانات الوحدة';
        }
        this.loading = false;
      },
      error: (error) => {
        this.error = error.message || 'حدث خطأ أثناء تحميل البيانات';
        this.loading = false;
        console.error('Error loading unit details:', error);
      }
    });
  }

  loadBuyerTypes(): void {
    this.realStateDeveloperService.getBuyerTypes().subscribe({
      next: (response) => {
        if (response.isDone && response.data) {
          this.buyerTypes = response.data;
        }
      },
      error: (error) => {
        console.error('Error loading buyer types:', error);
      }
    });
  }

  private populateUnitData(): void {
    if (this.unitDetails) {
      const today = new Date().toISOString().split('T')[0];
      const deliveryDate = this.unitDetails.deliveryOn
        ? new Date(this.unitDetails.deliveryOn).toISOString().split('T')[0]
        : '';

      this.contractForm.patchValue({
        unitCode: this.unitDetails.unitCode,
        unitType: this.unitDetails.unitType,
        unitModel: this.unitDetails.modelName,
        totalArea: this.unitDetails.unitSpace,
        price: this.unitDetails.price,
        deliveryDate: deliveryDate,
        contractDate: today
      });
    }
  }

  private calculateTaxes(): void {
    if (this.unitDetails?.price) {
      this.realStateDeveloperService.calculateUnitCodeTaxes(this.unitDetails.price).subscribe({
        next: (response) => {
          if (response.isDone && response.data) {
            this.contractForm.patchValue({
              realEstateTax: response.data.realEstateTransactionTaxValue,
              totalAfterTax: response.data.priceAfterAddingRealEstateTransactionTax
            });
          }
        },
        error: (error) => {
          console.error('Error calculating taxes:', error);
        }
      });
    }
  }

  onBuyerTypeChange(): void {
    const buyerType = this.contractForm.get('buyerTypeId')?.value;

    this.contractForm.get('nationalNumber')?.reset();
    this.contractForm.get('delegatorFileId')?.reset();

    if (buyerType == BuyerTypeEnum.Facility) {
      this.contractForm.get('nationalNumber')?.setValidators([
        Validators.required,
        Validators.pattern(/^\d{10}$/)
      ]);
      this.contractForm.get('delegatorFileId')?.setValidators([Validators.required]);
    } else {
      this.contractForm.get('nationalNumber')?.clearValidators();
      this.contractForm.get('delegatorFileId')?.clearValidators();
    }

    this.contractForm.get('nationalNumber')?.updateValueAndValidity();
    this.contractForm.get('delegatorFileId')?.updateValueAndValidity();
  }

  onSubmit(): void {
    if (this.contractForm.valid) {
      this.showConfirmationPopup();
    } else {
      this.markFormGroupTouched();
    }
  }

  showConfirmationPopup(): void {
    this.popupService.updateConfirmationPopupData({
      title: '',
      staticMessage: 'هل أنت متأكد من إنشاء العقد؟',
      dynamicMessage: '',
      acceptButtonText: 'إنشاء العقد'
    });

    const confirmSub = this.popupService.confirmAction.subscribe(() => {
      this.saveContract();
      this.popupService.dismissDialog();
    });

    this.subscriptions.push(confirmSub);
  }

  saveContract(): void {
    this.submitting = true;
    this.error = null;

    const formData = this.contractForm.getRawValue();
    const request: SaveContractRequestDto = {
      unitId: this.unitId,
      name: formData.name,
      nidNumber: formData.nidNumber,
      nationalNumber: formData.nationalNumber,
      mobileNumber: formData.mobileNumber,
      email: formData.email,
      buyerTypeId: Number(formData.buyerTypeId),
      birthDate: formData.birthDate || new Date().toISOString().split('T')[0],
      contractDate: formData.contractDate || new Date().toISOString().split('T')[0],
      price: formData.price || 0,
      isNew: true,
      delegatorFileId: formData.delegatorFileId
    };

    this.realStateDeveloperService.saveContract(request).subscribe({
      next: (response) => {
        if (response.isDone) {
          this.contractCreated.emit();
          this.close();
        } else {
          this.error = 'فشل في حفظ العقد';
        }
        this.submitting = false;
      },
      error: (error) => {
        this.error = error.message || 'حدث خطأ أثناء حفظ العقد';
        this.submitting = false;
        console.error('Error saving contract:', error);
      }
    });
  }

  private markFormGroupTouched(): void {
    Object.keys(this.contractForm.controls).forEach(key => {
      const control = this.contractForm.get(key);
      control?.markAsTouched();
    });
  }

  close(): void {
    this.closePopup.emit();
  }

  getFieldError(fieldName: string): string {
    const field = this.contractForm.get(fieldName);
    if (field?.errors && field.touched) {
      if (field.errors['required']) return 'هذا الحقل مطلوب';
      if (field.errors['minlength']) return 'الحد الأدنى للأحرف هو ' + field.errors['minlength'].requiredLength;
      if (field.errors['pattern']) {
        if (fieldName === 'nidNumber') return 'رقم الهوية يجب أن يكون 10 أرقام';
        if (fieldName === 'mobileNumber') return 'رقم الجوال يجب أن يبدأ بـ 05 ويتكون من 10 أرقام';
      }
      if (field.errors['email']) return 'البريد الإلكتروني غير صحيح';
    }
    return '';
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }
}
