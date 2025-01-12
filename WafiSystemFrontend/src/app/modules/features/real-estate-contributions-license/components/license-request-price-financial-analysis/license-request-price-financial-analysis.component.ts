import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { LicenseProjectFeasibilityStudyFullDto } from '../../models/LicenseProjectFeasibilityStudyFullDto';
import { environment } from 'src/environments/environment';
import { LicenseDetailsService } from '../../services/license-details/license-details.service';
import { LicenseProjectLandDataDto } from '../../models/license-project.model';

@Component({
  selector: 'app-license-request-price-financial-analysis',
  templateUrl: './license-request-price-financial-analysis.component.html',
  styleUrls: ['./license-request-price-financial-analysis.component.scss']
})
export class LicenseRequestPriceFinancialAnalysisComponent implements OnInit,OnDestroy  {
  subscriptions: Subscription[] = [];
  licenseProjectFeasibilityStudyFullDto:LicenseProjectFeasibilityStudyFullDto=new  LicenseProjectFeasibilityStudyFullDto();
  baseUrl = `${environment.baseURL}/`;
  /**
   *
   */
  constructor(private _licenseDetailService: LicenseDetailsService) {}

  ngOnInit(): void {
    this.updateFeasibilityStudies();
  }
  private updateFeasibilityStudies(): void {

    this.subscriptions.push(
      this._licenseDetailService.licenseProjectFeasibilityStudies$.subscribe((res: LicenseProjectFeasibilityStudyFullDto[] | null) => {
        if (res) {

          this.licenseProjectFeasibilityStudyFullDto = res[0];
        }
      }),
      this._licenseDetailService.projectLandData$.subscribe((res: LicenseProjectLandDataDto | null) => {
        if (res) {
          if(res.landTotalSpace)
          this.licenseProjectFeasibilityStudyFullDto.landTotalSpace = res.landTotalSpace
        }
      })
    )
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe());
  }
}
