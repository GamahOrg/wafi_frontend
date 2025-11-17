import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-rejection-reason-modal',
  templateUrl: './rejection-reason-modal.component.html',
  styleUrls: ['./rejection-reason-modal.component.scss']
})
export class RejectionReasonModalComponent {
  @Input() isVisible: boolean = false;
  @Output() onSubmit = new EventEmitter<string>();
  @Output() onClose = new EventEmitter<void>();

  rejectionReason: string = '';

  /**
   * Handle submit button click
   */
  handleSubmit(): void {
    if (this.rejectionReason.trim()) {
      this.onSubmit.emit(this.rejectionReason.trim());
      this.rejectionReason = '';
    }
  }

  /**
   * Handle cancel button click
   */
  handleCancel(): void {
    this.rejectionReason = '';
    this.onClose.emit();
  }

  /**
   * Close modal when clicking outside
   */
  handleBackdropClick(event: MouseEvent): void {
    if ((event.target as HTMLElement).classList.contains('modal-backdrop')) {
      this.handleCancel();
    }
  }
}
