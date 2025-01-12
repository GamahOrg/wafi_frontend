import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { RequestNotesData } from '../../models/request-notes-data.model';
import { RequestNotesService } from '../../services/requestNotes/request-notes.service';

@Component({
  selector: 'app-editor-request-notes-only',
  templateUrl: './editor-request-notes-only.component.html',
  styleUrls: ['./editor-request-notes-only.component.scss']
})
export class EditorRequestNotesOnlyComponent {
  subscriptions: Subscription[] = [];
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

}
