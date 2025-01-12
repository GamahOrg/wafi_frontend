import { Component } from '@angular/core';
import { LicenseDetailsService } from '../../services/license-details/license-details.service';
import { LicenseProjectDeveloperDto } from '../../dataModels/license-project-developer-dto';
import { Subscription } from 'rxjs';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-license-project-developer',
  templateUrl: './license-project-developer.component.html',
  styleUrls: ['./license-project-developer.component.scss']
})
export class LicenseProjectDeveloperComponent {
  licenseProjectDeveloper: LicenseProjectDeveloperDto = new LicenseProjectDeveloperDto();
  subscriptions: Subscription[] = [];
  /**
   *
   */
  constructor(private _licenseDetailService: LicenseDetailsService) { }
  baseUrl = `${environment.baseURL}/`;
  ngOnInit(): void {
    this.updateLicenseProjectDelegator();
  }
  private updateLicenseProjectDelegator(): void {

    this.subscriptions.push(
      this._licenseDetailService.licenseProjectDeveloper$.subscribe((res: LicenseProjectDeveloperDto[] | null) => {
        if (res) {
          this.licenseProjectDeveloper = res[0];
        }
      })
    )
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe());
  }
}
