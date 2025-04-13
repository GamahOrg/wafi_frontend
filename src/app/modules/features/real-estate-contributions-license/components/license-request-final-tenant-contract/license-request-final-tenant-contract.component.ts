import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { environment } from 'src/environments/environment';
import { FormBuilder } from '@angular/forms';
import { LicenseDetailsService } from '../../services/license-details/license-details.service';
import { SysLicenseBeneficiaryContractFormListDto } from '../../dataModels/sys-license-beneficiary-contract-form-list-dto';

@Component({
  selector: 'app-license-request-final-tenant-contract',
  templateUrl: './license-request-final-tenant-contract.component.html',
  styleUrls: ['./license-request-final-tenant-contract.component.scss']
})
export class LicenseRequestFinalTenantContractComponent  implements OnInit, OnDestroy
{
  sysLicenseBeneficiaryContractFormListDto: SysLicenseBeneficiaryContractFormListDto =
    new SysLicenseBeneficiaryContractFormListDto();
  subscriptions: Subscription[] = [];
  baseUrl = `${environment.baseURL}/`;
  // sysLicenseBeneficiaryContractForm = this._formBuilder.group({
  //   beneficiaryContractFormApproval:({value: true, disabled:true})
  // })
  /**
   *
   */
  constructor(
    private _licenseDetailService: LicenseDetailsService,
    private _formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.updateEngineeringConsultants();
  }
  private updateEngineeringConsultants(): void {
    this.subscriptions.push(
      this._licenseDetailService.sysLicenseBeneficiary$.subscribe(
        (res: SysLicenseBeneficiaryContractFormListDto | null) => {
          if (res) {
            this.sysLicenseBeneficiaryContractFormListDto = res;
            // this.sysLicenseBeneficiaryContractForm.patchValue(this.sysLicenseBeneficiaryContractFormListDto);
          }
        }
      )
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe());
  }
}
