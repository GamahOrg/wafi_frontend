import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { LicenseProjectRequestDetailsDto } from 'src/app/modules/features/license/models/license-request-project-details-dto';
import { environment } from 'src/environments/environment';
import { UserRequestTypeEnum } from '../../../license/enums/user-request-type';
import { UserDataService } from 'src/app/core/services/user-data/user-data.service';
import { customerResponse } from 'src/app/shared/models/customer.model';
import { CancelLicenseRequestService } from '../../services/cancel-license-request.service';

@Component({
  selector: 'app-cancel-license-accountant-details',
  templateUrl: './cancel-license-accountant-details.component.html',
  styleUrls: ['./cancel-license-accountant-details.component.scss']
})
export class CancelLicenseAccountantDetailsComponent implements OnInit {
  projectDetails: LicenseProjectRequestDetailsDto | any;
  facilityId: string = '';
  baseUrl = `${environment.baseURL}/`;
  subscriptions: Subscription[] = [];
  projectId: string | null = "";
  requestType : UserRequestTypeEnum | any
  userRequestTypeEnum = UserRequestTypeEnum;
  constructor(private _userDataService: UserDataService,private cancelLicenseRequestService: CancelLicenseRequestService)
   { }

   ngOnInit(): void {
    this.ObserveSelectedRequest();
    this.obseveCustomerData();
  }
    ObserveSelectedRequest() {
      this.subscriptions.push(
        this.cancelLicenseRequestService.selectedRequest$.subscribe((res: LicenseProjectRequestDetailsDto | null) => {
            this.projectDetails = res;
        })
      )
    }
    obseveCustomerData(): void {
      this.subscriptions.push(
        this._userDataService
          .getCustomerData()
          .subscribe((res: customerResponse | null) => {
            if (res && res.facilities && res.facilities.length > 0) {
            this.facilityId = res?.facilities[0]?.id || '';
            }
          })
      );
    }

    ngOnDestroy(): void {
      this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe());
    }
}
