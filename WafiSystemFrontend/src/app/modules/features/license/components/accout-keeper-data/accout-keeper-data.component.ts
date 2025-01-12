import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription, forkJoin } from 'rxjs';
import { AccountKeeperDto } from '../../dataModels/account-keeper.dto';
import { environment } from 'src/environments/environment';
import { AccountKeeperService } from '../../services/licenseProjects/account-keeper.service';
import { FormBuilder, Validators } from '@angular/forms';
import { FileUploader } from 'src/app/shared/models/file-uploader.model';
import { SysBankService } from '../../services/sysBank/sys-bank.service';
import { BankDto } from '../../dataModels/bank.dto';
import { ToastrService } from 'ngx-toastr';
import { Configuration } from 'src/app/core/configurations/shared.config';
import { SharedLicenseProjectService } from '../../services/sharedLicenseProject/shared-license-project.service';
import { NextAndPreviusButtonsService } from '../../services/next-and-previous-buttons/next-and-previus-buttons.service';
import { ToastrNotificatioService } from 'src/app/core/services/toastr-notification/toastr-notificatio.service';
import { UserDataService } from 'src/app/core/services/user-data/user-data.service';
import { customerResponse } from 'src/app/shared/models/customer.model';

@Component({
  selector: 'app-accout-keeper-data',
  templateUrl: './accout-keeper-data.component.html',
  styleUrls: ['./accout-keeper-data.component.scss']
})
export class AccoutKeeperDataComponent implements OnInit, OnDestroy {
  subscriptions: Subscription[] = [];
  accountKeeper: AccountKeeperDto = new AccountKeeperDto();
  baseUrl = `${environment.baseURL}/`;
  banks: BankDto[] = [];
  showValidation: boolean = false;
  isExistingValidation:boolean=false;
  licenseProjectId: string | null = "00000000-0000-0000-0000-000000000000";
  userData: customerResponse | null = null;
  constructor(
    private _accountKeeperService: AccountKeeperService,
    private _formBuilder: FormBuilder,
    private _bankSerive: SysBankService,
    private _toastrService: ToastrService,
    private _toastrNotificationService: ToastrNotificatioService,
    private _sharedLicenseProjectService: SharedLicenseProjectService,
    private _nextAndPreviusButtonsService: NextAndPreviusButtonsService,
    private _userDataService: UserDataService
  ) { }

  singleFileUploaderData: FileUploader = {
    multiple: false,
  } as FileUploader;
  accountKeeperForm = this._formBuilder.group({
    id: ['00000000-0000-0000-0000-000000000000', [Validators.required]],
    accountNumber: ['', [Validators.required]],
    bankId: ['', [Validators.required]],
    // accountKeeperName: ['', [Validators.required]],
    accountKeeperMobile: ['', [Validators.required, Validators.pattern(Configuration.validators.PhoneNumber)]],
    accountKeeperTelephone: ['', []],
    accountKeeperEmail: ['', [Validators.required, Validators.email]],
    accountKeeperExtentionNumber: ['', [Validators.required]],
    accountKeeperAgreementFileId: ['', [Validators.required]],
    accountKeeperJobTitle: ['', [Validators.required]],
    accountKeeperFax: ['', [Validators.required]],

  })
  get controls() {
    return this.accountKeeperForm.controls;
  }
  ngOnInit() {
    this.getCustomerData();
    this.getLicenseProjectIdStorage()
    this.observeForm();
    this.loadComponentData();
    this.observeTabsButtons();
    this.updateSaveAsDraftBtnIsvisible();
  }
  getCustomerData() {

    this._userDataService.getCustomerData().subscribe((res: customerResponse | null) => {
      this.userData = res;    
      this.isExistingValidation=this.userData?.isEmployee as boolean;
    })
  }
  private getLicenseProjectIdStorage(): void {
    this.licenseProjectId = this._sharedLicenseProjectService.getLicenseProjectIdStorage();
  }
  localization = {
    title: 'بيانات البنك',
    accountKeeperFax: "رقم الفاكس أمين الحساب",
    // accountKeeperName: 'اسم امين الحساب',
    accountNumber: 'رقم ايبان الحساب',
    bankId: 'البنك',
    accountKeeperMobile: 'جوال امين الحساب',
    accountKeeperTelephone: 'هاتف أمين الحساب',
    accountKeeperEmail: 'بريد الكتروني أمين الحساب',
    accountKeeperExtentionNumber: 'رقم تحويلة امين الحساب',
    accountKeeperAgreementFileId: 'صورة الاتفاقيه',
    accountKeeperJobTitle: 'المسمى الوظيفي للموقع على الاتفاقيه',
    requiredErrorMsg: 'حقل مطلوب',
    bankName: 'اسم البنك',
    selectBankName: 'اختر اسم البنك',
    savedSuccessfully: 'تم الحفظ',
    phoneNumberPattern: 'من فضلك ادخل رقم جوال صحيح',
    PleaseAddAllRequiredFields: 'نأمل ادخال كل الحقول اللازمة واعادة المحاولة',
    emailPattern: 'من فضلك ادخل البريد الإلكتروني صحيح',
  };
  private loadComponentData() {
    const requests = [
      this._accountKeeperService.GetAccountKeeperDetailsByLicenseProjectId(this.licenseProjectId as string),
      this._bankSerive.GetAreasDropDown()
    ];

    const subscriptions = forkJoin(requests).subscribe((results) => {
      this.setResponseToForm(results[0].data as AccountKeeperDto);
      this.banks = results[1].data as BankDto[];
    });

    this.subscriptions.push(subscriptions);
  }
  setResponseToForm(res: AccountKeeperDto): void {
    this.accountKeeperForm.patchValue({ ...res });
    this.accountKeeper = res;
  }
  observeForm(): void {
    this.subscriptions.push(
      this.accountKeeperForm.valueChanges.subscribe(changes => {
        this.accountKeeper = this.accountKeeperForm.value as AccountKeeperDto;
      })
    )
  }
  ngOnDestroy() {
    this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe());
  }
  onFileUploaded(fileData: any) {
    this.accountKeeper.accountKeeperAgreementFileId = fileData.eventRes.data[0].id;
    this.controls.accountKeeperAgreementFileId.setValue(fileData.eventRes.data[0].id);
    this.accountKeeper.accountKeeperAgreementFile = null;
  }
  save(moveToNextTab: boolean = false): void {
    if (!this.accountKeeper.id) this.accountKeeper.id = '00000000-0000-0000-0000-000000000000';
    if(!this.isExistingValidation)
      {
    if (!this.accountKeeperForm.valid) {
      this.showValidation = true;
      this._toastrNotificationService.showError(this.localization.PleaseAddAllRequiredFields);
      this.accountKeeperForm?.markAllAsTouched();
      return;
    }
  }

    this.subscriptions.push(
      this._accountKeeperService.SaveAccountKeeperDetails(this.accountKeeper).subscribe(res => {
        if (res.isDone) {
          this._toastrService.success(this.localization.savedSuccessfully)
          this.setResponseToForm(res.data as AccountKeeperDto);
          if (moveToNextTab) this.moveToNextTab()
        }
        else
          this._toastrService.error(res.message);
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
  private updateSaveAsDraftBtnIsvisible(): void {
    this._nextAndPreviusButtonsService.saveAsDraftBtnIsvisible.next(true)
  }
  private moveToNextTab(): void {
    this._nextAndPreviusButtonsService.moveToNextTab.emit()
  }

}

