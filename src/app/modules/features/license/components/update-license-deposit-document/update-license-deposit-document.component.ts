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
import { LicenseDepositDocumentDetailsDto } from '../../models/license-deposit-document-model/deposit-document-details-dto';
import { DatePipe } from '@angular/common';

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
  licenseProjectDepositDocumentMainItemEnum =
    LicenseProjectDepositDocumentMainItemEnum;
  showOtherField: boolean = false;
  showDescriptionField: boolean = false;
  showValidation: boolean = false;
  showBuyerDetails: boolean = false;
  showBuyerType: boolean = false;
  formGroup = this.fb.group({
    batchNumber: [''],
    licenseProjectBuyerTypeId: [0],
    licenseProjectBuyer: [''],
    licenseProjectBuyerId: [''],
    statment: ['', Validators.required],
    mianItemDescription: [''],
    amount: [0, [Validators.required, Validators.min(0.01)]],
    referenceNumber: ['', Validators.required],
    depositDate: ['', Validators.required],
    mainItemId: [0, Validators.required],
  });
  constructor(
    private fb: FormBuilder,
    private _popupService: PopupService,
    private _toastrNotificationService: ToastrNotificatioService,
    public dialogRef: MatDialogRef<AddUpdateLicenseProjectDepositDto>,
    private _sharedLicenseProjectService: SharedLicenseProjectService,
    private _licenseProjectBuyerService: LicenseProjectBuyerService,
    private datePipe: DatePipe,
    private _licenseDepositDocument: LicenseDepositDocumentService
  ) { }
  get controls() {
    return this.formGroup.controls;
  }
  ngOnInit(): void {
    this.observePopupEvents();
    this.getLicenseProjectIdStorage();
    this.getMainItems();
  }
  getMainItems() {
    this._licenseDepositDocument.GetMainItems().subscribe((res) => {
      if (res?.data)
        this.mainItemsDto = res.data
    })
  }
  getLicenseDepositDocumentId() {
    this.licenseDepositDocumentId = this._licenseDepositDocument.getLicenseProjectDepositDocumentIdStorage() as string
    if (this.licenseDepositDocumentId) {
      this._licenseDepositDocument
        .GetDepositDocumentDetails(this.licenseDepositDocumentId)
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
              licenseProjectBuyerId: result?.licenseProjectBuyerId
            });
            this.showOtherField =
              result?.mainItemId ===
              LicenseProjectDepositDocumentMainItemEnum.collectionFromClients;
            this.showDescriptionField =
              result?.mainItemId === LicenseProjectDepositDocumentMainItemEnum.others;
            this.getLicenseProjectBuyers(this.licenseProjectId as string);
          }
        });
    }
  }
  private getLicenseProjectIdStorage(): void {
    this.licenseProjectId =
      this._sharedLicenseProjectService.getLicenseProjectIdStorage();
    if (this.licenseProjectId) {
      this.getLicenseDepositDocumentId();
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
  private getLicenseProjectBuyers(licenseProjectId: string): void {
    this._licenseProjectBuyerService
      .GetBuyersBylicenseProjectId(licenseProjectId)
      .subscribe((result) => {
        
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
    this._licenseProjectBuyerService
      .GetBuyersDetailByNIDNumber(
        this.nidNumber,
        this.licenseProjectId as string
      )
      .subscribe((result) => {
        
        this.buyerDetailsDto = result;
        if (this.buyerDetailsDto) {
          if (this.formGroup.controls?.licenseProjectBuyerId.value)
            this.onBuyerTypeSelect()
        }
      });
  }
  onMainItemChange(event: Event): void {
    const selectedValue = +(event.target as HTMLSelectElement).value;
    this.showOtherField =
      selectedValue ===
      LicenseProjectDepositDocumentMainItemEnum.collectionFromClients;
    this.showDescriptionField =
      selectedValue === LicenseProjectDepositDocumentMainItemEnum.others;
    this.formGroup.controls.mainItemId.setValue(selectedValue)
    if (!this.showDescriptionField) {
      this.formGroup.patchValue({ mianItemDescription: '' });
    }
  }

  onSubmit(): void {
    if (!this.formGroup.valid) {
      this.showValidation = true;
      return;
    }
    
    const model: AddUpdateLicenseProjectDepositDto = this.formGroup
      .value as {} as AddUpdateLicenseProjectDepositDto;
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
