import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-delete-deed-confirmation-dialog',
  templateUrl: './delete-deed-confirmation-dialog.component.html',
  styleUrls: ['./delete-deed-confirmation-dialog.component.scss']
})
export class DeleteDeedConfirmationDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<DeleteDeedConfirmationDialogComponent>
  ) {}

  onCancel(): void {
    this.dialogRef.close(false);
  }

  onConfirm(): void {
    this.dialogRef.close(true);
  }
}
