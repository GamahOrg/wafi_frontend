import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { LicenseDetailsService } from '../../services/license-details/license-details.service';
import { LicenseProjectSubDeveloperFullDto } from '../../models/license-project-sub-developer-full-dto';
import { LicenseProjectSubDeveloperDto } from '../../dataModels/license-project-sub-developer/license-project-sub-developer-dto';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-license-request-sub-developer',
  templateUrl: './license-request-sub-developer.component.html',
  styleUrls: ['./license-request-sub-developer.component.scss']
})
export class LicenseRequestSubDeveloperComponent implements OnInit, OnDestroy {
  baseUrl = `${environment.baseURL}/`;
  LicenseProjectSubDevelopers: LicenseProjectSubDeveloperDto[] = [];
  subscriptions: Subscription[] = [];
  /**
   *
   */
  constructor(private _licenseDetailService: LicenseDetailsService) { }

  ngOnInit(): void {
    this.updateLicenseProjectSubDevelopers();
  }

  private updateLicenseProjectSubDevelopers(): void {
    this.subscriptions.push(
      this._licenseDetailService.licenseProjectSubDevelopers$.subscribe((res: LicenseProjectSubDeveloperDto[] | null) => {
        if (res) {
          this.LicenseProjectSubDevelopers = res;
        }
      })
    )
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe());
  }
}
