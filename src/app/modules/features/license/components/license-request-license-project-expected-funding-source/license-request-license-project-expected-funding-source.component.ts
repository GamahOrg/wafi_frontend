import { Component, OnDestroy, OnInit } from '@angular/core';
import { LicenseProjectExpectedFundingSourceDto } from '../../models/license-project-expected-funding-source-dto';
import { Subscription } from 'rxjs';
import { LicenseProjectFeasibilityStudyFullDto } from '../../models/LicenseProjectFeasibilityStudyFullDto';
import { LicenseDetailsService } from '../../services/license-details/license-details.service';

@Component({
  selector: 'app-license-request-license-project-expected-funding-source',
  templateUrl: './license-request-license-project-expected-funding-source.component.html',
  styleUrls: ['./license-request-license-project-expected-funding-source.component.scss']
})
export class LicenseRequestLicenseProjectExpectedFundingSourceComponent implements OnInit, OnDestroy {
  licenseProjectExpectedFundingSources: LicenseProjectExpectedFundingSourceDto[] = []
  subscriptions: Subscription[] = [];
  licenseProjectFeasibilityStudyFullDto: LicenseProjectFeasibilityStudyFullDto = new LicenseProjectFeasibilityStudyFullDto();
  /**
   *
   */
  constructor(private _licenseDetailService: LicenseDetailsService) { }

  ngOnInit(): void {
    this.updateFinancialIndicator();
  }

  private updateFinancialIndicator(): void {

    this.subscriptions.push(
      this._licenseDetailService.licenseProjectFeasibilityStudies$.subscribe((res: LicenseProjectFeasibilityStudyFullDto[] | null) => {
        if (res) {
          this.licenseProjectExpectedFundingSources = res[0]?.licenseProjectExpectedFundingSources;
        }
      })
    )
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe());
  }
}
