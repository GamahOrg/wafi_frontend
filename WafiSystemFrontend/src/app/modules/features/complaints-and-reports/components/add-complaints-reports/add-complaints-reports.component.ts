import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ComplaintRequestCreateUpdateDto } from '../../models/complaint-request-create-update-dto';
import { ComplaintRequestTypeDto } from '../../models/complaint-request-type-dto';
import { ComplaintRequestFileCreateDto } from '../../models/complaint-request-file-create-dto';
import { FileUploader } from 'src/app/shared/models/file-uploader.model';
import { ComplaintsReportsService } from '../../services/complaints-reports.service';
import { FormBuilder, Validators } from '@angular/forms';
import { ToastrNotificatioService } from 'src/app/core/services/toastr-notification/toastr-notificatio.service';
import { UserDataService } from 'src/app/core/services/user-data/user-data.service';
import { customerResponse } from 'src/app/shared/models/customer.model';
import { Configuration } from 'src/app/core/configurations/shared.config';
import { PopupService } from 'src/app/shared/services/popup/popup.service';
import { PopupData } from 'src/app/shared/models/popup.model';

@Component({
  selector: 'app-add-complaints-reports',
  templateUrl: './add-complaints-reports.component.html',
  styleUrls: ['./add-complaints-reports.component.scss']
})
export class AddComplaintsReportsComponent implements OnInit, OnDestroy {
  subscriptions: Subscription[] = [];
  complaintRequest?: ComplaintRequestCreateUpdateDto;
  complaintRequestTypes: ComplaintRequestTypeDto[] = [];
  showValidation: boolean = false;
  complaintRequestFileList: ComplaintRequestFileCreateDto[] = [];
  userData: customerResponse | null = null;
  multiFilesUploaderData: FileUploader = {
    multiple: true
  } as FileUploader;
  constructor(private _complaintsReportsService: ComplaintsReportsService,
    private _formBuilder: FormBuilder,
    private _userDataService: UserDataService,
    private _popupService: PopupService,
    private _toastrNotificationService: ToastrNotificatioService,) {

  }

  complaintRequestForm = this._formBuilder.group({
    customerId: this._formBuilder.control<string | null>(null, [Validators.required]),
    customerName: this._formBuilder.control<string | null>(null, [Validators.required]),
    nidNumber: this._formBuilder.control<string | null>(null, [Validators.required]),
    facilityName: this._formBuilder.control<string | null>(null, [Validators.required]),
    commercialRegisterNumber: this._formBuilder.control<string | null>(null, [Validators.required]),
    email: this._formBuilder.control<string | null>(null, [Validators.required, Validators.email]),
    phone: this._formBuilder.control<string | null>(null, [Validators.required, Validators.pattern(Configuration.validators.PhoneNumber),
    Validators.maxLength(10), Validators.minLength(10), Validators.pattern(Configuration.validators.numberOnly)]),
    description: this._formBuilder.control<string | null>(null, [Validators.required]),
    complaintRequestTypeId: this._formBuilder.control<number | null>(null, [Validators.required]),
  })

  get controls() {
    return this.complaintRequestForm.controls;
  }

  ngOnInit() {
    this.obseveCustomerData();
    this.getComplaintRequestTypes();
    this.observePopupEvents();
  }


  private obseveCustomerData(): void {
    this.subscriptions.push(
      this._userDataService.getCustomerData().subscribe((res: customerResponse | null) => {
        this.userData = res
        if (this.userData) {
          this.complaintRequestForm.controls.customerId.setValue(this.userData.id);
          this.complaintRequestForm.controls.customerName.setValue(this.userData.fullName);
          this.complaintRequestForm.controls.nidNumber.setValue(this.userData.nidnumber);
          this.complaintRequestForm.controls.facilityName.setValue(this.userData.facilities[0].facilityName);
          this.complaintRequestForm.controls.commercialRegisterNumber.setValue(this.userData.facilities[0].commercialRegisterNumber as string);
          this.complaintRequestForm.controls.email.setValue(this.userData.email);
          this.complaintRequestForm.controls.phone.setValue(this.userData.mobile1);
        }

      })
    )
  }

  private getComplaintRequestTypes(): void {
    this.subscriptions.push(
      this._complaintsReportsService
        .GetComplaintRequestTypes()
        .subscribe((res: ComplaintRequestTypeDto[] | null) => {
          this.complaintRequestTypes = res as ComplaintRequestTypeDto[];
        })
    );
  }

  public save(): void {
    if (this.complaintRequestForm?.invalid) {
      this.showValidation = true;
      return;
    }
    this.complaintRequest = this.complaintRequestForm.value as ComplaintRequestCreateUpdateDto;
    this.complaintRequest.complaintRequestTypeId = Number(this.complaintRequest.complaintRequestTypeId);
    this.complaintRequest.ComplaintRequestFiles = this.complaintRequestFileList
    if (!this.complaintRequest.ComplaintRequestFiles || this.complaintRequest.ComplaintRequestFiles.length == 0) {
      this._toastrNotificationService.showError("نأمل رفع ملفات الشكوي او البلاغ");
      return;
    }
    this.SaveComplaintRequest();
  }
  private SaveComplaintRequest(): void {
    this.subscriptions.push(
      this._complaintsReportsService.SaveComplaintRequest(this.complaintRequest as ComplaintRequestCreateUpdateDto).subscribe(res => {
        if (res && res.isDone) {
          this._toastrNotificationService.showSuccess("تم تقديم الشكوي او البلاغ");
          this._complaintsReportsService.submitSuccessfullyEventEmitter.emit();
          this.closeDialog();
        }
        else {
          this._toastrNotificationService.showError("لم يتم تقديم الشكوي او البلاغ");

        }
      }
      )
    )
  }
  public onExistComplaintFilesUploaded(filesData: any): void {
    if (!filesData.eventRes.data || !filesData.eventRes.data.length) return;
    if (!this.complaintRequestFileList) this.complaintRequestFileList = [];
    filesData.eventRes.data.forEach((data: any) => {
      this.complaintRequestFileList.push({
        complaintFileId: data.id,
        id: '00000000-0000-0000-0000-000000000000',
        complaintRequestId: '00000000-0000-0000-0000-000000000000',
      });
    });
  }
  ngOnDestroy() {
    this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe());
  }
  // popup
  private observePopupEvents(): void {
    this.observeconfirmAction()
  }

  private observeconfirmAction() {
    this.subscriptions.push(
      this._popupService.confirmAction.subscribe((res: PopupData) => {
        this.save()
      })
    )
  }

  private closeDialog(): void {
    this._popupService.dismissDialog()
  }


}
