import {Component, EventEmitter, Input, Output} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {AngularEditorConfig} from '@kolkov/angular-editor';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-rich-text-editor',
  templateUrl: './rich-text-editor.component.html',
  styleUrls: ['./rich-text-editor.component.scss']
})
export class RichTextEditorComponent {
  subscriptions: Subscription[] = [];
  @Input() id: string = ""
  @Input() form: FormGroup | undefined;
  @Input() placeholder: string | undefined = "Enter text here...";
  @Input() controlName: string = "htmlContent";
  @Output() valueChanged: EventEmitter<string | null> = new EventEmitter()
  editorConfig: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    height: 'auto',
    minHeight: '0',
    maxHeight: 'auto',
    width: 'auto',
    minWidth: '0',
    translate: 'yes',
    enableToolbar: true,
    showToolbar: true,
    defaultParagraphSeparator: '',
    defaultFontName: '',
    defaultFontSize: '',
    fonts: [
      {class: 'arial', name: 'Arial'},
      {class: 'times-new-roman', name: 'Times New Roman'},
      {class: 'calibri', name: 'Calibri'},
      {class: 'comic-sans-ms', name: 'Comic Sans MS'}
    ],
    customClasses: [
      {
        name: 'quote',
        class: 'quote',
      },
      {
        name: 'redText',
        class: 'redText'
      },
      {
        name: 'titleText',
        class: 'titleText',
        tag: 'h1',
      },
    ],
    uploadUrl: 'v1/image',
    // upload: (file: File) => { ... }
    uploadWithCredentials: false,
    sanitize: true,
    toolbarPosition: 'top',
    toolbarHiddenButtons: [
      ['bold', 'italic'],
      ['fontSize']
    ]
  };
  editorForm = this._formBuilder.group({
    htmlContent: []
  })

  constructor(
    private _formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.editorConfig.placeholder = this.placeholder;
    this.observeEditorForm();
  }

  observeEditorForm(): void {
    this.subscriptions.push(
      this.editorForm.valueChanges.subscribe(res => {
        // console.log(res.htmlContent);
        this.valueChanged.emit(res.htmlContent)
      })
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
  }

}
