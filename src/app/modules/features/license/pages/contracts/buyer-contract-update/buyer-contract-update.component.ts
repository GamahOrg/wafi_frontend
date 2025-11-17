import { Component, OnInit, OnDestroy } from '@angular/core';
import { Location } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subject, takeUntil, finalize } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { RealStateDeveloperService } from '../../../services/real-state-developer.service';
import { SharedLicenseProjectService } from '../../../services/sharedLicenseProject/shared-license-project.service';
import {
  BuyerTypeEnum,
  GetProjectUnitContractDetailsResponseDto,
  LicenseProjectBuyerPaymentTypeEnum,
  GenerateContractRequestDto,
  GetProjectUnitDetailsResponseDto,
  LicenseBuyerRecordDto,
  LicenseProjectBusinessPaymentResponseDto
} from '../../../models/real-state-developer-dto';
import { LicenseProjectBuyerService } from '../../../services/license-project-buyer.service';

@Component({
  selector: 'app-buyer-contract-update',
  templateUrl: './buyer-contract-update.component.html',
  styleUrls: ['./buyer-contract-update.component.scss']
})
export class BuyerContractUpdateComponent implements OnInit, OnDestroy {
  // Tab control
  activeTab: string = 'unit'; // 'unit' or 'contract'

  // Main data properties
  contractDetails: GetProjectUnitContractDetailsResponseDto | null = null;
  projectDetails: GetProjectUnitDetailsResponseDto | null = null;
  contracts: LicenseBuyerRecordDto[] = [];
  buyerTypeEnum = BuyerTypeEnum;
  paymentTypeEnum = LicenseProjectBuyerPaymentTypeEnum;

  // IDs and references
  contractId: string = '';
  licenseProjectId: string = '';

  // UI state properties
  isLoading: boolean = false;
  errorMessage: string = '';

  // Buyer addresses (will be populated from API)
  buyerAddresses: { id: number; address: string }[] = [];

  // Loading state for addresses
  isLoadingAddresses: boolean = false;

  // Loading state for generate contract
  isGeneratingContract: boolean = false;

  // Payment plans (will be populated from API)
  paymentPlans: LicenseProjectBusinessPaymentResponseDto[] = [];

  // Form Group
  contractForm!: FormGroup;

  // Subscription management
  private destroy$ = new Subject<void>();

  constructor(
    private location: Location,
    private fb: FormBuilder,
    private toastr: ToastrService,
    private realEstateService: RealStateDeveloperService,
    private sharedService: SharedLicenseProjectService,
    private buyerService: LicenseProjectBuyerService
  ) {
    this.initializeForm();
  }

  ngOnInit(): void {
    this.initializeComponent();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  /**
   * Initialize form with default values
   */
  private initializeForm(): void {
    this.contractForm = this.fb.group({
      addressId: [null, Validators.required],
      paymentType: [null, Validators.required],
      paymentPlan: [null,Validators.required]
    });

    // Add conditional validation for payment plan based on payment type
    this.contractForm.get('paymentType')?.valueChanges
      .pipe(takeUntil(this.destroy$))
      .subscribe(paymentType => {
        // Reload payment plans based on new payment type
        if (this.contractDetails?.licenseProjectId) {
          this.loadPaymentPlans();
        }
      });
  }

  /**
   * Initialize component and load initial data
   */
  private initializeComponent(): void {

    const contractId = this.realEstateService.getContractIdFromLocalStorage();
    if (contractId) {
      this.contractId = contractId;
    }

    if (!this.contractId) {
      this.errorMessage = 'لم يتم العثور على معرف العقد';
      return;
    }

    this.getLicenseProjectId();
    this.loadContractDetails();
  }

  /**
   * Get license project ID from shared service
   */
  private getLicenseProjectId(): void {
    const storedId = this.sharedService.getLicenseProjectIdStorage();
    if (storedId) {
      this.licenseProjectId = storedId as string;
    }
  }

  /**
   * Load contract details
   */
  loadContractDetails(): void {
    this.isLoading = true;
    this.errorMessage = '';

    this.realEstateService
      .getContractDetails(this.contractId)
      .pipe(
        takeUntil(this.destroy$),
        finalize(() => this.isLoading = false)
      )
      .subscribe({
        next: (res) => {
          if (res?.data) {
            this.contractDetails = res.data;
            this.loadCustomerAddresses();
            this.loadUnitDetails();

            if (!this.contractDetails.isOldContract) {
              // For new contracts, load available payment plans if payment type is set
              if (this.contractForm.get('paymentType')?.value) {
                this.loadPaymentPlans();
              }
            }
          } else {
            this.errorMessage = 'لم يتم العثور على بيانات العقد';
          }
        },
        error: (error) => {
          console.error('Error loading contract details:', error);
          this.errorMessage = 'حدث خطأ أثناء تحميل تفاصيل العقد';
        }
      });
  }

  /**
   * Load unit details for sales contract component
   */
  loadUnitDetails(): void {
    if (!this.contractDetails?.unitId) {
      return;
    }

    this.realEstateService
      .getUnitDetails(this.contractDetails.unitId)
      .pipe(
        takeUntil(this.destroy$)
      )
      .subscribe({
        next: (res) => {
          if (res?.data) {
            this.projectDetails = res.data;
            // Filter contracts to only show current contract
            this.contracts = this.projectDetails.contracts.filter(
              x => x.contractId === this.contractId
            );
          }
        },
        error: (error) => {
          console.error('Error loading unit details:', error);
        }
      });
  }

  /**
   * Load customer addresses
   */
  loadCustomerAddresses(): void {


    this.isLoadingAddresses = true;

    this.realEstateService
      .GetCustomerAddress()
      .pipe(
        takeUntil(this.destroy$),
        finalize(() => this.isLoadingAddresses = false)
      )
      .subscribe({
        next: (response) => {
          if (response?.isDone && response.data) {
            // Transform string array to address objects with id
            this.buyerAddresses = response.data.map((address, index) => ({
              id: index,
              address: address
            }));

            // After addresses are loaded, populate form for old contracts
            if (this.contractDetails?.isOldContract) {
              this.populateFormWithExistingPaymentData();
            }
          } else {
            this.buyerAddresses = [];
          }
        },
        error: (error) => {
          console.error('Error loading customer addresses:', error);
          this.buyerAddresses = [];
        }
      });
  }

  /**
   * Populate form with existing payment data for old contracts
   */
  populateFormWithExistingPaymentData(): void {
    if (!this.contractDetails) {
      return;
    }

    // Pre-populate payment type from existing contract
    if (this.contractDetails.paymentTypeId) {
      this.contractForm.patchValue({
        paymentType: this.contractDetails.paymentTypeId
      });
    }

    // Pre-populate address if available
    if (this.contractDetails.address) {
      const addressIndex = this.buyerAddresses.findIndex(
        addr => addr.address === this.contractDetails?.address
      );
      if (addressIndex !== -1) {
        this.contractForm.patchValue({
          addressId: this.buyerAddresses[addressIndex].id
        });
      }
    }

    // If there's an existing payment plan, load it
    if (this.contractDetails.licenseProjectBuyerBusinessPayment) {
      this.paymentPlans = [this.contractDetails.licenseProjectBuyerBusinessPayment];

      // Set the payment plan in the form (index 0 since it's the only one)
      this.contractForm.patchValue({
        paymentPlan: 0
      });
    }

    // Disable the form fields for old contracts (read-only)
    this.contractForm.get('paymentType')?.disable();
    this.contractForm.get('paymentPlan')?.disable();
    this.contractForm.get('addressId')?.disable();

    this.contractForm.get('paymentType')?.markAllAsTouched();
    this.contractForm.get('paymentPlan')?.markAllAsTouched();
    this.contractForm.get('addressId')?.markAllAsTouched();

  }

  /**
   * Load available payment plans for the project
   */
  loadPaymentPlans(): void {
    if (!this.contractDetails?.licenseProjectId) {
      this.errorMessage = 'معرف المشروع غير متوفر';
      return;
    }

    const selectedPaymentType = this.contractForm.get('paymentType')?.value;
    this.buyerService
      .getProjectPaymentPlans(this.contractDetails?.licenseProjectId)
      .subscribe({
        next: (plans) => {
          if (plans && Array.isArray(plans)) {
            // Filter payment plans based on selected payment type
            if (selectedPaymentType) {
              this.paymentPlans = plans.filter(
                plan => plan.licenseProjectBuyerPaymentTypeId === +selectedPaymentType
              );
            } else {
              this.paymentPlans = plans;
            }
          } else {
            this.paymentPlans = [];
            this.errorMessage = 'لا توجد خطط دفع متاحة';
          }
        },
        error: (error) => {
          console.error('Error loading payment plans:', error);
          this.errorMessage = 'حدث خطأ أثناء تحميل خطط الدفع';
          this.paymentPlans = [];
        }
      });
  }

  /**
   * Switch between tabs
   */
  switchTab(tab: string): void {
    this.activeTab = tab;
    this.scrollToTop();
  }

  /**
   * Navigate back to previous page
   */
  goBack(): void {
    this.location.back();
  }

  /**
   * Format currency value
   */
  formatCurrency(value: number): string {
    if (!value) return '-';
    return new Intl.NumberFormat('ar-SA', {
      style: 'currency',
      currency: 'SAR'
    }).format(value);
  }


  /**
   * Format date value
   */
  formatDate(date: string | Date): string {
    if (!date) return '-';
    return new Date(date).toLocaleDateString('ar-SA');
  }

  /**
   * Scroll to top of the page
   */
  private scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  /**
   * Refresh/reload data
   */
  refreshData(): void {
    this.loadContractDetails();
  }

  /**
   * Get form values
   */
  getFormValues() {
    return this.contractForm.value;
  }

  /**
   * Check if form is valid
   */
  isFormValid(): boolean {
    return this.contractForm.valid;
  }

  /**
   * Check if a specific field has error and is touched
   */
  hasError(fieldName: string): boolean {
    const field = this.contractForm.get(fieldName);
    return !!(field && field.invalid && (field.dirty || field.touched));
  }

  /**
   * Handle next button click
   */
  onNext(): void {

    // Mark all fields as touched to show validation errors
    Object.keys(this.contractForm.controls).forEach(key => {
      this.contractForm.get(key)?.markAsTouched();
    });

    // Check if form is valid
    if (!this.contractForm.valid && !this.contractDetails?.isOldContract) {
      this.toastr.error('يرجى ملء جميع البيانات المطلوبة', 'خطأ في البيانات');
      return;
    }

    if (this.contractDetails?.isOldContract) {
      this.switchTab('contract');
      return;
    }

    // Get form values
    const formValue = this.contractForm.value;

    // Get selected address string
    const selectedAddress = this.buyerAddresses.find(addr => addr.id === formValue.addressId);
    if (!selectedAddress) {
      this.toastr.error('العنوان المحدد غير صالح', 'خطأ');
      return;
    }

    // Prepare request
    const request: GenerateContractRequestDto = {
      contarctId: this.contractId,
      paymentTypeId: formValue.paymentType,
      address: selectedAddress.address,
      paymentPlanId: formValue.paymentType === LicenseProjectBuyerPaymentTypeEnum.Cash
        ? this.paymentPlans[formValue.paymentPlan]?.paymentPlanId || null
        : null
    };

    // Call generate contract API for new contracts
    this.isGeneratingContract = true;
    this.realEstateService
      .generateContract(request)
      .pipe(
        takeUntil(this.destroy$),
        finalize(() => this.isGeneratingContract = false)
      )
      .subscribe({
        next: (response) => {
          if (response?.isDone) {
            this.toastr.success('تم إنشاء العقد بنجاح', 'نجاح');
            console.log('Contract generated successfully:', response.data);

            // Reload contract details to get updated contract URL and file ID
            this.loadContractDetails();

            // Switch to contract tab
            this.switchTab('contract');
          } else {
            this.toastr.error(response?.message || 'حدث خطأ أثناء إنشاء العقد', 'خطأ');
          }
        },
        error: (error) => {
          console.error('Error generating contract:', error);
          this.toastr.error('حدث خطأ أثناء إنشاء العقد', 'خطأ');
        }
      });
  }
}
