import { Component, EventEmitter, Input, Output, OnInit, OnDestroy, OnChanges } from '@angular/core';
import { Subject, takeUntil, finalize } from 'rxjs';
import { RealStateDeveloperService } from '../../../services/real-state-developer.service';

@Component({
  selector: 'app-otp-verification-modal',
  templateUrl: './otp-verification-modal.component.html',
  styleUrls: ['./otp-verification-modal.component.scss']
})
export class OtpVerificationModalComponent implements OnInit, OnDestroy, OnChanges {
  @Input() isVisible: boolean = false;
  @Input() contractId: string = '';
  @Input() phoneNumber: string = '';
  @Input() actionType: 'accept' | 'reject' = 'accept';
  @Output() onVerify = new EventEmitter<{ otp: string; rejectionReason?: string }>();
  @Output() onClose = new EventEmitter<void>();

  // OTP inputs (4 digits)
  otpDigits: string[] = ['', '', '', ''];

  // Rejection reason (only for reject action)
  rejectionReason: string = '';

  // UI states
  isSendingOtp: boolean = false;
  isVerifying: boolean = false;
  errorMessage: string = '';
  successMessage: string = '';

  // Success popup state (shown after OTP verification succeeds)
  @Input() showSuccessPopup: boolean = false;
  @Output() onDownloadContract = new EventEmitter<void>();
  @Output() onViewDetails = new EventEmitter<void>();

  // Subscription management
  private destroy$ = new Subject<void>();

  constructor(private realEstateService: RealStateDeveloperService) {}

  ngOnInit(): void {
    // OTP will be sent when modal becomes visible via ngOnChanges
  }

  ngOnChanges(changes: any): void {
    // Send OTP when modal becomes visible for accept action only
    if (changes.isVisible && changes.isVisible.currentValue === true && this.contractId && this.actionType === 'accept') {
      this.sendOtp();
    }

    // Reset form when modal opens
    if (changes.isVisible && changes.isVisible.currentValue === true) {
      this.resetForm();
    }
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  /**
   * Send OTP to user's phone
   */
  sendOtp(): void {
    if (!this.contractId) {
      this.errorMessage = 'معرف العقد غير موجود';
      return;
    }

    this.isSendingOtp = true;
    this.errorMessage = '';
    this.successMessage = '';

    this.realEstateService
      .sendOtp(this.contractId)
      .pipe(
        takeUntil(this.destroy$),
        finalize(() => this.isSendingOtp = false)
      )
      .subscribe({
        next: (response) => {
          if (response?.isDone) {
            this.successMessage = 'تم إرسال رمز التحقق بنجاح';
          } else {
            this.errorMessage = response?.message || 'فشل إرسال رمز التحقق';
          }
        },
        error: (error) => {
          console.error('Error sending OTP:', error);
          this.errorMessage = 'حدث خطأ أثناء إرسال رمز التحقق';
        }
      });
  }

  /**
   * Handle OTP input change
   * @param index - The index of the input
   * @param event - The input event
   */
  onOtpInput(index: number, event: any): void {
    const input = event.target as HTMLInputElement;
    let value = input.value;

    // Remove non-numeric characters
    value = value.replace(/\D/g, '');

    // Take only the first digit if multiple are entered
    if (value.length > 1) {
      value = value.charAt(0);
    }

    // Update the input and model
    this.otpDigits[index] = value;
    input.value = value;

    // Auto-focus next input if a digit was entered
    if (value && index < 3) {
      const nextInput = document.getElementById(`otp-${index + 1}`) as HTMLInputElement;
      if (nextInput) {
        setTimeout(() => nextInput.focus(), 10);
      }
    }
  }

  /**
   * Handle backspace key
   * @param index - The index of the input
   * @param event - The keyboard event
   */
  onOtpKeyDown(index: number, event: KeyboardEvent): void {
    if (event.key === 'Backspace' && !this.otpDigits[index] && index > 0) {
      const prevInput = document.getElementById(`otp-${index - 1}`) as HTMLInputElement;
      if (prevInput) {
        prevInput.focus();
      }
    }
  }

  /**
   * Verify OTP and proceed
   */
  verify(): void {
    this.errorMessage = '';

    // For accept action: validate OTP
    if (this.actionType === 'accept') {
      const otp = this.otpDigits.join('');
      if (otp.length !== 4) {
        this.errorMessage = 'يرجى إدخال رمز التحقق المكون من 4 أرقام';
        return;
      }

      // Emit verification event with OTP - success popup will be shown in parent component
      this.onVerify.emit({
        otp: otp
      });
    }
    // For reject action: validate rejection reason only
    else if (this.actionType === 'reject') {
      if (!this.rejectionReason.trim()) {
        this.errorMessage = 'يرجى إدخال سبب الرفض';
        return;
      }

      // Emit verification event with rejection reason (no OTP needed)
      this.onVerify.emit({
        otp: '', // Empty OTP for reject action
        rejectionReason: this.rejectionReason.trim()
      });
    }
  }

  /**
   * Handle view details button click
   */
  viewDetails(): void {
    this.onViewDetails.emit();
  }

  /**
   * Handle download contract button click
   */
  downloadContract(): void {
    this.onDownloadContract.emit();
  }

  /**
   * Close modal
   */
  close(): void {
    this.onClose.emit();
    this.resetForm();
  }

  /**
   * Reset form
   */
  private resetForm(): void {
    this.otpDigits = ['', '', '', ''];
    this.rejectionReason = '';
    this.errorMessage = '';
    this.successMessage = '';
  }

  /**
   * Get OTP as string
   */
  getOtp(): string {
    return this.otpDigits.join('');
  }

  /**
   * Check if form is valid
   */
  isFormValid(): boolean {
    if (this.actionType === 'reject') {
      // For reject action: only rejection reason is required
      return this.rejectionReason.trim().length > 0;
    } else {
      // For accept action: OTP is required
      const otpValid = this.otpDigits.every(digit => digit !== '');
      return otpValid;
    }
  }
}

