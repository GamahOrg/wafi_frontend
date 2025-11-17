import { Component, Input } from '@angular/core';
import { Subscription, forkJoin } from 'rxjs';
import { BeneficiaryContractFormAdditionalTermsService } from '../../services/beneficiary-contract-form-additional-terms.service';
import { BeneficiaryContractFormAdditionalTermsDto } from '../../models/beneficiary-contract-form-additional-terms-dto';
import { ToastrService } from 'ngx-toastr';
import { PopupService } from 'src/app/shared/services/popup/popup.service';
import { SharedLicenseProjectService } from '../../services/sharedLicenseProject/shared-license-project.service';
import { NextAndPreviusButtonsService } from '../../services/next-and-previous-buttons/next-and-previus-buttons.service';
import { SysLicenseBeneficiaryContractFormDto } from '../../dataModels/sys-license-beneficiary-contract-form-dto';
import { PopupData, confirmationPopupData } from 'src/app/shared/models/popup.model';
import { BeneficiaryContractFormAdditionalTermsFormComponent } from '../beneficiary-contract-form-additional-terms-form/beneficiary-contract-form-additional-terms-form.component';
import { MatDialog } from '@angular/material/dialog';
import { DisableItemConfirmationComponent } from 'src/app/shared/components/disable-item-confirmation/disable-item-confirmation.component';
import { Router } from '@angular/router';
import { Configuration } from 'src/app/core/configurations/shared.config';

@Component({
  selector: 'app-beneficiary-contract-form-additional-terms',
  templateUrl: './beneficiary-contract-form-additional-terms.component.html',
  styleUrls: ['./beneficiary-contract-form-additional-terms.component.scss']
})
export class BeneficiaryContractFormAdditionalTermsComponent {
  subscriptions: Subscription[] = [];
  beneficiaryContractFormAdditionalTerms: BeneficiaryContractFormAdditionalTermsDto[] = [];
  SysLicenseBeneficiaryContractFormList: SysLicenseBeneficiaryContractFormDto[] = [];
  licenseProjectId: string | null = "00000000-0000-0000-0000-000000000000";
  expandedItems: Set<string> = new Set();
  showItemsLog: boolean = false;
  @Input() isActive:boolean=true
  @Input() isNew:boolean=true

  constructor(
    private _beneficiaryContractFormAdditionalTermsService: BeneficiaryContractFormAdditionalTermsService,
    private _toastrService: ToastrService,
    private _popupService: PopupService,
    private _sharedLicenseProjectService: SharedLicenseProjectService,
    private _nextAndPreviusButtonsService: NextAndPreviusButtonsService,
    private _dialog: MatDialog,
    private _router: Router
  ) { }

  ngOnInit() {
    
    //set local store isactive
    this._sharedLicenseProjectService.setIsActiveTermsLocalStorage(this.isActive.toString())
    this.getLicenseProjectIdStorage()
    this.getAdditionallist();
    this.updateSaveAsDraftBtnIsvisible();
    this.observeNextButtonIsCliced();
  }

  getAdditionallist(): void {
    
    this.subscriptions.push(
      this._beneficiaryContractFormAdditionalTermsService.getBeneficiarylist().subscribe((list) => {
        this.beneficiaryContractFormAdditionalTerms = list as BeneficiaryContractFormAdditionalTermsDto[];
      })
    )
  }

  private getLicenseProjectIdStorage(): void {
    this.licenseProjectId = this._sharedLicenseProjectService.getLicenseProjectIdStorage();
    this.loadComponentData();
  }

  localization = {
    title: 'البنود الإضافية',
    titlePoupup: 'إضافة البنود الإضافية لنموذج عقد المستفيد النهائي',
    itemNumber: 'رقم البند التسلسلي',
    itemText: 'نص البند',
    itemTitle: 'عنوان البند الرئيسي',
    additionalTermsAcknowledgment: 'إقرار البنود الاضافية',
    licenseBeneficiaryContractFormId: ' نوع البند',
    requiredErrorMsg: 'حقل مطلوب',
    savedSuccessfully: 'تم الحفظ',
    status: 'حالة البند',
    activeStatus: 'ساري',
    inActiveStatus: 'معطل',
    date: 'تاريخ البند',
  };

  private loadComponentData() {
    
    this.subscriptions.push(
      this._beneficiaryContractFormAdditionalTermsService.GetAllAdditionalAsync(this.licenseProjectId as string,this.isActive).subscribe((results) => {
        if (results) {
          this.beneficiaryContractFormAdditionalTerms = results.data as BeneficiaryContractFormAdditionalTermsDto[];
        }
      }));
  }

  ngOnDestroy() {
    this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe());
  }

  openDialog(): void {
    
    this._sharedLicenseProjectService.setIsActiveTermsLocalStorage(this.isActive.toString())

    let Data = {
      title: this.localization.titlePoupup,
      component: BeneficiaryContractFormAdditionalTermsFormComponent
    } as PopupData;
    this._popupService.updatePopupData(Data);
  }

  openRecordDialog(): void {
    this.showItemsLog = true;
  }

  closeItemsLog(): void {
    this.showItemsLog = false;
  }

  getItemNumberDisplay(beneficiary: BeneficiaryContractFormAdditionalTermsDto): string | number {
    if (beneficiary.parentId == null) {
      return beneficiary?.itemNumber || '';
    } else {
      const parentBeneficiary = this.beneficiaryContractFormAdditionalTerms.find(item => item.id === beneficiary.parentId);
      return `${parentBeneficiary?.itemNumber || ''}.${beneficiary?.itemNumber || ''}`;
    }
  }

  edit(beneficiary: BeneficiaryContractFormAdditionalTermsDto, index: number): void {
    
    this._sharedLicenseProjectService.setIsActiveTermsLocalStorage(this.isActive.toString())

    let dataToPass;

    if (beneficiary.id != null) {
      const childBeneficiary = this.beneficiaryContractFormAdditionalTerms.filter(item => item.parentId === beneficiary.id);
      dataToPass = {
        parent: beneficiary,
        child: childBeneficiary
      };
    } else {
      dataToPass = beneficiary;
    }

    let Data = {
      title: this.localization.title,
      component: BeneficiaryContractFormAdditionalTermsFormComponent,
      data: dataToPass
    } as PopupData;
    this._popupService.updatePopupData(Data);
  }

  delete(id: string, index: number) {
    // Call delete first
    this.subscriptions.push(
      this._beneficiaryContractFormAdditionalTermsService.Delete(id).subscribe(res => {
        if (res.isDone) {
          this._toastrService.success(this.localization.savedSuccessfully)
          // if (index != -1)
          this.beneficiaryContractFormAdditionalTerms = res.data as BeneficiaryContractFormAdditionalTermsDto[];

          // Show confirmation popup after successful delete
          const dialogRef = this._dialog.open(DisableItemConfirmationComponent, {
            width: '600px',
            disableClose: true,
            panelClass: 'disable-item-confirmation-dialog'
          });
        }
        else
          this._toastrService.error(res.message);
      })
    )
  }

  activate(id: string, index: number) {
    // Call activate first
    this.subscriptions.push(
      this._beneficiaryContractFormAdditionalTermsService.activate(id).subscribe(res => {
        if (res.isDone) {
          this._toastrService.success(this.localization.savedSuccessfully)
          // if (index != -1)
          this.beneficiaryContractFormAdditionalTerms = res.data as BeneficiaryContractFormAdditionalTermsDto[];

          // Show confirmation popup after successful activate
          const dialogRef = this._dialog.open(DisableItemConfirmationComponent, {
            width: '600px',
            disableClose: true,
            panelClass: 'disable-item-confirmation-dialog',
            data: { isActivate: true }
          });
        }
        else
          this._toastrService.error(res.message);
      })
    )
  }

  deActivate(id: string, index: number) {
    // Call deActivate first
    this.subscriptions.push(
      this._beneficiaryContractFormAdditionalTermsService.deActivate(id).subscribe(res => {
        if (res.isDone) {
          this._toastrService.success(this.localization.savedSuccessfully)
          // if (index != -1)
          this.beneficiaryContractFormAdditionalTerms = res.data as BeneficiaryContractFormAdditionalTermsDto[];

          // Show confirmation popup after successful deactivate
          const dialogRef = this._dialog.open(DisableItemConfirmationComponent, {
            width: '600px',
            disableClose: true,
            panelClass: 'disable-item-confirmation-dialog',
            data: { isActivate: false }
          });
        }
        else
          this._toastrService.error(res.message);
      })
    )
  }

  contractTermObj!: BeneficiaryContractFormAdditionalTermsDto;

  confirmDeleteContractTerm(
    contractTerm: BeneficiaryContractFormAdditionalTermsDto
  ): void {
   
    this.contractTermObj = contractTerm;
    const confirmationData: confirmationPopupData = {
      id: contractTerm.id,
      staticMessage: 'هل أنت متأكد من حذف البند؟',
      dynamicMessage: contractTerm.itemTitle ?? '',

    };
    const dialogRef =
      this._popupService.updateConfirmationPopupData(confirmationData);


    // Subscribe to confirm action
    const confirmSub = this._popupService.confirmAction.subscribe((data) => {
   
      this.deleteContractTerm(contractTerm);
      dialogRef.close();
      confirmSub.unsubscribe(); // clean up to avoid memory leaks
    });
  }
    private deleteContractTerm(template: BeneficiaryContractFormAdditionalTermsDto) {
        this.subscriptions.push(
            this._beneficiaryContractFormAdditionalTermsService.Delete(template.id).subscribe(res => {
                if (res.isDone) {
                    this._toastrService.success(this.localization.savedSuccessfully);
                   
                    this.beneficiaryContractFormAdditionalTerms = res.data as BeneficiaryContractFormAdditionalTermsDto[];

                    
                }

                else
                    this._toastrService.error(res.message);
            })
        );
    }

  // TabsButtons
  private observeNextButtonIsCliced() {
    this.subscriptions.push(
      this._nextAndPreviusButtonsService.nextButtonIsClicked.subscribe((res: null) => {
        this.moveToNextTab()
      })
    )
  }

  moveToNextTab(): void {
    this._nextAndPreviusButtonsService.moveToNextTab.emit()
  }

  private updateSaveAsDraftBtnIsvisible(): void {
    this._nextAndPreviusButtonsService.saveAsDraftBtnIsvisible.next(false)
  }

  getParentItems(): BeneficiaryContractFormAdditionalTermsDto[] {
    if (this.beneficiaryContractFormAdditionalTerms)
      return this.beneficiaryContractFormAdditionalTerms.filter(item => item.parentId == null);

    return [];
  }

  getChildItems(parentId: string): BeneficiaryContractFormAdditionalTermsDto[] {
    if (this.beneficiaryContractFormAdditionalTerms)
      return this.beneficiaryContractFormAdditionalTerms.filter(item => item.parentId === parentId);

    return [];
  }

  hasChildren(parentId: string): boolean {
    return this.getChildItems(parentId).length > 0;
  }

  toggleExpand(itemId: string): void {
    if (this.expandedItems.has(itemId)) {
      this.expandedItems.delete(itemId);
    } else {
      this.expandedItems.add(itemId);
    }
  }

  isExpanded(itemId: string): boolean {
    return this.expandedItems.has(itemId);
  }

}
