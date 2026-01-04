import { Component, Input, Output, EventEmitter, OnDestroy } from '@angular/core';
import { Subject, Subscription, takeUntil, finalize } from 'rxjs';
import { GetProjectUnitDetailsResponseDto, LicenseBuyerRecordDto, BuyerTypeEnum, UpdateContractStatusRequestDto } from '../../../models/real-state-developer-dto';
import { LicenseProjectBuyerStatusEnum } from '../../../dataModels/license-project-buyer-list-paging-dto';
import { RealStateDeveloperService } from '../../../services/real-state-developer.service';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { SharedLicenseProjectService } from '../../../services/sharedLicenseProject/shared-license-project.service';

@Component({
  selector: 'app-sales-contract',
  templateUrl: './sales-contract.component.html',
  styleUrls: ['./sales-contract.component.scss']
})
export class SalesContractComponent implements OnDestroy {
  @Input() projectDetails: GetProjectUnitDetailsResponseDto | null = null;
  @Input() contracts: LicenseBuyerRecordDto[] = [];
  @Input() contractUrl: string = '';
  @Input() contractFileId: string = '';
  @Input() contractId: string = '';
  @Output() contractStatusUpdated = new EventEmitter<{ success: boolean; status: string; message: string }>();

  id: string = '';
  baseUrl = `${environment.baseURL}/`;
  isLoadingPdf: boolean = false;
  pdfLoadError: string = '';
  retryLoadContract = () => this.loadContractPdf();
  private subscription: Subscription = new Subscription();

  buyerTypeEnum = BuyerTypeEnum;
  // UI state properties
  isUpdatingStatus: boolean = false;
  errorMessage: string = '';
  successMessage: string = '';

  // OTP Modal state
  isOtpModalVisible: boolean = false;
  otpModalAction: 'accept' | 'reject' = 'accept';
  phoneNumber: string = '';
  showSuccessPopup: boolean = false;

  // Rejection Modal state
  isRejectionModalVisible: boolean = false;
  rejectionReason: string = '';

  // Agreement checkbox state
  isAgreementChecked: boolean = false;

  // Subscription management
  private destroy$ = new Subject<void>();

  constructor(private realEstateService: RealStateDeveloperService,private router: Router,    private sharedService: SharedLicenseProjectService,

  ) { }

  ngOnDestroy(): void {
     this.subscription.unsubscribe();
    this.destroy$.next();
    this.destroy$.complete();
  }

  /**
   * Handle agreement checkbox change
   */
  onAgreementChange(): void {
    if (this.isAgreementChecked) {
      this.errorMessage = '';
    }
  }

  loadContractPdf(): void {
    this.isLoadingPdf = true;
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
   * Accept the contract - Show OTP modal first
   */
  acceptContract(): void {
    if (!this.contracts || this.contracts.length === 0) {
      this.errorMessage = 'لا توجد بيانات العقد';
      return;
    }

    const contractId = this.contracts[0].contractId;

    if (!contractId) {
      this.errorMessage = 'معرف العقد غير موجود';
      return;
    }

    // Check if agreement checkbox is checked
    if (!this.isAgreementChecked) {
      this.errorMessage = 'يجب الموافقة على الإقرار أولاً';
      return;
    }

    // Set phone number if available (you may need to get this from contracts data)
    this.phoneNumber = this.contracts[0]?.mobile || '';

    // Show OTP modal for accept action
    this.otpModalAction = 'accept';
    this.isOtpModalVisible = true;
  }

  /**
   * Reject the contract - Show rejection reason modal first
   */
  rejectContract(): void {
    if (!this.contracts || this.contracts.length === 0) {
      this.errorMessage = 'لا توجد بيانات العقد';
      return;
    }

    const contractId = this.contracts[0].contractId;

    if (!contractId) {
      this.errorMessage = 'معرف العقد غير موجود';
      return;
    }

    // Show rejection reason modal first
    this.isRejectionModalVisible = true;
  }

  /**
   * Handle rejection reason submission
   */
  onRejectionReasonSubmit(reason: string): void {
    this.rejectionReason = reason;
    this.isRejectionModalVisible = false;

    // Set phone number if available
    this.phoneNumber = this.contracts[0]?.mobile || '';

    //// Show OTP modal for reject action
    //this.otpModalAction = 'reject';
    //this.isOtpModalVisible = true;
    const contractId = this.contracts[0].contractId;
    const status = 
      LicenseProjectBuyerStatusEnum.Refused;

    this.updateContractStatus(contractId, status, this.rejectionReason, '');
  }

  /**
   * Handle rejection reason modal close
   */
  onRejectionReasonClose(): void {
    this.isRejectionModalVisible = false;
    this.rejectionReason = '';
  }

  /**
   * Handle OTP verification from modal
   * @param data - OTP and optional rejection reason
   */
  onOtpVerified(data: { otp: string; rejectionReason?: string }): void {
    if (!this.contracts || this.contracts.length === 0) {
      this.errorMessage = 'لا توجد بيانات العقد';
      return;
    }

    const contractId = this.contracts[0].contractId;
    const status = this.otpModalAction === 'accept'
      ? LicenseProjectBuyerStatusEnum.Cerified
      : LicenseProjectBuyerStatusEnum.Refused;

    // Use stored rejection reason for reject action
    const reason = this.otpModalAction === 'reject' ? this.rejectionReason : undefined;

    this.updateContractStatus(contractId, status, reason, data.otp);
    this.isOtpModalVisible = false;

    // Clear rejection reason after use
    if (this.otpModalAction === 'reject') {
      this.rejectionReason = '';
    }
  }

  /**
   * Close OTP modal
   */
  onOtpModalClose(): void {
    this.isOtpModalVisible = false;
  }

  /**
   * Update contract status via API
   * @param contractId - The contract ID
   * @param status - The new status
   * @param rejectionReason - Optional rejection reason
   * @param otp - OTP code
   */
  private updateContractStatus(
    contractId: string,
    status: LicenseProjectBuyerStatusEnum,
    rejectionReason?: string,
    otp?: string
  ): void {
    this.isUpdatingStatus = true;
    this.errorMessage = '';
    this.successMessage = '';

    const request: UpdateContractStatusRequestDto = {
      contractId: contractId,
      status: status,
      rejectionReason: rejectionReason,
      otp: otp
    };

    this.realEstateService
      .updateContractStatus(request)
      .pipe(
        takeUntil(this.destroy$),
        finalize(() => this.isUpdatingStatus = false)
      )
      .subscribe({
        next: (response) => {
          if (response?.isDone) {
            const statusText = status === LicenseProjectBuyerStatusEnum.Cerified ? 'قبول' : 'رفض';
            this.successMessage = `تم ${statusText} العقد بنجاح`;

            // Emit event to parent component
            this.contractStatusUpdated.emit({
              success: true,
              status: statusText,
              message: this.successMessage
            });

          const contractid = this.realEstateService.getContractIdFromLocalStorage();
          if (contractid) {
            this.id = contractid
            setTimeout(() => {
              const navigateTo = ['/wafi/license/contract-readonly/' + contractid];
              this.router.navigate(navigateTo);
          }, 1000);
          }

          } else {
            this.errorMessage = response?.message || 'فشل تحديث حالة العقد';
            this.scrollToTop();
          }
        },
        error: (error) => {
          console.error('Error updating contract status:', error);
          this.errorMessage = 'حدث خطأ أثناء تحديث حالة العقد. يرجى المحاولة مرة أخرى';
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
   * Handle view details from success popup
   */
  onSuccessViewDetails(): void {
    this.showSuccessPopup = false;
    this.router.navigate(['/wafi/license/contract-readonly/' + this.id]);
  }

  /**
   * Handle download contract from success popup
   */
  onSuccessDownloadContract(): void {
    this.showSuccessPopup = false;
    this.router.navigate(['/wafi/license/contract-documentation']);
  }
}
