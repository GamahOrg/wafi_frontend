import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  CustomerShortDto,
  FacilityShortDto,
} from '../../../license/models/facility-short-dto';
import { RelatedCustomerCreateUpdateDto } from '../../dataModels/related-customer-create-update-dto';
import { Subscription, forkJoin } from 'rxjs';
import { FormBuilder, Validators } from '@angular/forms';
import { CustomerFacilitiesService } from '../../services/customer-facilities.service';
import { PopupService } from 'src/app/shared/services/popup/popup.service';
import { ToastrNotificatioService } from 'src/app/core/services/toastr-notification/toastr-notificatio.service';
import { PopupData } from 'src/app/shared/models/popup.model';
import { UserDataService } from 'src/app/core/services/user-data/user-data.service';
import { customerResponse } from 'src/app/shared/models/customer.model';
import { LoginUserTypeEnum } from 'src/app/modules/auth/models/login.model';
import { StorageService } from 'src/app/core/services/storage/storage.service';

@Component({
  selector: 'app-related-customers',
  templateUrl: './related-customers.component.html',
  styleUrls: ['./related-customers.component.scss'],
})
export class RelatedCustomersComponent implements OnInit, OnDestroy {
  facility?: FacilityShortDto;
  subCustomers: CustomerShortDto[] | null = null;
  relatedCustomerCreateUpdateDtos: RelatedCustomerCreateUpdateDto[] = [];
  relatedCustomerList: RelatedCustomerCreateUpdateDto | null = null;
  subscriptions: Subscription[] = [];
  loginUserType: string | null =  "";
  loginUserTypeEnum:LoginUserTypeEnum | null = null;
  showValidation: boolean = false;
  userData: customerResponse | null = null;
  assignedSubCustomerForm = this._formBuilder.group({
    nidNumber: ['', Validators.required],
  });
  constructor(
    private _formBuilder: FormBuilder,
    private _customerFacilitiesService: CustomerFacilitiesService,
    private _popupService: PopupService,
    private _storageService: StorageService,
    private _toastrNotificationService: ToastrNotificatioService,
    private _userDataService: UserDataService
  ) {}
  ngOnInit(): void {
    this.getLoginUserType();
    this.getFacilityObj();
    this.observePopupEvents();
  }
  get controls() {
    return this.assignedSubCustomerForm.controls;
  }

  private getFacilityObj(): void {
    this.subscriptions.push(
      this._customerFacilitiesService.getFacilityObj().subscribe((res: any) => {
        if (res) {
          this.facility = res as FacilityShortDto;
          if (this.facility && this.facility.id) this.loadComponentData();
        }
      })
    );
  }
  getLoginUserType(): void {
    this.loginUserType =  this._storageService.getLoginUserType()
    this.loginUserTypeEnum = Number(this.loginUserType ) as LoginUserTypeEnum;
  }
  private loadComponentData() {
    const requests = [
      this._customerFacilitiesService.GetRelatedCustomerListByFacilityId(
        this.facility?.id as string
      ),
      this._customerFacilitiesService.GetSubCustomers(),
    ];
    const subscriptions = forkJoin(requests).subscribe((results) => {
      if (results) {
        this.relatedCustomerCreateUpdateDtos =
          results[0] as RelatedCustomerCreateUpdateDto[];
        this.subCustomers = results[1] as CustomerShortDto[];
      }
    });
    this.subscriptions.push(subscriptions);
  }
  addRow(): void {
    let relatedCustomer = {} as RelatedCustomerCreateUpdateDto;
    relatedCustomer.facilitiesId = this.facility?.id as string;
    relatedCustomer.nidNumber = this.assignedSubCustomerForm.controls.nidNumber
      .value as string;
    this.subscriptions.push(
      this._customerFacilitiesService.Save(relatedCustomer).subscribe((res) => {
        if (res) {
          this._toastrNotificationService.showSuccess('تم الحفظ');
          this.relatedCustomerCreateUpdateDtos = [];
          res.forEach((delegate) => {
            let relatedCustomerDto = {} as RelatedCustomerCreateUpdateDto;
            relatedCustomerDto.id = delegate?.id
            relatedCustomerDto.subCustomerId = delegate?.subCustomerId;
            relatedCustomerDto.subCustomerName = delegate?.subCustomerName;
            this.relatedCustomerCreateUpdateDtos.push(relatedCustomerDto);
          });
        } else {
          // this._toastrNotificationService.showError('حدث خطأ لم يتم الحفظ');
        }
      })
    );
  }
  private getUserData() {
    this.subscriptions.push(
      this._userDataService
        .GetCustomer(this.loginUserTypeEnum as LoginUserTypeEnum)
        .subscribe((res: customerResponse | null) => {
          this.userData = res;
          this._userDataService.updateCustomerData(res as customerResponse);
        })
    );
  }

  save() {
    this._toastrNotificationService.showSuccess('تم الحفظ');
    this.getUserData();
    this.closeDialog();
  }

  delete(id: string, index: number) {
    debugger;
    if (id) {
      this.subscriptions.push(
        this._customerFacilitiesService.Delete(id).subscribe((res) => {
          if (res.isDone) this.showSuccess('تم حذف المفوض من على المنشأة');
          this.relatedCustomerCreateUpdateDtos.splice(index, 1);
        })
      );
    } else this.relatedCustomerCreateUpdateDtos.splice(index, 1);
  }

  showSuccess(message: string) {
    this._toastrNotificationService.showSuccess(message);
  }
  showError(message: string) {
    this._toastrNotificationService.showError(message);
  }
  observePopupEvents(): void {
    this.observecancelAction();
    this.observeconfirmAction();
  }

  private observecancelAction() {
    this.subscriptions.push(
      this._popupService.cancelAction.subscribe((res: PopupData) => {
        this._popupService.dismissDialog();
      })
    );
  }

  private observeconfirmAction() {
    this.subscriptions.push(
      this._popupService.confirmAction.subscribe((res: PopupData) => {
        this.save();
      })
    );
  }
  private closeDialog(): void {
    this._popupService.dismissDialog();
  }
  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
  }
}
