import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { nationalAddressResponseFE, nationalAddressResponseBE } from 'src/app/modules/features/facilities/dataModels/national-address.model';
import { customerResponse } from 'src/app/shared/models/customer.model';
import { PopupData } from 'src/app/shared/models/popup.model';
import { PopupService } from 'src/app/shared/services/popup/popup.service';
import { UserDataService } from 'src/app/core/services/user-data/user-data.service';
import { NationalAddressService } from '../../services/facilityProfile/national-address-service/national-address.service';
import { NationalAddressesFormComponent } from '../national-addresses-form/national-addresses-form.component';
import { FacilityProfileService } from '../../services/facilityProfile/facility-profile.service';

@Component({
  selector: 'app-national-addresses',
  templateUrl: './national-addresses.component.html',
  styleUrls: ['./national-addresses.component.scss']
})

export class NationalAddressesComponent implements OnInit, OnDestroy {
  nationalAddress: nationalAddressResponseFE = new nationalAddressResponseFE(new nationalAddressResponseBE());
  subscriptions: Subscription[] = [];
  userData: customerResponse | null = null;
  canUpdate: boolean = true;

  constructor(
    private _nationalAddressService: NationalAddressService, private _userDataService: UserDataService,
    private _popupService: PopupService,
    private _facilityProfileService: FacilityProfileService) { }

  ngOnInit() {
    this.obseveCustomerData();
    this.observeCurrentObj();
    this.subscriptions.push(
      this._facilityProfileService.getAvailabilityToUpdate().subscribe((res: boolean) => {
        this.canUpdate = res;
      })
    );
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
    const emptyAddress = new nationalAddressResponseFE(new nationalAddressResponseBE());
    this.nationalAddress = emptyAddress;
    this._nationalAddressService.SetSubjectObj(emptyAddress);

    this.subscriptions.push(
      this._nationalAddressService.GetFacilityById(this.userData?.facilities[0].id as string).subscribe(res => {
        const next = res ?? emptyAddress;
        this.nationalAddress = next;
        this._nationalAddressService.SetSubjectObj(next);
      })
    )
  }

  openDialog(): void {
    let Data = {
      title: "اضافة بيانات عنوان المنشأة ",
      icon: "hgi hgi-stroke hgi-profile",
      component: NationalAddressesFormComponent,
      buttons: [
        {
          icon: '',
          title: 'إلغاء',
          actionType: 'cancel',
          isVisable: true,
          isDisables: false,
        },
        {
          icon: '',
          title: 'حفظ البيانات',
          actionType: 'confirm',
          isVisable: true,
          isDisables: false,
        },
      ],
    } as PopupData;
    this._popupService.updatePopupData(Data);
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

