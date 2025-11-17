import { Component } from '@angular/core';
import { BeneficiaryContractFormAdditionalTermsDto } from '../../models/beneficiary-contract-form-additional-terms-dto';
import { Subscription } from 'rxjs';
import { LicenseDetailsService } from '../../services/license-details/license-details.service';

@Component({
  selector: 'app-license-beneficiary-contract-form-additional-terms',
  templateUrl: './license-beneficiary-contract-form-additional-terms.component.html',
  styleUrls: ['./license-beneficiary-contract-form-additional-terms.component.scss']
})
export class LicenseBeneficiaryContractFormAdditionalTermsComponent {
  beneficiaryContractFormAdditionalTermsList: BeneficiaryContractFormAdditionalTermsDto[] = [];
  subscriptions: Subscription[] = [];
  expandedItems: Set<string> = new Set();
  /**
   *
   */
  constructor(private _licenseDetailService: LicenseDetailsService) { }
    localization = {
    title: 'إضافة البنود الإضافية لكل نموذج عقد المستفيد النهائي',
    itemNumber: 'رقم البند التسلسلي',
    itemText: 'نص البند',
    itemTitle: 'عنوان البند الرئيسي',
    additionalTermsAcknowledgment: 'إقرار البنود الاضافية',
    licenseBeneficiaryContractFormId: ' نوع البند',
    requiredErrorMsg: 'حقل مطلوب',
    savedSuccessfully: 'تم الحفظ',
  };

  ngOnInit(): void {
    this.updateEngineeringConsultants();
  }

  private updateEngineeringConsultants(): void {
    this.subscriptions.push(
      this._licenseDetailService.beneficiaryContractFormAdditionalTerms$.subscribe((res: BeneficiaryContractFormAdditionalTermsDto[] | null) => {
        if (res) {
          this.beneficiaryContractFormAdditionalTermsList = res as BeneficiaryContractFormAdditionalTermsDto[];
        }
      })
    )
  }


  getParentItems(): BeneficiaryContractFormAdditionalTermsDto[] {
    return this.beneficiaryContractFormAdditionalTermsList.filter(item => item.parentId == null);
  }

  getChildItems(parentId: string): BeneficiaryContractFormAdditionalTermsDto[] {
    return this.beneficiaryContractFormAdditionalTermsList.filter(item => item.parentId === parentId);
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

  getItemNumberDisplay(beneficiary: BeneficiaryContractFormAdditionalTermsDto): string | number{
    if (beneficiary.parentId == null) {
      return beneficiary?.itemNumber || '';
    } else {
      const parentBeneficiary = this.beneficiaryContractFormAdditionalTermsList.find(item => item.id === beneficiary.parentId);
      return `${parentBeneficiary?.itemNumber || ''}.${beneficiary?.itemNumber || ''}`;
    }
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe());
  }
}
