import { Component, Inject, OnInit, OnDestroy } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { PopupService } from '../../services/popup/popup.service';
import { confirmationPopupData } from '../../models/popup.model';

@Component({
  selector: 'app-confirmation-popup',
  templateUrl: './confirmation-popup.component.html',
  styleUrls: ['./confirmation-popup.component.scss']
})
export class ConfirmationPopupComponent implements OnInit, OnDestroy {
  subscriptions: Subscription[] = [];
  // message = '';
  confirmationPopupData: confirmationPopupData = {} as confirmationPopupData;
  disableClose?: boolean;

  constructor(
    private dialogRef: MatDialogRef<ConfirmationPopupComponent>,
    @Inject(MAT_DIALOG_DATA) data: { message: string },
    private _popupService: PopupService,
  ) {
    // this.message = data ? data.message : '';
    this.disableClose = this.dialogRef.disableClose;
  }

  ngOnInit(): void {
    this.observeConfirmationPopupData();
    this.observeCloseModalEvent();
  }
  
  observeConfirmationPopupData(): void {
    this.subscriptions.push(
      this._popupService.ConfirmpopupData.subscribe((data: confirmationPopupData) => {
        this.confirmationPopupData = data;
      })
    )
  }

  observeCloseModalEvent(): void {
    this.subscriptions.push(
      this._popupService.closeDialog.subscribe((data: confirmationPopupData) => {
        this.closeModal()
      })
    )
  }

  private closeModal() {
    this.dialogRef.close();
  }
  onClickOnCancel(){
    this._popupService.cancelAction.emit(this.confirmationPopupData)
    this.closeModal()
  }
  onClickOnConfirm(){
    this._popupService.confirmAction.emit(this.confirmationPopupData)
  }
  ngOnDestroy(): void {
    this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe());
  }
}
