import { Component, OnInit, OnDestroy, Input } from '@angular/core';
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
  @Input() submitButtonTitle: string = 'حفظ البيانات';
  popupActionsButtons: Button[] = []
  constructor(
    public dialogRef: MatDialogRef<PopupComponent>,
    private _popupService: PopupService,
  ) { }
  ngOnInit(): void {
    this.initDefaultButtons();
    this.observePopupData();
    this.observeCloseModalEvent();
  }

  private initDefaultButtons(): void {
    this.popupActionsButtons = [
      {
        icon: "",
        title: "إلغاء",
        actionType: ButtonType.cancel,
        isVisable: true,
        isDisables: false,
      },
      {
        icon: "",
        title: this.submitButtonTitle,
        actionType: ButtonType.confirm,
        isVisable: true,
        isDisables: false,
      },
    ];
  }

  observePopupData(): void {
    this.subscriptions.push(
      this._popupService.popupData.subscribe((data: PopupData) => {
        this.popupData = data;
        if (data.submitButtonTitle) {
          this.submitButtonTitle = data.submitButtonTitle;
          this.initDefaultButtons();
        }
        this.popupActionsButtons = data.buttons ? data.buttons : this.popupActionsButtons;
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

