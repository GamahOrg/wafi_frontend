import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';
import { RealEstateContributionDto } from '../../dataModels/real-estate-contribution-dto';
import { Subscription } from 'rxjs';
import { LicenseDetailsService } from '../../services/license-details/license-details.service';

@Component({
  selector: 'app-license-project-agreements',
  templateUrl: './license-project-agreements.component.html',
  styleUrls: ['./license-project-agreements.component.scss']
})
export class LicenseProjectAgreementsComponent {
  baseUrl = `${environment.baseURL}/`;
  realEstateContribution!: RealEstateContributionDto;
  subscriptions: Subscription[] = [];
  constructor(private _licenseDetailService: LicenseDetailsService) {

  }

  ngOnInit(): void {
    this.updateRealEstateContribution()
  }
  private updateRealEstateContribution(): void {
    this.subscriptions.push(
      this._licenseDetailService.realEstateContribution$.subscribe((res: RealEstateContributionDto | null) => {
        if (res) {
          this.realEstateContribution = res;
        }
      })
    )
  }
  ngOnDestroy(): void {
    this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe());
  }
}
