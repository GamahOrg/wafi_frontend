import {Component, Input, OnInit} from '@angular/core';
import {FormGroup} from "@angular/forms";
import {CoreResponseDTO} from "../../../../../../core/models/core.model";
import {SysFileManagerCreateUpdateDto} from "../../../../../../shared/models/sys-file-manager-create-update-dto";
import {FileUploader} from "../../../../../../shared/models/file-uploader.model";
import {environment} from "../../../../../../../environments/environment";

@Component({
  selector: 'app-engineering-consultant-upload',
  templateUrl: './engineering-consultant-upload.component.html',
  styleUrls: ['./engineering-consultant-upload.component.scss']
})
export class EngineeringConsultantUploadComponent implements OnInit {
  @Input() form!: FormGroup;
  @Input() entity!: any;
  @Input() label: string = "";
  @Input() requiredMessage: string = "";
  @Input() propertyName: string = "engineeringConsultantDelegatorSignModelFileId";
  @Input() propertyFile: string = "engineeringConsultantDelegatorSignModelFile";
  baseUrl = `${environment.baseURL}/`;

  uploadConfig: FileUploader = {
    multiple: false,
  } as FileUploader;

  get controls() {
    return this.form.controls;
  }

  ngOnInit(): void {
  }

  onUpload($event: any, removed: boolean = false) {
    if ($event.eventRes.data.length === 0) {
      let controls = this.form?.controls;
      let control = controls[this.propertyName];
      control.setValue(undefined);
      return;
    }
    let result = $event ?
      $event.eventRes as CoreResponseDTO<SysFileManagerCreateUpdateDto[]> : <any>{};
    let controls = this.form?.controls;
    let control = controls[this.propertyName];
    let value = result.data ? result.data[0].id : undefined;
    if (removed)
      this.entity[this.propertyName] = value;
    control.setValue(value);
  }

}
