import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { LicenseDetailsService } from '../../services/license-details/license-details.service';
import { LicenseProjectEngineeringConsultantFullDto } from '../../models/LicenseProjectEngineeringConsultantFullDto';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-license-request-engineering-consultant',
  templateUrl: './license-request-engineering-consultant.component.html',
  styleUrls: ['./license-request-engineering-consultant.component.scss'],
})
export class LicenseRequestEngineeringConsultantComponent
  implements OnInit, OnDestroy
{
  LicenseProjectEngineeringConsultants: LicenseProjectEngineeringConsultantFullDto[] =
    [];
  subscriptions: Subscription[] = [];
  baseUrl = `${environment.baseURL}/`;

  constructor(private _licenseDetailService: LicenseDetailsService) {}

  ngOnInit(): void {
    this.updateEngineeringConsultants();
  }

  private updateEngineeringConsultants(): void {
    this.subscriptions.push(
      this._licenseDetailService.licenseProjectEngineeringConsultants$.subscribe(
        (res: LicenseProjectEngineeringConsultantFullDto[] | null) => {
          if (res) {
            this.LicenseProjectEngineeringConsultants = res;
          }
        }
      )
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe());
  }
}
