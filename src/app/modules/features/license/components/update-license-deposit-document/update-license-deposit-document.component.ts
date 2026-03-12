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
  LicenseProjectBuyerDetailsDto,
  LicenseProjectBuyerLookUpDto,
  LicenseProjectBuyerTypeEnum,
} from '../../dataModels/license-project-buyer-dto';
import { PopupData } from 'src/app/shared/models/popup.model';
import { LicenseDepositDocumentDetailsDto } from '../../models/license-deposit-document-model/deposit-document-details-dto';
import { DatePipe } from '@angular/common';
import { SysBankService } from '../../services/sysBank/sys-bank.service';
import { BankDto } from '../../dataModels/bank.dto';

@Component({
  selector: 'app-update-license-deposit-document',
  templateUrl: './update-license-deposit-document.component.html',
  styleUrls: ['./update-license-deposit-document.component.scss']
})
export class UpdateLicenseDepositDocumentComponent implements OnInit {
  mainItems: LicenseProjectDepositDocumentMainItemEnum | null = null;

  subscriptions: Subscription[] = [];
  nidNumber: string = '';
  selectedRequest: LicenseDepositDocumentDetailsDto | null = null
  licenseBuyerTypeEnum = LicenseProjectBuyerTypeEnum
  licenseDepositDocumentId: string | null = '00000000-0000-0000-0000-000000000000';
  licenseProjectId: string | null = '00000000-0000-0000-0000-000000000000';
  // licenseProjectBuyerId: string | null = null;
  buyerDto: LicenseProjectBuyerLookUpDto[] | null = [];
  selectedBuyer: LicenseProjectBuyerLookUpDto | null = null;
  selectedBuyerType: LicenseProjectBuyerDetailsDto | null = null;
  buyerDetailsDto: LicenseProjectBuyerDetailsDto[] | null = null;
  mainItemsDto: MainItemsDto[] = [];
  licenseProjectDepositDocumentMainItemEnum = LicenseProjectDepositDocumentMainItemEnum;
  sysSettings: SysSettingsDto[] = [];
  showOtherField: boolean = false;
  showDescriptionField: boolean = false;
  showValidation: boolean = false;
  showBuyerDetails: boolean = false;
  showBuyerType: boolean = false;

  administrativeAndMarketingAccountRatio: number = 0;
  accountRatioForSavingsAccountRatio: number = 0;
  constructionCostsRatio: number = 0;
  banksDto: BankDto[] = []

  formGroup = this.fb.group({
    batchNumber: [''],
    licenseProjectBuyerTypeId: [0],
    licenseProjectBuyer: [null],
    licenseProjectBuyerId: [null as string | null],
    statment: ['', Validators.required],
    mianItemDescription: [''],
    amount: [0, [Validators.required, Validators.min(0.01)]],
    referenceNumber: ['', Validators.required],
    depositDate: ['', Validators.required],
    mainItemId: [null as number | null, Validators.required],
    escrowAccountAmount: [0],
    administrativeAndMarketingAmount: [0, Validators.required],
    constructionCostsAmount: [0, Validators.required],
    bankId:[null as string | null]
  });

  constructor(
    private fb: FormBuilder,
    private _popupService: PopupService,
    private _toastrNotificationService: ToastrNotificatioService,
    public dialogRef: MatDialogRef<AddUpdateLicenseProjectDepositDto>,
    private _sharedLicenseProjectService: SharedLicenseProjectService,
    private _licenseProjectBuyerService: LicenseProjectBuyerService,
    private datePipe: DatePipe,
    private _sysBank: SysBankService,
    private _licenseDepositDocument: LicenseDepositDocumentService,
    private cdr: ChangeDetectorRef,
  ) { }

  get controls() {
    return this.formGroup.controls;
  }

  ngOnInit(): void {
    this.observePopupEvents();
    this.getLicenseProjectIdStorage();
    this.getMainItems();
    this.GetCalcRatioSettingForAccounts();
  }

  getMainItems() {
    this._licenseDepositDocument.GetMainItems().subscribe((res) => {
      if (res?.data)
        this.mainItemsDto = res.data
    })
  }

  custodyAccountBeforeDepositing: number = 0;
  constructionCostsAccountBeforeDepositing: number = 0;
  administrativeAndMarketingAccountBeforeDepositing: number = 0;

  getLicenseDepositDocumentId() {
    this.licenseDepositDocumentId = this._licenseDepositDocument.getLicenseProjectDepositDocumentIdStorage() as string
    if (this.licenseDepositDocumentId) {
      this._licenseDepositDocument.GetDepositDocumentDetails(this.licenseDepositDocumentId)
        .subscribe((result) => {
          if (result) {
            this.selectedRequest = result;
            this.formGroup.setValue({
              batchNumber: result?.batchNumber as string,
              licenseProjectBuyer: null,
              statment: result?.statment as string,
              mianItemDescription: result?.mianItemDescription as string,
              amount: result?.amount as number,
              referenceNumber: result?.referenceNumber as string,
              depositDate: this.datePipe.transform(result?.depositDate, 'yyyy-MM-dd') as any,
              mainItemId: result?.mainItemId,
              licenseProjectBuyerTypeId: result?.licenseProjectBuyerTypeId,
              licenseProjectBuyerId: result?.licenseProjectBuyerId,
              administrativeAndMarketingAmount: result.administrativeAndMarketingAmount,
              constructionCostsAmount: result?.constructionCostsAmount,
              bankId:result?.bankId,
              escrowAccountAmount: result?.escrowAccountAmount
            });

            this.administrativeAndMarketingAccountBeforeDepositing = (this.selectedRequest?.administrativeAndMarketingAvailableAmount ?? 0) - (this.selectedRequest?.administrativeAndMarketingAmount ?? 0);
            this.constructionCostsAccountBeforeDepositing = (this.selectedRequest?.constructionCostsAvailableAmount ?? 0) - (this.selectedRequest?.constructionCostsAmount ?? 0);
            this.custodyAccountBeforeDepositing = (this.selectedRequest?.custodyAvailableAmount ?? 0) - (this.selectedRequest?.escrowAccountAmount ?? 0);

            this.showOtherField = result?.mainItemId === LicenseProjectDepositDocumentMainItemEnum.collectionFromClients;
            this.showDescriptionField = result?.mainItemId === LicenseProjectDepositDocumentMainItemEnum.others;
            this.getLicenseProjectBuyers(this.licenseProjectId as string);
          }
        });
    }
  }

  private getLicenseProjectIdStorage(): void {
    this.licenseProjectId = this._sharedLicenseProjectService.getLicenseProjectIdStorage();
    if (this.licenseProjectId) {
      this.getLicenseDepositDocumentId();
      this.getBanks();
    }
  }

  onBuyerSelect() {
    if (this.selectedBuyer) {
      this.nidNumber = this.selectedBuyer?.nidNumber as string;
      // this.licenseProjectBuyerId = this.selectedBuyer?.id as string;
      this.showBuyerDetails = true;
      this.getBuyersDetailByNIDNumber();
    }
  }

  onBuyerTypeSelect(): void {
    const selectedId = this.formGroup.controls.licenseProjectBuyerId.value;
    if (selectedId) {
      this.selectedBuyerType = this.buyerDetailsDto?.find(buyer => buyer.id == selectedId) || null;
      this.showBuyerType = true;
    }
  }
  private getBanks() {
    this._sysBank.GetBankDropDown().subscribe((res)=>{
      if(res.isDone) {
      this.banksDto = res.data as BankDto[]
      }
    })  
  }
  private getLicenseProjectBuyers(licenseProjectId: string): void {
    this._licenseProjectBuyerService.GetBuyersBylicenseProjectId(licenseProjectId).subscribe((result) => {
        this.buyerDto = result;
        if (this.selectedRequest?.nidNumber) {
          const defaultBuyer = this.buyerDto?.find((buyer) => buyer.nidNumber === this.selectedRequest?.nidNumber);
          if (defaultBuyer) {
            this.selectedBuyer = defaultBuyer;
            this.onBuyerSelect()
          }
        }
      });
  }

  private getBuyersDetailByNIDNumber(): void {
    this.buyerDetailsDto = [];
    this.showBuyerType = false;
    this._licenseProjectBuyerService.GetBuyersDetailByNIDNumber(this.nidNumber, this.licenseProjectId as string).subscribe((result) => {
        this.buyerDetailsDto = result;
        if (this.buyerDetailsDto) {
          if (this.formGroup.controls?.licenseProjectBuyerId.value)
            this.onBuyerTypeSelect()
        }
      });
  }

  onMainItemChange(event: Event): void {
    const selectedValue = +(event.target as HTMLSelectElement).value;
    this.showOtherField = selectedValue === LicenseProjectDepositDocumentMainItemEnum.collectionFromClients;
    this.showDescriptionField = selectedValue === LicenseProjectDepositDocumentMainItemEnum.others;
    this.formGroup.controls.mainItemId.setValue(selectedValue)
    if (!this.showDescriptionField) {
      this.formGroup.patchValue({ mianItemDescription: '' });
    }
    this.calcAccounts();
  }

  calcAccounts(){
    const amount = this.controls.amount.value || 0;
    if (LicenseProjectDepositDocumentMainItemEnum.collectionFromClients === this.formGroup.value.mainItemId) {
      let constructionCostsAmount = (amount * this.constructionCostsRatio)
      this.formGroup.patchValue({
        escrowAccountAmount: constructionCostsAmount * this.accountRatioForSavingsAccountRatio,
        administrativeAndMarketingAmount: amount * this.administrativeAndMarketingAccountRatio, 
        constructionCostsAmount: constructionCostsAmount - (constructionCostsAmount * this.accountRatioForSavingsAccountRatio)
      });
    } else{
      this.formGroup.patchValue({
        escrowAccountAmount: 0,
        administrativeAndMarketingAmount: 0,
        constructionCostsAmount: 0
      });
    }
    this.cdr.detectChanges();
  }

  GetCalcRatioSettingForAccounts() {
    this._licenseDepositDocument.GetCalcRatioSettingForAccounts().subscribe((res) => {
      if (res) {
        this.sysSettings = res.data as SysSettingsDto[];
        
        this.administrativeAndMarketingAccountRatio = Number(
          this.sysSettings.find(x => x.settingKey === "LicenseProjectDeposits_AccountRatioForAdministrativeAndMarketingAccount")?.settingValue ?? 0
        );
      
        this.accountRatioForSavingsAccountRatio = Number(
          this.sysSettings.find(x => x.settingKey === "LicenseProjectDeposits_AccountRatioForSavingsAccount")?.settingValue ?? 0
        );
      
        this.constructionCostsRatio = Number(
          this.sysSettings.find(x => x.settingKey === "LicenseProjectDeposits_ConstructionCostAccountingRatio")?.settingValue ?? 0
        );
      }
    });
  }

  onSubmit(): void {
    if (!this.formGroup.valid) {
      this.showValidation = true;
      return;
    }
    
    const model: AddUpdateLicenseProjectDepositDto = this.formGroup.value as {} as AddUpdateLicenseProjectDepositDto;
    model.id = this.licenseDepositDocumentId
    model.licenseProjectId = this.licenseProjectId as string;
    // data.LicenseProjectBuyerId = this.licenseProjectBuyerId as string;
    if (model.mainItemId !== LicenseProjectDepositDocumentMainItemEnum.collectionFromClients) {
      model.LicenseProjectBuyerId = null;
    }

    delete (model as any).licenseProjectBuyer;
    this.subscriptions.push(
      this._licenseDepositDocument.UpdateLicenseDepositDocument(model).subscribe((res) => {
        if (res?.isDone) {
          this._licenseDepositDocument.submitSuccessfullyEventEmitter.emit()
          this._toastrNotificationService.showSuccess('تم التعديل');
          this.closeDialog();
        }
      })
    );
  }

  private observeconfirmAction() {
    this.subscriptions.push(
      this._popupService.confirmAction.subscribe((res: PopupData) => {
        console.log(res)
        this.onSubmit()
      })
    )
  }

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

  private closeDialog(): void {
    this._popupService.dismissDialog();
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe());
  }

}
