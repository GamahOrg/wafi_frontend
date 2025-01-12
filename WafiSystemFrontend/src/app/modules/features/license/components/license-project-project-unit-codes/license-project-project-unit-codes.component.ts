import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { licenseProjectZones, licenseProjectUnits, licenseProjectSubUnitsListCodes } from '../../models/project-units';
import { LicenseDetailsService } from '../../services/license-details/license-details.service';

@Component({
  selector: 'app-license-project-project-unit-codes',
  templateUrl: './license-project-project-unit-codes.component.html',
  styleUrls: ['./license-project-project-unit-codes.component.scss']
})
export class LicenseProjectProjectUnitCodesComponent {
  zones!: licenseProjectZones[];
  units!: licenseProjectUnits[];
  codes!: licenseProjectSubUnitsListCodes[];


  subscriptions: Subscription[] = [];

  constructor(private _licenseDetailsService: LicenseDetailsService) { }

  ngOnInit(): void {
    this.updateLicenseProjectZones()
  }

  private updateLicenseProjectZones(): void {
    this.subscriptions.push(
      this._licenseDetailsService.licenseProjectZones$.subscribe((res: licenseProjectZones[] | null) => {
        if (res && res.length) {
          this.zones = res;
          if (this.zones && this.zones.length) {
            this.units = this.zones.map(licenseProjectZones => licenseProjectZones.licenseProjectUnits)
              .reduce(function (previous, next) { return previous.concat(next); }, []);
          }
          if (this.units && this.units.length) {
            this.codes = this.units.map(licenseProjectUnits => licenseProjectUnits.licenseProjectSubUnitsListCodes)
              .reduce(function (previous, next) { return previous.concat(next); }, []);
          }
        }
      })
    )
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe());
  }

}
