import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface SaveUpdateConfirmationData {
  title?: string;
  message?: string;
}

@Component({
  selector: 'app-save-update-confirmation',
  templateUrl: './save-update-confirmation.component.html',
  styleUrls: ['./save-update-confirmation.component.scss']
})
export class SaveUpdateConfirmationComponent {
  title: string;
  message: string;

  constructor(
    private dialogRef: MatDialogRef<SaveUpdateConfirmationComponent>,
    @Inject(MAT_DIALOG_DATA) public data: SaveUpdateConfirmationData
  ) {
    this.title = data?.title || 'حفظ';
    this.message = data?.message || 'تم حفظ البيانات بنجاح';
  }

  onConfirm(): void {
    this.dialogRef.close(true);
  }

}
