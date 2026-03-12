import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
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
import { LicenseProjectDDL } from '../../../license/models/license-project-by-facilityid-dto';
import { FacilityShortDto } from '../../../license/models/facility-short-dto';
import {
  ChangeAccountKeeperRequestDetailsDto,
  CreateOrUpdateChangeAccountKeeperRequestDto,
} from '../../models/change-account-keeper-request-dto';
import { environment } from 'src/environments/environment';
import { SysBankService } from 'src/app/shared/services/sysBank/sys-bank.service';
import { BankDto } from 'src/app/shared/models/bank.dto';
import { Configuration } from 'src/app/core/configurations/shared.config';

@Component({
  selector: 'app-update-account-keeper-request',
  templateUrl: './update-account-keeper-request.component.html',
  styleUrls: ['./update-account-keeper-request.component.scss'],
})
export class UpdateAccountKeeperRequestComponent implements OnInit {
  subscriptions: Subscription[] = [];
  baseUrl = `${environment.baseURL}/`;

  licenseProjectRequestId: string = '00000000-0000-0000-0000-000000000000';
  facilityId: string = '00000000-0000-0000-0000-000000000000';
  licenseProjectId: string = '00000000-0000-0000-0000-000000000000';
  banks:BankDto[]=[];
  changeRequestDetails: ChangeAccountKeeperRequestDetailsDto | any;
  facility: FacilityShortDto | undefined = undefined;
  showValidation: boolean = false;
  singleFilesUploaderData: FileUploader = {
    multiple: false,
  } as FileUploader;
  localization = {
    requiredErrorMsg: 'حقل مطلوب',
    phoneNumberPattern: 'من فضلك ادخل رقم جوال صحيح',
    emailPattern: 'من فضلك ادخل البريد الإلكتروني صحيح',
  };
  changeAccountKeeperForm = this._formBuilder.group({
  
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
    reasons: this._formBuilder.control<string | null>(null, [
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
    accountNumber: this._formBuilder.control<string | null>(
      null,
      [Validators.required]
    ),
    bankId :this._formBuilder.control<string | null>(
      null,
      [Validators.required]
    ),
  });
  get controls() {
    return this.changeAccountKeeperForm.controls;
  }
  constructor(
    private _popupService: PopupService,
    private _formBuilder: FormBuilder,
    private _userDataService: UserDataService,
    private _licenseRequestService: LincenseRequestProjectService,
    private _toastrNotificationService: ToastrNotificatioService,
    private _projectRequestLocalStorageService: ProjectRequestLocalStorageService,
    private _changeLicenseProjectAccountKeeperService: ChangeLicenseProjectAccountKeeperService,
     private _sysBankService: SysBankService
  ) {}

  ngOnInit() {
    this.observePopupEvents();
    this.obseveCustomerData();
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
  ObserveSelectedRequest() {
    this.subscriptions.push(
      this._changeLicenseProjectAccountKeeperService.selectedRequest$.subscribe(
        (res) => {
          this.changeRequestDetails = res;
          this.setFormValues(this.changeRequestDetails);
        }
      )
    );
  }
  setFormValues(details: ChangeAccountKeeperRequestDetailsDto) {
    this.changeAccountKeeperForm.patchValue({
      reasons:details.reasons || null,
      accountNumber:details.accountNumber || null,
      bankId: details.bankId || null,
      escrowAccountAgreementwithAlternativeBankId:
        details.escrowAccountAgreementwithAlternativeBank?.id || null,
      clearanceAcknowledgmentFromPreviousBankForProjectId:
        details.clearanceAcknowledgmentFromPreviousBankForProject.id || null,
      letterFromPreviousBankToNewBankId:
        details.letterFromPreviousBankToNewBank?.id || null,
      reportFromPreviousBankOnCurrentAccountStatusId:
        details.reportFromPreviousBankOnCurrentAccountStatus?.id || null,
      accountKeeperEmail: details.accountKeeperEmail || null,
     
      accountKeeperFax: details.accountKeeperFax || null,
      accountKeeperMobile: details.accountKeeperMobile || null,
      accountKeeperJobTitle: details.accountKeeperJobTitle || null,
      accountKeeperExtentionNumber:
        details.accountKeeperExtentionNumber || null,
      accountKeeperTelephone: details.accountKeeperTelephone || null,
      // accountKeeperAgreementFileId:
      //   details.accountKeeperAgreementFileId || null,
    });
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
    var requestPayload = this.changeAccountKeeperForm
      .value as {} as CreateOrUpdateChangeAccountKeeperRequestDto;
    requestPayload.facilityId = this.facilityId;
    requestPayload.id = this.changeRequestDetails?.id;
    this._changeLicenseProjectAccountKeeperService
      .saveChangeLicenseProjectAccountKeeperRequest(requestPayload)
      .subscribe((res: any) => {
        if (res.isDone === true) {
          this._projectRequestLocalStorageService.setSelectedSelectedProjectLicenseRequestIdInLocalStorage(
            res?.data?.licenseProjectRequestId
          );
          this._toastrNotificationService.showSuccess('تم الحفظ');
         
          this._changeLicenseProjectAccountKeeperService.dataIsUpdate.emit();
          this.closeDialog();
        }
      });
  }
 
  escrowAccountAgreementwithAlternativeBankUpload(filesData: any): void {
    if (filesData.eventRes.data.length === 0) {
      this.changeAccountKeeperForm.controls[
        'escrowAccountAgreementwithAlternativeBankId'
      ].setValue(null);
      return;
    }
    if (!filesData.eventRes.data || !filesData.eventRes.data.length) return;
    this.changeAccountKeeperForm.controls[
      'escrowAccountAgreementwithAlternativeBankId'
    ].setValue(filesData.eventRes.data[0].id);
  }
  clearanceAcknowledgmentFromPreviousBankForProjectUpload(
    filesData: any
  ): void {
    if (filesData.eventRes.data.length === 0) {
      this.changeAccountKeeperForm.controls[
        'clearanceAcknowledgmentFromPreviousBankForProjectId'
      ].setValue(null);
      return;
    }
    if (!filesData.eventRes.data || !filesData.eventRes.data.length) return;
    this.changeAccountKeeperForm.controls[
      'clearanceAcknowledgmentFromPreviousBankForProjectId'
    ].setValue(filesData.eventRes.data[0].id);
  }
  letterFromPreviousBankToNewBankUpload(filesData: any): void {
    if (filesData.eventRes.data.length === 0) {
      this.changeAccountKeeperForm.controls[
        'letterFromPreviousBankToNewBankId'
      ].setValue(null);
      return;
    }
    if (!filesData.eventRes.data || !filesData.eventRes.data.length) return;
    this.changeAccountKeeperForm.controls[
      'letterFromPreviousBankToNewBankId'
    ].setValue(filesData.eventRes.data[0].id);
  }
  reportFromPreviousBankOnCurrentAccountStatusUpload(filesData: any): void {
    if (filesData.eventRes.data.length === 0) {
      this.changeAccountKeeperForm.controls[
        'reportFromPreviousBankOnCurrentAccountStatusId'
      ].setValue(null);
      return;
    }
    if (!filesData.eventRes.data || !filesData.eventRes.data.length) return;
    this.changeAccountKeeperForm.controls[
      'reportFromPreviousBankOnCurrentAccountStatusId'
    ].setValue(filesData.eventRes.data[0].id);
  }
  // accountKeeperAgreementFileUpload(filesData: any): void {
  //   if (!filesData.eventRes.data || !filesData.eventRes.data.length) return;
  //   this.changeAccountKeeperForm.controls[
  //     'accountKeeperAgreementFileId'
  //   ].setValue(filesData.eventRes.data[0].id);
  // }
  obseveCustomerData(): void {
    this.subscriptions.push(
      this._userDataService
        .getCustomerData()
        .subscribe((res: customerResponse | null) => {
          this.facilityId = res?.facilities[0]?.id || '';
          this.ObserveSelectedRequest();
        })
    );
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
  private closeDialog(): void {
    this._popupService.dismissDialog();
  }
  ngOnDestroy(): void {
    this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe());
  }
}
