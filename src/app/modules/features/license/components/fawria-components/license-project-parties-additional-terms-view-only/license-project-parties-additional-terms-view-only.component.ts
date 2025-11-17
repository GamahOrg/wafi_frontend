import { Component, Input } from '@angular/core';
import { Subscription } from 'rxjs';
import { PopupService } from 'src/app/shared/services/popup/popup.service';
import { SharedLicenseProjectService } from '../../../services/sharedLicenseProject/shared-license-project.service';
import { PopupData } from 'src/app/shared/models/popup.model';
import { LicenseProjectPartiesAdditionalTermsDto, TermsPartType } from '../../../models/license-project-parties-additional-terms-model';
import { LicenseProjectPartiesAdditionalTermsService } from '../../../services/LicenseProjectPartiesAdditionalTerms.service';

@Component({
  selector: 'app-license-project-parties-additional-terms-view-only',
  templateUrl: './license-project-parties-additional-terms-view-only.component.html',
  styleUrls: ['./license-project-parties-additional-terms-view-only.component.scss']
})
export class LicenseProjectPartiesAdditionalTermsViewOnlyComponent {
  subscriptions: Subscription[] = [];
  partiesAdditionalTerms: LicenseProjectPartiesAdditionalTermsDto[] = [];
  // SysLicenseBeneficiaryContractFormList: SysLicenseBeneficiaryContractFormDto[] = [];
  licenseProjectId: string | null = "00000000-0000-0000-0000-000000000000";
  expandedItems: Set<string> = new Set();

  // Delete confirmation modal
  showDeleteModal: boolean = false;
  deleteItemId: string | null = null;
  deleteItemIndex: number | null = null;

  // showItemsLog: boolean = false;
  @Input() TermsPartType:TermsPartType = null as any;

  constructor(
    private _licenseProjectPartiesAdditionalTermsService: LicenseProjectPartiesAdditionalTermsService,
    private _popupService: PopupService,
    private _sharedLicenseProjectService: SharedLicenseProjectService,
  ) { }

  ngOnInit() {
    //set local store isactive
    this.getLicenseProjectIdStorage()
    this.observeConfirmAction();
  }


  private getLicenseProjectIdStorage(): void {

    this.licenseProjectId = this._sharedLicenseProjectService.getLicenseProjectIdStorage();
    if(this.TermsPartType != null || this.TermsPartType != 'undefined'){
    }
    this.loadComponentData();
  }

  localization = {
    title: 'البنود الإضافية للاستشاري الهندسي',
    NoItemsAdded: 'لا يوجد بنود إضافية بعد',
    AddNew:'إضافة بند',
    titlePoupupAdd: 'إضافة البنود الإضافية لنموذج عقد المستفيد النهائي',
    titlePoupupEdit: 'إضافة البنود الإضافية لنموذج عقد المستفيد النهائي',
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
  };

  private loadComponentData() {
    this.subscriptions.push(
      this._licenseProjectPartiesAdditionalTermsService.GetAllAdditionalAsync(this.licenseProjectId as string, this.TermsPartType).subscribe((results) => {
        if (results) {
          this.partiesAdditionalTerms = results.data as LicenseProjectPartiesAdditionalTermsDto[];
        }
      }));
  }

  ngOnDestroy() {
    this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe());
  }

  getItemNumberDisplay(beneficiary: LicenseProjectPartiesAdditionalTermsDto): string | number {
    if (beneficiary.parentId == null) {
      return beneficiary?.itemNumber || '';
    } else {
      const parentBeneficiary = this.partiesAdditionalTerms.find(item => item.id === beneficiary.parentId);
      return `${parentBeneficiary?.itemNumber || ''}.${beneficiary?.itemNumber || ''}`;
    }
  }

  getParentItems(): LicenseProjectPartiesAdditionalTermsDto[] {
    if (this.partiesAdditionalTerms)
      return this.partiesAdditionalTerms.filter(item => item.parentId == null);

    return [];
  }

  getChildItems(parentId: string): LicenseProjectPartiesAdditionalTermsDto[] {
    if (this.partiesAdditionalTerms)
      return this.partiesAdditionalTerms.filter(item => item.parentId === parentId);

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

  private observeConfirmAction() {
    this.subscriptions.push(
      this._popupService.confirmAction.subscribe((res: PopupData) => {

        this.loadComponentData();
      })
    );
  }
}
