import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { PopupService } from 'src/app/shared/services/popup/popup.service';
import { PopupData } from 'src/app/shared/models/popup.model';
import { RequestService } from '../../services/requests/request-service.service';
import { FileUploader } from 'src/app/shared/models/file-uploader.model';

@Component({
  selector: 'app-suspension-note-reply',
  templateUrl: './suspension-note-reply.component.html',
  styleUrls: ['./suspension-note-reply.component.scss'],
})
export class SuspensionNoteReplyComponent implements OnInit, OnDestroy {
  subscriptions: Subscription[] = [];
  notes: string = '';
  showValidation: boolean = false;
  isLoading: boolean = false;
  uploadedFileIds: string[] = [];
  selectedRequestID: string | null = "";

  fileUploaderConfig: FileUploader = Object.assign(new FileUploader(), {
    multiple: true,
    size: 5120,
    allowedExtensions: ['.pdf', '.doc', '.docx', '.jpg', '.jpeg', '.png'],
    allowedExtensionsText: 'pdf, doc, docx, jpg, jpeg أو png',
    buttonText: 'تصفح الملفات',
  });

  constructor(
    private _requestService: RequestService,
    private _popupService: PopupService,
    private _toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.observeConfirmAction();
    this.observeCancelAction();
    this.getSelectedRequestIdFromLocalStorage();
  }

  getSelectedRequestIdFromLocalStorage(): void {
    this.selectedRequestID = this._requestService.getSelectedRequestIdFromLocalStorage();

    if (this.selectedRequestID) this.getSelectedRequest();
  }

  getSelectedRequest() {
    this.subscriptions.push(
      this._requestService.GetQualificationRequestHeaderByRequestId(this.selectedRequestID as string).subscribe(res => {
        this._requestService.seclectRequest$.next(res);
      }))
  }

  private observeConfirmAction(): void {
    this.subscriptions.push(
      this._popupService.confirmAction.subscribe((_: PopupData) => {
        this.submit();
      })
    );
  }

  private observeCancelAction(): void {
    this.subscriptions.push(
      this._popupService.cancelAction.subscribe((_: PopupData) => {
        this._popupService.dismissDialog();
      })
    );
  }

  onFileUploaded(event: any): void {
    const files: any[] = event?.eventRes?.data ?? [];
    files.forEach(f => { if (f?.id) this.uploadedFileIds.push(f.id); });
  }

  onFileRemoved(event: any): void {
    const files: any[] = event?.eventRes?.data ?? [];
    if (files.length === 0) {
      this.uploadedFileIds = [];
    } else {
      files.forEach(f => {
        if (f?.id) this.uploadedFileIds = this.uploadedFileIds.filter(id => id !== f.id);
      });
    }
  }

  submit(): void {
    if (!this.notes?.trim()) {
      this.showValidation = true;
      this._toastr.warning('لا يمكن الإرسال لوجود بيانات إلزامية غير مكتملة أو غير صحيحة.');
      return;
    }

    // const noteId = localStorage.getItem('suspensionNoteId');
    // if (!noteId) return;

    this.isLoading = true;
    this.subscriptions.push(
      this._requestService.replyToSuspensionNote(this.selectedRequestID as string, this.notes.trim(), this.uploadedFileIds).subscribe({
        next: (res) => {
          this.isLoading = false;
          if (res?.isDone) {
            this._toastr.success('تم إرسال الملاحظات');
            localStorage.removeItem('suspensionNoteId');
            this._popupService.dismissDialog();
            this._requestService.dataIsUpdate.emit();
          } else {
            this._toastr.error(res?.message || 'حدث خطأ أثناء الإرسال');
          }
        },
        error: () => {
          this.isLoading = false;
          this._toastr.error('حدث خطأ أثناء الإرسال');
        }
      })
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(s => s.unsubscribe());
  }
}
