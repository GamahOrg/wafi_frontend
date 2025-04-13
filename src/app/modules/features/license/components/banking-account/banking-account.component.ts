import { Component } from '@angular/core';
import { BankingAccountDto } from '../../dataModels/banking-account-dto';
import { Subscription, forkJoin } from 'rxjs';
import { ProjectBasicDataService } from '../../services/licenseProjects/project-basic-data.service';
import { ToastrService } from 'ngx-toastr';
import { SharedLicenseProjectService } from '../../services/sharedLicenseProject/shared-license-project.service';
import { NextAndPreviusButtonsService } from '../../services/next-and-previous-buttons/next-and-previus-buttons.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Configuration } from 'src/app/core/configurations/shared.config';
import { SysBankService } from '../../services/sysBank/sys-bank.service';
import { BankDto } from '../../dataModels/bank.dto';
import { ToastrNotificatioService } from 'src/app/core/services/toastr-notification/toastr-notificatio.service';
import { customerResponse } from 'src/app/shared/models/customer.model';
import { UserDataService } from 'src/app/core/services/user-data/user-data.service';

@Component({
  selector: 'app-banking-account',
  templateUrl: './banking-account.component.html',
  styleUrls: ['./banking-account.component.scss'],
})
export class BankingAccountComponent {
  licenseProjectId: string = '';
  bankingAccountDto!: BankingAccountDto;
  banks: BankDto[] = [];
  subscriptions: Subscription[] = [];
  showValidation: boolean = false;
  isExistingValidation:boolean=false;
  userData: customerResponse | null = null;
  licenseProjectBankingAccountForm = this._formBuilder.group({
    accountNumber: this._formBuilder.control<string | null>(null, [
      Validators.required,
    ]),
    bankAccountDelegatorName: this._formBuilder.control<string | null>(null, [
      Validators.required,
    ]),
    bankId: this._formBuilder.control<string | null>(null, [
      Validators.required,
    ]),
    bankAccountDelegatorEmail: this._formBuilder.control<string | null>(null, [
      Validators.required,
      Validators.email,
    ]),
    bankAccountDelegatorMobile: this._formBuilder.control<string | null>(null, [
      Validators.required,
      Validators.pattern(Configuration.validators.PhoneNumber),
    ]),
  });
  localization = {
    title: 'الحساب البنكي',
    bankName: 'اسم البنك',
    accountNumber: 'رقم الحساب البنكي',
    bankAccountDelegatorName: 'اسم المفوض ',
    bankAccountDelegatorEmail: 'البريد الإلكتروني للمفوض',
    bankAccountDelegatorMobile: 'رقم جوال المفوض',
    selectBankName: 'اختر بنك',
    requiredErrorMsg: 'حقل مطلوب',
    yes: 'نعم',
    no: 'لا',
    savedSuccessfully: 'تم الحفظ',
    phoneNumberPattern: 'من فضلك ادخل رقم جوال صحيح',
    emailPattern: 'من فضلك ادخل البريد الإلكتروني صحيح',
    PleaseAddAllRequiredFields: 'نأمل ادخال كل الحقول اللازمة واعادة المحاولة',
  };
  constructor(
    private _projectBasicDataService: ProjectBasicDataService,
    private _sharedLicenseProjectService: SharedLicenseProjectService,
    private _nextAndPreviusButtonsService: NextAndPreviusButtonsService,
    private _formBuilder: FormBuilder,
    private _bankSerive: SysBankService,
    private _toastrNotificationService: ToastrNotificatioService,
    private _userDataService: UserDataService,
    private _toastrService: ToastrService,
  ) {}

  ngOnInit(): void {
    this. getCustomerData() ;
    this.getLicenseProjectIdStorage();
    this.GetByLicenseProjectId();
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
    this.licenseProjectId =
      this._sharedLicenseProjectService.getLicenseProjectIdStorage() as string;
  }
  GetByLicenseProjectId() {
    if (this.licenseProjectId) {
      const requests = [
        this._projectBasicDataService.GetBankingAccountByLicenseProjectId(
          this.licenseProjectId as string
        ),
        this._bankSerive.GetAreasDropDown(),
      ];

      const subscriptions = forkJoin(requests).subscribe((results) => {
        this.bankingAccountDto = results[0].data as BankingAccountDto;
        this.licenseProjectBankingAccountForm.patchValue(
          this.bankingAccountDto
        );
        this.banks = results[1].data as BankDto[];
      });

      this.subscriptions.push(subscriptions);
    }
  }
  get controls() {
    return this.licenseProjectBankingAccountForm.controls;
  }

  save(moveToNextTab: boolean = false): void {
    if(!this.isExistingValidation){
    if (!this.licenseProjectBankingAccountForm.valid) {
      this.showValidation = true;
      this._toastrNotificationService.showError(
        this.localization.PleaseAddAllRequiredFields
      );
      this.licenseProjectBankingAccountForm?.markAllAsTouched();
      return;
    }
    }
    this.bankingAccountDto = this.licenseProjectBankingAccountForm
      .value as BankingAccountDto;
    this.bankingAccountDto.id = this.licenseProjectId;
    this.subscriptions.push(
      this._projectBasicDataService
        .SaveBankingAccounAsync(this.bankingAccountDto)
        .subscribe((res) => {
          if (res) {
            this._toastrService.success(this.localization.savedSuccessfully)
            this.bankingAccountDto = res as BankingAccountDto;
            if (moveToNextTab) this.moveToNextTab();
          }
        })
    );
  }

  // TabsButtons
  private observeNextButtonIsCliced() {
    this.subscriptions.push(
      this._nextAndPreviusButtonsService.nextButtonIsClicked.subscribe(
        (res: null) => {
          this.save(true);
        }
      )
    );
  }
  private observeSaveAsDraftIsClicked() {
    this.subscriptions.push(
      this._nextAndPreviusButtonsService.saveAsDraftIsClicked.subscribe(
        (res: null) => {
          this.save();
        }
      )
    );
  }
  private observeTabsButtons(): void {
    this.observeNextButtonIsCliced();
    this.observeSaveAsDraftIsClicked();
  }
  private moveToNextTab(): void {
    this._nextAndPreviusButtonsService.moveToNextTab.emit();
  }
  private updateSaveAsDraftBtnIsvisible(): void {
    this._nextAndPreviusButtonsService.saveAsDraftBtnIsvisible.next(true);
  }
  ngOnDestroy(): void {
    this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe());
  }
}
