import { Component, OnDestroy, OnInit } from '@angular/core';
import { LicenseProjectExpectedIncomeDto } from '../../models/license-project-expected-income-dto';
import { Subscription } from 'rxjs';
import { LicenseProjectFeasibilityStudyFullDto } from '../../models/LicenseProjectFeasibilityStudyFullDto';
import { LicenseDetailsService } from '../../services/license-details/license-details.service';

@Component({
  selector: 'app-license-request-list-of-project-expected-income',
  templateUrl: './license-request-list-of-project-expected-income.component.html',
  styleUrls: ['./license-request-list-of-project-expected-income.component.scss']
})
export class LicenseRequestListOfProjectExpectedIncomeComponent implements OnInit, OnDestroy {
  licenseProjectExpectedIncomes: LicenseProjectExpectedIncomeDto[] = []
  subscriptions: Subscription[] = [];
  licenseProjectFeasibilityStudyFullDto: LicenseProjectFeasibilityStudyFullDto = new LicenseProjectFeasibilityStudyFullDto();
  /**
   *
   */
  constructor(private _licenseDetailService: LicenseDetailsService) { }

  ngOnInit(): void {
    this.updateExpectedIncome();
  }

  private updateExpectedIncome(): void {
    this.subscriptions.push(
      this._licenseDetailService.licenseProjectFeasibilityStudies$.subscribe((res: LicenseProjectFeasibilityStudyFullDto[] | null) => {
        if (res) {
          this.licenseProjectExpectedIncomes = res[0]?.licenseProjectExpectedIncomes;
        }
      })
    )
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe());
  }
}
