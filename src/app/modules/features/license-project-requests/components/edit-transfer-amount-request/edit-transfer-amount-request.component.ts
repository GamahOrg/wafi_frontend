import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { FileUploader } from 'src/app/shared/models/file-uploader.model';
import { ToastrNotificatioService } from 'src/app/core/services/toastr-notification/toastr-notificatio.service';
import { TransferAmountsBetweenSubaccountsInEscrowaccountRequestService } from '../../services/transfer-amounts-between-subaccounts-in-escrowaccount-request.service';
import { CreateOrUpdateTransferAmountsBetweenSubAccountsInEscrowAccountRequestDto, TransferAmountsBetweenSubAccountsInEscrowAccountRequestDetailsDto } from '../../models/transfer-amount-between-subaccounts-in-escrow-dto';
import { PopupService } from 'src/app/shared/services/popup/popup.service';
import { UserDataService } from 'src/app/core/services/user-data/user-data.service';
import { LincenseRequestProjectService } from '../../services/lincense-request-project.service';
import { ProjectRequestLocalStorageService } from '../../services/project-request-local-storage.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { LicenseProjectDDL } from '../../../license/models/license-project-by-facilityid-dto';
import { FacilityShortDto } from '../../../license/models/facility-short-dto';
import { LicenseProjectRequestTypeEnum } from '../../enums/license-project-request-type.enum';
import { customerResponse } from 'src/app/shared/models/customer.model';
import { Configuration } from 'src/app/core/configurations/shared.config';
import { PopupData } from 'src/app/shared/models/popup.model';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-edit-transfer-amount-request',
  templateUrl: './edit-transfer-amount-request.component.html',
  styleUrls: ['./edit-transfer-amount-request.component.scss']
})
export class EditTransferAmountRequestComponent implements OnInit{
  transferAmountsForm = this._formBuilder.group({
    applicationFormFileId: ['', Validators.required],
    consultingEngineeringId: ['', Validators.required],
    charteredAccountantReportId: ['', Validators.required],
    bankReportId: ['', Validators.required],
  });
  baseUrl = `${environment.baseURL}/`;
  id:string | null= '00000000-0000-0000-0000-000000000000';
  subscriptions: Subscription[] = [];
  licenseProjectRequestId: string = '00000000-0000-0000-0000-000000000000';
  facilityId: string = '00000000-0000-0000-0000-000000000000';
  changeRequestDetails: TransferAmountsBetweenSubAccountsInEscrowAccountRequestDetailsDto | null = null
  facility: FacilityShortDto | undefined = undefined;
  showValidation: boolean = false;
  singleFilesUploaderData: FileUploader = {
    multiple: false,
  } as FileUploader;
  localization = {
    requiredErrorMsg: 'حقل مطلوب',
  };

  constructor(
    private _popupService: PopupService,
    private _formBuilder: FormBuilder,
    private _router: Router,
    private _userDataService: UserDataService,
    private _licenseRequestService: LincenseRequestProjectService,
    private _toastrNotificationService: ToastrNotificatioService,
    private _projectRequestLocalStorageService: ProjectRequestLocalStorageService,
    private transferAmountsService: TransferAmountsBetweenSubaccountsInEscrowaccountRequestService,
    private toastr: ToastrNotificatioService
  ) {}
  get controls() {
    return this.transferAmountsForm.controls;
  }
 ngOnInit() {
    this.getCharteredAccountId();
    this.observePopupEvents();
    this.obseveCustomerData();
  }
  getCharteredAccountId() {
    this.id = this._projectRequestLocalStorageService.getSelectedProjectLicenseRequestIdFromLocalStorage();
    this.ObserveSelectedRequest();
  }
  ObserveSelectedRequest() {
    this.subscriptions.push(
      this.transferAmountsService.selectedRequest$.subscribe(res => {
        this.changeRequestDetails = res;
        console.log(res)
        this.licenseProjectRequestId = this.changeRequestDetails?.licenseProjectRequestId as string;
        if (this.changeRequestDetails) {
          this.populateForm();
        }
      }))
  }
  observePopupEvents(): void {
    this.observecancelAction();
    this.observeconfirmAction();
  }
  private observecancelAction() {
    this.subscriptions.push(
      this._popupService.cancelAction.subscribe((res: PopupData) => {})
    );
  }

  private observeconfirmAction() {
    this.subscriptions.push(
      this._popupService.confirmAction.subscribe((res: PopupData) => {
        this.save();
      })
    );
  }
  private populateForm(): void {
    this.transferAmountsForm.patchValue({
      applicationFormFileId: this.changeRequestDetails?.applicationFormFile?.id || '',
      consultingEngineeringId: this.changeRequestDetails?.consultingEngineering?.id || '',
      charteredAccountantReportId: this.changeRequestDetails?.charteredAccountantReport?.id || '',
      bankReportId: this.changeRequestDetails?.bankReport?.id || '',
    });
  }
  applicationFormFileUpload(filesData: any) {
    this.transferAmountsForm.controls['applicationFormFileId'].setValue(filesData.eventRes.data[0].id);
  }

  consultingEngineeringUpload(filesData: any) {
    this.transferAmountsForm.controls['consultingEngineeringId'].setValue(filesData.eventRes.data[0].id);
  }

  charteredAccountantReportUpload(filesData: any) {
    this.transferAmountsForm.controls['charteredAccountantReportId'].setValue(filesData.eventRes.data[0].id);
  }

  bankReportUpload(filesData: any) {
    this.transferAmountsForm.controls['bankReportId'].setValue(filesData.eventRes.data[0].id);
  }
  save() {
    if (!this.transferAmountsForm.valid) {
      this.showValidation = true;
      return;
    }
    var requestPayload = this.transferAmountsForm
      .value as {} as CreateOrUpdateTransferAmountsBetweenSubAccountsInEscrowAccountRequestDto;
    requestPayload.facilityId = this.facilityId;
    requestPayload.id = this.changeRequestDetails?.id;
    requestPayload.licenseProjectRequestId = this.changeRequestDetails?.licenseProjectRequestId as string
    this.transferAmountsService
      .saveTransferAmountsBetweenSubAccountsInEscrowAccount(requestPayload)
      .subscribe((res: any) => {
        if (res.isDone === true) {
          this.transferAmountsService.dataIsUpdate.emit();
          this._toastrNotificationService.showSuccess('تم الحفظ');
          this.closeDialog();
        }
      });
  }

  obseveCustomerData(): void {
    this.subscriptions.push(
      this._userDataService
        .getCustomerData()
        .subscribe((res: customerResponse | null) => {
          this.facilityId = res?.facilities[0]?.id || '';
        })
    );
  }
  cancelRequest() {
    this._router.navigate([
      `${Configuration.modules.wafi}/${Configuration.modules.licenseProjectRequests}/${Configuration.pages.licenseProjectRequests.licenseProjectRequestList}`,
    ]);
  }
  private closeDialog(): void {
    this._popupService.dismissDialog();
  }
  ngOnDestroy(): void {
    this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe());
  }
}
