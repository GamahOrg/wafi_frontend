import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { customerResponse, facilityResponse } from 'src/app/shared/models/customer.model';
import { CustomerFacilitiesService } from '../../services/customer-facilities.service';
import { PopupService } from 'src/app/shared/services/popup/popup.service';
import { ToastrNotificatioService } from 'src/app/core/services/toastr-notification/toastr-notificatio.service';
import { UserDataService } from 'src/app/core/services/user-data/user-data.service';
import { PopupData } from 'src/app/shared/models/popup.model';
import { Configuration } from 'src/app/core/configurations/shared.config';

@Component({
  selector: 'app-add-facility',
  templateUrl: './add-facility.component.html',
  styleUrls: ['./add-facility.component.scss']
})
export class AddFacilityComponent implements OnInit, OnDestroy {
  subscriptions: Subscription[] = [];
  showValidation:boolean=false;
  userData: customerResponse | null = null;
  facilityData: facilityResponse = new facilityResponse;
  addFacilityForm = this._formBuilder.group({
    nationalNumber: ['', [Validators.required, Validators.maxLength(20), Validators.pattern(Configuration.validators.numberOnly)]],
  })
  viewMode: boolean = false;
  localization = {
    commercialRegistrationNo: "رقم السجل التجاري",
    nationalNumber: "الرقم الوطنى للسجل التجاري",
    alert: "تم التحقق من الرقم الوطني للسجل التجاري   من قبل وزارة التجارة",
    title: "البيانات الخاصة بالرقم الوطني للسجل التجاري التي تم استرجاعها من قبل وزارة التجارة",
    startDateLabel: "تاريخ إصدار السجل التجاري",
    endDateLabel: "تاريخ إنتهاء السجل التجاري",
    facilityData: "بيانات المنشأة ",
    facilityType: "نوع المنشأة",
    facilityName: "اسم المنشأه",
    facilityActivities: "نشاط / انشطة المنشأه",
    requiredErrorMsg: 'حقل مطلوب',
    maxLengthErrorMsg: "طول الارقام يجب الا يزيد عن 20 رقم",
    verification: "تحقق",
    pattern: "accept no. only",
    next: "التالي",
    previous: "السابق"
  }
  constructor(
    private _formBuilder: FormBuilder,
    private _customerFacilitiesService: CustomerFacilitiesService,
    private _popupService: PopupService,
    private _toastrNotificationService: ToastrNotificatioService,
    private _userDataService: UserDataService
  ) { }
  ngOnInit(): void {
    this.obseveCustomerData();
    this.observePopupEvents();
  }
  private obseveCustomerData(): void {
    this.subscriptions.push(
      this._userDataService.getCustomerData().subscribe((res: customerResponse | null) => {
        this.userData = res
      })
    )
  }


  get nationalNumber(): FormControl {
    return this.addFacilityForm.controls.nationalNumber
  }
  save()
  {
    this.subscriptions.push(
      this._customerFacilitiesService.FacilityRegister(this.addFacilityForm.controls.nationalNumber.value as string, this.userData?.id as string).subscribe((facilityDataRes: facilityResponse | null) => {
        if (facilityDataRes) {

          this.viewMode = true;
          this.userData ? this.userData.facilities[0] = facilityDataRes : {};
          this.facilityData = facilityDataRes;
         this. _toastrNotificationService.showSuccess("تم اضافة المنشأة");
         this.closeDialog();
         
        }
        else
        this. _toastrNotificationService.showError("لم يتم اضافة  تلك المنشأه  ");
      })
    )
  }
  observePopupEvents(): void {
    this.observecancelAction()
    this.observeconfirmAction()
  }

  private observecancelAction() {
    this.subscriptions.push(
      this._popupService.cancelAction.subscribe((res: PopupData) => {
        this._popupService.dismissDialog();
      })
    )
  }

  private observeconfirmAction() {
    this.subscriptions.push(
      this._popupService.confirmAction.subscribe((res: PopupData) => {
        this.save();
      })
    )
  }
  private closeDialog(): void {
    this._popupService.dismissDialog()
  }
  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
  }
}
