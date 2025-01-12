import { Component, OnDestroy, OnInit } from '@angular/core';
import { LicenseProjectFinancialIndicatorDto } from '../../models/license-project-financial-indicator-dto';
import { Subscription } from 'rxjs';
import { LicenseProjectFeasibilityStudyFullDto } from '../../models/LicenseProjectFeasibilityStudyFullDto';
import { LicenseDetailsService } from '../../services/license-details/license-details.service';

@Component({
  selector: 'app-license-request-license-project-financial-indicator',
  templateUrl: './license-request-license-project-financial-indicator.component.html',
  styleUrls: ['./license-request-license-project-financial-indicator.component.scss']
})
export class LicenseRequestLicenseProjectFinancialIndicatorComponent implements OnInit, OnDestroy {
  licenseProjectFinancialIndicators: LicenseProjectFinancialIndicatorDto[] = []
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
          this.licenseProjectFinancialIndicators = res[0]?.licenseProjectFinancialIndicators;
        }
      })
    )
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe());
  }
}
