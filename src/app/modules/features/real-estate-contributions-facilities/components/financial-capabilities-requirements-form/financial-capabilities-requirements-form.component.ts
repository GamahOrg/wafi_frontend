import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { PopupComponent } from 'src/app/shared/components/popup/popup.component';
import { financialCapabilityDto, financialCapabilityResponseFE } from 'src/app/modules/features/facilities/dataModels/financial-capability.model';
import { FacilityProfileService } from '../../services/facilityProfile/facility-profile.service';
// import { FileManagementService } from '../../../../../shared/services/fileManagement/file-management.service';
import { FinancialCapabilitiesService } from '../../services/financialCapabilities/financial-capabilities.service';
import { FileUploader } from 'src/app/shared/models/file-uploader.model';
import { FileManagementService } from 'src/app/shared/services/fileManagement/file-management.service';
import { customerResponse } from 'src/app/shared/models/customer.model';
import { UserDataService } from 'src/app/core/services/user-data/user-data.service';
import { DatePipe } from '@angular/common';
import { PopupData } from 'src/app/shared/models/popup.model';
import { PopupService } from 'src/app/shared/services/popup/popup.service';
import { ToastrNotificatioService } from 'src/app/core/services/toastr-notification/toastr-notificatio.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-financial-capabilities-requirements-form',
  templateUrl: './financial-capabilities-requirements-form.component.html',
  styleUrls: ['./financial-capabilities-requirements-form.component.scss']
})
export class FinancialCapabilitiesRequirementsFormComponent implements OnInit, OnDestroy {
  subscriptions: Subscription[] = [];
  financialCapability: financialCapabilityDto = new financialCapabilityDto();

  singleFileUploaderData: FileUploader = {
    multiple: false,
  } as FileUploader;
  mueltiFilesUploaderData: FileUploader = {
    multiple: true
  } as FileUploader;

  financialCapabilitiesRequirementsForm = this._formBuilder.group({
    cpalicenseNumber: ['', [Validators.required]],
    cpaIdentityNumber: ['', [Validators.required]],
    creditRecordIntegrityCertificateDate: [(new Date).toDateString(), [Validators.required]],
    financialStatementDescription: ['', []],
   // certificateOfZakatIncome: []
  })

  get controls() {
    return this.financialCapabilitiesRequirementsForm.controls;
  }

  userData: customerResponse | null = null;
  constructor(
    private _formBuilder: FormBuilder,
    private financialCapabilitiesService: FinancialCapabilitiesService,
    private _userDataService: UserDataService,
    private datePipe: DatePipe,
    private _popupService: PopupService,
    private _filemangementService: FileManagementService,
    private _toastrNotificationService: ToastrNotificatioService,
    private _toastrService: ToastrService,
  ) { }

  ngOnInit(): void {
    this.obseveCustomerData();
    this.observeFinancialCapabilitiesRequirementsForm();
    this.observeFinancialCapabilityObj();
    this.observePopupEvents()
  }

  // popup
  observePopupEvents(): void {
    this.observecancelAction()
    this.observeconfirmAction()
  }

  private observecancelAction() {
    this.subscriptions.push(
      this._popupService.cancelAction.subscribe((res: PopupData) => {
        console.log(res)
      })
    )
  }

  private observeconfirmAction() {
    this.subscriptions.push(
      this._popupService.confirmAction.subscribe((res: PopupData) => {
        console.log(res)
        this.save()
      })
    )
  }

  private closeDialog(): void {
    this._popupService.dismissDialog()
  }

  obseveCustomerData(): void {
    this.subscriptions.push(
      this._userDataService.getCustomerData().subscribe((res: customerResponse | null) => {
        this.userData = res
        // if(this.userData){
        //   this.GetFacilityById();
        // }
      })
    )
  }

  observeFinancialCapabilitiesRequirementsForm(): void {
    this.subscriptions.push(
      this.financialCapabilitiesRequirementsForm.valueChanges.subscribe(changes => {
        this.financialCapability.cpalicenseNumber = this.controls.cpalicenseNumber.value as string;
        this.financialCapability.cpaIdentityNumber = this.controls.cpaIdentityNumber.value as string;
        this.financialCapability.creditRecordIntegrityCertificateDate = this.controls.creditRecordIntegrityCertificateDate.value as any;

       // this.financialCapability.certificateOfZakatIncome = this.controls.certificateOfZakatIncome.value as any;
      })
    )
  }

  observeFinancialCapabilityObj(): void {
    this.subscriptions.push(
      this.financialCapabilitiesService.getFinancialCapabilityObj().subscribe((financialCapability) => {
        if (financialCapability.Id) this.getFinancialCapabilityById(financialCapability.Id);
      })
    )
  }

  getFinancialCapabilityById(id: string) {
    this.subscriptions.push(
      this.financialCapabilitiesService.GetById(id).subscribe((res) => {
        if (res) {
          this.financialCapability = res;
          console.log("this.financialCapability", this.financialCapability)
          this.financialCapability.creditRecordIntegrityCertificateDate = this.datePipe.transform(this.financialCapability.creditRecordIntegrityCertificateDate, 'yyyy-MM-dd') as any;
          this.financialCapabilitiesRequirementsForm.patchValue(this.financialCapability as any);
        }
      })
    )
  }

  save(): void {
    if (this.financialCapabilitiesRequirementsForm?.invalid) {
      this._toastrNotificationService.showError('نأمل ادخال كل الحقول اللازمة واعادة المحاولة');
      this.financialCapabilitiesRequirementsForm?.markAllAsTouched();
      return;
    }
    if (this.userData && this.userData.facilities && this.userData.facilities.length)
      this.financialCapability.facilityId = this.userData?.facilities[0].id as string
    // this.financialCapabilitiesService.SetFinancialCapabilityObj(this.financialCapability);
    // this.dialogRef.close();
    this.subscriptions.push(
      this.financialCapabilitiesService.Save(this.financialCapability).subscribe(res => {
        if (res.isDone && res.data) {
          let response = new financialCapabilityResponseFE(res.data);
          this.financialCapabilitiesService.SetFinancialCapabilityObj(response);
          this.closeDialog();
        }
        // else
        // this._toastrService.error(res.message);
      })
    )
  }

  onCreditRecordIntegrityFileRemoved(fileRemovedData: any) {
    let file = fileRemovedData.eventRes.file;
  }

  onCreditRecordIntegrityFileUploaded(fileRemovedData: any) {
    // if(fileRemovedData.eventRes.event.isTrusted){

    //   let file = fileRemovedData.eventRes.file;
    //   this.subscriptions.push(
    //     this._fileManagementService.UploadMultiple(file).subscribe((res:any)=>{

    //       if(res.data && res.data.length){
    //         this.financialCapability.creditRecordIntegrityCertificateFileId = res.data[0].id;
    //       }
    //     })
    //   )
    // }
    this.financialCapability.creditRecordIntegrityCertificateFileId = fileRemovedData.eventRes.data[0].id;

  }
  deletcreditRecordIntegrityCertificateFile(id: string) {
    this._filemangementService.DeletFile(id).subscribe(res => {
      if (res.isDone) {
        this.financialCapability.creditRecordIntegrityCertificateFileId = null
      }
    })
  }
  // onCertificateOfZakatIncomeFileUploaded(fileRemovedData:any){
  //   this.financialCapability.certificateOfZakatIncome = fileRemovedData.eventRes.data[0].id;
  // }
  onQualificationFinancialStatementFilesUploaded(filesData: any) {
    // if(fileRemovedData.eventRes.event.isTrusted){

    //   let file = fileRemovedData.eventRes.file;
    //   this.subscriptions.push(
    //     this._fileManagementService.UploadMultiple(file).subscribe((res:any)=>{

    //       if(res.data && res.data.length){
    //         if(!this.financialCapability.addedQualificationFinancialStatements)
    //           this.financialCapability.addedQualificationFinancialStatements = [];

    //         this.financialCapability.addedQualificationFinancialStatements.push({
    //           financialStatementFileId: res.data[0].id,
    //           description:res.data[0].fileName,
    //           qualificationFinancialCapabilitiesId:this.financialCapability.id
    //         });
    //       }
    //     })
    //   )
    // }
    if (!filesData.eventRes.data || !filesData.eventRes.data.length) return;

    filesData.eventRes.data.forEach((data: any) => {
      this.financialCapability.addedQualificationFinancialStatements.push({
        financialStatementFileId: data.id,
        description: data.fileName,
        qualificationFinancialCapabilitiesId: this.financialCapability.id
      });
    });
  }
  ngOnDestroy(): void {
    this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe());
  }

}
