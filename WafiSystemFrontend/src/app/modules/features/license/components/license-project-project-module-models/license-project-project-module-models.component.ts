import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { licenseProjectZones, licenseProjectUnits, licenseProjectSubUnits } from '../../models/project-units';
import { LicenseDetailsService } from '../../services/license-details/license-details.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-license-project-project-module-models',
  templateUrl: './license-project-project-module-models.component.html',
  styleUrls: ['./license-project-project-module-models.component.scss']
})
export class LicenseProjectProjectModuleModelsComponent {
  baseUrl = `${environment.baseURL}/`;
  zones!: licenseProjectZones[];
  units!: licenseProjectUnits[];
  subUnits!: licenseProjectSubUnits[];
  subscriptions: Subscription[] = [];

  getModels(subUnits: licenseProjectSubUnits[]) {
    return subUnits.map(licenseProjectSubUnits => licenseProjectSubUnits.licenseProjectModels)
      .reduce(function (previous, next) { return previous.concat(next); }, []);
  }

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
            this.subUnits = this.units.map(licenseProjectUnits => licenseProjectUnits.licenseProjectSubUnits)
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
