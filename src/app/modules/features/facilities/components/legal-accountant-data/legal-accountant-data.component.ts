import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import {
  customerResponse,
} from 'src/app/shared/models/customer.model';
import { UserDataService } from 'src/app/core/services/user-data/user-data.service';
import { environment } from 'src/environments/environment';
import { FacilityBasicInfo } from '../../dataModels/facility-basic-info.model';
import { FacilityProfileService } from '../../services/facilityProfile/facility-profile.service';

@Component({
  selector: 'app-legal-accountant-data',
  templateUrl: './legal-accountant-data.component.html',
  styleUrls: ['./legal-accountant-data.component.scss'],
})
export class LegalAccountantDataComponent implements OnInit, OnDestroy {
  subscriptions: Subscription[] = [];
  userData: customerResponse | null = null;
  facilityData: FacilityBasicInfo = {} as FacilityBasicInfo;
  baseUrl = `${environment.baseURL}/`;

  constructor(
    private _facilityProfileService: FacilityProfileService,
    private _userDataService: UserDataService,
  ) {}

  ngOnInit(): void {
    this.obseveCustomerData();
    this.observeFacilityDataBS();
  }

  obseveCustomerData(): void {
    this.subscriptions.push(
      this._userDataService
        .getCustomerData()
        .subscribe((res: customerResponse | null) => {
          this.userData = res;
          if (this.userData) {
            this.GetFacilityById();
          }
        }),
    );
  }

  GetFacilityById(): void {
    if (this.userData?.facilities && this.userData?.facilities.length > 0) {
      this.subscriptions.push(
        this._facilityProfileService
          .GetFacilityById(this.userData?.facilities[0].id as string)
          .subscribe((res: FacilityBasicInfo) => {
            this._facilityProfileService.updateFacilityBasicDataBS(res);
          }),
      );
    }
  }

  observeFacilityDataBS(): void {
    this.subscriptions.push(
      this._facilityProfileService
        .getFacilityBasicDataBS()
        .subscribe((res: FacilityBasicInfo) => {
          this.facilityData = res as FacilityBasicInfo;
        }),
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe());
  }
}
