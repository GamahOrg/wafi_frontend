import { Component } from '@angular/core';
import { LicenseProjectMainRealStateDeveloperDto } from '../../dataModels/project-real-state-developer.dto';
import { Subscription } from 'rxjs';
import { LicenseDetailsService } from '../../services/license-details/license-details.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-license-project-main-real-state-developer',
  templateUrl: './license-project-main-real-state-developer.component.html',
  styleUrls: ['./license-project-main-real-state-developer.component.scss']
})
export class LicenseProjectMainRealStateDeveloperComponent {
  baseUrl = `${environment.baseURL}/`;
  licenseProjectMainRealStateDeveloper: LicenseProjectMainRealStateDeveloperDto = new LicenseProjectMainRealStateDeveloperDto();
  subscriptions: Subscription[] = [];
  /**
   *
   */
  constructor(private _licenseDetailService: LicenseDetailsService) { }

  ngOnInit(): void {
    this.updateLicenseProjectMainRealStateDeveloper();
  }
  
  private updateLicenseProjectMainRealStateDeveloper(): void {
    this.subscriptions.push(
      this._licenseDetailService.licenseProjectMainRealStateDeveloper$.subscribe((res: LicenseProjectMainRealStateDeveloperDto[] | null) => {
        if (res) {
          this.licenseProjectMainRealStateDeveloper = res[0];
        }
      })
    )
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe());
  }
}
