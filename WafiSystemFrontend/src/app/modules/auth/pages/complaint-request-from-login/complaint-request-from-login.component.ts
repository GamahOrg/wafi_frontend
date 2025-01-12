import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ComplaintRequest, ComplaintRequestFileCreateDto, ComplaintRequestTypeDto } from '../../models/complaint-request';
import { LoginService } from '../../services/login/login.service';
import { ToastrNotificatioService } from 'src/app/core/services/toastr-notification/toastr-notificatio.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Configuration } from 'src/app/core/configurations/shared.config';
import { FileUploader } from 'src/app/shared/models/file-uploader.model';
import { CoreResponseDTO } from 'src/app/core/models/core.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-complaint-request-from-login',
  templateUrl: './complaint-request-from-login.component.html',
  styleUrls: ['./complaint-request-from-login.component.scss']
})
export class ComplaintRequestFromLoginComponent implements OnInit, OnDestroy{
  subscriptions: Subscription[] = [];
  complaintRequest ?: ComplaintRequest
  complaintRequestTypes: ComplaintRequestTypeDto[] = [];
  showValidation: boolean = false;
  complaintRequestFileList: ComplaintRequestFileCreateDto[] = [];
  multiFilesUploaderData: FileUploader = {
    multiple: true
  } as FileUploader;

  loginLink: string =
  '/' + Configuration.modules.auth + '/' + Configuration.pages.auth.login;

  constructor(private _loginService: LoginService,
    private _formBuilder: FormBuilder,
    private _router: Router,
    private _toastrNotificationService: ToastrNotificatioService,) {
 
  }

  complaintRequestForm = this._formBuilder.group({
    customerName: this._formBuilder.control<string | null>(null, [Validators.required]),
    nIDNumber: this._formBuilder.control<string | null>(null, [Validators.required]),
    facilityName: this._formBuilder.control<string | null>(null, [Validators.required]),
    commercialRegisterNumber: this._formBuilder.control<string | null>(null, [Validators.required]),
    email: this._formBuilder.control<string | null>(null, [Validators.required,Validators.email]),
    phone: this._formBuilder.control<string | null>(null, [Validators.required, Validators.pattern(Configuration.validators.PhoneNumber),
      Validators.maxLength(10), Validators.minLength(10), Validators.pattern(Configuration.validators.numberOnly)]),
    description: this._formBuilder.control<string | null>(null, [Validators.required]),
    complaintRequestTypeId: this._formBuilder.control<number | null>(null, [Validators.required]),
  })

  get controls() {
    return this.complaintRequestForm.controls;
  }

  ngOnInit() {
    this.getComplaintRequestTypes();
  }



  private getComplaintRequestTypes(): void {
    this.subscriptions.push(
      this._loginService
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
    this.complaintRequest = this.complaintRequestForm.value as ComplaintRequest;
    this.complaintRequest.complaintRequestTypeId=Number(this.complaintRequest.complaintRequestTypeId);
    this.complaintRequest.ComplaintRequestFiles=this.complaintRequestFileList
    if(!this.complaintRequest.ComplaintRequestFiles || this.complaintRequest.ComplaintRequestFiles.length ==0)
      {
        this._toastrNotificationService.showError("نأمل رفع ملفات الشكوي او البلاغ");
        return;
      }
      this.createComplaintRequest();

  }

  private createComplaintRequest() :void
  {
    this.subscriptions.push(
      this._loginService.CreateComplaintRequest(this.complaintRequest as ComplaintRequest).subscribe((res: CoreResponseDTO<any> | null) => {
        if (res && res.isDone) {
          this._toastrNotificationService.showSuccess("تم تقديم الشكوي او البلاغ");
          this.complaintRequestForm.reset();
          this.complaintRequestFileList=[];
          this.showValidation=false;
        }
        else
        {
          this._toastrNotificationService.showError("لم يتم تقديم الشكوي او البلاغ");

        }
      }
        )
    )
  }
  public onExistComplaintFilesUploaded(filesData: any) :void{
    if (!filesData.eventRes.data || !filesData.eventRes.data.length) return;
    if (!this.complaintRequestFileList) this.complaintRequestFileList = [];
    filesData.eventRes.data.forEach((data: any) => {
      this.complaintRequestFileList.push({
        complaintFileId: data.id,
        id: '00000000-0000-0000-0000-000000000000',
        complaintRequestId:'00000000-0000-0000-0000-000000000000',
      });
    });
  }
  ngOnDestroy() {
    this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe());
  }

 
}
