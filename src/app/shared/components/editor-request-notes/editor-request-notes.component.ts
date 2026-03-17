import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { RequestNotesService } from '../../services/requestNotes/request-notes.service';
import { RequestNotesData } from '../../models/request-notes-data.model';
import { FileUploader } from '../../models/file-uploader.model';
@Component({
  selector: 'app-editor-request-notes',
  templateUrl: './editor-request-notes.component.html',
  styleUrls: ['./editor-request-notes.component.scss']
})
export class EditorRequestNotesComponent implements OnInit, OnDestroy {
  subscriptions: Subscription[] = [];
  
  multipleFileUploaderData: FileUploader = {
    multiple: true,
  } as FileUploader;

  Ids: string[] = [];

  feedbackForm = this._formBuilder.group({
    IsWithNotes: ['true', [Validators.requiredTrue]],
    notes: ['']
  })
  get isWithNotes(): FormControl {
    return this.feedbackForm.controls.IsWithNotes as FormControl
  }
  constructor(
    private _formBuilder: FormBuilder,
    private _requestNotesService: RequestNotesService) { }

  ngOnInit(): void {
    this.ObservefeedbackFormValueChanges()
  }
  ObservefeedbackFormValueChanges(): void {
    this.feedbackForm.valueChanges.subscribe(changes => {
      console.log("changes", changes)
      if (this.isWithNotes.value == 'false') {
        this.feedbackForm.get('notes')?.setValue('', { emitEvent: false })
      }
      this.updateRequestNotes()
    })
  }
  updateRequestNotes() {
    // this.isWithNotes.value=='true' ? true : false
    this._requestNotesService.RequestNotes$.next(this.feedbackForm.value as RequestNotesData)
  }
  onValueChange(value: string | null) {
    console.log("onValueChange", value)
    this.feedbackForm.controls.notes.setValue(value)
  }
  // submitBasicInfoForm(): void {
  //   this._popupService.closeDialog.emit()
  //   this._toastrService.success("تم إرسال الملاحظات بنجاح!")
  // }
  resetForm(): void {
    this.feedbackForm.reset()
  }
  ngOnDestroy(): void {
    this.resetForm()
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
  }


  onLicenseProcessingLogFile(filesData: any) {
    if (filesData.eventRes.data.length == 0) {
      this.Ids = [];
      this._requestNotesService.setFilesIds(this.Ids);
      return;
    }
    if (!filesData.eventRes.data || !filesData.eventRes.data.length) return;
    // this._requestNotesService.setFilesIds(filesData.eventRes.data);
    filesData.eventRes.data.forEach((data: any) => {
      this.Ids.push(data.id);
    });
    if (this.Ids != null && this.Ids.length > 0) {
      this._requestNotesService.setFilesIds(this.Ids);
    }
  }


}
