import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { licenseProjectServices } from '../../models/project-units';
import { LicenseDetailsService } from '../../services/license-details/license-details.service';

@Component({
  selector: 'app-license-project-additional-services',
  templateUrl: './license-project-additional-services.component.html',
  styleUrls: ['./license-project-additional-services.component.scss']
})
export class LicenseProjectAdditionalServicesComponent implements OnInit {

  additionalServices!: licenseProjectServices[];
  subscriptions: Subscription[] = [];

  constructor(private _licenseDetailsService: LicenseDetailsService) { }

  ngOnInit(): void {
    this.updateAdditionalServices()
  }
  private updateAdditionalServices(): void {
    this.subscriptions.push(
      this._licenseDetailsService.licenseProjectServices$.subscribe((res: licenseProjectServices[] | null) => {
        if (res && res.length) {
          this.additionalServices = res;
        }
      })
    )
  }
  ngOnDestroy(): void {
    this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe());
  }


  localization = {
    title: 'بيانات الخدمات الاضافيه',
    sysLicenseProjectServiceId: 'الخدمه الإضافيه',
    period: 'المده',
    price: 'السعر',
  };

}
