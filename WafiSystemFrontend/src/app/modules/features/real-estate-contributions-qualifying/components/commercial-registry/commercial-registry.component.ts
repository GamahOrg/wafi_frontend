import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { RequestDetails, facilityDTO } from '../../dataModels/request-details.model';
import { RequestService } from '../../services/requests/request-service.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-commercial-registry',
  templateUrl: './commercial-registry.component.html',
  styleUrls: ['./commercial-registry.component.scss'],
})
export class CommercialRegistryComponent implements OnInit, OnDestroy {
  subscriptions: Subscription[] = [];
  facility: null | facilityDTO = null;
  baseUrl = `${environment.baseURL}/`;

  // facilityData: facilityDTO | null = null;
  selectedRequest: null | RequestDetails = null;
  constructor(private _requestService: RequestService) {}

  ngOnInit(): void {
    // this.getSeclectRequest();
    this.getSeclectRequest()
    this.updateFacilityData()
  }
  // getSeclectRequest() {
  //   this.subscriptions.push(
  //     this._requestService
  //       .getFacility()
  //       .subscribe((res: facilityDTO[] | null) => {
  //         if (res) {
  //           this.facility = res[0];
  //         }
  //       })
  //   );
  // }
  getSeclectRequest() {
    this.subscriptions.push(
      this._requestService.seclectRequest$.subscribe((res: RequestDetails[] | null) => {
        if (res && res.length>0) {
          this.selectedRequest= res[0];

        }
      })
    )
  }
  updateFacilityData() {
    this.subscriptions.push(
      this._requestService.FacilityBasicInfo$.subscribe((res: facilityDTO | null) => {
        this.facility = res;
        console.log("this.facility", this.facility)
      })
    )
  }
  ngOnDestroy(): void {
    this.subscriptions.forEach((sub) => sub.unsubscribe());
  }
}
