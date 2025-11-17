import { Component, OnInit, OnDestroy } from '@angular/core';
import { Location } from '@angular/common';
import { Subject, takeUntil, finalize, Subscription } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { RealStateDeveloperService } from '../../../services/real-state-developer.service';
import { SharedLicenseProjectService } from '../../../services/sharedLicenseProject/shared-license-project.service';
import { LicenseProjectBuyerCancellationRequestService } from '../../../services/license-project-buyer-cancellation-request.service';
import {
  GetProjectUnitContractDetailsResponseDto,
  GetProjectUnitDetailsResponseDto,
  LicenseBuyerRecordDto,
  CreateCancellationRequestDto
} from '../../../models/real-state-developer-dto';

@Component({
  selector: 'app-buyer-contract-view-details',
  templateUrl: './buyer-contract-view-details.component.html',
  styleUrls: ['./buyer-contract-view-details.component.scss']
})
export class BuyerContractViewDetailsComponent implements OnInit, OnDestroy {
  // Tab control
  activeTab: string = 'unit'; // 'unit' or 'contract'

  // Main data properties
  contractDetails: GetProjectUnitContractDetailsResponseDto | null = null;

  // IDs and references
  contractId: string = '';
  licenseProjectId: string = '';

  // UI state properties
  isLoading: boolean = false;
  errorMessage: string = '';
  showCancelModal: boolean = false;
  showCancelReasonModal: boolean = false;
  cancelReason: string = '';
  showWarningBanner: boolean = false;

  // PDF viewer properties
  isLoadingPdf: boolean = false;
  pdfLoadError: string = '';
  contractFileId: string = '';
  retryLoadContract = () => this.loadContractPdf();

  // Subscription management
  private destroy$ = new Subject<void>();
  private subscription: Subscription = new Subscription();

  constructor(
    private location: Location,
    private realEstateService: RealStateDeveloperService,
    private sharedService: SharedLicenseProjectService,
    private cancellationRequestService: LicenseProjectBuyerCancellationRequestService,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.initializeComponent();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
    this.subscription.unsubscribe();
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

    this.loadContractDetails();
  }

  /**
   * Load contract PDF
   */
  loadContractPdf(): void {
    this.pdfLoadError = '';
    this.contractFileId = '';

    this.subscription.add(
      this.realEstateService.getContractDetails(this.contractId).subscribe({
        next: (response) => {
          this.isLoadingPdf = false;

          if (response.isDone && response.data) {
            // Use contractFileId if available
            if (response.data.contractFileId) {
              this.contractFileId = response.data.contractFileId;
            } else {
              this.pdfLoadError = 'معرف الملف غير متوفر';
            }
          } else {
            this.pdfLoadError = 'فشل في تحميل العقد';
          }
        },
        error: (error) => {
          this.isLoadingPdf = false;
          this.pdfLoadError = error.message || 'حدث خطأ أثناء تحميل العقد';
          console.error('Error loading contract:', error);
        }
      })
    );
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
            if (this.contractDetails) {
              this.loadContractPdf();
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
   * Switch between tabs
   */
  switchTab(tab: string): void {
    this.activeTab = tab;
    this.scrollToTop();
  }

  /**
   * Close warning banner
   */
  closeWarningBanner(): void {
    this.showWarningBanner = false;
  }

  /**
   * Print contract
   */
  printContract(): void {
    window.print();
  }

  /**
   * Open cancel confirmation modal
   */
  openCancelModal(): void {
    this.showCancelModal = true;
  }

  /**
   * Close cancel confirmation modal
   */
  closeCancelModal(): void {
    this.showCancelModal = false;
  }

  /**
   * Confirm cancel contract - Open reason modal
   */
  confirmCancelContract(): void {
    this.closeCancelModal();
    this.showCancelReasonModal = true;
  }

  /**
   * Close cancel reason modal
   */
  closeCancelReasonModal(): void {
    this.showCancelReasonModal = false;
    this.cancelReason = '';
  }

  /**
   * Submit cancel contract with reason
   */
  submitCancelReason(): void {
    if (!this.cancelReason || this.cancelReason.trim() === '') {
      this.toastr.error('يرجى إدخال سبب الإلغاء', 'خطأ');
      return;
    }

    if (!this.contractDetails?.contractId) {
      this.toastr.error('لم يتم العثور على معرف العقد', 'خطأ');
      return;
    }

    const request: CreateCancellationRequestDto = {
      licenseProjectBuyerId: this.contractDetails.contractId,
      cancelRequestReason: this.cancelReason
    };

    this.isLoading = true;

    this.cancellationRequestService
      .createCancellationRequest(request)
      .pipe(
        takeUntil(this.destroy$),
        finalize(() => this.isLoading = false)
      )
      .subscribe({
        next: (response) => {
          if (response.isDone) {
            this.toastr.success('تم إرسال طلب إلغاء العقد بنجاح', 'نجاح');
            this.closeCancelReasonModal();
            this.showWarningBanner = false;
            // Reload contract details to update the UI
            this.loadContractDetails();
          } else {
            // Show warning banner when cancellation request fails
            this.showWarningBanner = true;
            this.closeCancelReasonModal();
            this.toastr.error(response.message || 'لا يمكن إلغاء العقد في الوقت الحالي', 'خطأ');
          }
        },
        error: (error) => {
          console.error('Error creating cancellation request:', error);
          this.toastr.error('حدث خطأ أثناء إرسال طلب الإلغاء', 'خطأ');
          this.showWarningBanner = true;
        }
      });
  }

  /**
   * Check if cancel button should be shown
   */
  get canShowCancelButton(): boolean {
    return this.contractDetails?.contractStatusId == 2;
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
      style: 'decimal',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    }).format(value);
  }

  /**
   * Format date value
   */
  formatDate(date: string | Date): string {
    if (!date) return '-';
    return new Date(date).toLocaleDateString('ar-SA', {
      calendar: 'gregory',
      year: 'numeric',
      month: '2-digit',
      day: '2-digit'
    });
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
}
