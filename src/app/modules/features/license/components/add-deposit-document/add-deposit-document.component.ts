import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import {
  AddUpdateLicenseProjectDepositDto,
  LicenseProjectDepositDocumentMainItemEnum,
  MainItemsDto,
  SysSettingsDto,
} from '../../models/license-deposit-document-model/add-update-deposit-document-dto';
import { SharedLicenseProjectService } from '../../services/sharedLicenseProject/shared-license-project.service';
import { LicenseProjectBuyerService } from '../../services/license-project-buyer.service';
import { Subscription } from 'rxjs';
import { PopupService } from 'src/app/shared/services/popup/popup.service';
import { LicenseDepositDocumentService } from '../../services/license-deposit-document.service';
import { ToastrNotificatioService } from 'src/app/core/services/toastr-notification/toastr-notificatio.service';
import {
  BuyerBusinessPaymentInstallementsDto,
  LicenseProjectAccountsDto,
  LicenseProjectBuyerDetailsDto,
  LicenseProjectBuyerLookUpDto,
  LicenseProjectBuyerPaymentTypeDto,
  LicenseProjectBuyerTypeEnum,
} from '../../dataModels/license-project-buyer-dto';
import { PopupData } from 'src/app/shared/models/popup.model';
import { PeriodicCharteredAccountantReportService } from '../../services/periodic-chartered-accountant-report.service';
import { SysDepositTypeDto } from '../../models/periodic-chartered-accountant-report-details-dto';
import { LicenseProjectBuyerPaymentTypeEnum } from '../../enums/unit-status.enum';
import { SysBank } from '../../models/license-project.model';
import { SysBankService } from '../../services/sysBank/sys-bank.service';
import { BankDto } from 'src/app/shared/models/bank.dto';

@Component({
  selector: 'app-add-deposit-document',
  templateUrl: './add-deposit-document.component.html',
  styleUrls: ['./add-deposit-document.component.scss'],
})
export class AddDepositDocumentComponent implements OnInit {
  licenseBuyerTypeEnum = LicenseProjectBuyerTypeEnum;
  mainItems: LicenseProjectDepositDocumentMainItemEnum | null = null;
  subscriptions: Subscription[] = [];
  nidNumber: string = '';
  licenseProjectAccounts: LicenseProjectAccountsDto =
    {} as LicenseProjectAccountsDto;
  licenseProjectId: string = '00000000-0000-0000-0000-000000000000';
  sysDepositTypeList: SysDepositTypeDto[] = [];
  licenseProjectBuyerId: string | null = null;
  buyerDto: LicenseProjectBuyerLookUpDto[] | null = [];
  selectedBuyer: LicenseProjectBuyerLookUpDto | null = null;
  selectedBuyerType: LicenseProjectBuyerDetailsDto | null = null;
  buyerDetailsDto: LicenseProjectBuyerDetailsDto[] | null = null;
  mainItemsDto: MainItemsDto[] = [];
  sysSettings: SysSettingsDto[] = [];
  licenseProjectDepositDocumentMainItemEnum =
    LicenseProjectDepositDocumentMainItemEnum;
  licenseBaymentType: LicenseProjectBuyerPaymentTypeDto[] = [];
  administrativeAndMarketingAccountRatio: number = 0;
  accountRatioForSavingsAccountRatio: number = 0;
  constructionCostsRatio: number = 0;
  banksDto: BankDto[] = [];
  licenseProjectBuyerPaymentTypeEnum = LicenseProjectBuyerPaymentTypeEnum;
  showOtherField: boolean = false;
  showDescriptionField: boolean = false;
  showValidation: boolean = false;
  showBuyerDetails: boolean = false;
  showBuyerType: boolean = false;
  showBankTypes: boolean = false;

  formGroup = this.fb.group({
    batchNumber: [''],
    licenseProjectBuyer: [''],
    statment: ['', Validators.required],
    mianItemDescription: [''],
    amount: [0, [Validators.required, Validators.min(0.01)]],
    referenceNumber: ['', Validators.required],
    depositDate: ['', Validators.required],
    mainItemId: [null as number | null, Validators.required],
    sysDepositTypeId: [null as number | null, Validators.required],
    checkNumber: [null, Validators.required],
    escrowAccountAmount: [0],
    administrativeAndMarketingAmount: [0, Validators.required],
    constructionCostsAmount: [0, Validators.required],
    licenseProjectBuyerId: [null],
    bankId: [null],
    paymentTypeId: [0],
    installmentId: [null],
  });

  buyerBusinessPaymentInstallementsList:
    | BuyerBusinessPaymentInstallementsDto[]
    | null = null;

  constructor(
    private fb: FormBuilder,
    private _popupService: PopupService,
    private _toastrNotificationService: ToastrNotificatioService,
    public dialogRef: MatDialogRef<AddUpdateLicenseProjectDepositDto>,
    private _sharedLicenseProjectService: SharedLicenseProjectService,
    private _licenseProjectBuyerService: LicenseProjectBuyerService,
    private cdr: ChangeDetectorRef,
    private _sysBank: SysBankService,
    private _licenseDepositDocument: LicenseDepositDocumentService,
    private _periodicCharteredAccountantReportService: PeriodicCharteredAccountantReportService,
  ) {}

  get controls() {
    return this.formGroup.controls;
  }

  ngOnInit(): void {
    this.observePopupEvents();
    this.getMainItems();
    this.getSysDepositType();
    this.getLicenseProjectIdStorage();
    this.GetCalcRatioSettingForAccounts();
  }

  calcAccounts() {
    const amount = this.controls.amount.value || 0;
    if (
      LicenseProjectDepositDocumentMainItemEnum.collectionFromClients ===
      this.formGroup.value.mainItemId
    ) {
      let constructionCostsAmount = amount * this.constructionCostsRatio;
      this.formGroup.patchValue({
        escrowAccountAmount:
          constructionCostsAmount * this.accountRatioForSavingsAccountRatio,
        administrativeAndMarketingAmount:
          amount * this.administrativeAndMarketingAccountRatio,
        constructionCostsAmount:
          constructionCostsAmount -
          constructionCostsAmount * this.accountRatioForSavingsAccountRatio,
      });
    } else {
      this.formGroup.patchValue({
        escrowAccountAmount: 0,
        administrativeAndMarketingAmount: 0,
        constructionCostsAmount: 0,
      });
    }
    this.cdr.detectChanges();
  }

  private getBanks() {
    this._sysBank.GetBankDropDown().subscribe((res) => {
      if (res.isDone) {
        this.banksDto = res.data as BankDto[];
      }
    });
  }

  private getPaymentType() {
    this._licenseProjectBuyerService
      .getLicenseProjectBuyerPaymentTypes()
      .subscribe((res) => {
        if (res) {
          this.licenseBaymentType = res;
        }
      });
  }

  onLicenseProjectBuyerTypeIdChange(event: Event) {
    const selectedValue = +(event.target as HTMLSelectElement).value;
    if (selectedValue === this.licenseProjectBuyerPaymentTypeEnum.Finance) {
      this.getBanks();
      this.showBankTypes = true;
      this.formGroup.controls.bankId.setValidators([Validators.required]);
      this.formGroup.controls.paymentTypeId.setValidators([
        Validators.required,
      ]);
      this.formGroup.updateValueAndValidity();
    } else {
      this.showBankTypes = false;
      this.formGroup.controls.bankId.clearValidators();
      this.formGroup.controls.paymentTypeId.clearValidators();
      this.formGroup.updateValueAndValidity();
    }
    this.getLicenseProjectBuyers(this.licenseProjectId, selectedValue);
  }

  private getLicenseProjectIdStorage(): void {
    this.licenseProjectId =
      this._sharedLicenseProjectService.getLicenseProjectIdStorage() as string;

    if (this.licenseProjectId) {
      this._licenseDepositDocument
        .GetAccountNumber(this.licenseProjectId as string)
        .subscribe((result) => {
          this.licenseProjectAccounts = result as LicenseProjectAccountsDto;
        });
    }
  }

  onBuyerSelect() {
    if (this.selectedBuyer) {
      this.nidNumber = this.selectedBuyer?.nidNumber as string;
      this.showBuyerDetails = true;
      this.getBuyersDetailByNIDNumber();
    }
  }

  private GetBuyersBusinessPaymentInstallements(
    licenseProjectBuyerId: string,
  ): void {
    this.buyerBusinessPaymentInstallementsList = [];

    this._licenseProjectBuyerService
      .GetBuyersBusinessPaymentInstallements(licenseProjectBuyerId)
      .subscribe((result) => {
        this.buyerBusinessPaymentInstallementsList = result;
      });
  }

  onBuyerTypeSelect(event: Event): void {
    const selectedId = (event.target as HTMLSelectElement).value;
    this.selectedBuyerType =
      this.buyerDetailsDto?.find((buyer) => buyer.id === selectedId) || null;

    if (this.selectedBuyerType) {
      this.showBuyerType = true;
    }
    this.GetBuyersBusinessPaymentInstallements(selectedId);
  }

  private getLicenseProjectBuyers(
    licenseProjectId: string,
    paymentTypeId?: number,
  ): void {
    this._licenseProjectBuyerService
      .GetBuyersBylicenseProjectId(licenseProjectId, paymentTypeId)
      .subscribe((result) => {
        this.buyerDto = result;
      });
  }

  private getBuyersDetailByNIDNumber(): void {
    this.buyerDetailsDto = [];
    this.showBuyerType = false;
    this._licenseProjectBuyerService
      .GetBuyersDetailByNIDNumber(
        this.nidNumber,
        this.licenseProjectId as string,
      )
      .subscribe((result) => {
        this.buyerDetailsDto = result;
      });
  }

  onMainItemChange(event: Event): void {
    const selectedValue = +(event.target as HTMLSelectElement).value;

    this.showOtherField =
      selectedValue ===
      LicenseProjectDepositDocumentMainItemEnum.collectionFromClients;

    this.showDescriptionField =
      selectedValue === LicenseProjectDepositDocumentMainItemEnum.others;

    const buyerIdControl = this.formGroup.get('licenseProjectBuyerId');
    const buyerControl = this.formGroup.get('licenseProjectBuyer');

    this.formGroup.controls.bankId.clearValidators();
    this.formGroup.controls.paymentTypeId.clearValidators();

    if (this.showOtherField) {
      buyerIdControl?.setValidators([Validators.required]);
      buyerControl?.setValidators([Validators.required]);
    } else {
      buyerIdControl?.clearValidators();
      buyerControl?.clearValidators();

      this.licenseProjectBuyerId = null;
      buyerIdControl?.setValue(null);
      buyerControl?.setValue(null);
    }

    buyerIdControl?.updateValueAndValidity();
    buyerControl?.updateValueAndValidity();

    this.formGroup.updateValueAndValidity();

    this.formGroup.controls.mainItemId.setValue(selectedValue);

    if (!this.showDescriptionField) {
      this.formGroup.patchValue({ mianItemDescription: '' });
      this.getPaymentType();
    }
  }

  onSubmit(): void {
    if (!this.formGroup.valid) {
      this.showValidation = true;
      this._toastrNotificationService.showError('يجب املاء كل الحقول المطلوبة');
      return;
    }

    const total =
      (this.controls.escrowAccountAmount.value || 0) +
      (this.controls.administrativeAndMarketingAmount.value || 0) +
      (this.controls.constructionCostsAmount.value || 0);

    if (total !== this.controls.amount.value) {
      this._toastrNotificationService.showError(
        'اجمالي ايداع المبالغ بالحسابات يجب ان تساوي مبلغ الايداع',
      );
      this.showValidation = true;
      return;
    }

    const data: AddUpdateLicenseProjectDepositDto = this.formGroup
      .value as {} as AddUpdateLicenseProjectDepositDto;
    data.licenseProjectId = this.licenseProjectId as string;

    if (
      data.mainItemId !==
      LicenseProjectDepositDocumentMainItemEnum.collectionFromClients
    ) {
      data.LicenseProjectBuyerId = null;
    }
    // data.constructionCostsAvailableAmount = this.controls.constructionCostsAmount.value || 0 + this.licenseProjectAccounts.constructionCostsAvailableAmount;
    // data.administrativeAndMarketingAvailableAmount = this.controls.administrativeAndMarketingAmount.value || 0 + this.licenseProjectAccounts.administrativeAndMarketingAvailableAmount;
    // data.custodyAvailableAmount = this.controls.escrowAccountAmount.value || 0 + this.licenseProjectAccounts.custodyAvailableAmount;
    data.sysDepositTypeId = Number(this.controls.sysDepositTypeId.value);
    if (this.controls.paymentTypeId.value)
      data.paymentTypeId = Number(this.controls.paymentTypeId.value);
    this.subscriptions.push(
      this._licenseDepositDocument
        .SaveLicenseDepositDocument(data)
        .subscribe((res) => {
          if (res?.isDone) {
            this._licenseDepositDocument.submitSuccessfullyEventEmitter.emit();
            this._toastrNotificationService.showSuccess('تم الحفظ');
            this.closeDialog();
          }
        }),
    );
  }

  getMainItems() {
    this._licenseDepositDocument.GetMainItems().subscribe((res) => {
      if (res?.data) this.mainItemsDto = res.data;
    });
  }

  getSysDepositType() {
    this._periodicCharteredAccountantReportService
      .GetSysDepositType()
      .subscribe((res) => {
        if (res) this.sysDepositTypeList = res;
      });
  }

  GetCalcRatioSettingForAccounts() {
    this._licenseDepositDocument
      .GetCalcRatioSettingForAccounts()
      .subscribe((res) => {
        if (res) {
          this.sysSettings = res.data as SysSettingsDto[];

          this.administrativeAndMarketingAccountRatio = Number(
            this.sysSettings.find(
              (x) =>
                x.settingKey ===
                'LicenseProjectDeposits_AccountRatioForAdministrativeAndMarketingAccount',
            )?.settingValue ?? 0,
          );

          this.accountRatioForSavingsAccountRatio = Number(
            this.sysSettings.find(
              (x) =>
                x.settingKey ===
                'LicenseProjectDeposits_AccountRatioForSavingsAccount',
            )?.settingValue ?? 0,
          );

          this.constructionCostsRatio = Number(
            this.sysSettings.find(
              (x) =>
                x.settingKey ===
                'LicenseProjectDeposits_ConstructionCostAccountingRatio',
            )?.settingValue ?? 0,
          );
        }
      });
  }

  private observeconfirmAction() {
    this.subscriptions.push(
      this._popupService.confirmAction.subscribe((res: PopupData) => {
        console.log(res);
        this.onSubmit();
      }),
    );
  }

  observePopupEvents(): void {
    this.observecancelAction();
    this.observeconfirmAction();
  }

  private observecancelAction() {
    this.subscriptions.push(
      this._popupService.cancelAction.subscribe((res: PopupData) => {
        console.log(res);
      }),
    );
  }

  private closeDialog(): void {
    this._popupService.dismissDialog();
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe());
  }
}
