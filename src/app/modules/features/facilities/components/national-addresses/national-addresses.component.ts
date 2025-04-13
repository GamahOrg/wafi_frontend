import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { nationalAddressResponseFE, nationalAddressResponseBE } from 'src/app/modules/features/facilities/dataModels/national-address.model';
import { customerResponse } from 'src/app/shared/models/customer.model';
import { PopupData } from 'src/app/shared/models/popup.model';
import { PopupService } from 'src/app/shared/services/popup/popup.service';
import { UserDataService } from 'src/app/core/services/user-data/user-data.service';
import { NationalAddressService } from '../../services/facilityProfile/national-address-service/national-address.service';
import { NationalAddressesFormComponent } from '../national-addresses-form/national-addresses-form.component';

@Component({
  selector: 'app-national-addresses',
  templateUrl: './national-addresses.component.html',
  styleUrls: ['./national-addresses.component.scss']
})

export class NationalAddressesComponent implements OnInit, OnDestroy {
  nationalAddress: nationalAddressResponseFE = new nationalAddressResponseFE(new nationalAddressResponseBE());
  subscriptions: Subscription[] = [];
  userData: customerResponse | null = null;

  constructor(
    private _nationalAddressService: NationalAddressService, private _userDataService: UserDataService,
    private _popupService: PopupService) { }

  ngOnInit() {
    this.obseveCustomerData();
    this.observeCurrentObj();
  }

  obseveCustomerData(): void {
    this.subscriptions.push(
      this._userDataService.getCustomerData().subscribe((res: customerResponse | null) => {
        this.userData = res
        if (this.userData) {
          this.GetFacilityById();
        }
      })
    )
  }

  GetFacilityById() {
    this.subscriptions.push(
      //this.userData?.Id as string
      this._nationalAddressService.GetFacilityById(this.userData?.facilities[0].id as string).subscribe(res => {
        if (res) {
          this.nationalAddress = res;
          this._nationalAddressService.SetSubjectObj(this.nationalAddress);
        }
      })
    )
  }

  openDialog(): void {
    let Data = {
      title: "عنوان المنشأة",
      component: NationalAddressesFormComponent
    } as PopupData;
    let dialogRef = this._popupService.updatePopupData(Data);
    // dialogRef.afterClosed().subscribe(_=> this.observeCurrentObj());
  }

  observeCurrentObj(): void {
    this.subscriptions.push(
      this._nationalAddressService.getSubjectObj().subscribe((subjectObj) => {
        this.nationalAddress = subjectObj;
      })
    )
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe())
  }
}

