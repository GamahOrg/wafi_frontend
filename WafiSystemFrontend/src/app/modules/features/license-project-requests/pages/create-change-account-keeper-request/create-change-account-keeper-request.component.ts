import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ChangeLicenseProjectAccountKeeperService } from '../../services/change-account-keeper-request.service';
import { FileUploader } from 'src/app/shared/models/file-uploader.model';
import { PopupService } from 'src/app/shared/services/popup/popup.service';
import { UserDataService } from 'src/app/core/services/user-data/user-data.service';
import { LincenseRequestProjectService } from '../../services/lincense-request-project.service';
import { ToastrNotificatioService } from 'src/app/core/services/toastr-notification/toastr-notificatio.service';
import { ProjectRequestLocalStorageService } from '../../services/project-request-local-storage.service';
import { Subscription } from 'rxjs';
import { PopupData } from 'src/app/shared/models/popup.model';
import { customerResponse } from 'src/app/shared/models/customer.model';
import { LicenseProjectRequestTypeEnum } from '../../enums/license-project-request-type.enum';
import { BanksDDL, LicenseProjectDDL } from '../../../license/models/license-project-by-facilityid-dto';
import { FacilityShortDto } from '../../../license/models/facility-short-dto';
import { Configuration } from 'src/app/core/configurations/shared.config';
import { CreateOrUpdateChangeAccountKeeperRequestDto } from '../../models/change-account-keeper-request-dto';
import { LicenseProjectDetailsDto } from '../../models/license-project.model';
import { LicenseProjectService } from '../../services/license-project.service';
import { SysBankService } from 'src/app/shared/services/sysBank/sys-bank.service';
import { BankDto } from 'src/app/shared/models/bank.dto';

@Component({
  selector: 'app-create-change-account-keeper-request',
  templateUrl: './create-change-account-keeper-request.component.html',
  styleUrls: ['./create-change-account-keeper-request.component.scss'],
})
export class CreateChangeAccountKeeperRequestComponent implements OnInit {
  subscriptions: Subscription[] = [];
  licenseProjectRequestId: string = '00000000-0000-0000-0000-000000000000';
  bankId:string='00000000-0000-0000-0000-000000000000';
  facilityId: string = '00000000-0000-0000-0000-000000000000';
  licenseProjectId: string = '00000000-0000-0000-0000-000000000000';
  licenseProjects: LicenseProjectDDL[] = [];
  banks:BankDto[]=[];
  facility: FacilityShortDto | undefined = undefined;
  licenseProjectDetails: LicenseProjectDetailsDto | null = null;
  showValidation: boolean = false;
  price?: number;
  singleFilesUploaderData: FileUploader = {
    multiple: false,
  } as FileUploader;
  localization = {
    requiredErrorMsg: 'حقل مطلوب',
    phoneNumberPattern: 'من فضلك ادخل رقم جوال صحيح',
    emailPattern: 'من فضلك ادخل البريد الإلكتروني صحيح',
  };
  changeAccountKeeperForm = this._formBuilder.group({
    licenseProjectId: this._formBuilder.control<string | null>(null, [
      Validators.required,
    ]),
    bankId: this._formBuilder.control<string | null>(null, [
      Validators.required,
    ]),
    reasons: this._formBuilder.control<string | null>(null, [
      Validators.required,
    ]),
    accountNumber: this._formBuilder.control<string | null>(null, [
      Validators.required,
    ]),
    escrowAccountAgreementwithAlternativeBankId: this._formBuilder.control<
      string | null
    >(null, [Validators.required]),
    clearanceAcknowledgmentFromPreviousBankForProjectId:
      this._formBuilder.control<string | null>(null, [Validators.required]),
    letterFromPreviousBankToNewBankId: this._formBuilder.control<string | null>(
      null,
      [Validators.required]
    ),
    reportFromPreviousBankOnCurrentAccountStatusId: this._formBuilder.control<
      string | null
    >(null, [Validators.required]),
    accountKeeperEmail: this._formBuilder.control<string | null>(null, [
      Validators.required,
      Validators.email,
    ]),
    accountKeeperFax: this._formBuilder.control<string | null>(null, [
      Validators.required,
    ]),
    accountKeeperMobile: this._formBuilder.control<string | null>(null, [
      Validators.required,
      Validators.pattern(Configuration.validators.PhoneNumber)
    ]),
    accountKeeperJobTitle: this._formBuilder.control<string | null>(null, [
      Validators.required,
    ]),
    accountKeeperExtentionNumber: this._formBuilder.control<string | null>(
      null,
      [Validators.required]
    ),
    accountKeeperTelephone: this._formBuilder.control<string | null>(null, [
      Validators.required,
    ]),
   
  });
  get controls() {
    return this.changeAccountKeeperForm.controls;
  }
  constructor(
    private _popupService: PopupService,
    private _formBuilder: FormBuilder,
    private _router: Router,
    private _userDataService: UserDataService,
    private _licenseRequestService: LincenseRequestProjectService,
    private _toastrNotificationService: ToastrNotificatioService,
    private _projectRequestLocalStorageService: ProjectRequestLocalStorageService,
    private _changeLicenseProjectAccountKeeperService: ChangeLicenseProjectAccountKeeperService,
    private _licenseProjectService: LicenseProjectService,
    private _sysBankService: SysBankService
  ) {}

  ngOnInit() {
    this.observePopupEvents();
    this.obseveCustomerData();
    this.observePrice();
    this.loadBanks();
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
      this._licenseRequestService.getLicenseProjectRequestPrice(this.changeAccountKeeperForm.controls.licenseProjectId.value as string , LicenseProjectRequestTypeEnum.ChangeAccountKeeper).subscribe((res: any) => {
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
  save() {
    if (!this.changeAccountKeeperForm.valid) {
      this.showValidation = true;
      return;
    }
    debugger
    var requestPayload = this.changeAccountKeeperForm
      .value as {} as CreateOrUpdateChangeAccountKeeperRequestDto;
    requestPayload.facilityId = this.facilityId;
    requestPayload.bankId = this.changeAccountKeeperForm.controls.bankId.value ?? "";
    this._changeLicenseProjectAccountKeeperService
      .saveChangeLicenseProjectAccountKeeperRequest(requestPayload)
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
  
  escrowAccountAgreementwithAlternativeBankUpload(filesData: any): void {
    if (!filesData.eventRes.data || !filesData.eventRes.data.length) return;
    this.changeAccountKeeperForm.controls[
      'escrowAccountAgreementwithAlternativeBankId'
    ].setValue(filesData.eventRes.data[0].id);
  }
  clearanceAcknowledgmentFromPreviousBankForProjectUpload(
    filesData: any
  ): void {
    if (!filesData.eventRes.data || !filesData.eventRes.data.length) return;
    this.changeAccountKeeperForm.controls[
      'clearanceAcknowledgmentFromPreviousBankForProjectId'
    ].setValue(filesData.eventRes.data[0].id);
  }
  letterFromPreviousBankToNewBankUpload(filesData: any): void {
    if (!filesData.eventRes.data || !filesData.eventRes.data.length) return;
    this.changeAccountKeeperForm.controls[
      'letterFromPreviousBankToNewBankId'
    ].setValue(filesData.eventRes.data[0].id);
  }
  reportFromPreviousBankOnCurrentAccountStatusUpload(filesData: any): void {
    if (!filesData.eventRes.data || !filesData.eventRes.data.length) return;
    this.changeAccountKeeperForm.controls[
      'reportFromPreviousBankOnCurrentAccountStatusId'
    ].setValue(filesData.eventRes.data[0].id);
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
        LicenseProjectRequestTypeEnum.ChangeAccountKeeper
      )
      .subscribe((response: any) => {
        this.licenseProjects = response || [];
      });
  }
  loadBanks() {
    this._sysBankService.GetBankListDropDown().subscribe(
      (response) => {
        this.banks = response.data || [];
      },
      (error) => {
        console.error('Error fetching banks:', error);
      }
    );
  }
  onLicenseProjectChange() {
   let licenseProjectId=this .changeAccountKeeperForm.controls.licenseProjectId.value
   
    if (!licenseProjectId) {
      this.licenseProjectDetails = null;
      return;
    }
  
    this._licenseProjectService.getLicenseProjectDetails(licenseProjectId).subscribe(
      (res) => {
        this.licenseProjectDetails = res;
      },
      (error) => {
        console.error('Error fetching project details', error);
        this.licenseProjectDetails = null;
      }
    );
  }
  cancelRequest() {
    this._router.navigate([
      `${Configuration.modules.wafi}/${Configuration.modules.licenseProjectRequests}/${Configuration.pages.licenseProjectRequests.licenseProjectRequestList}`,
    ]);
  }
  redirctToLicenseRequestDetails(): void {
    this._router.navigate([
      `${Configuration.modules.wafi}/${Configuration.modules.licenseProjectRequests}/${Configuration.pages.licenseProjectRequests.accountKeeperRequestSummary}`,
    ]);
  }
  private closeDialog(): void {
    this._popupService.dismissDialog();
  }
  ngOnDestroy(): void {
    this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe());
  }
}
