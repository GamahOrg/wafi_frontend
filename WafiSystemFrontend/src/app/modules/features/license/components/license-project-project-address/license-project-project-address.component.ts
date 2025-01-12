import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { licenseProjectAddresses } from '../../models/project-units';
import { LicenseDetailsService } from '../../services/license-details/license-details.service';

@Component({
  selector: 'app-license-project-project-address',
  templateUrl: './license-project-project-address.component.html',
  styleUrls: ['./license-project-project-address.component.scss']
})
export class LicenseProjectProjectAddressComponent implements OnInit {
  address!: licenseProjectAddresses;
  subscriptions: Subscription[] = [];

  constructor(private _licenseDetailsService: LicenseDetailsService) { }

  ngOnInit(): void {
    this.updateProjectAddresses()
  }

  private updateProjectAddresses(): void {
    this.subscriptions.push(
      this._licenseDetailsService.licenseProjectAddresses$.subscribe((res: licenseProjectAddresses[] | null) => {
        if (res && res.length) {
          this.address = res[0];
        }
      })
    )
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe());
  }

}
