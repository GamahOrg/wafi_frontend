import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { FileUploader } from 'src/app/shared/models/file-uploader.model';
import { ToastrNotificatioService } from 'src/app/core/services/toastr-notification/toastr-notificatio.service';
import { TransferAmountsBetweenSubaccountsInEscrowaccountRequestService } from '../../services/transfer-amounts-between-subaccounts-in-escrowaccount-request.service';
import { CreateOrUpdateTransferAmountsBetweenSubAccountsInEscrowAccountRequestDto } from '../../models/transfer-amount-between-subaccounts-in-escrow-dto';
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

@Component({
  selector: 'app-create-transfer-amounts-between-subaccounts-in-escrow-account',
  templateUrl: './create-transfer-amounts-between-subaccounts-in-escrow-account.component.html',
  styleUrls: ['./create-transfer-amounts-between-subaccounts-in-escrow-account.component.scss']
})
export class CreateTransferAmountsBetweenSubaccountsInEscrowAccountComponent {
  transferAmountsForm = this._formBuilder.group({
    licenseProjectId: ['', Validators.required],
    applicationFormFileId: ['', Validators.required],
    consultingEngineeringId: ['', Validators.required],
    charteredAccountantReportId: ['', Validators.required],
    bankReportId: ['', Validators.required],
  });

  subscriptions: Subscription[] = [];
  price?:number
  licenseProjectRequestId: string = '00000000-0000-0000-0000-000000000000';
  facilityId: string = '00000000-0000-0000-0000-000000000000';
  licenseProjectId: string = '00000000-0000-0000-0000-000000000000';
  licenseProjects: LicenseProjectDDL[] = [];
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
    this.observePopupEvents();
    this.obseveCustomerData();
    this.observePrice();
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
  private observePrice(): void {
    this.subscriptions.push(
      this._licenseRequestService.getLicenseProjectRequestPrice(this.transferAmountsForm.controls.licenseProjectId.value as string , LicenseProjectRequestTypeEnum.TransferAmountsBetweenSubAccountsInEscrowAccount).subscribe((res: any) => {
        this.price = res;
      })
    )
  }
  private observeconfirmAction() {
    this.subscriptions.push(
      this._popupService.confirmAction.subscribe((res: PopupData) => {
        this.save();
      })
    );
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
    this.transferAmountsService
      .saveTransferAmountsBetweenSubAccountsInEscrowAccount(requestPayload)
      .subscribe((res: any) => {
        if (res.isDone === true) {
          this._projectRequestLocalStorageService.setSelectedSelectedProjectLicenseRequestIdInLocalStorage(
            res?.data?.licenseProjectRequestId
          );
          this._toastrNotificationService.showSuccess('تم الحفظ');
          this.redirctToLicenseRequestDetails();
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
          this.getLicenseProjectByType();
        })
    );
  }
  getLicenseProjectByType(): void {
    this._licenseRequestService
      .getLicenseProjectByType(
        this.facilityId,
        LicenseProjectRequestTypeEnum.TransferAmountsBetweenSubAccountsInEscrowAccount
      )
      .subscribe((response: any) => {
        this.licenseProjects = response || [];
      });
  }
  cancelRequest() {
    this._router.navigate([
      `${Configuration.modules.wafi}/${Configuration.modules.licenseProjectRequests}/${Configuration.pages.licenseProjectRequests.licenseProjectRequestList}`,
    ]);
  }
  redirctToLicenseRequestDetails(): void {
    this._router.navigate([
      `${Configuration.modules.wafi}/${Configuration.modules.licenseProjectRequests}/${Configuration.pages.licenseProjectRequests.transferAmountsBetweenSubaccountsInEscrowAccountSummary}`,
    ]);
  }
  private closeDialog(): void {
    this._popupService.dismissDialog();
  }
  ngOnDestroy(): void {
    this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe());
  }
}
