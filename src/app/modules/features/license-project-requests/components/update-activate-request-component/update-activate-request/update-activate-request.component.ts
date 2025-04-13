import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { ToastrNotificatioService } from 'src/app/core/services/toastr-notification/toastr-notificatio.service';
import { FileUploader } from 'src/app/shared/models/file-uploader.model';
import { PopupService } from 'src/app/shared/services/popup/popup.service';
import { PopupData } from 'src/app/shared/models/popup.model';
import { licenseActivationRequestDetailsDto } from 'src/app/modules/features/license/models/license-activation-request-details-dto';
import { environment } from 'src/environments/environment';
import { ReactivateLicenseService } from '../../../services/reactivate-license.service';
import { FileManagementService } from 'src/app/shared/services/fileManagement/file-management.service';

@Component({
  selector: 'app-update-activate-request',
  templateUrl: './update-activate-request.component.html',
  styleUrls: ['./update-activate-request.component.scss']
})
export class UpdateActivateRequestComponent implements OnInit, OnDestroy {
  form!: FormGroup;
  subscriptions: Subscription[] = [];
  showValidation: boolean = false;
  projectActiveRequestDetails: licenseActivationRequestDetailsDto | any;
  projectId: string | null = "";
  baseUrl = `${environment.baseURL}/`;
  localization = {
    requiredErrorMsg: 'حقل مطلوب',
  };
  // @Input() licenseProjectRequestId: string = '00000000-0000-0000-0000-000000000000';
  // @Input() justificationsAndReasons: string = '';
  licenseProjectActivationRequestFiles: any[] = [];

  mueltiFilesUploaderData: FileUploader = {
    multiple: true,
  } as FileUploader;
  constructor(
    private _formBuilder: FormBuilder,
    private reactivateLicenseService: ReactivateLicenseService,
    private _toastrNotificationService: ToastrNotificatioService,
    private _popupService: PopupService,
    private _filemangementService: FileManagementService,
  ) {

  }
  ngOnInit(): void {
    this.observeConfirmAction();
    this.form = this._formBuilder.group({
      id: ['', Validators.required],
      justificationsAndReasons: ['', Validators.required],
    });
    this.ObserveSelectedRequest();
  }
  deletFile(id: any) {
    this._filemangementService.DeletFile(id).subscribe(res => {
      console.log("Deleted res", res)
    })
  }
  private observeConfirmAction() {
    this.subscriptions.push(
      this._popupService.confirmAction.subscribe((res: PopupData) => {
        this.save();
      })
    );
  }
  ObserveSelectedRequest() {
    this.subscriptions.push(
      this.reactivateLicenseService.selectedRequest$.subscribe((res: licenseActivationRequestDetailsDto | null) => {
        this.projectActiveRequestDetails = res;
        if (res) {
          this.form.patchValue(res);
          // this.form.get('licenseProjectRequestId')?.setValue(res.id)
          // this.form.get('justificationsAndReasons')?.setValue(res.justificationsAndReasons) 
          if(res.licenseProjectActivationRequestFiles.length > 0) {
            res.licenseProjectActivationRequestFiles.forEach(element => {
              this.licenseProjectActivationRequestFiles.push({
                documentFileId: element.id
              });
            });         

          }       
        }       
      })
    )
  }
  save(): void {

    if (this.form.invalid) {
      this.showValidation = true;
      return;
    }

    const requestPayload: any = {
      id: this.form.get('id')?.value,
      justificationsAndReasons: this.form.get('justificationsAndReasons')?.value,
      licenseProjectActivationRequestFiles: this.licenseProjectActivationRequestFiles
    };

    this.reactivateLicenseService.SaveReactivateLicenseREquest(requestPayload).subscribe((res: any) => {
      if (res.isDone === true) {
        this._toastrNotificationService.showSuccess('تم التعديل');
        this.reactivateLicenseService.selectedRequest$.next(res.data);
        this.closeDialog();
      }
    })
  }
  onLicenseProjectActivationRequestFiles(filesData: any): void {
    if (!filesData.eventRes.data || !filesData.eventRes.data.length) return;

    if (!this.licenseProjectActivationRequestFiles) {
      this.licenseProjectActivationRequestFiles = [];
    }

    filesData.eventRes.data.forEach((data: any) => {
      this.licenseProjectActivationRequestFiles.push({
        documentFileId: data.id
      });
    });
  }
  private closeDialog(): void {
    this._popupService.dismissDialog();
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }
}
