import { Component, OnDestroy, OnInit } from '@angular/core';
import { LicenseProjectAnnualBalanceSheetDto } from '../../models/license-project-annual-balance-sheet-dto';
import { Subscription } from 'rxjs';
import { LicenseProjectFeasibilityStudyFullDto } from '../../models/LicenseProjectFeasibilityStudyFullDto';
import { LicenseDetailsService } from '../../services/license-details/license-details.service';

@Component({
  selector: 'app-license-request-expected-annual-balance-sheet',
  templateUrl: './license-request-expected-annual-balance-sheet.component.html',
  styleUrls: ['./license-request-expected-annual-balance-sheet.component.scss']
})
export class LicenseRequestExpectedAnnualBalanceSheetComponent implements OnInit, OnDestroy{
  licenseProjectAnnualBalanceSheets :LicenseProjectAnnualBalanceSheetDto   []=[]
  subscriptions: Subscription[] = [];
  licenseProjectFeasibilityStudyFullDto:LicenseProjectFeasibilityStudyFullDto=new  LicenseProjectFeasibilityStudyFullDto();
  /**
   *
   */
  constructor(private _licenseDetailService: LicenseDetailsService) {}

  ngOnInit(): void {
    this.updateAnnualBalanceSheet();
  }
  private updateAnnualBalanceSheet(): void {
    
    this.subscriptions.push(
      this._licenseDetailService.licenseProjectFeasibilityStudies$.subscribe((res: LicenseProjectFeasibilityStudyFullDto[] | null) => {
        if (res) {
          
          this.licenseProjectAnnualBalanceSheets = res[0]?.licenseProjectAnnualBalanceSheets;
        }
      })
    )
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe());
  }
}
