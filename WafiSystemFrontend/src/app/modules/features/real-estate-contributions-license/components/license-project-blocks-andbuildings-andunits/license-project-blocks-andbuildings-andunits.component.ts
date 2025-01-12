import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { LicenseDetails } from '../../models/license-details.model';
import { licenseProjectZones } from '../../models/project-units';
import { LicenseDetailsService } from '../../services/license-details/license-details.service';

@Component({
  selector: 'app-license-project-blocks-andbuildings-andunits',
  templateUrl: './license-project-blocks-andbuildings-andunits.component.html',
  styleUrls: ['./license-project-blocks-andbuildings-andunits.component.scss']
})
export class LicenseProjectBlocksAndbuildingsAndunitsComponent {
  request!: LicenseDetails;
  zones!: licenseProjectZones[];
  subscriptions: Subscription[] = [];

  constructor(private _licenseDetailsService:LicenseDetailsService){}

  ngOnInit(): void {
    this.updateLicenseProjectZones()
  }
  private updateLicenseProjectZones(): void {
    this.subscriptions.push(
      this._licenseDetailsService.licenseProjectZones$.subscribe((res: licenseProjectZones[] | null) => {
        if (res && res.length) {
          this.zones = res;
        }
      })
    )
  }
  ngOnDestroy(): void {
    this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe());
  }

}
