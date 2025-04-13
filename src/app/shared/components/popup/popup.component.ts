import { Component, OnInit, OnDestroy } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { PopupData } from '../../models/popup.model';
import { PopupService } from '../../services/popup/popup.service';
import { Button } from '../../models/button.model';
import { ButtonType } from '../../models/enums/button-type.model';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss']
})
export class PopupComponent implements OnInit, OnDestroy {
  subscriptions: Subscription[] = [];
  popupData = {} as PopupData;
  popupActionsButtons: Button[] = [
    {
      icon: "",
      title: "إلغاء",
      actionType: ButtonType.cancel,
      isVisable: true,
      isDisables: false,
      // onclick: () => this.openNotesDialog()
    },
    {
      icon: "",
      title: "حفظ البيانات",
      actionType: ButtonType.confirm,
      isVisable: true,
      isDisables: false,
      // onclick: () => this.openAssignEmployeeDialog()
    },
  ]
  constructor(
    public dialogRef: MatDialogRef<PopupComponent>,
    private _popupService: PopupService,
  ) { }
  ngOnInit(): void {
    this.observePopupData();
    this.observeCloseModalEvent();
  }
  observePopupData(): void {
    this.subscriptions.push(
      this._popupService.popupData.subscribe((data: PopupData) => {
        this.popupData = data;
        this.popupActionsButtons = data.buttons ? data.buttons : this.popupActionsButtons
      })
    )
  }

  observeCloseModalEvent(): void {
    this.subscriptions.push(
      this._popupService.closeDialog.subscribe((data: PopupData) => {
        this.closeModal()
      })
    )
  }

  private closeModal() {
    this.dialogRef.close();
  }
  onClickOnCancel() {
    this._popupService.cancelAction.emit(this.popupData)
    this.closeModal()
  }
  onClickOnConfirm() {
    this._popupService.confirmAction.emit(this.popupData)
  }

  onClickOnPopupActionButton(buttonType: ButtonType) {
    switch (buttonType) {
      case ButtonType.cancel:
        this.onClickOnCancel()
        break;
      case ButtonType.confirm:
        this.onClickOnConfirm()
        break;
    }
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe());
  }
}

