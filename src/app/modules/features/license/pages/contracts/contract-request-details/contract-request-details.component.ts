import { Component, OnInit, OnDestroy } from '@angular/core';
import { Location } from '@angular/common';
import { Subject, takeUntil, finalize, Subscription } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { RealStateDeveloperService } from '../../../services/real-state-developer.service';
import { SharedLicenseProjectService } from '../../../services/sharedLicenseProject/shared-license-project.service';
import { LicenseProjectBuyerCancellationRequestService } from '../../../services/license-project-buyer-cancellation-request.service';
import { LicenseProjectBuyerStatusEnum } from '../../../enums/unit-status.enum';
import {
  GetProjectUnitContractDetailsResponseDto,
  GetProjectUnitDetailsResponseDto,
  LicenseBuyerRecordDto,
  CreateCancellationRequestDto,
  LicenseProjectBuyerCancellationRequestDto,
  ApproveCancellationRequestDto,
  RejectCancellationRequestDto
} from '../../../models/real-state-developer-dto';

@Component({
  selector: 'app-contract-request-details',
  templateUrl: './contract-request-details.component.html',
  styleUrls: ['./contract-request-details.component.scss']
})
export class ContractRequestDetailsComponent implements OnInit, OnDestroy {
  // Tab control
  activeTab: string = 'unit'; // 'unit' or 'contract'

  // Main data properties
  contractDetails: GetProjectUnitContractDetailsResponseDto | null = null;
  cancellationRequest: LicenseProjectBuyerCancellationRequestDto | null = null;

  // IDs and references
  contractId: string = '';
  contractRequestId:number=0;
  licenseProjectId: string = '';

  // UI state properties
  isLoading: boolean = false;
  errorMessage: string = '';
  showCancelModal: boolean = false;
  showCancelReasonModal: boolean = false;
  cancelReason: string = '';
  showRejectModal: boolean = false;
  rejectReason: string = '';
  showApproveModal: boolean = false;
  isAgreementChecked: boolean = false;

  // PDF viewer properties
  isLoadingPdf: boolean = false;
  pdfLoadError: string = '';
  contractFileId: string = '';
  retryLoadContract = () => this.loadContractPdf();

  contractStatusEnum = LicenseProjectBuyerStatusEnum;

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

     const contractRequestId = this.realEstateService.getContractRequestIdFromLocalStorage();
    if (contractRequestId) {
      this.contractRequestId = +contractRequestId;
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
            // Extract cancellation request if exists
            if (this.contractDetails.licenseProjectBuyerCancellationRequest &&
                this.contractDetails.licenseProjectBuyerCancellationRequest.length > 0) {
              this.cancellationRequest = this.contractDetails.licenseProjectBuyerCancellationRequest.filter(x=>x.id==this.contractRequestId)[0];
              console.log(this.cancellationRequest );
              
            }
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
            // Reload contract details to update the UI
            this.loadContractDetails();
          } else {
            this.toastr.error(response.message || 'فشل في إرسال طلب الإلغاء', 'خطأ');
          }
        },
        error: (error) => {
          console.error('Error creating cancellation request:', error);
          this.toastr.error('حدث خطأ أثناء إرسال طلب الإلغاء', 'خطأ');
        }
      });
  }

  /**
   * Check if cancel button should be shown
   */
  get canShowCancelButton(): boolean {
    return !this.contractDetails?.licenseProjectBuyerCancellationRequest ||
           this.contractDetails.licenseProjectBuyerCancellationRequest.length === 0;
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

  /**
   * Approve cancellation request - Open approve modal
   */
  approveCancellationRequest(): void {
    if (!this.cancellationRequest?.id) {
      this.toastr.error('لم يتم العثور على معرف طلب الإلغاء', 'خطأ');
      return;
    }

    // Check if agreement checkbox is checked
    if (!this.isAgreementChecked) {
      this.toastr.error('يجب الموافقة على الإقرار أولاً', 'خطأ');
      return;
    }

    this.showApproveModal = true;
  }

  /**
   * Close approve modal
   */
  closeApproveModal(): void {
    this.showApproveModal = false;
  }

  /**
   * Confirm approval of cancellation request
   */
  confirmApproveCancellationRequest(): void {
    if (!this.cancellationRequest?.id) {
      this.toastr.error('لم يتم العثور على معرف طلب الإلغاء', 'خطأ');
      return;
    }

    const request: ApproveCancellationRequestDto = {
      cancellationRequestId: this.cancellationRequest.id
    };

    this.isLoading = true;

    this.cancellationRequestService
      .approveCancellationRequest(request)
      .pipe(
        takeUntil(this.destroy$),
        finalize(() => this.isLoading = false)
      )
      .subscribe({
        next: (response) => {
          if (response.isDone) {
            this.toastr.success('تم قبول طلب إلغاء العقد بنجاح', 'نجاح');
            this.closeApproveModal();
            this.loadContractDetails();
          } else {
            this.toastr.error(response.message || 'فشل في قبول طلب الإلغاء', 'خطأ');
          }
        },
        error: (error) => {
          console.error('Error approving cancellation request:', error);
          this.toastr.error('حدث خطأ أثناء قبول طلب الإلغاء', 'خطأ');
        }
      });
  }

  /**
   * Reject cancellation request - Open reject modal
   */
  rejectCancellationRequest(): void {
    if (!this.cancellationRequest?.id) {
      this.toastr.error('لم يتم العثور على معرف طلب الإلغاء', 'خطأ');
      return;
    }
    this.showRejectModal = true;
  }

  /**
   * Close reject modal
   */
  closeRejectModal(): void {
    this.showRejectModal = false;
    this.rejectReason = '';
  }

  /**
   * Submit rejection with reason
   */
  submitRejectReason(): void {
    if (!this.rejectReason || this.rejectReason.trim() === '') {
      this.toastr.error('يرجى إدخال سبب الرفض', 'خطأ');
      return;
    }

    if (!this.cancellationRequest?.id) {
      this.toastr.error('لم يتم العثور على معرف طلب الإلغاء', 'خطأ');
      return;
    }

    const request: RejectCancellationRequestDto = {
      cancellationRequestId: this.cancellationRequest.id,
      rejectReason: this.rejectReason
    };

    this.isLoading = true;

    this.cancellationRequestService
      .rejectCancellationRequest(request)
      .pipe(
        takeUntil(this.destroy$),
        finalize(() => this.isLoading = false)
      )
      .subscribe({
        next: (response) => {
          if (response.isDone) {
            this.toastr.success('تم رفض طلب إلغاء العقد بنجاح', 'نجاح');
            this.closeRejectModal();
            this.loadContractDetails();
          } else {
            this.toastr.error(response.message || 'فشل في رفض طلب الإلغاء', 'خطأ');
          }
        },
        error: (error) => {
          console.error('Error rejecting cancellation request:', error);
          this.toastr.error('حدث خطأ أثناء رفض طلب الإلغاء', 'خطأ');
        }
      });
  }
}
