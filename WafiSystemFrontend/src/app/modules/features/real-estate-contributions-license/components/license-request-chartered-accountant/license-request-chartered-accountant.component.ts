import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { LicenseDetailsService } from '../../services/license-details/license-details.service';
import { LicenseProjectCharteredAccountantFullDto } from '../../models/LicenseProjectCharteredAccountantFullDto';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-license-request-chartered-accountant',
  templateUrl: './license-request-chartered-accountant.component.html',
  styleUrls: ['./license-request-chartered-accountant.component.scss'],
})
export class LicenseRequestCharteredAccountantComponent
  implements OnInit, OnDestroy
{
  LicenseProjectCharteredAccountants: LicenseProjectCharteredAccountantFullDto[] =
    [];
  subscriptions: Subscription[] = [];
  baseUrl = `${environment.baseURL}/`;

  constructor(private _licenseDetailService: LicenseDetailsService) {}

  ngOnInit(): void {
    this.updateCharteredAccountants();
  }
  private updateCharteredAccountants(): void {
    this.subscriptions.push(
      this._licenseDetailService.licenseProjectCharteredAccountants$.subscribe(
        (res: LicenseProjectCharteredAccountantFullDto[] | null) => {
          if (res) {
            this.LicenseProjectCharteredAccountants = res;
          }
        }
      )
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe());
  }
}
