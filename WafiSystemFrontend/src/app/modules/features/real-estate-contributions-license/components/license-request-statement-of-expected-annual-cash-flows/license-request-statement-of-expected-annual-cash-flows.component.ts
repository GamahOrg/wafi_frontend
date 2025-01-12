import { Component, OnDestroy, OnInit } from '@angular/core';
import { LicenseProjectAnnualCashFlowDto } from '../../models/license-project-annual-cash-flow-dto';
import { Subscription } from 'rxjs';
import { LicenseProjectFeasibilityStudyFullDto } from '../../models/LicenseProjectFeasibilityStudyFullDto';
import { LicenseDetailsService } from '../../services/license-details/license-details.service';

@Component({
  selector: 'app-license-request-statement-of-expected-annual-cash-flows',
  templateUrl: './license-request-statement-of-expected-annual-cash-flows.component.html',
  styleUrls: ['./license-request-statement-of-expected-annual-cash-flows.component.scss']
})
export class LicenseRequestStatementOfExpectedAnnualCashFlowsComponent implements OnInit, OnDestroy{
  licenseProjectAnnualCashFlows :LicenseProjectAnnualCashFlowDto   []=[]
  subscriptions: Subscription[] = [];
  licenseProjectFeasibilityStudyFullDto:LicenseProjectFeasibilityStudyFullDto=new  LicenseProjectFeasibilityStudyFullDto();
  /**
   *
   */
  constructor(private _licenseDetailService: LicenseDetailsService) {}

  ngOnInit(): void {
    this.updateAnnualCashFlows();
  }
  private updateAnnualCashFlows(): void {
    
    this.subscriptions.push(
      this._licenseDetailService.licenseProjectFeasibilityStudies$.subscribe((res: LicenseProjectFeasibilityStudyFullDto[] | null) => {
        if (res) {
          
          this.licenseProjectAnnualCashFlows = res[0]?.licenseProjectAnnualCashFlows;
        }
      })
    )
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe());
  }
}
