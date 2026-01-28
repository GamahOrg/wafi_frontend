import { EventEmitter, Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BehaviorSubject } from 'rxjs';
import {
  PopupData,
  confirmationPopupData,
  notePopupData,
} from '../../models/popup.model';
import { ConfirmationPopupComponent } from '../../components/confirmation-popup/confirmation-popup.component';
import { PopupComponent } from '../../components/popup/popup.component';
import { PopupNoteComponent } from '../../components/popup-note/popup-note.component';
import { RejectionConfirmationPopupComponent } from '../../components/rejection-confirmation-popup/rejection-confirmation-popup.component';

@Injectable()
export class PopupService {
  popupData: BehaviorSubject<PopupData> = new BehaviorSubject<PopupData>(
    {} as PopupData
  ); // title and component
  ConfirmpopupData: BehaviorSubject<confirmationPopupData> =
    new BehaviorSubject<confirmationPopupData>({} as confirmationPopupData); // title and component
  NotePopupData: BehaviorSubject<notePopupData> =
    new BehaviorSubject<notePopupData>({} as notePopupData);

  openDialog: EventEmitter<any> = new EventEmitter<any>();
  closeDialog: EventEmitter<any> = new EventEmitter<any>();
  confirmAction: EventEmitter<PopupData | confirmationPopupData> =
    new EventEmitter<PopupData | confirmationPopupData>();
  cancelAction: EventEmitter<
    PopupData | confirmationPopupData | notePopupData
  > = new EventEmitter<PopupData | confirmationPopupData | notePopupData>();

  constructor(public dialog: MatDialog) {}
  updatePopupData(data: PopupData) {
    this.popupData.next(data);
    const dialogRef = this.dialog.open(PopupComponent, {
      disableClose: true,
      maxHeight: '80vh',
      maxWidth: '80vw',
      width: data.width,
      height: data.height,
      panelClass: data.panelClass,
      hasBackdrop: true,
    });

    // Prevent backdrop click from closing the dialog
    dialogRef.backdropClick().subscribe(() => {
      // Do nothing - prevents backdrop click from closing the dialog
    });

    return dialogRef;
  }

  updateConfirmationPopupData(
    confirmationData: confirmationPopupData,
    width?: string,
    height?: string
  ) {
    const dataWithDefaults = {
      ...confirmationData,
      popupType: confirmationData.popupType ?? 'primary',
    };
    this.ConfirmpopupData.next(dataWithDefaults);
    const dialogRef = this.dialog.open(ConfirmationPopupComponent, {
      width: width ?? '600px',
      height: height ?? 'auto',
      maxHeight: '90vh',
      maxWidth: '90vw',
      panelClass: 'confirmation-dialog',
      data: {
        popupType: confirmationData.popupType ?? 'primary',
        id: confirmationData.id,
        staticMessage: confirmationData.staticMessage,
        dynamicMessage: confirmationData.dynamicMessage,
        secondeStaticMessage: confirmationData.secondeStaticMessage,
      },
      disableClose: true,
      hasBackdrop: true,
      autoFocus: true,
    });

    // Prevent backdrop click from closing the dialog
    dialogRef.backdropClick().subscribe(() => {
      // Do nothing - prevents backdrop click from closing the dialog
    });

    return dialogRef;
  }

  updateRejectionConfirmationPopupData(
    confirmationData: confirmationPopupData,
    width: string = '600px',
    height: string = 'auto'
  ) {
    this.ConfirmpopupData.next(confirmationData);
    const dialogRef = this.dialog.open(RejectionConfirmationPopupComponent, {
      width: '600px',
      height: 'auto',
      maxHeight: '90vh',
      maxWidth: '90vw',
      panelClass: 'confirmation-dialog',
      data: {
        popupType: confirmationData.popupType ?? 'primary',
        id: confirmationData.id
      },
      disableClose: true,
      hasBackdrop: true,
      autoFocus: true,
    });

    // Prevent backdrop click from closing the dialog
    dialogRef.backdropClick().subscribe(() => {
      // Do nothing - prevents backdrop click from closing the dialog
    });

    return dialogRef;
  }

  updateNotePopupData(noteData: notePopupData) {
    this.NotePopupData.next(noteData);
    const dialogRef = this.dialog.open(PopupNoteComponent, {
      width: '660px',
      height: '380px',
      panelClass: noteData.panelClass,
      data: {
        popupType: noteData.popupType ?? 'primary',
        icon: noteData.icon,
        title: noteData.title,
        staticMessage: noteData.staticMessage,
        dynamicMessage: noteData.dynamicMessage,
        secondeStaticMessage: noteData.secondeStaticMessage,
        buttonText: noteData.buttonText,
        buttonLink: noteData.buttonLink,
        surveyTitle:noteData.surveyTitle,
        surveyLink:noteData.surveyLink
      },
      disableClose: true,
      hasBackdrop: true,
    });

    // Prevent backdrop click from closing the dialog
    dialogRef.backdropClick().subscribe(() => {
      // Do nothing - prevents backdrop click from closing the dialog
    });

    return dialogRef;
  }

  dismissDialog(): void {
    this.closeDialog.emit();
  }

  dismissDialogWithData(data:any): void {
    this.closeDialog.emit(data);
  }
}
