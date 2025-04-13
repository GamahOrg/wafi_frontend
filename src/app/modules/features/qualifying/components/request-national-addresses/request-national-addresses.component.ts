import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { environment } from 'src/environments/environment';
import { nationalAddressResponse } from '../../dataModels/national-address.model';
import { RequestService } from '../../services/requests/request-service.service';
import { facilityDTO } from '../../dataModels/request-details.model';

@Component({
  selector: 'app-request-national-addresses',
  templateUrl: './request-national-addresses.component.html',
  styleUrls: ['./request-national-addresses.component.scss'],
})
export class RequestNationalAddressesComponent {
  subscriptions: Subscription[] = [];
  baseUrl = `${environment.baseURL}/`;
  nationalAddress: nationalAddressResponse | null = null;

  constructor(private _requestService: RequestService) { }

  ngOnInit(): void {
    this.updateNationalAddress();
  }

  updateNationalAddress() {
    // this.subscriptions.push(
    //   this._requestService
    //     .getFacility()
    //     .subscribe((res: facilityDTO[] | null) => {
    //       if (res && res[0].qualificationNationalAddressDetailDto)
    //         this.nationalAddress =
    //           res[0].qualificationNationalAddressDetailDto[0];
    //     })
    // );
    this.subscriptions.push(
      this._requestService.NationalAddresses$.subscribe((res: nationalAddressResponse[] | null) => {
        if (res && res?.length > 0) this.nationalAddress = res[0] as nationalAddressResponse;
      })
    )
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
  }
}
