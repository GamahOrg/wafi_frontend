import { Component, OnInit, Output, EventEmitter, Input, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FileUploader } from 'src/app/shared/models/file-uploader.model';
import { GetProjectUnitDetailsResponseDto, LicenseProjectBuyerPaymentTypeDto, LicenseProjectBusinessPaymentResponseDto } from '../../../models/real-state-developer-dto';
import { BuyerTypeEnum } from '../../../enums/unit-status.enum';
import { RealStateDeveloperService } from '../../../services/real-state-developer.service';
import { ToastrNotificatioService } from 'src/app/core/services/toastr-notification/toastr-notificatio.service';
import { ProjectLandDeedService } from '../../../services/project-land-deed.service';
import { ProjectLandDeedDto } from '../../../dataModels/project-land-deed.dto';
import { SharedLicenseProjectService } from '../../../services/sharedLicenseProject/shared-license-project.service';
import * as momentHijri from 'moment-hijri';
import { LicenseProjectBuyerService } from '../../../services/license-project-buyer.service';
import { FileManagementService } from 'src/app/shared/services/fileManagement/file-management.service';
import { environment } from 'src/environments/environment';
import { FileUploaderComponent } from '../../../../../../shared/components/file-uploader/file-uploader.component';

@Component({
  selector: 'app-add-contract-popup',
  templateUrl: './add-contract-popup.component.html',
  styleUrls: ['./add-contract-popup.component.scss']
})
export class AddContractPopupComponent implements OnInit {
  @Input() unitDetails: GetProjectUnitDetailsResponseDto | null = null;
  @Output() onClose = new EventEmitter<void>();
  @Output() onContractSaved = new EventEmitter<void>();
  @ViewChild(FileUploaderComponent) fileUploader!: FileUploaderComponent;
  licenseProjectId: string | null = '00000000-0000-0000-0000-000000000000';
  baseUrl: string = environment.baseURL
  contractForm!: FormGroup;
  buyerTypeEnum = BuyerTypeEnum;
  authorizationFileId: string = '';
  authorizationFile: any = null;
  showConfirmation: boolean = false;
  isSubmitting: boolean = false;

  // Verification loading states
  verifyingFacility: boolean = false;
  verifyingCustomer: boolean = false;

  // Verification flags
  isNidVerified: boolean = false;
  isNationalNumberVerified: boolean = false;

  // Delegator file error flag
  showDelegatorFileError: boolean = false;

  taxRate: number = 0.05; // 5%
  priceAfterTax: number = 0;
  contractNumber: string = '';
  deliveryDate: string | Date = '';
  contractDate: string | Date = '';

  // Old contract fields
  isOldContract: boolean = false;
  contractFileId: string = '';
  contractFile: any = null;

  // Deeds list
  deedsList: ProjectLandDeedDto[] = [];
  loadingDeeds: boolean = false;
  licenseBuyerPaymentType: LicenseProjectBuyerPaymentTypeDto[] = [];

  // Payment plans list
  paymentPlansList: LicenseProjectBusinessPaymentResponseDto[] = [];
  filteredPaymentPlansList: LicenseProjectBusinessPaymentResponseDto[] = [];
  loadingPaymentPlans: boolean = false;

  singleFileUploaderData: FileUploader = {
    multiple: false,
    size: 5120, // 5MB
    allowedExtensionsText: 'jpg, jpeg, png, pdf',
    allowedExtensions: ['.jpg', '.jpeg', '.png', '.pdf'],
    buttonText: 'تصفح الملفات',
    attachmentsAreaText: 'الحد الأقصى لحجم الملف يجب أن لا يتجاوز 5 ميجابايت، وصيغ الملفات المدعومة تشمل .jpg، .jpeg، .png، و.pdf.'
  } as FileUploader;

  constructor(
    private fb: FormBuilder,
    private realStateDeveloperService: RealStateDeveloperService,
    private toasterService: ToastrNotificatioService,
    private licenseBuyerService: LicenseProjectBuyerService,
    private projectLandDeedService: ProjectLandDeedService,
    private _fileManagment: FileManagementService,
    private _sharedLicenseProjectService: SharedLicenseProjectService,
  ) { }

  ngOnInit(): void {
    this.getLicenseProjectIdStorage();
    this.initializeForm();
    this.initializeFormWithUnitDetails();
    this.loadDeeds();
    this.loadPaymentPlans();
  }

  checkOldAndNewVersion() {
    this.licenseBuyerService.checkPaymentsVersion(this.licenseProjectId as string).subscribe((res) => {
      if(res.message == 'new contract') {
        this.isOldContract = false
        this.contractForm.get('isOldContract')?.setValue(false)
        this.onOldContractChange(false)
      }
      else {
        this.isOldContract = true
        this.contractForm.get('isOldContract')?.setValue(true)
        this.onOldContractChange(true)
      }
      
    }) 
  }
  // Custom validator for birth date
  birthDateValidator(control: any) {
    if (!control.value) {
      return null;
    }
    const selectedDate = new Date(control.value);
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    if (selectedDate >= today) {
      return { futureDate: true };
    }
    return null;
  }

  private getLicenseProjectIdStorage(): void {
    this.licenseProjectId = this._sharedLicenseProjectService.getLicenseProjectIdStorage();
    if(this.licenseProjectId) { 
    this.getLicenseBuyerPaymentType();
    this.checkOldAndNewVersion();
    }
  }

  initializeForm(): void {
    this.contractForm = this.fb.group({
      // SaveContractRequestDto fields
      unitId: [''],
      name: ['', Validators.required],
      nidNumber: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
      nationalNumber: ['', [Validators.pattern(/^700\d{7}$/)]],
      facilityName: [''],
      mobileNumber: ['', [Validators.required, Validators.pattern(/^05\d{8}$/)]],
      email: ['', [Validators.email]],
      buyerTypeId: [BuyerTypeEnum.Individual, Validators.required],
      isSupported: [false, Validators.required],
      birthDate: ['', [Validators.required, this.birthDateValidator]],
      isNew: [true],
      contractDate: [''],
      price: [0, [Validators.required, Validators.min(0.01)]],
      delegatorFileId: [''],
      licenseProjectDeedId: ['', Validators.required],
      isOldContract: [false],
      contractFileId: ['',Validators.required],
      deliveryDate:['',Validators.required],
      paymentTypeId:['', Validators.required],
      paymentPlanId:['' ,Validators.required],
      saleDate: ['',Validators.required]
    });

    // Subscribe to price changes
    this.contractForm.get('price')?.valueChanges.subscribe(() => {
      this.calculatePriceAfterTax();
    });

    // Subscribe to nidNumber changes to clear verified data
    this.contractForm.get('nidNumber')?.valueChanges.subscribe(() => {
      this.isNidVerified = false;
      this.contractForm.patchValue({
        name: '',
        email: '',
        mobileNumber: ''
      });
    });

    // Subscribe to nationalNumber changes to reset verification flag
    this.contractForm.get('nationalNumber')?.valueChanges.subscribe(() => {
      this.isNationalNumberVerified = false;
      this.contractForm.patchValue({
        facilityName: ''
      });
    });

    // Subscribe to paymentTypeId changes to filter payment plans
    this.contractForm.get('paymentTypeId')?.valueChanges.subscribe((paymentTypeId) => {
      if (paymentTypeId) {
        this.filterPaymentPlansByType(paymentTypeId);
      } else {
        this.filteredPaymentPlansList = [];
      }
      // Reset payment plan selection when payment type changes
      this.contractForm.patchValue({ paymentPlanId: '' });
    });
  }

  initializeFormWithUnitDetails(): void {
    if (this.unitDetails) {
      this.contractNumber = this.unitDetails.unitCode || '';
      this.deliveryDate = this.unitDetails.deliveryOn || new Date();
      this.contractDate = new Date();

      this.contractForm.patchValue({
        unitId: this.unitDetails.unitId || '',
        price: this.unitDetails.price || 0,
        contractDate: new Date().toISOString()
      });

      this.calculatePriceAfterTax();
    }
  }

  calculatePriceAfterTax(): void {
    const price = this.contractForm.get('price')?.value || 0;
    this.priceAfterTax = price * (1 + this.taxRate);
  }

  get buyerType(): number {
    return this.contractForm.get('buyerTypeId')?.value || BuyerTypeEnum.Individual;
  }

  get isSupported(): boolean {
    return this.contractForm.get('isSupported')?.value || false;
  }



  onBuyerTypeChange(type: BuyerTypeEnum): void {
    this.contractForm.patchValue({ buyerTypeId: type });

    // Reset delegator file when changing buyer type
    this.contractForm.patchValue({
      delegatorFileId: null
    });
    this.authorizationFileId = '';
    this.authorizationFile = null;
    this.showDelegatorFileError = false; // Clear file error

    // Reset all customer/facility fields when changing buyer type
    this.isNationalNumberVerified = false;
    this.isNidVerified = false;
    this.contractForm.patchValue({
      nationalNumber: '',
      facilityName: '',
      nidNumber: '',
      birthDate: '',
      name: '',
      email: '',
      mobileNumber: ''
    });

    // Mark cleared fields as untouched and pristine to hide validation errors
    const fieldsToReset = ['nationalNumber', 'facilityName', 'nidNumber', 'birthDate', 'name', 'email', 'mobileNumber', 'delegatorFileId'];
    fieldsToReset.forEach(fieldName => {
      const control = this.contractForm.get(fieldName);
      if (control) {
        control.markAsUntouched();
        control.markAsPristine();
      }
    });
  }

  onBuyerStatusChange(isSupported: boolean): void {
    this.contractForm.patchValue({ isSupported: isSupported });
  }

  onOldContractChange(isOld: boolean): void {
    this.isOldContract = isOld;
    this.contractForm.patchValue({ isOldContract: isOld });

    if (isOld) {
      // Add required validators when نعم is selected
      this.contractForm.get('contractFileId')?.setValidators([Validators.required]);
      this.contractForm.get('saleDate')?.setValidators([Validators.required]);
      this.contractForm.get('deliveryDate')?.setValidators([Validators.required]);
      this.contractForm.get('paymentPlanId')?.setValidators([Validators.required]);
      this.contractForm.get('paymentTypeId')?.setValidators([Validators.required]);
    } else {
      // Remove validators and reset fields when لا is selected
      this.contractForm.get('contractFileId')?.clearValidators();
      this.contractForm.get('saleDate')?.clearValidators();
      this.contractForm.get('paymentPlanId')?.clearValidators();
      this.contractForm.get('paymentTypeId')?.clearValidators();
      this.contractForm.get('deliveryDate')?.clearValidators();
      this.contractForm.get('saleDate')?.clearValidators();
      this.contractFileId = '';
      this.contractFile = null;
      this.contractForm.patchValue({
        contractFileId: '',
        saleDate: ''
      });
    }

    // Update validity
    this.contractForm.get('contractFileId')?.updateValueAndValidity();
    this.contractForm.get('saleDate')?.updateValueAndValidity();
    this.contractForm.get('deliveryDate')?.updateValueAndValidity();
    this.contractForm.get('paymentTypeId')?.updateValueAndValidity();
    this.contractForm.get('paymentPlanId')?.updateValueAndValidity();
  }
  openFile(file: any): void {
  if (file?.path) {
    window.open(this.baseUrl +'/'+ file.path, "_blank");
  }
}
  deletFile(id: string) {
    this._fileManagment.DeletFile(id).subscribe(res => {
      if(res.isDone)
      {
        this.toasterService.showSuccess(res.message)
      }
    })
  }
  onContractFileUploaded(fileData: any): void {
    // Handle the uploaded contract file
    if (fileData && fileData.eventRes && fileData.eventRes.data && fileData.eventRes.data.length > 0) {
      this.contractFileId = fileData.eventRes.data[0].id;
      this.contractFile = fileData.eventRes.data[0];
      this.contractForm.patchValue({ contractFileId: this.contractFileId });
    }
  }

  removeContractFile(): void {
    this.deletFile(this.contractFileId)
    this.contractFileId = '';
    this.contractFile = null;
    this.contractForm.patchValue({ contractFileId: '' });
    this.fileUploader.clearSelectedFiles();
  }

  formatFileSize(bytes: number): string {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return Math.round(bytes / Math.pow(k, i) * 100) / 100 + ' ' + sizes[i];
  }

  onFileUploaded(fileData: any): void {
    // Handle the uploaded file
    if (fileData && fileData.eventRes && fileData.eventRes.data && fileData.eventRes.data.length > 0) {
      this.authorizationFileId = fileData.eventRes.data[0].id;
      this.authorizationFile = fileData.eventRes.data[0];
      this.contractForm.patchValue({ delegatorFileId: this.authorizationFileId });
      this.showDelegatorFileError = false; // Clear error when file is uploaded
      console.log('File uploaded:', this.authorizationFile);
    }
  }
  private getLicenseBuyerPaymentType (): void {
    this.licenseBuyerService.getLicenseProjectBuyerPaymentTypes().subscribe((res) => {
      this.licenseBuyerPaymentType = res as LicenseProjectBuyerPaymentTypeDto[]
    })
  }
  onSubmit(): void {
    
    // Check verification flags first
    if (this.buyerType === BuyerTypeEnum.Facility && !this.isNationalNumberVerified) {
      this.toasterService.showError('يرجى التحقق من الرقم الموحد للمنشأة');
      return;
    }

    if (!this.isNidVerified) {
      this.toasterService.showError('يرجى التحقق من رقم الهوية وتاريخ الميلاد');
      return;
    }

    // Check delegator file for Facility buyer type
    if (this.buyerType === BuyerTypeEnum.Facility && !this.authorizationFileId) {
      this.showDelegatorFileError = true;
      this.toasterService.showError('يرجى رفع ملف التفويض');
      return;
    }

    // Validate form before showing confirmation dialog
    if (this.contractForm.valid) {
      // Show confirmation dialog only if form is valid
      this.showConfirmation = true;
    } else {
      console.log('Form is invalid');
      // Show toaster error message
      this.toasterService.showError('يرجى إكمال البيانات المطلوبة');
      // Mark all fields as touched to show validation errors
      Object.keys(this.contractForm.controls).forEach(key => {
        this.contractForm.get(key)?.markAsTouched();
      });
    }
  }

  confirmSubmit(): void {
    // Form is already validated in onSubmit
    // Handle form submission - formData matches SaveContractRequestDto
    const formData: any = {
      ...this.contractForm.value,
      // Map to DTO property names with capital letters
      ContractFileId: this.contractForm.value.contractFileId || null,
      SaleDate: this.contractForm.value.saleDate || null
    };

    // Set delegatorFileId to null if empty
    if (!formData.delegatorFileId) {
      formData.delegatorFileId = null;
    }

    // Remove the camelCase versions since we're using PascalCase
    delete formData.contractFileId;
    delete formData.saleDate;

    // Hide confirmation dialog
    this.showConfirmation = false;

    // Show loader
    this.isSubmitting = true;

    if(!this.isOldContract){
      formData.paymentPlanId = null;
      formData.paymentTypeId = null;
    }

    // Call API service to save contract
    this.realStateDeveloperService.saveContract(formData).subscribe({
      next: (response) => {
        this.isSubmitting = false;
        if (response.isDone) {
          this.toasterService.showSuccess('تم إرسال العقد بنجاح');
          // Emit event to parent to close popup and reload data
          this.onContractSaved.emit();
        } else {
          this.toasterService.showError(response.message || 'حدث خطأ أثناء إرسال العقد');
        }
      },
      error: (error) => {
        this.isSubmitting = false;
        this.toasterService.showError('حدث خطأ أثناء إرسال العقد');
        console.error('Error saving contract:', error);
      }
    });
  }

  cancelSubmit(): void {
    // Hide confirmation dialog
    this.showConfirmation = false;
  }

  closePopup(): void {
    this.onClose.emit();
  }

  // Helper method to check if a field has error and has been touched
  hasError(fieldName: string, errorType?: string): boolean {
    const field = this.contractForm.get(fieldName);
    if (!field) return false;

    if (errorType) {
      return !!(field.hasError(errorType) && (field.dirty || field.touched));
    }
    return !!(field.invalid && (field.dirty || field.touched));
  }

  // Get error message for a field
  getErrorMessage(fieldName: string): string {
    const field = this.contractForm.get(fieldName);
    if (!field || !field.errors) return '';

    if (field.hasError('required')) {
      return 'هذا الحقل مطلوب';
    }
    if (field.hasError('email')) {
      return 'البريد الإلكتروني غير صحيح، يرجى إدخال صيغة صحيحة (example@domain.com)';
    }
    if (field.hasError('birthDate')) {
      return 'تاريخ الميلاد غير صحيح، لابد أن يكون هجري';
    }
    if (field.hasError('futureDate')) {
      return 'تاريخ الميلاد غير صحيح، لابد أن يكون أقل من تاريخ اليوم';
    }
    if (field.hasError('min')) {
      if (fieldName === 'price') {
        return 'القيمة يجب أن تكون أكبر من 0';
      }
      return 'القيمة يجب أن تكون أكبر من أو تساوي 0';
    }
    if (field.hasError('pattern')) {
      if (fieldName === 'mobileNumber') {
        return 'رقم الجوال غير صحيح، يجب أن يتكون من 10 أرقام ويبدأ بـ 05';
      }
      if (this.buyerType === this.buyerTypeEnum.Facility && fieldName === 'nationalNumber') {
        return 'الرقم الموحد للمنشأة غير صحيح، يجب أن يتكون من 10 أرقام ويبدأ بـ 700';
      }
      if (this.buyerType === this.buyerTypeEnum.Individual && fieldName === 'nidNumber') {
        return 'رقم الهوية غير صحيح (10 أرقام)';
      }
      return 'الصيغة غير صحيحة';
    }
    return '';
  }

  // Verify facility by national number
  verifyFacility(): void {
    // Prevent duplicate verification requests
    if (this.verifyingFacility) {
      return;
    }

    const nationalNumber = this.contractForm.get('nationalNumber')?.value;

    if (!nationalNumber) {
      this.toasterService.showError('يرجى إدخال الرقم الموحد للمنشأة');
      return;
    }

    this.verifyingFacility = true;
    this.realStateDeveloperService.GetFacilityName(nationalNumber).subscribe({
      next: (response) => {
        if (response.isDone && response.data) {
          // Success - populate facility name
          this.contractForm.patchValue({
            facilityName: response.data
          });
          this.isNationalNumberVerified = true;

        } else {
          // Failed verification
          this.toasterService.showError(response.message || 'فشل التحقق من المنشأة');
          this.contractForm.patchValue({
            facilityName: ''
          });
          this.isNationalNumberVerified = false;
        }
        this.verifyingFacility = false;
      },
      error: (error) => {
        this.verifyingFacility = false;
        this.isNationalNumberVerified = false;
        this.toasterService.showError('حدث خطأ أثناء التحقق من المنشأة');
        console.error('Error verifying facility:', error);
      }
    });
  }

  // Verify customer by NID number and birth date
  verifyCustomer(): void {
    const nidNumber = this.contractForm.get('nidNumber')?.value;
    const birthDate = this.contractForm.get('birthDate')?.value;

    // Validate both fields are entered
    if (!nidNumber) {
      this.toasterService.showError('يرجى إدخال رقم الهوية');
      return;
    }

    if (!birthDate) {
      this.toasterService.showError('يرجى إدخال تاريخ الميلاد');
      return;
    }

    // Convert birth date to Hijri format (DD/MM/YYYY)
    let birthDateHijri: string;
    try {
      const moment = momentHijri(birthDate);
      // Format as Hijri date: DD/MM/YYYY (e.g., 13/05/1447)
      birthDateHijri = (moment as any).format('iDD/iMM/iYYYY');
      console.log('Converted birthDate to Hijri:', birthDateHijri);
    } catch (error) {
      console.error('Error converting date to Hijri:', error);
      this.toasterService.showError('حدث خطأ في تحويل التاريخ');
      return;
    }

    this.verifyingCustomer = true;
    this.realStateDeveloperService.VerifyCustomer(nidNumber, birthDateHijri).subscribe({
      next: (response) => {
        if (response.isDone && response.data) {
          // Success - populate customer data
          const customer = response.data;
          this.contractForm.patchValue({
            name: customer.fullName,
            email: customer.email || '',
            mobileNumber: customer.mobile1 || customer.mobile2 || ''
          });
          this.isNidVerified = true;

        } else {
          // Failed verification
          // this.toasterService.showError(response.message || 'فشل التحقق من البيانات');
          this.contractForm.patchValue({
            name: '',
            email: '',
            mobileNumber: ''
          });
          this.isNidVerified = false;
        }
        this.verifyingCustomer = false;
      },
      error: (error) => {
        this.verifyingCustomer = false;
        this.isNidVerified = false;
        this.toasterService.showError('حدث خطأ أثناء التحقق من البيانات');
        console.error('Error verifying customer:', error);
      }
    });
  }

  // Load deeds list
  loadDeeds(): void {
    this.loadingDeeds = true;
    this.projectLandDeedService.GetByLicenseProjectId(this.licenseProjectId as string).subscribe({
      next: (deeds) => {
        this.deedsList = deeds || [];
        this.loadingDeeds = false;
      },
      error: (error) => {
        this.loadingDeeds = false;
        this.toasterService.showError('حدث خطأ أثناء تحميل قائمة الصكوك');
        console.error('Error loading deeds:', error);
      }
    });
  }

  // Load payment plans list
  loadPaymentPlans(): void {
    if (!this.licenseProjectId) {
      return;
    }

    this.loadingPaymentPlans = true;
    this.licenseBuyerService.getProjectPaymentPlans(this.licenseProjectId as string).subscribe({
      next: (plans) => {
        this.paymentPlansList = plans || [];
        this.loadingPaymentPlans = false;

        // Filter payment plans based on current payment type if already selected
        const currentPaymentTypeId = this.contractForm.get('paymentTypeId')?.value;
        if (currentPaymentTypeId) {
          this.filterPaymentPlansByType(currentPaymentTypeId);
        }
      },
      error: (error) => {
        this.loadingPaymentPlans = false;
        this.toasterService.showError('حدث خطأ أثناء تحميل خطط الدفع');
        console.error('Error loading payment plans:', error);
      }
    });
  }

  // Filter payment plans based on payment type
  filterPaymentPlansByType(paymentTypeId: number): void {
    this.filteredPaymentPlansList = this.paymentPlansList.filter(
      (plan) => plan.licenseProjectBuyerPaymentTypeId === paymentTypeId
    );
  }
}
