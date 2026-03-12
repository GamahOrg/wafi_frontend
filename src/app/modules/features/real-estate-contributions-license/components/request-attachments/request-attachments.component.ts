import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { FileUploader } from 'src/app/shared/models/file-uploader.model';
import { environment } from 'src/environments/environment';
import { LicenseProjectRequestAttachmentDto } from '../../dataModels/license-project-request-attachment-dto';
import { LicenseProjectRequestAttachmentService } from '../../services/license-project-request-attachment.service';
import { SharedLicenseProjectService } from '../../services/sharedLicenseProject/shared-license-project.service';
import { NextAndPreviusButtonsService } from '../../services/next-and-previous-buttons/next-and-previus-buttons.service';
import { FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ToastrNotificatioService } from 'src/app/core/services/toastr-notification/toastr-notificatio.service';

@Component({
  selector: 'app-request-attachments',
  templateUrl: './request-attachments.component.html',
  styleUrls: ['./request-attachments.component.scss']
})
export class RequestAttachmentsComponent implements OnInit, OnDestroy{
  baseUrl = `${environment.baseURL}/`;
  subscriptions: Subscription[] = [];
  licenseProjectRequestAttachmentDto: LicenseProjectRequestAttachmentDto = new LicenseProjectRequestAttachmentDto();
  singleFileUploaderData: FileUploader = {
    multiple: false,
  } as FileUploader;
  licenseProjectId: string | null = "00000000-0000-0000-0000-000000000000";
  showValidation: boolean = false;
  form = this._formBuilder.group({
    id:[''],
    operationAndMaintenanceAcknowledgment: this._formBuilder.control<boolean | null>(null,[Validators.required]),
    specifiedProtocolsDurationCommitmentFileId:this._formBuilder.control<string | null>(null, [Validators.required]),
    projectMarketingFileId:this._formBuilder.control<string | null>(null, [Validators.required]),

});
  constructor(
    private _licenseProjectRequestAttachmentService: LicenseProjectRequestAttachmentService,
    private _sharedLicenseProjectService: SharedLicenseProjectService,
    private _nextAndPreviusButtonsService: NextAndPreviusButtonsService,
    private _formBuilder: FormBuilder,
    private toastr: ToastrNotificatioService ,
  ) { }
  ngOnInit(): void {
    this.getLicenseProjectIdStorage();
    this.observeTabsButtons();
    this.updateSaveAsDraftBtnIsvisible();
  }


  private getLicenseProjectIdStorage(): void {
    this.licenseProjectId = this._sharedLicenseProjectService.getLicenseProjectIdStorage();
    if(this.licenseProjectId) this.GetByLicenseProjectId();
  }
 
  GetByLicenseProjectId() {
    this.subscriptions.push(
      this._licenseProjectRequestAttachmentService.GetByLicenseProjectId(this.licenseProjectId as string).subscribe(res => {
        if (res) {
          this.licenseProjectRequestAttachmentDto = res as LicenseProjectRequestAttachmentDto;
          
          this.form.patchValue(this.licenseProjectRequestAttachmentDto);
          
        }
      })
    )

  }

  save(moveToNextTab: boolean = false): void {
   
    if (!this.form.valid) {
      this.toastr.showError('نأمل ادخال كل الحقول اللازمة واعادة المحاولة');
      this.showValidation = true;
      return;
    } 
    if(!this.form.controls.operationAndMaintenanceAcknowledgment.value)
    {
      this.toastr.showError("نأمل الموافقة على الاقرار حتي يتم التسجيل ");
     return;
    }
    this.licenseProjectRequestAttachmentDto = this.form.value as LicenseProjectRequestAttachmentDto;
    this.licenseProjectRequestAttachmentDto.licenseProjectId = this.licenseProjectId as string;
    this.licenseProjectRequestAttachmentDto.id = this.licenseProjectRequestAttachmentDto.id ? this.licenseProjectRequestAttachmentDto.id : "00000000-0000-0000-0000-000000000000";
    this.subscriptions.push(
      this._licenseProjectRequestAttachmentService.Save(this.licenseProjectRequestAttachmentDto).subscribe(res => {
        if (res) {
          
          this.licenseProjectRequestAttachmentDto = res as LicenseProjectRequestAttachmentDto;
          if (moveToNextTab) this.moveToNextTab()
        }
      })
    )
  }


  // TabsButtons
  private observeNextButtonIsCliced() {
    this.subscriptions.push(
      this._nextAndPreviusButtonsService.nextButtonIsClicked.subscribe((res: null) => {
        this.save(true)
      })
    )
  }
  private observeSaveAsDraftIsClicked() {
    this.subscriptions.push(
      this._nextAndPreviusButtonsService.saveAsDraftIsClicked.subscribe((res: null) => {
        this.save()
      })
    )
  }
  private observeTabsButtons(): void {
    this.observeNextButtonIsCliced();
    this.observeSaveAsDraftIsClicked()
  }
  private moveToNextTab(): void {
    this._nextAndPreviusButtonsService.moveToNextTab.emit()
  }
  private updateSaveAsDraftBtnIsvisible(): void {
    this._nextAndPreviusButtonsService.saveAsDraftBtnIsvisible.next(true)
  }
  ngOnDestroy(): void {
    this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe())
  }

  onExistSpecifiedProtocolsDurationCommitmentFilesUploaded(filesData: any) {
    if( filesData.eventRes.data.length === 0) {
      this.form.controls.specifiedProtocolsDurationCommitmentFileId.setValue(null);
      return;
    }
    if (!filesData.eventRes.data || !filesData.eventRes.data.length) return;
    filesData.eventRes.data.forEach((data: any) => {
      this.form.controls.specifiedProtocolsDurationCommitmentFileId.setValue(data.id as string);
    });
  }
  onExistMarketingFilesUploaded(filesData: any) {
    if( filesData.eventRes.data.length === 0) {
      this.form.controls.projectMarketingFileId.setValue(null);
      return;
    }
    if (!filesData.eventRes.data || !filesData.eventRes.data.length) return;
    filesData.eventRes.data.forEach((data: any) => {
      this.form.controls.projectMarketingFileId.setValue(data.id as string);
    });
  }
}
