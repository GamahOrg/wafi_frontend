import { Component,  OnInit, OnDestroy } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { PopupService } from '../../services/popup/popup.service';
import { notePopupData } from '../../models/popup.model';
import { Router } from '@angular/router';
import { PopupData } from "src/app/shared/models/popup.model";

@Component({
  selector: 'app-popup-note',
  templateUrl: './popup-note.component.html',
  styleUrls: ['./popup-note.component.scss'],
})
export class PopupNoteComponent implements OnInit, OnDestroy {
  subscriptions: Subscription[] = [];
  _notePopupData: notePopupData = {} as notePopupData;

  constructor(
    private dialogRef: MatDialogRef<PopupNoteComponent>,
    private _popupService: PopupService,
    private _router: Router
  ) {}

  ngOnInit(): void {
    this.observeNotePopupData();
    this.observeCloseModalEvent();
  }

  observeNotePopupData(): void {
    this.subscriptions.push(
      this._popupService.NotePopupData.subscribe((data: notePopupData) => {
        this._notePopupData = data;
      })
    );
  }

  observeCloseModalEvent(): void {
    this.subscriptions.push(
      this._popupService.closeDialog.subscribe((data: notePopupData) => {
        this.closeModal();
      })
    );
  }

  private closeModal() {
    this.dialogRef.close();
  }
 public emitCancelEvent(){
  this._popupService.cancelAction.emit(this._notePopupData)
 }
  navigatAndClose(route: string | '') {
    this._router.navigate([route]);
    this.closeModal();
  }

  openAnotherPopup(component: any, data: any,title : string,id?: string){
    this._popupService.dismissDialog();
    this._popupService.updatePopupData({
        id: id,
        title: title,
        component: component,
        submitButtonTitle: 'تأكيد',
        disableClose: true,
        data: data,
      } as PopupData);
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe());
  }
}
