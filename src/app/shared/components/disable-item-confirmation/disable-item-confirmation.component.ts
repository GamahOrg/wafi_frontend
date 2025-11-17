import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface DisableItemConfirmationData {
  isActivate?: boolean; // true for activate, false/undefined for deactivate
}

@Component({
  selector: 'app-disable-item-confirmation',
  templateUrl: './disable-item-confirmation.component.html',
  styleUrls: ['./disable-item-confirmation.component.scss']
})
export class DisableItemConfirmationComponent {

  constructor(
    private dialogRef: MatDialogRef<DisableItemConfirmationComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DisableItemConfirmationData
  ) {}

  get title(): string {
    return this.data?.isActivate ? 'تم تفعيل البند' : 'تم تعطيل البند';
  }

  onConfirm(): void {
    this.dialogRef.close(true);
  }

}
