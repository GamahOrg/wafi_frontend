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
  /**
   *
   */
  constructor(private _licenseDetailService: LicenseDetailsService) { }
  localization = {
    title: 'إضافة البنود الإضافية لكل نموذج عقد المستفيد النهائي',
    itemNumber: 'رقم البند التسلسلي',
    itemText: 'نص البند',
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

  ngOnDestroy(): void {
    this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe());
  }
}
