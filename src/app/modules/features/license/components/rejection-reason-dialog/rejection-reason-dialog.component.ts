import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-rejection-reason-dialog',
  templateUrl: './rejection-reason-dialog.component.html',
  styleUrls: ['./rejection-reason-dialog.component.scss']
})
export class RejectionReasonDialogComponent {
  rejectionReason: string = '';

  constructor(
    public dialogRef: MatDialogRef<RejectionReasonDialogComponent>
  ) {}

  onCancel(): void {
    this.dialogRef.close(null);
  }

  onConfirm(): void {
    if (this.rejectionReason && this.rejectionReason.trim()) {
      this.dialogRef.close(this.rejectionReason.trim());
    }
  }

  isReasonValid(): boolean {
    return !!(this.rejectionReason && this.rejectionReason.trim().length > 0);
  }
}
