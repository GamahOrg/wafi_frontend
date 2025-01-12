import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { LicenseDetailsService } from '../../services/license-details/license-details.service';
import { LicenseProjectExternalAddressDto } from '../../dataModels/project-external-address.model';

@Component({
  selector: 'app-license-project-external-address',
  templateUrl: './license-project-external-address.component.html',
  styleUrls: ['./license-project-external-address.component.scss']
})
export class LicenseProjectExternalAddressComponent implements OnInit {

  subscriptions: Subscription[] = [];
  address!: LicenseProjectExternalAddressDto;
  constructor(private _licenseDetailsService: LicenseDetailsService) {

  }


  ngOnInit(): void {
    console.log('external address');
    
    this.updateProjectExternalAddresses()
  }
  private updateProjectExternalAddresses(): void {
    console.log('updateProjectExternalAddresses');    
    this.subscriptions.push(
      this._licenseDetailsService.licenseProjectExternalAddresses$.subscribe((res: LicenseProjectExternalAddressDto[] | null) => {
       
       console.log('updateProjectExternalAddresses');
       console.log(res);
       
        if (res) {
          this.address = res[0];
        }
      })
    )
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe());
  }

}
