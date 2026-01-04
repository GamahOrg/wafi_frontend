import { Component, Inject, OnInit, OnDestroy } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { PopupService } from '../../services/popup/popup.service';
import { confirmationPopupData } from '../../models/popup.model';
import { FormBuilder, Validators } from '@angular/forms';
import { RequestNotesService } from '../../services/requestNotes/request-notes.service';
import { RequestNotesData } from '../../models/request-notes-data.model';

@Component({
  selector: 'app-rejection-confirmation-popup',
  templateUrl: './rejection-confirmation-popup.component.html',
  styleUrls: ['./rejection-confirmation-popup.component.scss'],
})
export class RejectionConfirmationPopupComponent implements OnInit, OnDestroy {
  subscriptions: Subscription[] = [];
  // message = '';
  confirmationPopupData: confirmationPopupData = {} as confirmationPopupData;
  disableClose?: boolean;

  constructor(
    private dialogRef: MatDialogRef<RejectionConfirmationPopupComponent>,
    @Inject(MAT_DIALOG_DATA) data: { message: string },
    private _popupService: PopupService,
    private _requestNotesService: RequestNotesService,
    private _formBuilder: FormBuilder
  ) {
    // this.message = data ? data.message : '';
    this.disableClose = this.dialogRef.disableClose;
  }

  rejectionForm = this._formBuilder.group({
    notes: ['', [Validators.required]],
  });

  ngOnInit(): void {
    this.observeConfirmationPopupData();
    this.observeCloseModalEvent();
  }

  observeConfirmationPopupData(): void {
    this.subscriptions.push(
      this._popupService.ConfirmpopupData.subscribe(
        (data: confirmationPopupData) => {
          this.confirmationPopupData = data;
        }
      )
    );
  }

  observeCloseModalEvent(): void {
    this.subscriptions.push(
      this._popupService.closeDialog.subscribe(
        (data: confirmationPopupData) => {
          this.closeModal();
        }
      )
    );
  }

  private closeModal() {
    this.dialogRef.close();
  }
  onClickOnCancel() {
   
    this._popupService.cancelAction.emit(this.confirmationPopupData);
    this.closeModal();
  }
  onClickOnConfirm() {
    // Mark all fields as touched to show validation errors
    Object.keys(this.rejectionForm.controls).forEach(key => {
      this.rejectionForm.get(key)?.markAsTouched();
    });

    // Check if form is valid before proceeding
    if (this.rejectionForm.invalid) {
      return;
    }

    this._requestNotesService.RequestNotes$.next(
      this.rejectionForm.value as RequestNotesData
    );
    this._popupService.confirmAction.emit(this.confirmationPopupData);
  }
  ngOnDestroy(): void {
    this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe());
  }
}
