import { Component } from '@angular/core';
import { LicenseProjectDelegatorsDto } from '../../dataModels/project-real-state-developer.dto';
import { Subscription } from 'rxjs';
import { LicenseDetailsService } from '../../services/license-details/license-details.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-license-project-delegator-list',
  templateUrl: './license-project-delegator-list.component.html',
  styleUrls: ['./license-project-delegator-list.component.scss']
})
export class LicenseProjectDelegatorListComponent {
  licenseProjectDelegators :LicenseProjectDelegatorsDto   []=[]
  subscriptions: Subscription[] = [];
  /**
   *
   */
  constructor(private _licenseDetailService: LicenseDetailsService) {}
  baseUrl = `${environment.baseURL}/`;
  ngOnInit(): void {
    this.updateLicenseProjectDelegator();
  }
  private updateLicenseProjectDelegator(): void {
    
    this.subscriptions.push(
      this._licenseDetailService.licenseProjectDelegator$.subscribe((res: LicenseProjectDelegatorsDto[] | null) => {
        if (res) {
          
          this.licenseProjectDelegators = res;
        }
      })
    )
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe());
  }
}
