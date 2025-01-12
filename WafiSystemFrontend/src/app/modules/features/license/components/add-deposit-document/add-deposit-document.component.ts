import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import {
  AddUpdateLicenseProjectDepositDto,
  LicenseProjectDepositDocumentMainItemEnum,
  MainItemsDto,
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

@Component({
  selector: 'app-add-deposit-document',
  templateUrl: './add-deposit-document.component.html',
  styleUrls: ['./add-deposit-document.component.scss'],
})
export class AddDepositDocumentComponent implements OnInit {
  licenseBuyerTypeEnum = LicenseProjectBuyerTypeEnum
  mainItems: LicenseProjectDepositDocumentMainItemEnum | null = null;
  subscriptions: Subscription[] = [];
  nidNumber: string = '';
  accountNumber: string = '';
  licenseProjectId: string | null = '00000000-0000-0000-0000-000000000000';
  licenseProjectBuyerId: string | null = null;
  buyerDto: LicenseProjectBuyerLookUpDto[] | null = [];
  selectedBuyer: LicenseProjectBuyerLookUpDto | null = null;
  selectedBuyerType: LicenseProjectBuyerDetailsDto | null = null;
  buyerDetailsDto: LicenseProjectBuyerDetailsDto[] | null = null;
  mainItemsDto: MainItemsDto[] = [];
  licenseProjectDepositDocumentMainItemEnum =
    LicenseProjectDepositDocumentMainItemEnum;
  showOtherField: boolean = false;
  showDescriptionField: boolean = false;
  showValidation: boolean = false;
  showBuyerDetails: boolean = false;
  showBuyerType: boolean = false;
  formGroup = this.fb.group({
    batchNumber: [''],
    licenseProjectBuyer: [''],
    statment: ['', Validators.required],
    mianItemDescription: [''],
    amount: [0, [Validators.required, Validators.min(0.01)]],
    referenceNumber: ['', Validators.required],
    depositDate: ['', Validators.required],
    mainItemId: [0, Validators.required],
    licenseProjectBuyerId:[null]
  });
  constructor(
    private fb: FormBuilder,
    private _popupService: PopupService,
    private _toastrNotificationService: ToastrNotificatioService,
    public dialogRef: MatDialogRef<AddUpdateLicenseProjectDepositDto>,
    private _sharedLicenseProjectService: SharedLicenseProjectService,
    private _licenseProjectBuyerService: LicenseProjectBuyerService,
    private cdr: ChangeDetectorRef,
    private _licenseDepositDocument: LicenseDepositDocumentService
  ) { }
  get controls() {
    return this.formGroup.controls;
  }
  ngOnInit(): void {
    this.observePopupEvents();
    this.getMainItems();
    this.getLicenseProjectIdStorage();
  }
  private getLicenseProjectIdStorage(): void {
    this.licenseProjectId =
      this._sharedLicenseProjectService.getLicenseProjectIdStorage();

    if (this.licenseProjectId) {
      this._licenseDepositDocument.GetAccountNumber(this.licenseProjectId as string).subscribe((result) => {
        this.accountNumber = result as string
      })
      this.getLicenseProjectBuyers(this.licenseProjectId);
    }
  }
  onBuyerSelect() {
    if (this.selectedBuyer) {
      this.nidNumber = this.selectedBuyer?.nidNumber as string;
      this.showBuyerDetails = true;
      this.getBuyersDetailByNIDNumber();
    }
  }
  onBuyerTypeSelect(event: Event): void {
    const selectedId = (event.target as HTMLSelectElement).value;
    this.selectedBuyerType = this.buyerDetailsDto?.find(buyer => buyer.id === selectedId) || null;

    if (this.selectedBuyerType) {
      this.showBuyerType = true;
    }
  }
  private getLicenseProjectBuyers(licenseProjectId: string): void {
    this._licenseProjectBuyerService
      .GetBuyersBylicenseProjectId(licenseProjectId)
      .subscribe((result) => {
        this.buyerDto = result;
      });
  }
  private getBuyersDetailByNIDNumber(): void {
    this._licenseProjectBuyerService
      .GetBuyersDetailByNIDNumber(
        this.nidNumber,
        this.licenseProjectId as string
      )
      .subscribe((result) => {
        this.buyerDetailsDto = result;
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

    if (!this.showOtherField) {
      this.licenseProjectBuyerId = null;
    }
  }

  onSubmit(): void {

debugger
    if (!this.formGroup.valid) {
      this.showValidation = true;
      return;
    }

    const data: AddUpdateLicenseProjectDepositDto = this.formGroup
      .value as {} as AddUpdateLicenseProjectDepositDto;
    data.licenseProjectId = this.licenseProjectId as string;

    if(data.mainItemId!==LicenseProjectDepositDocumentMainItemEnum.collectionFromClients){
      data.LicenseProjectBuyerId=null;
    }
    this.subscriptions.push(
      this._licenseDepositDocument.SaveLicenseDepositDocument(data).subscribe((res) => {
        if (res?.isDone) {
          this._licenseDepositDocument.submitSuccessfullyEventEmitter.emit()
          this._toastrNotificationService.showSuccess('تم الحفظ');
          this.closeDialog();
        }
      })
    );
  }
  getMainItems() {
    this._licenseDepositDocument.GetMainItems().subscribe((res) => {
      if (res?.data)
        this.mainItemsDto = res.data
    })
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
