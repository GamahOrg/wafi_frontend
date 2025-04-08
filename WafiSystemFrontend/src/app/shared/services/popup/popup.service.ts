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
    return this.dialog.open(PopupComponent, {
      disableClose: true,
      width: '80vw',
      height: '80vh',
      panelClass: data.panelClass,
    });
  }
  updateConfirmationPopupData(
    confirmationData: confirmationPopupData,
    width: string = '600px',
    height: string = '210px'
  ) {
    this.ConfirmpopupData.next(confirmationData);
    return this.dialog.open(ConfirmationPopupComponent, {
      width: width,
      height: height,
      panelClass: confirmationData.panelClass,
      data: {
        id: confirmationData.id,
        staticMessage: confirmationData.staticMessage,
        dynamicMessage: confirmationData.dynamicMessage,
        secondeStaticMessage: confirmationData.secondeStaticMessage,
      },
      disableClose: true,
      backdropClass: 'confirmDialogComponent',
      hasBackdrop: true,
    });
  }
  updateNotePopupData(noteData: notePopupData) {
    this.NotePopupData.next(noteData);
    return this.dialog.open(PopupNoteComponent, {
      width: '300',
      height: '600',
      panelClass: noteData.panelClass,
      data: {
        icon: noteData.icon,
        title: noteData.title,
        staticMessage: noteData.staticMessage,
        dynamicMessage: noteData.dynamicMessage,
        secondeStaticMessage: noteData.secondeStaticMessage,
        buttonText: noteData.buttonText,
        buttonLink: noteData.buttonLink,
      },
      disableClose: true,
    });
  }
  dismissDialog(): void {
    this.closeDialog.emit();
  }

  dismissDialogWithData(data:any): void {
    this.closeDialog.emit(data);
  }
}
