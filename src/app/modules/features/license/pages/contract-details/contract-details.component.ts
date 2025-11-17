import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { Subject, takeUntil, finalize, forkJoin } from 'rxjs';
import {
  GetProjectDetailsResponseDto,
  LicenseProjectBusinessPaymentResponseDto
} from '../../../real-estate-contributions-license/models/license-project-buyer-contracts-dto';
import { LicenseProjectBuyerService } from '../../services/license-project-buyer.service';
import { RealStateDeveloperService } from '../../services/real-state-developer.service';
import { BuyerTypeEnum, GenerateContractRequestDto, GetProjectUnitDetailsResponseDto, LicenseBuyerRecordDto, LicenseProjectBuyerPaymentTypeEnum } from '../../models/real-state-developer-dto';
import { LicenseProjectBuyerStatusEnum } from '../../dataModels/license-project-buyer-list-paging-dto';
import { SharedLicenseProjectService } from '../../services/sharedLicenseProject/shared-license-project.service';

@Component({
  selector: 'app-contract-details',
  templateUrl: './contract-details.component.html',
  styleUrls: ['./contract-details.component.scss']
})
export class ContractDetailsComponent implements OnInit, OnDestroy {
  // Main data properties
  contracts: LicenseBuyerRecordDto[] = [];
  projectDetails: GetProjectUnitDetailsResponseDto | null = null;
  paymentPlans: LicenseProjectBusinessPaymentResponseDto[] = [];
  selectedPaymentPlan: LicenseProjectBusinessPaymentResponseDto | null = null;
  buyerTypeEnum = BuyerTypeEnum
  id: string = '';
  // IDs and references
  licenseProjectId: string = '';
  contractId: string = '';
  licenseNumber: string = '';

  // UI state properties
  isLoading: boolean = false;
  isLoadingPaymentPlans: boolean = false;
  isGeneratingContract: boolean = false;
  errorMessage: string = '';
  activeTab: 'unit-details' | 'sales-contract' = 'unit-details';

  // Payment type
  selectedPaymentType: 'cash' | 'finance' = 'finance';
  buyerAddress: string = '';

  // Generated contract URL
  contractUrl: string = '';
  contractFileId: string = '';

  // Subscription management
  private destroy$ = new Subject<void>();

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private location: Location,
    private sharedService: SharedLicenseProjectService,
    private realEstateService: RealStateDeveloperService,
    private buyerService: LicenseProjectBuyerService
  ) { }

  ngOnInit(): void {
    this.initializeComponent();
  }

  ngOnDestroy(): void {
    // Clean up subscriptions
    this.destroy$.next();
    this.destroy$.complete();
  }


  /**
   * Initialize component and load initial data
   */
  private initializeComponent(): void {
    this.contractId = this.route.snapshot.paramMap.get('id') || '';

    if (!this.contractId) {
      this.errorMessage = 'لم يتم العثور على معرف العقد';
      return;
    }

    this.getLicenseProjectId();
    this.checkContractStatusAndLoad();
  }

  /**
   * Check contract status and load appropriate view
   */
  private checkContractStatusAndLoad(): void {
    // First, load unit details to check the contract status
    this.loadContractDetails();
  }

  /**
   * Get license project ID from shared service
   */
  private getLicenseProjectId(): void {
    const storedId = this.sharedService.getLicenseProjectIdStorage();
    const Contractid = this.realEstateService.getContractIdFromLocalStorage();
    if (storedId) {
      this.licenseProjectId = storedId as string;
    }

    if (Contractid) {
      this.id = Contractid as string
    }
  }

  /**
   * Load contract/unit details
   */
  loadContractDetails(): void {
    this.isLoading = true;
    this.errorMessage = '';

    this.realEstateService
      .getUnitDetails(this.contractId)
      .pipe(
        takeUntil(this.destroy$),
        finalize(() => this.isLoading = false)
      )
      .subscribe({
        next: (res) => {
          if (res?.data) {
            this.projectDetails = res.data as GetProjectUnitDetailsResponseDto;
            this.contracts = this.projectDetails.contracts.filter(x => x.contractId === this.id);

            // Update license project ID if available
            if (this.projectDetails?.licenseProjectId) {
              this.licenseProjectId = this.projectDetails.licenseProjectId;
            }

            // Check if contract status is New (1)
            if (this.contracts.length > 0) {
              const contractStatusId = this.contracts[0].contractStatusId;

              // If status is NOT New (1), navigate to readonly view
              if (contractStatusId !== LicenseProjectBuyerStatusEnum.New) {
                this.router.navigate(['/wafi/license/contract-readonly', this.id]);
                return;
              }
            }
          } else {
            this.errorMessage = 'لم يتم العثور على بيانات الوحدة';
          }
        },
        error: (error) => {
          console.error('Error loading contract details:', error);
          this.errorMessage = 'حدث خطأ أثناء تحميل تفاصيل العقد';
        }
      });
  }

  /**
   * Load available payment plans for the project
   */
  loadPaymentPlans(): void {
    if (!this.licenseProjectId) {
      this.errorMessage = 'معرف المشروع غير متوفر';
      return;
    }

    this.isLoadingPaymentPlans = true;
    this.errorMessage = '';

    this.buyerService
      .getProjectPaymentPlans(this.licenseProjectId)
      .pipe(
        takeUntil(this.destroy$),
        finalize(() => this.isLoadingPaymentPlans = false)
      )
      .subscribe({
        next: (plans) => {
          if (plans && Array.isArray(plans)) {
            this.paymentPlans = plans;

            // Auto-select first plan if available
            if (this.paymentPlans.length > 0) {
              this.selectedPaymentPlan = this.paymentPlans[0];
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
   * Select or deselect a payment plan
   * @param plan - The payment plan to select
   */
  selectPaymentPlan(plan: LicenseProjectBusinessPaymentResponseDto): void {
    if (!plan) return;

    // Toggle selection: deselect if same plan is clicked
    if (this.selectedPaymentPlan?.paymentPlanId === plan.paymentPlanId) {
      this.selectedPaymentPlan = null;
    } else {
      this.selectedPaymentPlan = plan;
    }
  }

  /**
   * Handle payment type change (cash/finance)
   * @param type - The selected payment type
   */
  onPaymentTypeChange(type: 'cash' | 'finance'): void {
    this.selectedPaymentType = type;

    if (type == 'cash' && this.licenseProjectId) {
      this.loadPaymentPlans();
    }
    else {
      this.paymentPlans = [];
    }
  }

  /**
   * Check if a specific payment plan is selected
   * @param plan - The payment plan to check
   * @returns boolean indicating if the plan is selected
   */
  isPaymentPlanSelected(plan: LicenseProjectBusinessPaymentResponseDto): boolean {
    return this.selectedPaymentPlan?.paymentPlanId === plan.paymentPlanId;
  }

  /**
   * Validate unit details form before proceeding to next tab
   * @returns boolean indicating if form is valid
   */
  isUnitDetailsValid(): boolean {
    // Buyer address is required
    if (!this.buyerAddress?.trim()) {
      return false;
    }

    // Payment type must be selected
    if (!this.selectedPaymentType) {
      return false;
    }

    // If payment type is cash, payment plan must be selected
    if (this.selectedPaymentType === 'cash' && !this.selectedPaymentPlan) {
      return false;
    }

    return true;
  }

  /**
   * Validate form before proceeding (legacy method for compatibility)
   * @returns boolean indicating if form is valid
   */
  isFormValid(): boolean {
    return !!(
      this.projectDetails &&
      this.selectedPaymentType &&
      this.buyerAddress?.trim()
    );
  }

  /**
   * Proceed to next step
   */
  proceedToNext(): void {
    if (!this.isFormValid()) {
      this.errorMessage = 'يرجى إكمال جميع الحقول المطلوبة';
      return;
    }

    // Navigate to next page or submit data
    // You can pass data through router state or a service
    this.router.navigate(['/next-page'], {
      state: {
        contractId: this.contractId,
        paymentPlan: this.selectedPaymentPlan,
        paymentType: this.selectedPaymentType,
        buyerAddress: this.buyerAddress
      }
    });
  }

  /**
   * Navigate back to previous page
   */
  goBack(): void {
    this.location.back();
  }

  /**
   * Refresh/reload all data
   */
  refreshData(): void {
    this.loadContractDetails();
    if (this.licenseProjectId) {
      this.loadPaymentPlans();
    }
  }

  /**
   * Get total amount for selected payment plan
   * @returns total amount or 0
   */
  getTotalAmount(): number {
    if (!this.selectedPaymentPlan?.paymentInstallments) return 0;

    return this.selectedPaymentPlan.paymentInstallments.reduce(
      (total, installment) => total + (installment.deductionPercentage || 0),
      0
    );
  }

  /**
   * Format currency value
   * @param value - The value to format
   * @returns formatted string
   */
  formatCurrency(value: number): string {
    return new Intl.NumberFormat('ar-SA', {
      style: 'currency',
      currency: 'SAR'
    }).format(value);
  }

  /**
   * Format date value
   * @param date - The date to format
   * @returns formatted date string
   */
  formatDate(date: string | Date): string {
    if (!date) return '-';
    return new Date(date).toLocaleDateString('ar-SA');
  }

  /**
   * Switch between tabs with validation
   * @param tab - The tab to switch to
   */
  switchTab(tab: 'unit-details' | 'sales-contract'): void {
    // If trying to switch to sales-contract tab, validate first
    if (tab === 'sales-contract') {
      this.proceedToNextTab();
      return;
    }

    // Allow switching back to unit-details without validation
    this.activeTab = tab;
    this.scrollToTop();
  }

  /**
   * Proceed to next tab with validation and generate contract
   */
  proceedToNextTab(): void {
    // Clear any previous error messages
    this.errorMessage = '';

    // Validate buyer address
    if (!this.buyerAddress?.trim()) {
      this.errorMessage = 'يرجى إدخال العنوان الوطنى للمشتري';
      this.scrollToTop();
      return;
    }

    // Validate payment type
    if (!this.selectedPaymentType) {
      this.errorMessage = 'يرجى اختيار نوع الدفع';
      this.scrollToTop();
      return;
    }

    // If payment type is cash, validate payment plan selection
    if (this.selectedPaymentType === 'cash' && !this.selectedPaymentPlan) {
      this.errorMessage = 'يرجى اختيار خطة الدفع';
      this.scrollToTop();
      return;
    }

    // All validations passed, generate contract
    this.generateContract();
  }

  /**
   * Generate contract by calling the API
   */
  private generateContract(): void {
    this.isGeneratingContract = true;
    this.errorMessage = '';

    // Prepare the request
    const request: GenerateContractRequestDto = {
      contarctId: this.id, // Using the stored contract ID
      paymentTypeId: this.selectedPaymentType === 'cash'
        ? LicenseProjectBuyerPaymentTypeEnum.Cash
        : LicenseProjectBuyerPaymentTypeEnum.Finance,
      paymentPlanId: this.selectedPaymentType === 'cash' ? this.selectedPaymentPlan?.paymentPlanId : null,
      address: this.buyerAddress.trim()
    };

    this.realEstateService
      .generateContract(request)
      .pipe(
        takeUntil(this.destroy$),
        finalize(() => this.isGeneratingContract = false)
      )
      .subscribe({
        next: (response) => {
          if (response?.data?.contractUrl) {
            this.contractUrl = response.data.contractUrl;
            if (response.data.contractFileId)
              this.contractFileId = response.data.contractFileId;
            // Switch to sales contract tab after successful generation
            this.activeTab = 'sales-contract';
            this.scrollToTop();
          } else {
            this.errorMessage = 'لم يتم إنشاء العقد بنجاح';
            this.scrollToTop();
          }
        },
        error: (error) => {
          console.error('Error generating contract:', error);
          this.errorMessage = 'حدث خطأ أثناء إنشاء العقد. يرجى المحاولة مرة أخرى';
          this.scrollToTop();
        }
      });
  }

  /**
   * Scroll to top of the page
   */
  private scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  /**
   * Check if a tab is active
   * @param tab - The tab to check
   * @returns boolean indicating if the tab is active
   */
  isActiveTab(tab: 'unit-details' | 'sales-contract'): boolean {
    return this.activeTab === tab;
  }
}