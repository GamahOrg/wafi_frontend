import { Component, Input, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { RealStateDeveloperService } from '../../services/real-state-developer.service';
import { SaveContractRequestDto, SysBuyerTypeDto, GetProjectUnitDetailsResponseDto, BuyerTypeEnum } from '../../models/real-state-developer-dto';
import { FileUploader } from 'src/app/shared/models/file-uploader.model';
import { Configuration } from 'src/app/core/configurations/shared.config';
import { PopupService } from 'src/app/shared/services/popup/popup.service';
import { Subscription } from 'rxjs';
import { NationalityModel } from 'src/app/modules/auth/models/nationality.model';
import { ToastrNotificatioService } from 'src/app/core/services/toastr-notification/toastr-notificatio.service';
import { NationalityService } from 'src/app/modules/auth/services/nationality/nationality.service';

@Component({
  selector: 'app-add-contract',
  templateUrl: './add-contract.component.html',
  styleUrls: ['./add-contract.component.scss']
})
export class AddContractComponent implements OnInit, OnDestroy {
  @Input() unitId: string = '';
  @Input() showAsModal: boolean = false;
  @Output() contractAdded = new EventEmitter<void>();
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
  validFacility: boolean = false;
  unitDetails: GetProjectUnitDetailsResponseDto | null = null;
  buyerTypes: SysBuyerTypeDto[] = [];
  sysNationalites: NationalityModel[] = []
  submitting = false;
  error: string | null = null;
  private subscriptions: Subscription[] = [];

  constructor(
    private fb: FormBuilder,
    private realStateDeveloperService: RealStateDeveloperService,
    private router: Router,
    private route: ActivatedRoute,
    private _toasterNotification: ToastrNotificatioService,
    private nationalityService:NationalityService,
    private popupService: PopupService
  ) {
    this.contractForm = this.createForm();
  }

  ngOnInit(): void {
    // Get unitId from route if not provided as input
    if (!this.unitId) {
      this.unitId = this.route.snapshot.paramMap.get('unitId') || '';
    }

    if (this.unitId) {
      this.loadUnitDetails();
      this.loadBuyerTypes();
      this.getNationalities();
    }
  }
  getNationalities(): void {
     this.nationalityService.getNationalities().subscribe((res) => {
      this.sysNationalites = res as NationalityModel[]
     })
  }
  onFileUploaded(fileData: any) {
    if (fileData.eventRes && fileData.eventRes.data && fileData.eventRes.data.length > 0) {
      // Store the first uploaded file ID (backend expects single file)
      const fileId = fileData.eventRes.data[0].id;
      this.contractForm.get('delegatorFileId')?.setValue(fileId);
      this.error = null; // Clear any previous errors
    }
  }
  checkFacility(): void {
    
    const nationalNumber = this.contractForm.get('nationalNumber')?.value
    if(nationalNumber) {
      this.realStateDeveloperService.checkFacilityName(this.contractForm.get('nationalNumber')?.value).subscribe((res) => {
      if(res.isDone)
      {
        this.validFacility = true;
       this._toasterNotification.showSuccess(res.message)
      }
   })
  }
  }
  onFileRemoved(fileData: any) {
    // Clear the file ID when file is removed
    this.contractForm.get('delegatorFileId')?.setValue(null);
  }
  private createForm(): FormGroup {
    return this.fb.group({
      // بيانات المشتري (Buyer Information)
      name: ['', [Validators.required, Validators.minLength(2)]],
      nidNumber: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
      nationalNumber: [''],
      nationalityName: [''],
      birthDate: [''],
      mobileNumber: ['', [Validators.pattern(/^05\d{8}$/)]],
      email: ['', [Validators.email]],
      buyerTypeId: [1, [Validators.required]],
      delegatorFileId: [],
      // بيانات الوحدة (Unit Information) - Read only
      unitCode: [{value: '', disabled: true}],
      unitType: [{value: '', disabled: true}],
      unitModel: [{value: '', disabled: true}],
      totalArea: [{value: '', disabled: true}],

      // بيانات العقد (Contract Information)
      price: [{value: '', disabled: true}],
      contractNumber: [{value: '', disabled: true}],
      contractDate: [{value: '', disabled: true}],
      realEstateTax: [{value: '', disabled: true}],
      totalAfterTax: [{value: '', disabled: true}],
      deliveryDate: [{value: '', disabled: true}]
    });
  }

  loadUnitDetails(): void {
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
      },
      error: (error) => {
        this.error = error.message || 'حدث خطأ أثناء تحميل البيانات';
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
      // Format dates properly
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
      // Facility (Company): nationalNumber and delegatorFileId are required
      this.contractForm.get('nationalNumber')?.setValidators([
        Validators.required,
        Validators.pattern(/^\d{10}$/)
      ]);
      this.contractForm.get('delegatorFileId')?.setValidators([Validators.required]);
    } else {
      // Individual: nationalNumber and delegatorFileId are optional
      this.contractForm.get('nationalNumber')?.clearValidators();
      this.contractForm.get('delegatorFileId')?.clearValidators();
    }

    this.contractForm.get('nationalNumber')?.updateValueAndValidity();
    this.contractForm.get('delegatorFileId')?.updateValueAndValidity();
  }

  onSubmit(): void {
    if (this.contractForm.valid && this.validFacility) {
      // Show confirmation popup before submitting
      this.showConfirmationPopup();
    } else {
      this.markFormGroupTouched();
    }
  }

  showConfirmationPopup(): void {
    this.popupService.updateConfirmationPopupData({
      title: '',
      staticMessage: 'هل أنت متأكد من إرسال العقد؟',
      dynamicMessage: '',
      acceptButtonText: 'إرسال العقد'
    }, '550px', 'auto');

    // Subscribe to confirm action
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
      nidNumber: formData.nidNumber, // Always use nidNumber as primary ID
      nationalNumber: formData.nationalNumber,
      mobileNumber: formData.mobileNumber,
      email: formData.email,
      buyerTypeId: Number(formData.buyerTypeId), // Ensure it's a number
      birthDate: formData.birthDate || new Date().toISOString().split('T')[0], // Default to today if not provided
      contractDate: formData.contractDate || new Date().toISOString().split('T')[0], // Default to today
      price: formData.price || 0, // Default price
      isNew: true, // New contract
      delegatorFileId: formData.delegatorFileId
    };

    this.realStateDeveloperService.saveContract(request).subscribe({
      next: (response) => {
        if (response.isDone) {
          this.contractAdded.emit();
          if (!this.showAsModal) {
            this.router.navigate([
              Configuration.modules.wafi,
              Configuration.modules.license,
              Configuration.pages.license.unitDetails,
              this.unitId
            ]);
          }
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

  cancel(): void {
    if (this.showAsModal) {
      // Emit close event
    } else {
      this.router.navigate([
        Configuration.modules.wafi,
        Configuration.modules.license,
        Configuration.pages.license.unitDetails,
        this.unitId
      ]);
    }
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

  getFileIcon(fileName: string): string {
    const extension = fileName.split('.').pop()?.toLowerCase();
    switch (extension) {
      case 'pdf': return 'bi-file-earmark-pdf';
      case 'jpg':
      case 'jpeg':
      case 'png': return 'bi-file-earmark-image';
      default: return 'bi-file-earmark';
    }
  }

  ngOnDestroy(): void {
    // Cleanup all subscriptions
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }

  formatFileSize(bytes: number): string {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  }
}