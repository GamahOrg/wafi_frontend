import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { LicenseProjectRequestChangePlanFullDto } from '../../models/license-project-request-change-plan-full-dto';
import { CahngePlaneRequestDetailsService } from '../../services/cahnge-plane-request-details.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-changeplan-license-request-developer-details',
  templateUrl: './changeplan-license-request-developer-details.component.html',
  styleUrls: ['./changeplan-license-request-developer-details.component.scss']
})
export class ChangeplanLicenseRequestDeveloperDetailsComponent implements OnInit {

  subscriptions: Subscription[] = [];
  licenseProjectRequestChangePlanFull?:LicenseProjectRequestChangePlanFullDto;
  baseUrl = `${environment.baseURL}/`;
  /**
   *
   */
  constructor(private _cahngePlaneRequestDetailsService: CahngePlaneRequestDetailsService) {}

  ngOnInit(): void {
    this.getLicenseProjectRequestChangePlan();
  }
  private getLicenseProjectRequestChangePlan(): void {

    this.subscriptions.push(
      this._cahngePlaneRequestDetailsService.getLicenseProjectRequestChangePlan().subscribe((res: LicenseProjectRequestChangePlanFullDto | null) => {
        if (res) {
          this.licenseProjectRequestChangePlanFull = res;
        }
      }),
    )
  }


  ngOnDestroy(): void {
    this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe());
  }

}
